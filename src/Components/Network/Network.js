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
    headImgGrid: {
        // [theme.breakpoints.between('xs','sm')]: {
        //   width:'100%',
        // },
        // [theme.breakpoints.between('sm', 'md')]: {
        //   width:'100%',
        //   marginTop: '100px'
        // },
        // [theme.breakpoints.between('md', 'lg')]: {
        //   width:'100%',
        //   marginTop:'100px'
        // },
        // [theme.breakpoints.up('lg')]: {
        //   marginTop:'2.25%', 
        //   width:'100%',
        // },
        // [theme.breakpoints.up('xl')]: {
        //   marginTop:'9.5%',
        //   width:'100%',
        // },
        marginTop:'9vh',
        width:'100%',
    },
    imgLoc: {
      [theme.breakpoints.down('sm')]: {
        width:'150px', 
        height:'150px', 
        marginLeft: '20px'
      },
      [theme.breakpoints.up('md')]: {
      },
      [theme.breakpoints.up('lg')]: {
        width:'450px', 
        height:'450px', 
        // border:'1 px solid grey', 
        marginLeft: '85px'
      },
    },
    headLoc:{
      [theme.breakpoints.down('sm')]: {
        marginLeft: '20px'
      },
      [theme.breakpoints.up('md')]: {
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft:'85px', 
        borderBottom:'1px solid grey'
      },
    },
    txtLoc: {
      [theme.breakpoints.between('xs','sm')]: {
        fontFamily: 'arial',
        paddingLeft:'4vw', 
        fontSize: '16px',
        marginBlockStart:'0'
      },
      [theme.breakpoints.between('sm','md')]: {
        fontFamily: 'arial',
        paddingLeft:'4vw', 
        fontSize: '16px'
      },
      // [theme.breakpoints.between('md','lg')]: {
      //   marginTop:'175px',
      //   marginLeft:'205px',
      //   fontFamily:'arial',
      //   fontSize: '19px',
      // },
      // [theme.breakpoints.up('lg')]: {
      //   marginTop:'18%',
      //   marginLeft:'30.5%'
      // },
      // [theme.breakpoints.up('xl')]: {
      //   marginLeft:'30%',
      //   fontSize:'19px',
      //   marginTop:'11%',
      //   fontFamily: 'arial'
      // },
      fontFamily: 'arial',
      paddingLeft:'12vw', 
      fontSize: '19px'
    },
    greyGrid: {
        [theme.breakpoints.down('sm')]: {
          backgroundColor: '#F3F5F4',
          marginTop: '80px'
        },
        [theme.breakpoints.up('md')]: {
          backgroundColor: '#F3F5F4',
        },
        [theme.breakpoints.up('lg')]: {
          backgroundColor: '#F3F5F4',
          marginTop: '80px',
        },
    },
    whiteGrid: {
        // [theme.breakpoints.between('xs','sm')]: {
        //   backgroundColor: '#FFFFFF',
        //   marginTop: '80px'
        // },
        // [theme.breakpoints.between('sm','md')]: {
        //   backgroundColor: '#FFFFFF',
        //   marginTop: '80px'
        // },
        // [theme.breakpoints.between('md','lg')]: {
        //   backgroundColor: '#FFFFFF',
        //   marginTop: '80px'
        // },
        // [theme.breakpoints.up('lg')]: {
        //   backgroundColor: '#FFFFFF',
        //   marginTop: '80px',
        // },
        // [theme.breakpoints.up('xl')]: {
        //   backgroundColor: '#FFFFFF',
        //   marginTop: '80px',
        // },
        maxWidth:'100%',
        width:'auto',
        // // border:'1px solid grey'
    },
    textGrid:{
      maxWidth:'100%',
      width:'auto',
      // // border:'1px solid grey',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      paddingBottom:'4vh'
    },
    heading: {
        [theme.breakpoints.down('sm')]: {
          color: '#006936',
          marginLeft: '25px',
        },
        [theme.breakpoints.up('md')]: {
          color: '#006936'
        },
        [theme.breakpoints.up('lg')]: {
          color: '#006936',
          marginLeft: '25px'
        },
    },
    textGreyGrid: {
        [theme.breakpoints.down('sm')]: {
          marginLeft:'25px'
        },
        [theme.breakpoints.up('md')]: {
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft:'25px'
        },
    },
    headingLeftDescr: {
        [theme.breakpoints.between('xs','sm')]: {
          paddingLeft:'4vw',
          color: '#006936',
        },
        [theme.breakpoints.between('sm','md')]: {
          paddingLeft:'4vw',
          color: '#006936',
        },
        // [theme.breakpoints.between('md','lg')]: {
        //   marginTop:'50px', 
        //   color: '#006936', 
        //   marginLeft: '55px', 
        //   fontSize: '30px'
        // },
        // [theme.breakpoints.up('lg')]: {
        //   marginTop:'10%', 
        //   color: '#006936', 
        //   marginLeft: '7.5%', 
        //   fontSize: '30px'
        // },
        // [theme.breakpoints.up('xl')]: {
        //   marginTop:'5%', 
        //   color: '#006936', 
        //   marginLeft: '25%', 
        //   fontSize: '36px',
        //   fontFamily: 'arial'
        // },
        // padding:'1em 1em',
        paddingLeft:'8.5vw',
        color: '#006936',
        fontFamily:'arial'
    },
    textLeft: {
        [theme.breakpoints.between('xs','sm')]: {
          fontFamily: 'arial',
          paddingLeft:'4vw', 
          paddingRight:'2vw',
          fontSize: '16px'
        },
        [theme.breakpoints.between('sm','md')]: {
          fontFamily: 'arial',
          paddingLeft:'4vw', 
          paddingRight:'2vw',
          fontSize: '16px'
        },
        // [theme.breakpoints.between('md','lg')]: {
        //     marginLeft: '55px', 
        //     fontSize: '19px',
        //     fontFamily:'arial'
        // },
        // [theme.breakpoints.up('lg')]: {
        //     marginLeft: '7.5%', 
        //     fontSize: '19px',
        //     fontFamily:'arial'
        // },
        // [theme.breakpoints.up('xl')]: {
        //     fontFamily: 'arial',
        //     marginLeft: '25%', 
        //     fontSize: '19px'
        // },
        fontFamily: 'arial',
        paddingLeft:'8.5vw', 
        paddingRight:'2vw',
        fontSize: '18px'
    },
    headContainer:{
      position:'relative',
      textAlign:'center',
      width:'auto',
      maxWidth: '100%'
    },
}));

export default function Network(){
    const classes = useStyles();

    return(
    <div className={classes.root}>
      <Grid container className={classes.headContainer}>
          <Grid item xs={12}>
            <img src='./Assets/services-maps.png' className={classes.headImgGrid}/>
          </Grid>
      </Grid>
      <Grid container className={classes.whiteGrid}>
          <Grid item xs={12}>
            <h2 className={classes.headingLeftDescr}>Jangkauan Pengiriman GLEDEX Logistics:</h2>
          </Grid>
      </Grid>
      <Grid container className={classes.textGrid}>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <p className={classes.textLeft}>Sumatera :<br/>
              Banda Aceh, Medan, Pekanbaru, Jambi, Palembang, Bengkulu, Batam, Pangkal Pinang, Bandar Lampung
            </p>
            <p className={classes.textLeft}>Jawa & Bali :<br/>
              Bandung, Semarang, Yogyakarta, Solo, Surabaya, Denpasar
            </p>
            <p className={classes.textLeft}>Kalimantan :<br/>
              Pontianak, Banjarmasin, Palangkaraya, Balikpapan, Samarinda
            </p>
            <p className={classes.textLeft}>Sulawesi :<br/>
              Palu, Makasar, Manado, Kendari
            </p>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <p className={classes.txtLoc}>
            Maluku :<br/>
            Ambon, Ternate<br/><br/>
            Irian Jaya :<br/>
            Jayapura, Sorong, Biak, Timika<br/><br/>
            Nusa Tenggara :<br/>
            Kupang, Mataram
            </p>
          </Grid>
      </Grid>

    </div>
    );
}