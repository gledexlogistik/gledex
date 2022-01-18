import * as React from 'react';
import ImageList from '@material-ui/core/ImageList';
import PropTypes from 'prop-types';
import ImageListItem from '@material-ui/core/ImageListItem';
import { AppBar, Box, Container, Grid, makeStyles, withStyles,Tab, Tabs, Typography } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8"
  },
  indicator: {
    backgroundColor: "#006936"
  }
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    color:'#006936',
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "arial",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    // "&:hover": {
    //   color: "#40a9ff",
    //   opacity: 1
    // },
    "&$selected": {
      color: "#006936",
      fontWeight: theme.typography.fontWeightMedium
    },
    "&:focus": {
      color: "#006936"
    }
  },
  selected: {}
}))((props) => <Tab disableRipple {...props} />);




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
  imgItem: {
    [theme.breakpoints.between('xs','sm')]: {
      width: '28vw',
      // height: '17vh',
      height: '13vh',
      borderRadius:'10px',
      // objectFit:'cover'
    },
    [theme.breakpoints.between('sm','md')]: {
      width: '25vw',
      height: '17vh',
      borderRadius:'10px',
      objectFit:'cover'
    },
    // [theme.breakpoints.between('md','lg')]: {
    //   width: '150px',
    //   height: '100px',
    //   borderRadius:'10px'
    // },
    // [theme.breakpoints.up('lg')]: {
    //   width: '289px',
    //   height: '164px',
    //   borderRadius:'10px'
    // },
    // [theme.breakpoints.up('xl')]: {
    //   // width: '289px',
    //   // height: '164px',
    //   width: '19vw',
    //   height: '17vh',
    //   borderRadius:'10px',
    //   objectFit:'cover'
    // },
    // width: '19vw',
    width: '22vw',
    // height: '17vh',
    height: '23vh',
    borderRadius:'10px',
    objectFit:'cover'
  },
  formControl: {
    // [theme.breakpoints.between('xs','sm')]: {
    //   margin: theme.spacing(1),
    //   minWidth: 120,
    //   alignItems:'right',
    //   marginLeft:'150px',
    //   marginBottom:'50px'
    // },
    // [theme.breakpoints.between('sm','md')]: {
    //   margin: theme.spacing(1),
    //   minWidth: 120,
    //   alignItems:'right',
    //   marginLeft:'385px',
    //   marginBottom:'50px'
    // },
    // [theme.breakpoints.between('md','lg')]: {
    //   margin: theme.spacing(7),
    //   minWidth: 120,
    //   alignItems:'right',
    //   marginLeft:'640px',
    // },
    // [theme.breakpoints.up('lg')]: {
    //   margin: theme.spacing(7),
    //   minWidth: 120,
    //   alignItems:'right',
    //   marginLeft:'1040px'
    // },
    // [theme.breakpoints.up('xl')]: {
    //   margin: theme.spacing(7),
    //   minWidth: 120,
    //   alignItems:'right',
    //   marginLeft:'90%'
    // },
    margin: theme.spacing(2),
    minWidth: 120,
    alignItems:'right',
    marginLeft:'25vw',
    boxSizing:'border-box',
    // paddingRight:'4em',
    display:'flex',
    flexDirection:'row-reverse',
    flexWrap:'wrap',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  greyGrid: {
    [theme.breakpoints.between('xs','sm')]: {
      marginTop:'9vh',
      paddingLeft:'0',
      paddingRight:'0',
      backgroundColor: '#F3F5F4'
    },
    // [theme.breakpoints.between('sm','md')]: {
    //   marginTop:'80px',
    //   backgroundColor: '#F3F5F4'
    // },
    // [theme.breakpoints.between('md','lg')]: {
    //   marginTop:'120px',
    //   backgroundColor: '#F3F5F4'
    // },
    // [theme.breakpoints.up('lg')]: {
    //   marginTop:'120px',
    //   backgroundColor: '#F3F5F4'
    // },
    // [theme.breakpoints.up('xl')]: {
    //   marginTop:'9vh',
    //   backgroundColor: '#F3F5F4'
    // },
    marginTop:'9vh',
    paddingLeft:'2em',
    paddingRight:'2em',
    backgroundColor: '#F3F5F4'
  },
  tab: {
    [theme.breakpoints.between('xs','sm')]: {
      backgroundColor: '#FFFFFF', 
      marginLeft:'0', 
      marginRight:'0', 
      width:'100%',
      marginBottom:'10%'
    },
    // [theme.breakpoints.between('sm','md')]: {
    //   backgroundColor: '#FFFFFF', 
    //   marginLeft:'100px', 
    //   marginRight:'100px', 
    //   width:'100%',
    //   marginBottom:'100px',
    // },
    // [theme.breakpoints.up('lg')]: {
    //   backgroundColor: '#FFFFFF', 
    //   marginLeft:'7%', 
    //   marginRight:'7%', 
    //   width:'100%',
    //   marginBottom:'10%'
    // },
    backgroundColor: '#FFFFFF', 
    marginLeft:'2vw', 
    // marginRight:'7%', 
    width:'100%',
    marginBottom:'10%'
  },
  imageListStyle: {
    [theme.breakpoints.between('xs','sm')]: {
      marginTop:'3.25925925925926vh', 
      marginBottom: '4.62962962962963vh', 
      marginLeft:'2.604166666666667vw', 
      marginRight:'2.604166666666667vw',
      display:'grid',
      gridTemplateColumns: 'repeat(3, auto)'
    },
    [theme.breakpoints.between('sm','md')]: {
      marginTop:'3.25925925925926vh !important', 
      marginBottom: '2.62962962962963vh !important', 
      marginLeft:'6.604166666666667vw !important', 
      marginRight:'5.604166666666667vw !important',
      display:'grid',
      gridTemplateColumns: 'repeat(3, auto)',
    },
    // [theme.breakpoints.between('md','lg')]: {
    //   marginTop:'100px', 
    //   marginBottom: '50px', 
    //   marginLeft:'50px', 
    //   marginRight:'50px'
    // },
    // [theme.breakpoints.up('lg')]: {

    // },
    marginTop:'9.25925925925926vh', 
    marginBottom: '4.62962962962963vh', 
    marginLeft:'2.604166666666667vw', 
    marginRight:'2.604166666666667vw',
  },
  imageListItem:{
    [theme.breakpoints.between('xs','sm')]: {
      width:'100% !important',
      height:'auto !important',
      padding:'2px !important'
    },
    [theme.breakpoints.between('sm','md')]: {
      width:'100% !important',
      height:'auto !important',
      padding:'2px !important'
    }
  },
  heading: {
    [theme.breakpoints.between('xs','sm')]: {
      color:'#006936',
      paddingLeft:'11vw',
      fontFamily: 'arial',
      fontSize:'24px'
    },
    [theme.breakpoints.between('sm','md')]: {
      color:'#006936',
      paddingLeft:'11vw',
      fontFamily: 'arial',
      fontSize:'24px'
    },
    // [theme.breakpoints.between('md','lg')]: {
    //   marginLeft:'100px',
    //   color:'#006936'
    // },
    // [theme.breakpoints.down('md')]: {
    //   color:'#006936',
    //   paddingLeft:'13vw',
    //   fontFamily: 'arial',
    //   fontSize:'24px'
    // },
    color:'#006936',
    paddingLeft:'11vw',
    fontFamily: 'arial',
    fontSize:'30px'
  },
  text: {
    // [theme.breakpoints.between('xs','sm')]: {
    //   marginLeft:'25px'
    // },
    // [theme.breakpoints.between('sm','md')]: {
    //   marginLeft:'100px'
    // },
    [theme.breakpoints.down('md')]: {
      paddingLeft:'11vw',
      fontFamily:'arial',
      fontSize:'14px'
    },  
    paddingLeft:'11vw',
    fontFamily:'arial',
    fontSize:'18px'
  }
}));


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export default function Gallery() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [csr_year, setCsrYear] = React.useState('');
  const [gath_year, setGathYear] = React.useState('');
  const [proj_year, setProjYear] = React.useState('');
  const [award_year, setAwardYear] = React.useState('');
  const [csr2018, setCsr2018] = React.useState([]);
  const [csr2020, setCsr2020] = React.useState([]);
  const [csr2021, setCsr2021] = React.useState([]);
  const [awards2020, setAwards2020] = React.useState([]);
  const [awards2021, setAwards2021] = React.useState([]);
  const [projects2017, setProjects2017] = React.useState([]);
  const [projects2020, setProjects2020] = React.useState([]);
  const [projects2021, setProjects2021] = React.useState([]);
  const [gatherings2015, setGatherings2015] = React.useState([]);
  const [gatherings2016, setGatherings2016] = React.useState([]);
  const [gatherings2017, setGatherings2017] = React.useState([]);
  const [gatherings2020, setGatherings2020] = React.useState([]);
  const [gatherings2021, setGatherings2021] = React.useState([]);
  const csrAll = csr2020.concat(csr2021.concat(csr2018))
  const gathAll = gatherings2020.concat(gatherings2021.concat(gatherings2015.concat(gatherings2016.concat(gatherings2017))))
  const awardsAll = awards2020.concat(awards2021)
  const projectsAll = projects2020.concat(projects2021.concat(projects2017))
  console.log(csrAll);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getImages = async e =>{
    const response = await fetch('https://gledexnew.herokuapp.com/check/checkFolder', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // }
    })
    .then(response => response.json())
    .then(response => setCsr2020(response.body));
  }
  const getCsr2018 = async e =>{
    const response = await fetch('https://gledexnew.herokuapp.com/check/csr2018_gal', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // }
    })
    .then(response => response.json())
    .then(response => setCsr2018(response.body));
  }
  const getCsr2021 = async e =>{
    const response = await fetch('https://gledexnew.herokuapp.com/check/csr2021_gal', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // }
    })
    .then(response => response.json())
    .then(response => setCsr2021(response.body));
  }
  const getAwards2020 = async e =>{
    const response = await fetch('https://gledexnew.herokuapp.com/check/awards2020_gal', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // }
    })
    .then(response => response.json())
    .then(response => setAwards2020(response.body));
  }
  const getAwards2021 = async e =>{
    const response = await fetch('https://gledexnew.herokuapp.com/check/awards2021_gal', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // }
    })
    .then(response => response.json())
    .then(response => setAwards2021(response.body));
  }
  const getProjects2017 = async e =>{
    const response = await fetch('https://gledexnew.herokuapp.com/check/projects2017_gal', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // }
    })
    .then(response => response.json())
    .then(response => setProjects2017(response.body));
  }
  const getProjects2020 = async e =>{
    const response = await fetch('https://gledexnew.herokuapp.com/check/projects2020_gal', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // }
    })
    .then(response => response.json())
    .then(response => setProjects2020(response.body));
  }
  const getProjects2021 = async e =>{
    const response = await fetch('https://gledexnew.herokuapp.com/check/projects2021_gal', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // }
    })
    .then(response => response.json())
    .then(response => setProjects2021(response.body));
  }
  const getGatherings2015 = async e =>{
    const response = await fetch('https://gledexnew.herokuapp.com/check/gatherings2015_gal', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // }
    })
    .then(response => response.json())
    .then(response => setGatherings2015(response.body));
  }
  const getGatherings2016 = async e =>{
    const response = await fetch('https://gledexnew.herokuapp.com/check/gatherings2016_gal', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // }
    })
    .then(response => response.json())
    .then(response => setGatherings2016(response.body));
  }
  const getGatherings2017 = async e =>{
    const response = await fetch('https://gledexnew.herokuapp.com/check/gatherings2017_gal', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // }
    })
    .then(response => response.json())
    .then(response => setGatherings2017(response.body));
  }
  const getGatherings2020 = async e =>{
    const response = await fetch('https://gledexnew.herokuapp.com/check/gatherings2020_gal', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // }
    })
    .then(response => response.json())
    .then(response => setGatherings2020(response.body));
  }
  const getGatherings2021 = async e =>{
    const response = await fetch('https://gledexnew.herokuapp.com/check/gatherings2021_gal', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // }
    })
    .then(response => response.json())
    .then(response => setGatherings2021(response.body));
  }

  React.useEffect(() => {
    getGatherings2021();
    getGatherings2020();
    getGatherings2017();
    getGatherings2016();
    getGatherings2015();
    getProjects2021();
    getProjects2020();
    getProjects2017();
    getAwards2020();
    getAwards2021();
    getImages();
    getCsr2018();
    getCsr2021();
  }, []);

  console.log(csr2020)

  const handleChangeSelector = (event) => {
    setCsrYear(event.target.value);
    setGathYear(event.target.value);
    setProjYear(event.target.value);
    setAwardYear(event.target.value)
  };

  return (
    <Grid className={classes.root}>
    <Grid container xs={12} className={classes.greyGrid}>
      <Grid item xs={12}>
        <h2 className={classes.heading}>Gallery</h2>
        {/* <p className={classes.text}>Take a look at our activities</p> */}
      </Grid> 
      <Grid item className={classes.tab}>
          {/* <AppBar position="static"> */}
            <AntTabs value={value} onChange={handleChange} aria-label="scrollable auto tabs example" variant='scrollable' className={classes.demo1} >
              <AntTab  label="CSR" {...a11yProps(0)} />
              <AntTab label="Gathering" {...a11yProps(1)} />
              <AntTab label="Project" {...a11yProps(2)} />
              <AntTab label="Awards" {...a11yProps(3)} />
            </AntTabs>
          {/* </AppBar> */}
          <TabPanel value={value} index={0}>
            <FormControl className={classes.formControl}>
              {/* <InputLabel id="demo-simple-select-label">YEAR</InputLabel> */}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                displayEmpty
                value={csr_year}
                onChange={handleChangeSelector}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value={2018}>2018</MenuItem>
                <MenuItem value={2020}>2020</MenuItem>
                <MenuItem value={2021}>2021</MenuItem>
              </Select>
            </FormControl>
            {csr_year === 2018 ? (
            <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight="auto" className={classes.imageListStyle}>
                {csr2020.map((item) => (
                  <ImageListItem key={item.img} className={classes.imageListItem}>
                    <img
                      className={classes.imgItem}
                      srcSet={`${item.img}`}
                      alt="GL Image"
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
            </ImageList>
            ):null}
            {csr_year === 2020 ? (
            <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight="auto" className={classes.imageListStyle}>
                {csr2020.map((item) => (
                  <ImageListItem key={item.img} className={classes.imageListItem}>
                    <img
                      className={classes.imgItem}
                      srcSet={`${item.img}`}
                      alt="GL Image"
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
            </ImageList>
            ):null}
            {csr_year === 2021 ? (
            <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight="auto" className={classes.imageListStyle}>
                {csr2021.map((item) => (
                  <ImageListItem key={item.img} className={classes.imageListItem}>
                    <img
                      className={classes.imgItem}
                      srcSet={`${item.img}`}
                      alt="GL Image"
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
            </ImageList>
            ):null}
            {csr_year === '' ? (
            <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight="auto" className={classes.imageListStyle}>
                {csrAll.map((item) => (
                  <ImageListItem key={item.img} className={classes.imageListItem}>
                    <img
                      className={classes.imgItem}
                      srcSet={`${item.img}`}
                      alt="GL Image"
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
            </ImageList>
            ):null}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {/* <Grid container>
              <Grid item xs={12} justifyContent="flex-end" className={classes.formControl}> */}
                <FormControl className={classes.formControl}>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      displayEmpty
                      value={gath_year}
                      onChange={handleChangeSelector}
                    >
                      <MenuItem value="">All</MenuItem>
                      <MenuItem value={2015}>2015</MenuItem>
                      <MenuItem value={2016}>2016</MenuItem>
                      <MenuItem value={2017}>2017</MenuItem>
                      <MenuItem value={2020}>2020</MenuItem>
                      <MenuItem value={2021}>2021</MenuItem>
                    </Select>
                </FormControl>
              {/* </Grid>
            </Grid> */}
            {gath_year === 2015 ? (
            <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight="auto" className={classes.imageListStyle}>
                {gatherings2015.map((item) => (
                  <ImageListItem key={item.img} className={classes.imageListItem}>
                    <img
                      className={classes.imgItem}
                      srcSet={`${item.img}`}
                      alt="GL Image"
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
            </ImageList>
            ):null}
            {gath_year === 2016 ? (
            <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight="auto" className={classes.imageListStyle}>
                {gatherings2016.map((item) => (
                  <ImageListItem key={item.img} className={classes.imageListItem}>
                    <img
                      className={classes.imgItem}
                      srcSet={`${item.img}`}
                      alt="GL Image"
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
            </ImageList>
            ):null}
            {gath_year === 2017 ? (
            <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight="auto" className={classes.imageListStyle}>
                {gatherings2017.map((item) => (
                  <ImageListItem key={item.img} className={classes.imageListItem}>
                    <img
                      className={classes.imgItem}
                      srcSet={`${item.img}`}
                      alt="GL Image"
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
            </ImageList>
            ):null}
            {gath_year === 2020 ? (
            <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight="auto" className={classes.imageListStyle}>
                {gatherings2020.map((item) => (
                  <ImageListItem key={item.img} className={classes.imageListItem}>
                    <img
                      className={classes.imgItem}
                      srcSet={`${item.img}`}
                      alt="GL Image"
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
            </ImageList>
            ):null}
            {gath_year === 2021 ? (
            <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight="auto" className={classes.imageListStyle}>
                {gatherings2021.map((item) => (
                  <ImageListItem key={item.img} className={classes.imageListItem}>
                    <img
                      className={classes.imgItem}
                      srcSet={`${item.img}`}
                      alt="GL Image"
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
            </ImageList>
            ):null}
            {gath_year === '' ? (
            <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight="auto" className={classes.imageListStyle}>
                {gathAll.map((item) => (
                  <ImageListItem key={item.img} className={classes.imageListItem}>
                    <img
                      className={classes.imgItem}
                      srcSet={`${item.img}`}
                      alt="GL Image"
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
            </ImageList>
            ):null}
          </TabPanel>
          <TabPanel value={value} index={2}>
          <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  displayEmpty
                  value={proj_year}
                  onChange={handleChangeSelector}
                >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value={2017}>2017</MenuItem>
                  <MenuItem value={2020}>2020</MenuItem>
                  <MenuItem value={2021}>2021</MenuItem>
                </Select>
            </FormControl>
            {proj_year === 2017 ? (
            <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight="auto" className={classes.imageListStyle}>
                {projects2017.map((item) => (
                  <ImageListItem key={item.img} className={classes.imageListItem}>
                    <img
                      className={classes.imgItem}
                      srcSet={`${item.img}`}
                      alt="GL Image"
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
            </ImageList>
            ):null}
            {proj_year === 2020 ? (
            <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight="auto" className={classes.imageListStyle}>
                {projects2020.map((item) => (
                  <ImageListItem key={item.img} className={classes.imageListItem}>
                    <img
                      className={classes.imgItem}
                      srcSet={`${item.img}`}
                      alt="GL Image"
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
            </ImageList>
            ):null}
            {proj_year === 2021 ? (
            <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight="auto" className={classes.imageListStyle}>
                {projects2021.map((item) => (
                  <ImageListItem key={item.img} className={classes.imageListItem}>
                    <img
                      className={classes.imgItem}
                      srcSet={`${item.img}`}
                      alt="GL Image"
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
            </ImageList>
            ):null}
            {proj_year === '' ? (
            <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight="auto" className={classes.imageListStyle}>
                {projectsAll.map((item) => (
                  <ImageListItem key={item.img} className={classes.imageListItem}>
                    <img
                      className={classes.imgItem}
                      srcSet={`${item.img}`}
                      alt="GL Image"
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
            </ImageList>
            ):null}
          </TabPanel>
          <TabPanel value={value} index={3}>
          <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  displayEmpty
                  value={award_year}
                  onChange={handleChangeSelector}
                >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value={2020}>2020</MenuItem>
                  <MenuItem value={2021}>2021</MenuItem>
                </Select>
            </FormControl>
            {award_year === '' ? (
            <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight="auto" className={classes.imageListStyle}>
                {awardsAll.map((item) => (
                  <ImageListItem key={item.img} className={classes.imageListItem}>
                    <img
                      className={classes.imgItem}
                      srcSet={`${item.img}`}
                      alt="GL Image"
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
            </ImageList>
            ):null}
            {award_year === 2020 ? (
            <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight="auto" className={classes.imageListStyle}>
                {awards2020.map((item) => (
                  <ImageListItem key={item.img} className={classes.imageListItem}>
                    <img
                      className={classes.imgItem}
                      srcSet={`${item.img}`}
                      alt="GL Image"
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
            </ImageList>
            ):null}
            {award_year === 2021 ? (
            <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight="auto" className={classes.imageListStyle}>
                {awards2021.map((item) => (
                  <ImageListItem key={item.img} className={classes.imageListItem}>
                    <img
                      className={classes.imgItem}
                      srcSet={`${item.img}`}
                      alt="GL Image"
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
            </ImageList>
            ):null}
          </TabPanel>
        </Grid>

      </Grid>

    </Grid>
  );
}

