import React from 'react';

import Layout from '/imports/ui/layout/Layout';

function Gallery() {
  return (
    <Layout>
      <div>
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
                <a href="./gallery.html">Галерея</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="wrapper row3">
        <main className="hoc container clear">
          <div className="content">
            <div id="gallery">
              <figure>
                <header className="heading">Галерея</header>
                <ul className="nospace clear">
                  <li className="one_quarter first">
                    <a href="#">
                      <img
                        src="https://img.pravda.com/images/doc/a/d/ad8075c-likari-ingekcijky.jpg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="one_quarter">
                    <a href="#">
                      <img
                        src="https://4vlada.com/sites/default/files/styles/watermark/public/2020-06/101651057_10221606411965628_4251826608025134427_o%20%281%29_0.jpg?itok=NQCZ71Ie"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="one_quarter">
                    <a href="#">
                      <img
                        src="https://www.unicef.org/ukraine/sites/unicef.org.ukraine/files/styles/hero_mobile/public/111_MAL4090.jpg?itok=T1PeuEgH"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="one_quarter">
                    <a href="#">
                      <img
                        src="https://centerdp.statinfo.com.ua/wp-content/uploads/brizy/18348/assets/images/iW=263&iH=263&oX=0&oY=33&cW=263&cH=197/1202.jpg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="one_quarter first">
                    <a href="#">
                      <img src="https://iqlab.com.ua/var/upload/45545245722798245245.png" alt="" />
                    </a>
                  </li>
                  <li className="one_quarter">
                    <a href="#">
                      <img
                        src="https://accemedin.com/img/content/materials/images/helicobackter_1806.jpg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="one_quarter">
                    <a href="#">
                      <img
                        src="https://www.bsmu.edu.ua/wp-content/uploads/2020/09/0809201-1024x878.jpg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="one_quarter">
                    <a href="#">
                      <img
                        src="https://ms.detector.media/doc/images/news/24197/i75_ArticleImage_24197.jpg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="one_quarter first">
                    <a href="#">
                      <img
                        src="https://lifeimg.pravda.com/images/doc/e/5/e506b9e-nyrky.jpg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="one_quarter">
                    <a href="#">
                      <img
                        src="https://www.pmgroup.org.ua/wp-content/uploads/2013/07/%D1%88%D0%B2%D0%B8%D0%B4%D0%BA%D0%B0-%D1%87%D0%B8-%D0%BD%D0%B5%D0%B2%D1%96%D0%B4%D0%BA%D0%BB%D0%B0%D0%B4%D0%BD%D0%B0.jpeg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="one_quarter">
                    <a href="#">
                      <img src="https://www.tkml2.te.ua/uploads/p_1823_16382894.jpg" alt="" />
                    </a>
                  </li>
                  <li className="one_quarter">
                    <a href="#">
                      <img
                        src="https://www.rbc.ua/static/img/_/_/__volnovaha_likarnya_gettyimages_1239169422_480x270.jpg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
                <figcaption></figcaption>
              </figure>
            </div>
          </div>

          <div className="clear"></div>
        </main>
      </div>
    </Layout>
  );
}

export default Gallery;
