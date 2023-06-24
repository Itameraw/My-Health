import React from 'react';

import Layout from '/imports/ui/layout/Layout';
function About() {
  return (
    <Layout>
      <div className="wrapper row2">
        <div id="pagetitle" className="hoc clear">
          <h2></h2>
        </div>
        <div id="breadcrumb" className="hoc clear">
          <ul>
            <li>
              <a href="../index.html">Головна</a>
            </li>
            <li>
              <a href="#">Про нас</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrapper row3">
        <main className="hoc container clear">
          <div className="content">
            <p>
              Ми вважаємо, що інформація про здоров'я є універсальним правом, і кожна людина має
              повноваження на отримання точної, доступної та придатної до використання медичної
              інформації. Ми також вважаємо, що несемо відповідальність за захист, збереження та
              розповсюдження найкращої поточної медичної інформації, яка дозволить приймати більш
              обґрунтовані рішення, укріпити відносини між пацієнтами та фахівцями, а також
              покращити показники ефективності системи охорони здоров'я у всьому світі.
            </p>
          </div>
        </main>
      </div>
    </Layout>
  );
}
export default About;
