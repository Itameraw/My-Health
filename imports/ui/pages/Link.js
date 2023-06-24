import React from 'react';

import Layout from '/imports/ui/layout/Layout';
function Links() {
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
              <a href="#">Посилання</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrapper row3">
        <main className="hoc container clear">
          <div className="content">
            <h1>Корисні ресурси </h1>
            <p>Щоб дізнатися більше інформація, варто переглянути ці сайти:</p>
            <div>
              <li className="liLink">
                <a>https://moz.gov.ua/</a> — офіційний сайт Міністерства охорони здоров’я України
              </li>
              <li className="liLink">
                <a>https://nszu.gov.ua/</a> — офіційний сайт Національна служба здоров’я України
              </li>
              <li className="liLink">
                <a>https://www.facebook.com/bmjdotcom/</a> — авторитетне фахове видання для медиків
                по всьому світі.
              </li>
              <li className="liLink">
                <a>https://www.medscape.com/</a> — великий медичний ресурс з новинами, статтями,
                довідковими та навчальними матеріалами
              </li>
              <li className="liLink">
                <a>https://www.epocrates.com/ </a> — база даних, у якій, зокрема, можна знайти
                клінічні настанови, нозології, ліки.
              </li>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
export default Links;
