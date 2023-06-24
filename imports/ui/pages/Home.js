import React from 'react';

import Layout from '/imports/ui/layout/Layout';

function Home() {
  return (
    <Layout>
      <div className=" overlay header-content">
        <div>
          <div className="pzi">
            <div id="pageintro" className="hoc clear">
              <article className="introtxt">
                <h2 className="heading">Війна</h2>
                <p>Війна в Україні змінила долі багатьох лікарів</p>
                <footer>
                  <a className="btn" href="https://moz.gov.ua/koronavirus-2019-ncov">
                    Дізнатись більше
                  </a>
                </footer>
              </article>
            </div>

            <div className="clear"></div>
          </div>
        </div>
      </div>
      <div className="wrapper row3">
        <section id="introblocks" className="hoc clear">
          <h4 className="heading">Додаткова інформації</h4>
          <div className="table nospace clear">
            <div className="cell">
              <h4 className="heading">
                <i className="fa fa-medkit"></i> Швидка допомога
              </h4>
              <ul>
                <li>
                  <i className="fa fa-external-link"></i>{' '}
                  <a href="https://mankrda.gov.ua/pravila-bezpechnoi-povedinki-v-nadzvichajnih-situaciyah/">
                    Надзвичайна ситуація
                  </a>
                </li>
                <li>
                  <i className="fa fa-external-link"></i>{' '}
                  <a href="https://doc.ua/ua/news/articles/oshibki-pri-okazanii-pervoj-pomoshi-ili-kak-ne-nado-spasat-lyudej">
                    Перша допомога
                  </a>
                </li>
                <li>
                  <i className="fa fa-external-link"></i>{' '}
                  <a href="https://kyivcity.gov.ua/likarni_ta_medytsyna/nevidkladna_medichna_dopomoga/yak_viklikati_shvidku_dopomogu/">
                    Виклик швидкої допомоги
                  </a>
                </li>
              </ul>
            </div>
            <div className="cell">
              <h4 className="heading">
                <i className="fa fa-bookmark-o"></i> Онлайн сервіс
              </h4>
              <ul>
                <li>
                  <i className="fa fa-external-link"></i>{' '}
                  <a href="https://helsi.me/liki">Пошук ліків</a>
                </li>
                <li>
                  <i className="fa fa-external-link"></i>{' '}
                  <a href="https://helsi.me/clinics/ternopil">Шукайте клініки</a>
                </li>
                <li>
                  <i className="fa fa-external-link"></i>{' '}
                  <a href="https://helsi.me/doctors/ternopil">Шукайте лікарів</a>
                </li>
              </ul>
            </div>
            <div className="cell">
              <h4 className="heading">
                <i className="fa fa-clock-o"></i>Час роботи лікарів
              </h4>
              <ul>
                <li>
                  <span>Понеділок - П'ятниця</span> <span>08.00 - 15.00</span>
                </li>
                <li>
                  <span>Суббота</span> <span>08.00 - 15.00</span>
                </li>
                <li>
                  <span>Неділля</span> <span>08.00 - 15.00</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="clear"></div>
        </section>
      </div>

      <div className="wrapper row3">
        <main className="hoc container clear">
          <h2 className="heading">Українські лікарі на передовій</h2>
          <p className="btmspace-50">
            Система охорони здоров'я України максимально мобілізована для протистояння захворюванню
            COVID-19 в неї входять:
          </p>
          <ul className="nospace group infolist areas">
            <li className="one_third first">
              <a href="https://medikit.ua/patient_consultations?gclid=Cj0KCQjw8IaGBhCHARIsAGIRRYreYX-gVLVsU02_T651oN3g3vtwD7nvpfZrK9Oz5dY3WbIY03coSKgaApmMEALw_wcB">
                <i className="fa fa-user-md"></i>
              </a>
              <p className="heading">Команда консультантів</p>
              <p>Надання консультації онлайн&hellip;</p>
            </li>
            <li className="one_third">
              <a href="https://112.clinic/?gclid=Cj0KCQjw8IaGBhCHARIsAGIRRYoCEx8K6MvhnG4_1zxsI4DdJbCzY5U31zqsIKoa6svMT7ljcLIOFTwaAg9BEALw_wcB">
                <i className="fa fa-ambulance"></i>
              </a>
              <p className="heading">Швидка допомога</p>
              <p>
                медично-санітарна служба, завданням якої є надання першої медичної допомоги&hellip;
              </p>
            </li>

            <li className="one_third ">
              <a href="#">
                <i className="fa fa-stethoscope"></i>
              </a>
              <p className="heading">Медичний персонал</p>
              <p>Медичний персонал який бореться з хворобами&hellip;</p>
            </li>
          </ul>
          <div className="clear"></div>
        </main>
      </div>
      <div className="wrapper bgded">
        <div className="hoc clear">
          <article className="split50 dark right">
            <h2 className="heading font-x3">Допомога армії</h2>
            <p className="btmspace-50">
              Фонд закуповує обладнання, яке допомагає рятувати життя військових, зокрема,
              тепловізійну оптику, квадрокоптери, автомобілі, системи захисту та розвідки.
              “Повернись живим” є першою благодійною організацією в Україні, яка отримала ліцензію
              на закупівлю та імпорт товарів військового та подвійного призначення.
            </p>
            <footer>
              <a className="btn small" href="https://savelife.in.ua/">
                Пожертвувати
              </a>
            </footer>
          </article>
          <div className="clear"></div>
        </div>
      </div>
      <div className="wrapper row3">
        <div className="hoc container clear">
          <h2 className="heading">Лікарі які борються за наші життя</h2>
          <p className="btmspace-50">
            Лікарі, які щодня рятують життя у надзвичайно важких умовах.
          </p>
          <div className="group element">
            <article className="one_quarter first">
              <img
                src="https://cdn4.suspilne.media/images/resize/1040x1.78/2f3ca36e43bdb217.jpg"
                alt=""
              />
              <div className="txtwrap">
                <h6 className="heading">Валерій Бовкун</h6>
                <em>
                  Дитячий ортопед-травматолог
                  <br />
                </em>
                <p>
                  Дитячий ортопед-травматолог Валерій Бовкун весь час, поки російські війська
                  знаходились поблизу Києва...
                </p>
                <footer>
                  <a
                    className="btn small"
                    href="https://suspilne.media/246087-poranenna-perevazki-novini-potim-znovu-poranenna-perevazki-novini-istoria-likara-ohmatditu/"
                  >
                    Прочитати більше
                  </a>
                </footer>
              </div>
            </article>
            <article className="one_quarter">
              <img
                src="https://cdn4.suspilne.media/images/resize/1040x1.78/4528b5c2b3677396.jpg"
                alt=""
              />
              <div className="txtwrap">
                <h6 className="heading">Ігор Ковальчук</h6>
                <em>
                  Завідувач неврологічним відділенням <br />
                </em>
                <p>
                  Завідувач неврологічним відділенням Ірпінської міської лікарні Ігор Ковальчук 24
                  лютого приїхав на роботу о сьомій ранку. На той час вже лунали вибухи зі сторони
                  Гостомельського аеропорту...
                </p>
                <footer>
                  <a
                    className="btn small"
                    href="https://suspilne.media/243599-do-likarni-mogli-distatisa-lise-ti-kogo-ne-postrilali-po-dorozi-likari-buci/"
                  >
                    Прочитати більше
                  </a>
                </footer>
              </div>
            </article>
            <article className="one_quarter">
              <img
                src="https://cdn4.suspilne.media/images/resize/1040x1.78/4c65d733f5fde771.jpg"
                alt=""
              />
              <div className="txtwrap">
                <h6 className="heading">Данило Лісняк</h6>
                <em>
                  Лікар
                  <br />
                </em>
                <p>
                  Лікар Данило Лісняк пропрацював в окупованій росіянами Бучі понад два тижні, поки
                  не евакуювався з усім колективом...
                </p>
                <footer>
                  <a
                    className="btn small"
                    href="https://suspilne.media/242344-bizi-dopomagati-ne-do-togo-hto-kricit-a-do-togo-hto-movcit-istoria-likara-z-buci/"
                  >
                    Прочитати більше
                  </a>
                </footer>
              </div>
            </article>
            <article className="one_quarter">
              <img
                src="https://cdn4.suspilne.media/images/resize/1040x1.78/eed1e63372373dfb.jpg"
                alt=""
              />
              <div className="txtwrap">
                <h6 className="heading">Вячеслав Преподобний</h6>
                <em>
                  Лікар-хірург
                  <br />
                </em>
                <p>
                  Лікаря-хірурга Вячеслава Преподобного війна застала вдома у Ворзелі. Зранку 24
                  лютого він з дружиною виїхав із селища на роботу в Київ, але через вибухи та
                  обстріли...
                </p>
                <footer>
                  <a
                    className="btn small"
                    href="https://suspilne.media/240900-zvicajne-zitta-stacionaru-tilki-pacienti-usi-z-kulovimi-poranennami-hirurg-z-vorzela/"
                  >
                    Прочитати більше
                  </a>
                </footer>
              </div>
            </article>
          </div>
          <div className="clear"></div>
        </div>
      </div>
      <div className="wrapper coloured bgded overlay bgI">
        <div className="hoc container clear">
          <h2 className="heading">Останні медичні новини</h2>

          <div className="one_half first">
            <div className="group element topnews">
              <article className="one_half first">
                <figure>
                  <img
                    src="https://zaxid.net/resources/photos/news/202304/1561598.jpg?20230412142456&fit=cover&w=755&h=425&q=65"
                    alt=""
                  />
                </figure>
                <div className="txtwrap">
                  <h6 className="heading">
                    Українські військові медики отримають тактичні рюкзаки від Євросоюзу
                  </h6>
                  <p>
                    Українські військові медики отримають тактичні рюкзаки від Євросоюзу, кожний з
                    яких укомплектований усім необхідним...
                  </p>
                  <footer>
                    <a
                      className="btn small"
                      href="https://zaxid.net/ukrayinski_viyskovi_mediki_otrimayut_taktichni_ryukzaki_vid_yevrosoyuzu_n1561598"
                    >
                      Прочитати більше
                    </a>
                  </footer>
                </div>
              </article>
              <article className="one_half">
                <figure>
                  <img
                    src="https://zaxid.net/resources/photos/news/202304/1561520_2841983.jpg?20230411162821&fit=cover&h=540&q=85"
                    alt=""
                  />
                </figure>
                <div className="txtwrap">
                  <h6 className="heading">
                    У Львові відкрили сучасний корпус реабілітації Національного центру «Незламні»
                  </h6>
                  <p>
                    В новому корпусі реабілітаційного центру встановили сучасне обладнання:
                    роботизовану систему ходьби, екзоскелети, роборукавички, які допомагають рухати
                    рукою...
                  </p>
                  <footer>
                    <a
                      className="btn small"
                      href="https://zaxid.net/u_lvovi_vidkrili_suchasniy_korpus_reabilitatsiyi_natsionalnogo_tsentru_nezlamni_n1561520"
                    >
                      Прочитати більше
                    </a>
                  </footer>
                </div>
              </article>
            </div>
          </div>
          <div className="one_half">
            <ul className="nospace infolist bloposts">
              <li>
                <article>
                  <img
                    src="https://zaxid.net/resources/photos/news/202304/1561844_2861196.jpg?20230417145219&fit=cover&w=720&h=540&q=65"
                    alt=""
                  />
                  <h6 className="heading">
                    У Львові створюють центр для релокованих протезних майстерень
                  </h6>
                  <p>
                    На території Першого медичного об'єднання Львова встановили споруду для
                    релокованих підприємств, які виготовляють протези...
                  </p>
                  <p>
                    <a href="https://zaxid.net/u_lvovi_stvoryuyut_tsentr_dlya_relokovanih_proteznih_maysteren_n1561844">
                      Прочитати більше &raquo;
                    </a>
                  </p>
                </article>
              </li>
              <li>
                <article>
                  <img
                    src="https://zaxid.net/resources/photos/news/202304/1561900.jpg?20230418135749&fit=cover&w=755&h=425&q=65"
                    alt=""
                  />
                  <h6 className="heading">МОЗ планує утворити наглядові ради при медзакладах</h6>
                  <p>
                    МОЗ України планує утворити при медзакладах наглядові ради, до складу яких
                    будуть залучені представники громадськості...
                  </p>
                  <p>
                    <a href="https://zaxid.net/moz_planuye_utvoriti_naglyadovi_radi_pri_medzakladah_n1561900">
                      Прочитати більше &raquo;
                    </a>
                  </p>
                </article>
              </li>
              <li>
                <article>
                  <img
                    src="https://zaxid.net/resources/photos/news/202304/1561507_2841623.jpg?20230411143007&fit=cover&w=720&h=363&q=65"
                    alt=""
                  />
                  <h6 className="heading">
                    Реабілітаційний центр Superhumans Center у Львові буде на 98% безбар'єрним
                  </h6>
                  <p>
                    Цього тижня на Львівщині запрацює спеціалізована клініка протезування та
                    реконструкції Superhumans. Облаштували її на базі шпиталю у Винниках...
                  </p>
                  <p>
                    <a href="https://zaxid.net/bezbaryerniy_na_98_yakim_bude_superhumans_center_u_lvovi_n1561507">
                      Прочитати більше &raquo;
                    </a>
                  </p>
                </article>
              </li>
            </ul>
          </div>
          <div className="clear"></div>
        </div>
      </div>

      <div className="wrapper row4"></div>
    </Layout>
  );
}

export default Home;
