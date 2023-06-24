import { Meteor } from 'meteor/meteor';
import { useHistory } from 'react-router-dom';
import React, { useContext } from 'react';
import { UserSessionContext } from '/imports/ui/App';
import { Link } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';

import { AilmentsCollection } from '/imports/api/ailments';

function chunkArrayInGroups(arr, size) {
  var myArray = [];

  for (let i = 0; i < arr.length; i += size) {
    myArray.push(arr.slice(i, i + size));
  }
  return myArray;
}

import Layout from '/imports/ui/layout/Layout';
function Ailments() {
  const userId = useTracker(() => Meteor.userId(), []);

  useTracker(() => {
    Meteor.subscribe('ailments.all');
  }, []);

  const ailmentsArray = useTracker(
    () => AilmentsCollection.find({}, { sort: { name: 1 } }).fetch(),
    []
  );

  const letters = [];
  const ailments = [];

  ailmentsArray.forEach(({ _id, name = '' }) => {
    const letter = name[0].toUpperCase();

    if (!letters.includes(letter)) {
      letters.push(letter);
      ailments.push({ name, _id, letter });
    }
  });

  const userSession = useContext(UserSessionContext);
  const deleteAilment = ailmentId => () => {
    Meteor.call('ailment.remove.byId', { ailmentId }, error => {
      if (!error) {
        return;
      }

      return alert('ERROR');
    });
  };
  useTracker(() => {
    Meteor.subscribe('users.all');
  }, []);

  const lettersByGroup = chunkArrayInGroups(letters.sort(), 4);

  const ailmentsByGroup = _.groupBy(_.sortBy(ailments, 'letter'), 'letter');

  return (
    <Layout>
      <div className="wrapper row2">
        <div id="pagetitle" className="hoc clear">
          <h2></h2>
        </div>
        <div id="breadcrumb" className="hoc clear">
          <h1>
            {userId && (
              <Link className="add" to="/newAilment">
                Додати хворобу
              </Link>
            )}
          </h1>
          <ul>
            <li>
              <a href="../index.html">Головна</a>
            </li>
            <li>
              <a href="#">Хвороби</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrapper row3">
        <main className="hoc container clear">
          <div className="content">
            <h1>Хвороби</h1>

            <img
              className="imgr borderedbox inspace-5"
              src="https://ukrhealth.net/wp-content/uploads/2017/12/Virusy-640x450-640x400.jpg"
              alt=""
            />
            <p>
              Хворо́ба, або захво́рювання — патологічний процес, який проявляється порушеннями
              морфології (анатомічної, гістологічної будови), обміну речовин чи / та функціонування
              організму (його частин) у людини / тварини.
            </p>
            <p>
              У клінічному перебігу гострої хвороби виділяють три періоди: продормальний не завжди,
              часто гостра хвороба починається періодом нарастання клінічних проявів, розпалу
              реконвалесцентний (видужання). При хронічній хворобі подібний поділ не характерний, у
              клінічному перебігу хвороби чергуються фази загострення та ремісії.
            </p>
            <img
              className="imgl borderedbox inspace-5"
              src="https://image.slidesharecdn.com/1-131211055047-phpapp02/95/1-13-638.jpg?cb=1386741107"
              alt=""
            />
            <p>
              Класифікація хвороб людини проводиться за такими критеріями: за характером перебігу
              (гострі та хронічні захворювання), за рівнем, на якому в організмі виявляються
              специфічні патологічні зміни при хворобі (молекулярні, хромосомні, клітинні і
              тканинні, органні, захворювання всього організму), за етіологічним фактором (хвороби,
              які спричинюють механічні, фізичні, хімічні, біологічні або психогенні фактори), за
              способом їхнього лікування (терапевтичні, хірургічні та інші), за віковими або
              статевими відмінностями (гінекологічні, дитячі) тощо.
            </p>
            <p>
              Найбільш прийнятим вважається нозологічний принцип, тобто така класифікація хвороб, в
              основу якої покладено угруповання хвороб за родинними ознаками. Необхідно зазначити,
              що жодна з існуючих класифікацій не є повністю задовільною. Так, при класифікації за
              нозологічним принципом пневмонію, наприклад, можна віднести до захворювань органів
              дихання, до інфекційних хвороб і до алергічних станів. Створення сучасної класифікації
              хвороб представляє найважливішу задачу теоретичної та практичної медицини.
            </p>
            <p>Нижче описаний алфавітний список хвороб</p>
            <h1>Алфавітний список хвороб</h1>
            <div className="scrollable">
              <table>
                <tbody>
                  {lettersByGroup.map(letterGroup => {
                    return (
                      <tr>
                        {letterGroup.map(letter => (
                          <td>
                            <a href={`#${letter}`}>{letter}</a>
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div id="comments">
              <h2>Список хворіб:</h2>
              <hr />

              {Object.entries(ailmentsByGroup).map(([letter, ailmentGroup]) => {
                return (
                  <React.Fragment>
                    <h4 id={letter}>{letter}</h4>
                    <hr />
                    <ul className="ailments">
                      {ailmentGroup.map(ailment => (
                        <li>
                          <Link to={`/ailment/${ailment._id}`}>{ailment.name}</Link>{' '}
                          {userSession.isAdmin && (
                            <span
                              style={{ cursor: 'pointer' }}
                              onClick={deleteAilment(ailment._id)}
                            >
                              x
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Ailments;
