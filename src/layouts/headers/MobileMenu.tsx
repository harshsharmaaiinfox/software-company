import { Link } from 'react-router-dom';
import { useState } from 'react';
import menu_data from '../../data/menu-data';

export default function MobileMenu() {
  const [navTitle, setNavTitle] = useState<string>('');
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle('');
    } else {
      setNavTitle(menu);
    }
  };

  return (
    <nav className="tv-menu-content">
      <ul>
        {menu_data.map((item, i) => (
          <li
            key={i}
            className={`${item.has_dropdown ? 'has-dropdown' : ''}`}
          >
            <Link to={item.link}>
              {item.title}
              {item.has_dropdown && (
                <button
                  className={`dropdown-toggle-btn ${navTitle === item.title ? 'dropdown-opened' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    openMobileMenu(item.title);
                  }}
                >
                  <i className="fal fa-angle-right"></i>
                </button>
              )}
            </Link>
            {item.has_dropdown && item.sub_menus && (
              <ul
                className="tv-submenu submenu"
                style={{ display: navTitle === item.title ? 'block' : 'none' }}
              >
                {item.sub_menus.map((sub_item, index) => (
                  <li key={index}>
                    <Link to={sub_item.link}>{sub_item.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
