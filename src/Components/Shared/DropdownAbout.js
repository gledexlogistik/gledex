import React, { useState } from 'react';
import { MenuAbout } from './MenuAbout';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function DropdownAbout() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menuAb clicked' : 'dropdown-menuAb'}
      >
        {MenuAbout.map((item, index) => {
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

export default DropdownAbout;
