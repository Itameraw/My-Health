import React, { useContext, useEffect, useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { useTracker } from 'meteor/react-meteor-data';
import Blaze from 'meteor/gadicc:blaze-react-component';
import { UserSessionContext } from '/imports/ui/App';
import { Link, useLocation } from 'react-router-dom';

const tabs = [
  {
    route: '/',
    name: 'Головна',
  },
  {
    route: '/gallery',
    name: 'Галерея',
  },
  {
    route: '/ailments',
    name: 'Хвороби',
  },
  {
    route: '/symptoms',
    name: 'Симптоми',
  },
  {
    route: '/about',
    name: 'Про нас',
  },
  {
    route: '/links',
    name: 'Посилання',
  },
  {
    route: '/tactical',
    name: 'Тактична медицина',
  },
];

function Header() {
  const userSession = useContext(UserSessionContext);
  const location = useLocation();
  const newTabs = [...tabs];

  console.log(userSession);
  if (userSession.isAdmin) {
    newTabs.push({
      route: '/users',
      name: 'Користувачі',
    });
  }
  return (
    <div className="  header-content">
      <div className="wrapper row0">
        <div id="topbar" className="hoc clear">
          <div className="fl_left">
            <ul className="nospace inline pushright">
              <li>
                <i className="fa fa-phone"></i> +380973915571
              </li>
              <li>
                <i className="fa fa-envelope-o"></i> MyHealth@ukr.net
              </li>
            </ul>
          </div>
          <div className="fl_right">
            <ul className="faico clear">
              <li>
                <a className="faicon-facebook" href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a className="faicon-pinterest" href="#">
                  <i className="fa fa-pinterest"></i>
                </a>
              </li>
              <li>
                <a className="faicon-twitter" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a className="faicon-dribble" href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a className="faicon-linkedin" href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a className="faicon-google-plus" href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a className="faicon-rss" href="#">
                  <i className="fa fa-rss"></i>
                </a>
              </li>
              <li>
                <Blaze template="loginButtons" align="right" />
              </li>
            </ul>
          </div>
        </div>
        <div className="wrapper row1">
          <header id="header" className="hoc clear">
            <div id="logo" className="fl_left">
              <h1>
                <a href="index.html">My Health</a>
              </h1>
            </div>
            <div id="quickinfo" className="fl_right">
              <ul className="nospace inline">
                <li>
                  <strong>Швидка допомога:</strong>
                  <br />
                  +380965613977
                </li>
                <li>
                  <strong>Консультація:</strong>
                  <br />
                  +380973915571
                </li>
              </ul>
            </div>
          </header>
        </div>

        <nav id="mainav" className="hoc clear">
          <ul className="clear">
            {newTabs.map(tab => (
              <li className={location.pathname === tab.route ? 'active' : ''}>
                <Link to={tab.route}>{tab.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
