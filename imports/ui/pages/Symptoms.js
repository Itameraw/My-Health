import { Meteor } from 'meteor/meteor';
import React, { useContext } from 'react';
import { UserSessionContext } from '/imports/ui/App';
import { Link } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';

function chunkArrayInGroups(arr, size) {
  var myArray = [];

  for (let i = 0; i < arr.length; i += size) {
    myArray.push(arr.slice(i, i + size));
  }
  return myArray;
}

import Layout from '/imports/ui/layout/Layout';

import { SymptomsCollection } from '/imports/api/symptoms';

function Symptoms() {
  const userId = useTracker(() => Meteor.userId(), []);

  useTracker(() => {
    Meteor.subscribe('symptoms.all');
  }, []);

  const symptomsArray = useTracker(
    () => SymptomsCollection.find({}, { sort: { name: 1 } }).fetch(),
    []
  );

  const letters = [];
  const symptom = [];
  symptomsArray.forEach(({ _id, name = '' }) => {
    const letter = name[0].toUpperCase();

    if (!letters.includes(letter)) {
      letters.push(letter);
      symptom.push({ name, _id, letter });
    }
  });
  const lettersByGroup = chunkArrayInGroups(letters.sort(), 4);
  const userSession = useContext(UserSessionContext);
  const deleteSymptom = symptomId => () => {
    Meteor.call('symptom.remove.byId', { symptomId }, error => {
      if (!error) {
        return;
      }

      return alert('ERROR');
    });
  };
  useTracker(() => {
    Meteor.subscribe('users.all');
  }, []);
  const symptomByGroup = _.groupBy(_.sortBy(symptom, 'letter'), 'letter');

  return (
    <Layout>
      <div className="wrapper row2">
        <div id="pagetitle" className="hoc clear">
          <h2></h2>
        </div>
        <div id="breadcrumb" className="hoc clear">
          <h1> {userId && <Link to="/newSymptom">Додати симптом</Link>}</h1>
          <ul>
            <li>
              <a href="../index.html">Головна</a>
            </li>
            <li>
              <a href="./gallery.html">Симптоми</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrapper row3">
        <main className="hoc container clear">
          <div className="content">
            <h1>Симптоми</h1>

            <img
              className="imgr borderedbox inspace-5"
              src="https://zt-rada.gov.ua/files/upload/sitepages/img1550052046.jpg"
              alt=""
            />
            <p>
              Симптом — ознака, яка відрізняє хвору людину від здорової. Також визначають симптом як
              будь-яку відчутну зміну в організмі або його функціях, що виявляється на підставі
              скарг хворого (суб'єктивний симптом) або під час дослідження лікарем (об'єктивний
              симптом).{' '}
            </p>
            <p>
              {' '}
              Симптом може бути й об'єктивною клінічною ознакою, тобто чітко виявлятися не тільки
              самим пацієнтом, але й будь-якою іншою людиною, особливо лікарем, перед або під час
              фізичного огляду пацієнта. Тоді як деякі симптоми відчуває лише сам хворий, от як
              парестезії, і вони не є клінічними ознаками.
            </p>
            <img
              className="imgl borderedbox inspace-5"
              src="https://static.ukrinform.com/photos/2020_04/thumb_files/630_360_1587762163-316.jpg"
              alt=""
            />
            <p>
              За способом і доступністю виявлення симптоми поділяють на об'єктивні та суб'єктивні,
              явні та приховані. За термінами появи і виявлення — на ранні та пізні, а за
              діагностичним значенням — на неспецифічні, специфічні та патогномонічні. Специфічні —
              притаманні певному захворюванню, неспецифічні — супроводжують цілий ряд хвороб.
            </p>
            <p>
              Специфічність симптомів залежить від кількості захворювань, при яких його виявляють.
              До патогномонічних відносять такі, що виявляються тільки при одному захворюванні.
            </p>
            <p>
              При описі психічних розладів, особливо шизофренії, симптоми можна розділити на
              позитивні та негативні. Позитивними симптомами є ті, які присутні в розладі, але
              звичайно не відчуваються більшістю осіб.
            </p>
            <h1>Алфавітний список симптомів</h1>
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
              <h2>Список симптомів:</h2>
              <hr />

              {Object.entries(symptomByGroup).map(([letter, symptomByGroup]) => {
                return (
                  <React.Fragment>
                    <h4 id={letter}>{letter}</h4>
                    <hr />
                    <ul className="ailments">
                      {symptomByGroup.map(symptom => (
                        <li>
                          <Link to={`/symptom/${symptom._id}`}>{symptom.name}</Link>{' '}
                          {userSession.isAdmin && (
                            <span
                              style={{ cursor: 'pointer' }}
                              onClick={deleteSymptom(symptom._id)}
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
          <div className="clear"></div>
        </main>
      </div>
    </Layout>
  );
}
export default Symptoms;
