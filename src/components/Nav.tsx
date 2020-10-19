import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import kavyl from '../public/kavyl.png';

function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    {
      name: 'O nás',
      path: '/onas/kdojsme',
      id: '1',
      subNavLinks: [
        {
          name: 'Kdo jsme',
          path: '/onas/kdojsme',
        },
        {
          name: 'Aktuality',
          path: '/onas/aktuality',
        },
        {
          name: 'Naši lidé',
          path: '/onas/nasilide',
        },
        {
          name: 'Projekty',
          path: '/onas/projekty',
        },
        {
          name: 'Ohlasy',
          path: '/onas/ohlasy',
        },
        {
          name: 'Dokumenty',
          path: '/onas/dokumenty',
        },
        {
          name: 'Podporují nás',
          path: '/onas/sponzori',
        },
      ],
    },
    {
      name: 'Lesní školky',
      path: '/lesniskolky',
      id: '2',
      subNavLinks: [],
    },
    {
      name: 'Tábory',
      path: '/tabory',
      id: '3',
      subNavLinks: [],
    },
    {
      name: 'Enviro- programy',
      path: '/enviroprogramy',
      id: '4',
      subNavLinks: [
        {
          name: 'Aktuální nabídka',
          path: '/enviroprogramy/nabidka',
        },
        {
          name: 'Praktické informace',
          path: '/enviroprogramy/informace',
        },
      ],
    },
    {
      name: 'Další aktivity',
      path: '/dalsiaktivity',
      id: '5',
      subNavLinks: [
        {
          name: 'Přednášky a semináře',
          path: '/dalsiaktivity/prednasky',
        },
        {
          name: 'Akce pro veřejnost',
          path: '/dalsiaktivity/akce',
        },
        {
          name: 'Volno- časové aktivity',
          path: '/dalsiaktivity/volnocas',
        },
        {
          name: 'Pronájem jurty',
          path: '/dalsiaktivity/jurta',
        },
      ],
    },
    {
      name: 'Kontakt',
      path: '/kontakt',
      id: '6',
      subNavLinks: [],
    },
  ];

  const [subNavLinksOpen, setSubNavLinksOpen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const subNavOpeningHandler = (
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.KeyboardEvent<HTMLAnchorElement>
  ) => {
    const subs = [...subNavLinksOpen];
    const currentId = Number(e.currentTarget.id) - 1;
    if (window.innerWidth < 768) {
      subs[currentId] = !subs[currentId];
    }
    setSubNavLinksOpen(subs);
  };

  return (
    <div>
      <div className='nav'>
        <div
          className={navOpen ? 'sideNavSpacerActive' : 'sideNavSpacer'}
          onClick={() => setNavOpen(false)}
          onKeyDown={() => setNavOpen(false)}
          role='presentation'
        />
        <div className='spacer' />

        <div
          onClick={() => setNavOpen(false)}
          onKeyDown={() => setNavOpen(false)}
          role='presentation'
        >
          <Link to='/'>
            <div className='logo'>
              <div className='logoCont'>
                <img
                  src='https://res.cloudinary.com/tomastuser/image/upload/v1594715441/kavyl-logo-bezpozadi_vaeplo.png'
                  alt='Kavyl logo'
                />
              </div>
              <div className='logoText'>
                <img src={kavyl} alt='Kavyl napis' />
              </div>
            </div>
          </Link>
        </div>

        <div
          className={
            navOpen ? 'navLinks sideNavActive sideNavSpacer' : 'navLinks'
          }
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                {window.innerWidth < 768 ? (
                  link.subNavLinks.length > 0 ? (
                    <a
                      className='navLink pointer'
                      onClick={subNavOpeningHandler}
                      onKeyDown={subNavOpeningHandler}
                      id={link.id}
                      role='link'
                      tabIndex={0}
                    >
                      <p>{link.name}</p>
                    </a>
                  ) : (
                    <NavLink
                      activeClassName='navLinkActive'
                      className='navLink'
                      to={link.path}
                      id={link.id}
                    >
                      <p>{link.name}</p>
                    </NavLink>
                  )
                ) : (
                  <NavLink
                    activeClassName='navLinkActive'
                    className='navLink'
                    to={link.path}
                    id={link.id}
                  >
                    <p>{link.name}</p>
                  </NavLink>
                )}
                <ul className='subNav'>
                  {link.subNavLinks.map((subLink) => (
                    <li
                      key={subLink.name}
                      className={
                        window.innerWidth < 768
                          ? subNavLinksOpen[Number(link.id) - 1]
                            ? 'subNavLi subNavActive'
                            : 'subNavLi'
                          : 'subNavLi'
                      }
                    >
                      <NavLink
                        className='navLink'
                        activeClassName='navLinkActive'
                        to={{ pathname: subLink.path }}
                      >
                        <p>{subLink.name}</p>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className='burger-container'>
          <div
            className='burger'
            onClick={() => setNavOpen(!navOpen)}
            onKeyDown={() => setNavOpen(!navOpen)}
            role='button'
            tabIndex={0}
          >
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>
        </div>
        <img
          src='https://res.cloudinary.com/tomastuser/image/upload/v1594803389/caraNav_zqzshh.png'
          alt='caraNav'
          className='caraNav'
        />
      </div>
      <div className='navSpacerAtTheTop' />
    </div>
  );
}

export default Nav;
