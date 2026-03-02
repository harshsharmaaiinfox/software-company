import { Link } from 'react-router-dom';
import menu_data from '../../data/menu-data';

export default function Navmenu() {
  return (
    <ul>
      {menu_data.map((item, i) => (
        <li
          key={i}
          className={`${item.has_dropdown ? 'has-dropdown' : ''}`}
        >
          <Link to={item.link}>{item.title}</Link>
          {item.has_dropdown && item.sub_menus && (
            <ul className="tv-submenu submenu">
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
  );
}
