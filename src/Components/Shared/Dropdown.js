import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Dropdown.css';
import './Navbar.css';
import { Link } from 'react-router-dom';
import DropdownSub from './DropdownSub';

function Dropdown() {
  const [click, setClick] = useState(false);
  const [dropdownSub, setDropdownSub] = useState(false);


  const handleClick = () => setClick(!click);

  const onMouseEnterSub = () => {
    if (window.innerWidth < 960) {
      setDropdownSub(false);
    } else {
      setDropdownSub(true);
    }
  };

  const onMouseLeaveSub = () => {
    if (window.innerWidth < 960) {
      setDropdownSub(false);
    } else {
      setDropdownSub(false);
    }
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        <li
          onMouseEnter={onMouseEnterSub}
          onMouseLeave={onMouseLeaveSub}>
          <Link
            className='dropdown-link'
            to='#'
            onClick={() => setClick(false)}
          >
            Cargo
          </Link>
          {dropdownSub && <DropdownSub/>}
        </li>
        {MenuItems.map((item, index) => {
          {dropdownSub && <DropdownSub/>}
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

export default Dropdown;
