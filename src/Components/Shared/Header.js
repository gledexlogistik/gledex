import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { CardTravelOutlined, FavoriteOutlined } from '@material-ui/icons';
import { Button } from '@material-ui/core';
// import { Link, BrowserRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import NestedMenuItem from 'material-ui-nested-menu-item';
import { Popper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },

  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navBar: {
    [theme.breakpoints.between('sm', 'md')]: {
      height:'80px'
    },
    [theme.breakpoints.up('lg')]: {
      height:'80px'
    },
    [theme.breakpoints.up('xl')]: {
      height:'121px'
    },
  },
  logo:{
    [theme.breakpoints.between('sm', 'md')]: {
      height:'80px'
    },
    [theme.breakpoints.up('lg')]: {
      height:'80px'
    },
    [theme.breakpoints.up('xl')]: {
      height:'120px', 
      width:'148.73px', 
      marginTop:'10px',
      left:'200px'
    },
  }
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElSub, setAnchorElSub] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isSubMenuOpen = Boolean(anchorElSub);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSubProfileMenuOpen = (event) => {
    setAnchorElSub(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleSubMobileClose = () => {
    setAnchorElSub(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleSubMenuClose = () => {
    setAnchorElSub(null);
    handleSubMobileClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderSubMenu = (
    <Menu
      anchorEl={anchorElSub}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      // keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={isSubMenuOpen}
      onClose={handleSubMenuClose}
    >
      <MenuItem onClick={handleSubMenuClose}>Land</MenuItem>
      <MenuItem onClick={handleSubMenuClose}>Sea</MenuItem>
      <MenuItem onClick={handleSubMenuClose}>Air</MenuItem>
    </Menu>
  );
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      // keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleSubProfileMenuOpen}>Jakadalu</MenuItem>
      <MenuItem onClick={handleMenuClose}>Jaskudo</MenuItem>
      <MenuItem onClick={handleMenuClose}>Household</MenuItem>
      <MenuItem onClick={handleMenuClose}>Warehouse</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        {/* <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
            <FavoriteBorderIcon/>
          </Badge>
        </IconButton> */}
        <p>Services</p>
      </MenuItem>
      <MenuItem>
        {/* <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <ShoppingCartOutlinedIcon/>
          </Badge>
        </IconButton> */}
        <p>Gallery</p>
      </MenuItem>
      <MenuItem>
        {/* <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <ShoppingCartOutlinedIcon/>
          </Badge>
        </IconButton> */}
        <p>About Us</p>
      </MenuItem>
      <MenuItem>
        {/* <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <ShoppingCartOutlinedIcon/>
          </Badge>
        </IconButton> */}
        <p>Contact</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        {/* <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton> */}
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color='transparent' className={classes.navBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link href='/' color="secondary">
                <img src='./Assets/gledex-logo.png' className={classes.logo}/>
            </Link>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link href="/services">
              <Button color="secondary">
                <span style={{fontFamily:'arial'}}>Services</span>
              </Button>
            </Link>
            <Link href="/gallery">
              <Button color="secondary">
                Gallery            
              </Button>            
            </Link>         
            <Link href="/armada">
              <Button color="secondary">
                About Us
              </Button>            
            </Link>         
            <Link href="/contact">
              <Button color="secondary">
                Contact            
              </Button>            
            </Link>         
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="open drawer"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderSubMenu}
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
