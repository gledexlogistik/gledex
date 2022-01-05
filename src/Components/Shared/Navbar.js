import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useState, useEffect } from "react";
import { BrowserRouter as RouterLink } from "react-router-dom";
import MobileDraw from './MobileDraw';
import './Navbar.css';
import Dropdown from './Dropdown';
import DropdownAbout from './DropdownAbout';

const headersData = [
  {
    label: "Listings",
    href: "/listings"
  },
  {
    label: "Mentors",
    href: "/mentors"
  },
  {
    label: "Account",
    href: "/account"
  },
  {
    label: "Log Out",
    href: "/logout"
  }
];

const useStyles = makeStyles((theme) => ({
  header: {
    "@media (max-width: 900px)": {
      paddingLeft: 0
    },
    position:'absolute',
    zIndex:'1030',
    top:'0',
    left:'0',
    right:'0',
    border: 'none'
  },

  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  drawerContainer: {
    padding: "20px 30px"
  },
  xNavbar:{
    position:'absolute',
    zIndex:'1030',
    top:'0',
    left:'0',
    right:'0',
    border: 'none'
  },
  logoMobile:{
    display:'block',
    boxSizing:'border-box',
    top:'0%',
    maxWidth:'100%',
    position:'absolute',
    height:'9vh', 
    // paddingRight:'10vw',
    // marginRight:'10vw',
    // width:'7.708333333333334vw', 
    paddingLeft:'3vw',
    marginLeft:'0%',
  },
  logo:{
    display:'block',
    boxSizing:'border-box',
    top:'0%',
    maxWidth:'100%',
    position:'absolute',
    height:'9vh', 
    // paddingRight:'10vw',
    // marginRight:'10vw',
    // width:'7.708333333333334vw', 
    // marginLeft:'7.51851851851852%',
    paddingLeft:'7.8%',
    [theme.breakpoints.up('lg')]: {
      display:'block',
      boxSizing:'border-box',
      top:'0%',
      maxWidth:'100%',
      position:'absolute',
      height:'9vh', 
      paddingRight:'10vw',
      marginRight:'10vw',
      // width:'7.708333333333334vw', 
      // marginLeft:'18.51851851851852vh',
      paddingLeft:'8%'
    },
  },
  xToolbar:{
    display:'flex',
    justifyContent:'space-between',
    height:'9vh',
    boxSizing:'border-box',
  }
}));

export default function Header() {
  const classes = useStyles();
  const [dropdown, setDropdown] = useState(false);
  const [dropdownAbout, setDropdownAbout] = useState(false);
  const closeMobileMenu = () => setClick(false);
  
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseEnterAbout = () => {
    if (window.innerWidth < 960) {
      setDropdownAbout(false);
    } else {
      setDropdownAbout(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const onMouseLeaveAbout = () => {
    if (window.innerWidth < 960) {
      setDropdownAbout(false);
    } else {
      setDropdownAbout(false);
    }
  };

  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
  const [click, setClick] = useState(false);

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
    <Toolbar className={classes.xToolbar}>
      <Link href='/' color="secondary">
          <img src='./Assets/gledex-logo.png' className={classes.logo}/>
      </Link>
  <div className={classes.grow} />
    <div className={classes.sectionDesktop}>
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
    <li
      className='nav-item'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <p
        href='/services'
        className='nav-links'
        onClick={closeMobileMenu}
      >
        Services <i className='fas fa-caret-down' />
      </p>
      {dropdown && <Dropdown />}
    </li>
    <li className='nav-item'>
        <Link href='/network' style={{textDecoration:'none'}}>
            <p className='nav-links'>Network</p>
        </Link>  
    </li>
    <li 
      className='nav-item'             
      onMouseEnter={onMouseEnterAbout}
      onMouseLeave={onMouseLeaveAbout}
    >
        <p className='nav-links'>
          About Us<i className='fas fa-caret-down' />
        </p>
        {dropdownAbout && <DropdownAbout/>}
    </li>
    <li className='nav-item'>
      <Link href='/gallery' style={{textDecoration:'none'}}>
        <p className='nav-links'>Gallery</p>
      </Link>
    </li>
    <li className='nav-item'>
      <Link href='/contact' style={{textDecoration:'none'}}>
        <p className='nav-links'>Contact</p>
      </Link>
    </li>
  </ul>
  </div>
  </Toolbar>
    );
  };


  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={classes.xToolbar}>
        {/* <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen
          }}
        >
          <MenuIcon />
        </IconButton> */}
        <Link href='/' color="secondary">
          <img src='./Assets/gledex-logo.png' className={classes.logoMobile}/>
        </Link>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
      return (
        // <Link
        //   {...{
        //     component: RouterLink,
        //     to: href,
        //     color: "inherit",
        //     style: { textDecoration: "none" },
        //     key: label
        //   }}
        // >
        //   <MenuItem>{label}</MenuItem>
        // </Link>\
        <MobileDraw/>
      );
  };



  const getMenuButtons = () => {
      return (
        <Button
          {...{
            color: "inherit",
            component: RouterLink,
            className: menuButton
          }}
        >
          Services
        </Button>
      );
  };

  return (
    <header>
      <AppBar color='transparent' position='static' className={header} elevation={0}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
