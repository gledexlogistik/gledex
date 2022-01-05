import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import Maps from '../../GoogleMaps/Maps';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    imgLoc: {
      [theme.breakpoints.between('xs','sm')]: {
        width:'150px', 
        height:'150px', 
        marginLeft: '20px',
        position:'relative',
        display:'wrap',
      },
      [theme.breakpoints.between('sm','md')]: {
      },
      [theme.breakpoints.between('md','lg')]: {
        width:'250px', 
        height:'250px', 
        border:'1 px solid grey', 
        marginLeft: '25%'
      },
      [theme.breakpoints.up('lg')]: {
        width:'31.25vw', 
        height:'50vh', 
        border:'1 px solid grey', 
        marginLeft:'20%'
      },
      [theme.breakpoints.up('xl')]: {
        width:'550px', 
        height:'550px', 
        border:'1 px solid grey', 
        marginLeft: '200px'
      },
    },
    headLoc:{
      [theme.breakpoints.between('xs','sm')]: {
        marginLeft: '20px'
      },
      [theme.breakpoints.between('sm','md')]: {
      },
      [theme.breakpoints.between('md','lg')]: {
        marginLeft:'25%', 
        borderBottom:'1px solid grey',
        width:'48%'
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft:'20%', 
        borderBottom:'1px solid grey'
      },
      [theme.breakpoints.up('xl')]: {
        marginLeft:'20%', 
        borderBottom:'1px solid grey',
        width:'48%',
        fontSize:'30px',
        fontFamily: 'arial'
      },
    },
    txtLoc: {
      [theme.breakpoints.between('xs','sm')]: {
        marginLeft: '20px'
      },
      [theme.breakpoints.between('sm','md')]: {
      },
      [theme.breakpoints.between('md','lg')]: {
        marginLeft:'25%'
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft:'20%'
      },
      [theme.breakpoints.up('xl')]: {
        marginLeft:'20%',
        fontSize:'30px',
        fontFamily:'arial'
      },
    },
    greyGrid: {
        [theme.breakpoints.between('xs','sm')]: {
          backgroundColor: '#F3F5F4',
          marginTop: '60px'
        },
        [theme.breakpoints.between('sm','md')]: {
          backgroundColor: '#F3F5F4',
        },
        [theme.breakpoints.between('md','lg')]: {
          backgroundColor: '#F3F5F4',
          marginTop: '120px',
        },
        [theme.breakpoints.up('lg')]: {
          backgroundColor: '#F3F5F4',
          marginTop: '110px',
        },
        [theme.breakpoints.up('xl')]: {
          backgroundColor: '#F3F5F4',
          marginTop: '130px',
        },
    },
    whiteGrid: {
        [theme.breakpoints.down('sm')]: {
          backgroundColor: '#FFFFFF',
          marginTop: '80px'
        },
        [theme.breakpoints.up('md')]: {
          backgroundColor: '#F3F5F4',
        },
        [theme.breakpoints.up('lg')]: {
          backgroundColor: '#FFFFFF',
          marginTop: '80px',
        },
    },
    heading: {
        [theme.breakpoints.between('xs','sm')]: {
          color: '#006936',
          marginLeft: '25px',
        },
        [theme.breakpoints.between('sm','md')]: {
          color: '#006936'
        },
        [theme.breakpoints.between('md','lg')]: {
          color: '#006936',
          marginLeft: '12%'
        },
        [theme.breakpoints.up('lg')]: {
          color: '#006936',
          marginLeft: '10%'
        },
        [theme.breakpoints.up('xl')]: {
          color: '#006936',
          marginLeft: '10%',
          fontSize:'36px',
          fontFamily: 'arial'
        },
    },
    textGreyGrid: {
        [theme.breakpoints.between('xs','sm')]: {
          marginLeft:'25px'
        },
        [theme.breakpoints.between('sm','md')]: {
        },
        [theme.breakpoints.between('md','lg')]: {
            marginLeft:'12%'
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft:'10%',
            fontFamily: 'arial',
        },
        [theme.breakpoints.up('xl')]: {
            marginLeft:'10%',
            fontFamily: 'arial',
            fontSize:'30px'
        },
    },
    imgGrid:{
      position:'relative',
      boxSizing:'border-box',
      flexBasis:'auto',
      flexWrap:'1',
      display:'block',
      height:'auto',
      width:'auto',
      border:'1px solid grey',
    }
}));

export default function Contact(){
    const classes = useStyles();

    return(
    <div className={classes.root}>
      <Grid container className={classes.greyGrid}>
          <Grid item xs={12}>
            <h2 className={classes.heading}>Contact</h2>
            <p className={classes.textGreyGrid}>
            All of our Offices are opens 8.00 to 17.00 WIB
            </p>
          </Grid>
          <Grid item xs={6} className={classes.imgGrid}>
            <img src='./Assets/contact-maps.png' className={classes.imgLoc}/>
          </Grid>
          <Grid item xs={6}>
            <p className={classes.headLoc}>Jakarta Office</p>
            <p className={classes.txtLoc}>
              Jl. Cempaka Putih Tengah II No. 2D,<br/>
              Jakarta Pusat 10510<br/>
              Whatsapp: +62 81357575757<br/>
              Fax: 021-4203122<br/>
              Email: info@gledex.co.id<br/>
            </p>
          </Grid>
          <Grid item xs={6}>
            <img src='./Assets/contact-maps.png' className={classes.imgLoc}/>
          </Grid>
          <Grid item xs={6}>
            <p className={classes.headLoc}>Jakarta Office</p>
            <p className={classes.txtLoc}>
              Jl. Cempaka Putih Tengah II No. 2D,<br/>
              Jakarta Pusat 10510<br/>
              Whatsapp: +62 81357575757<br/>
              Fax: 021-4203122<br/>
              Email: info@gledex.co.id<br/>
            </p>
          </Grid>
          <Grid item xs={6}>
            <img src='./Assets/contact-maps.png' className={classes.imgLoc}/>
            <p className={classes.headLoc}>Jakarta Office</p>
            <p className={classes.txtLoc} >
              Jl. Cempaka Putih Tengah II No. 2D,<br/>
              Jakarta Pusat 10510<br/>
              Whatsapp: +62 81357575757<br/>
              Fax: 021-4203122<br/>
              Email: info@gledex.co.id<br/>
            </p>
          </Grid>
          <Grid item xs={6}>
            <img src='./Assets/contact-maps.png' className={classes.imgLoc}/>
            <p className={classes.headLoc}>Jakarta Office</p>
            <p className={classes.txtLoc} >
              Jl. Cempaka Putih Tengah II No. 2D,<br/>
              Jakarta Pusat 10510<br/>
              Whatsapp: +62 81357575757<br/>
              Fax: 021-4203122<br/>
              Email: info@gledex.co.id<br/>
            </p>
          </Grid>
      </Grid>
    </div>
    );
}