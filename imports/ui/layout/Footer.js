import React from 'react';

function Footer() {
  return (
    <React.Fragment>
      <div className="wrapper row5">
        <div id="newsletter" className="hoc clear">
          <div className="one_quarter first">
            <h6 className="heading">
              <i className="fa fa-newspaper-o"></i> Останні новини
            </h6>
          </div>
          <form className="three_quarter" method="post" action="#">
            <div className="clear">
              <input className="one_third first" type="text" value="" placeholder="Ім'я" required />
              <input className="one_third" type="email" value="" placeholder="Пошта" required />
              <button className="one_third" type="submit" title="Вхід">
                Підписатися
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="wrapper row6">
        <div id="copyright" className="hoc clear">
          <p className="fl_left">Copyright &copy; 2023 - All Rights Reserved</p>
        </div>
      </div>

      <a id="backtotop" href="#top">
        <i className="fa fa-chevron-up"></i>
      </a>
    </React.Fragment>
  );
}

export default Footer;
