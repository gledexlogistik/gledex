import React, { useState } from 'react';
import { MenuSub } from './MenuSub';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function DropdownSub() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-submenu clicked' : 'dropdown-submenu'}
      >
        {MenuSub.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DropdownSub;
