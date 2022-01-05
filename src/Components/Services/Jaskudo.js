import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, Box, Link } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import { color, fontSize } from '@material-ui/system';
import Household from './Household';
import Jakadalu from './Jakadalu';
import Warehouse from './Warehouse';
// import '../../HomeTest.css'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 0,
    },
    itemGridTxt1:{
      [theme.breakpoints.between('xs','sm')]: {
        display:'block',
        boxSizing:'border-box',
        width:'48%',
        border:'1px solid grey',
        padding:'40px',
        paddingTop:'0',
        paddingRight:'0',
        paddingLeft:'4.8%',
      },
      display:'block',
      boxSizing:'border-box',
      width:'48%',
      border:'1px solid grey',
      padding:'40px',
      paddingRight:'0',
      paddingLeft:'4.8%',
    },
    textRight:{
      [theme.breakpoints.between('xs', 'sm')]: {
        fontFamily: 'arial',
        fontWeight:'400', 
        fontSize:'14px', 
        lineHeight:'25px',
        paddingRight:'3%'
      },
      fontFamily: 'arial',
      fontWeight:'400', 
      fontSize:'18px', 
      lineHeight:'35.16px',
      paddingRight:'10%'
    },
    headingRightDescr:{
      [theme.breakpoints.between('xs', 'sm')]: {
        color: '#006936',
        fontFamily: 'arial',
        fontSize: '20px',
        display:'block',
        marginBlockEnd: '1.5em',
        marginBlockStart: '-0.5em',
        marginInlineStart:'0px',
        marginInlineEnd:'0px'
      },
      [theme.breakpoints.between('sm', 'md')]: {
        color: '#006936',
        fontFamily: 'arial',
        fontSize: '20px',
        display:'block',
        marginBlockEnd: '1.5em',
        marginBlockStart: '-0.5em',
        marginInlineStart:'0px',
        marginInlineEnd:'0px'
      },
      color: '#006936',
      fontFamily: 'arial',
      fontSize: '26px',
      display:'block',
      marginBlockEnd: '1.5em',
      marginBlockStart: '-0.5em',
      marginInlineStart:'0px',
      marginInlineEnd:'0px'
    },
    headingRight:{
      [theme.breakpoints.between('xs', 'sm')]: {
        color: '#006936',
        fontFamily: 'arial',
        fontSize: '24px',
        display:'block',
        marginBlockStart: '0em',
        marginInlineStart:'0px',
        marginInlineEnd:'0px'
      },
      [theme.breakpoints.between('sm', 'md')]: {
        color: '#006936',
        fontFamily: 'arial',
        fontSize: '24px',
        display:'block',
        marginBlockStart: '1em',
        marginInlineStart:'0px',
        marginInlineEnd:'0px'
      },
      color: '#006936',
      fontFamily: 'arial',
      fontSize: '30px',
      display:'block',
      marginBlockStart: '1em',
      marginInlineStart:'0px',
      marginInlineEnd:'0px'
    },
    imgLower:{
      [theme.breakpoints.between('xs', 'sm')]: {
        position:'relative',
        display:'wrap',
        top:'3rem',
        // top:'64%',
        left:'45%',
        transform:'translate(-50%,0)',
        width:'auto',
        height:'auto',
        maxHeight:'100%',
        maxWidth:'100%',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        position:'relative',
        display:'wrap',
        top:'5rem',
        // top:'64%',
        transform:'translate(-50%,0)',
        // left:'0%',
        left:'45%',
        height:'auto',
        maxHeight:'100%',
        maxWidth:'100%',
        width:'auto'
      },
      [theme.breakpoints.between('md', 'lg')]: {
        position:'relative',
        display:'wrap',
        top:'4rem',
        // top:'64%',
        transform:'translate(-50%,0)',
        // left:'0%',
        left:'45%',
        height:'auto',
        maxHeight:'100%',
        maxWidth:'100%',
        width:'auto'
      },
      [theme.breakpoints.up('lg')]: {
        position:'relative',
        display:'wrap',
        // top:'5rem',
        top:'50%',
        transform:'translate(0,-50%)',
        left:'0%',
        height:'auto',
        width:'auto',
        maxHeight:'100%',
        maxWidth:'100%',
      }
    },
    imgTop:{
      [theme.breakpoints.between('xs','sm')]: {
          position:'absolute',
          width:'auto',
          height:'auto',
          // left:'10%',
          left:'55%',
          transform:'translate(-50%,0)',
          top:'0%',
          maxWidth:'100%',
          maxHeight:'100%'
      },
      [theme.breakpoints.between('sm','md')]: {
          position:'absolute',
          width:'auto',
          height:'auto',
          // left:'10%',
          left:'56%',
          // top:'0%',
          top:'41%',
          transform:'translate(-50%,0)',
          maxWidth:'100%',
          maxHeight:'100%'
      },
      [theme.breakpoints.up('lg')]: {
          position:'absolute',
          left:'10%',
          // top:'0%',
          top:'50%',
          transform:'translate(0, -63%)',
          height:'auto',
          width:'auto',
          maxHeight:'100%',
          maxWidth:'100%',

      }
    },
    itemGridImg1:{
      [theme.breakpoints.between('xs', 'sm')]: {
          position:'relative',
          boxSizing:'border-box',
          flexBasis:'auto',
          flexWrap:'1',
          display:'block',
          height:'25vh',
          width:'100%',
          border:'1px solid grey',
          // alignItems:'center',
          // justifyContent: "center"
      },
      [theme.breakpoints.between('sm', 'md')]: {
          position:'relative',
          boxSizing:'border-box',
          flexBasis:'auto',
          flexWrap:'1',
          display:'block',
          height:'52vh',
          width:'100%',
          border:'1px solid grey',
          // alignItems:'center',
          // justifyContent: "center",
          // marginTop:'7vh'
      },
      [theme.breakpoints.between('md', 'lg')]: {
          position:'relative',
          boxSizing:'border-box',
          flexBasis:'auto',
          flexWrap:'1',
          display:'block',
          height:'52vh',
          width:'100%',
          border:'1px solid grey',
          // alignItems:'center',
          // justifyContent: "center",
          // marginTop:'7vh'
      },
      [theme.breakpoints.up('lg')]: {
          position:'relative',
          boxSizing:'border-box',
          flexBasis:'auto',
          flexWrap:'1',
          display:'block',
          height:'70vh',
          width:'48%',
          border:'1px solid grey',
          // marginTop:'10em',
          top:'10%',
          alignItems:'center'
      },
    },
    whiteContainer:{
      backgroundColor: '#FFFFFF',
    },
    whiteGrid:{
      [theme.breakpoints.between('xs','sm')]: {
        display:'flex',
        flexDirection:'row-reverse',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginLeft:'9%',
        marginRight:'9%',
        width:'100%',
        paddingTop:'9vh',
        paddingBottom:'0vh',
        alignItems:'center',
      },
      display:'flex',
      flexDirection:'row-reverse',
      flexWrap:'wrap',
      justifyContent:'space-between',
      marginLeft:'9%',
      marginRight:'9%',
      width:'100%',
      paddingTop:'8vh',
      paddingBottom:'0vh',
      alignItems:'center',
      height:'84vh'
    },
    "@keyframes zEffectLow": {
      "0%": {
        zIndex: '0',
        filter: 'grayscale(100%)',
        transform: "translateZ(0)"
      },
      "100%": {
        zIndex: '2',
        filter: 'grayscale(0%)',
        transform: "translateZ(2)"
      }
    },
    "@keyframes zEffectAbv": {
      "0%": {
        filter: 'grayscale(0%)',
      },
      "100%": {
        filter: 'grayscale(100%)',
      }
    }
  }));

export default function Jaskudo(){
    const classes = useStyles();

    return(
    <div className={classes.root}>
      <Grid container className={classes.whiteContainer}>
          <Grid container className={classes.whiteGrid}>
              <Grid item xl={6} lg={6} md={6} xs={12} sm={12} className={classes.itemGridImg1}>
                  <img src='./Assets/airplane-cargo.png' className={classes.imgTop}/>
                  <img src='./Assets/car-cargo.png' className={classes.imgLower}/>
              </Grid>
              <Grid item xl={6} lg={6} md={6} xs={12} sm={12} className={classes.itemGridTxt1}>
                  <h2 className={classes.headingRight}>JasKu<span style={{color:'#FFC700'}}>Do</span></h2>
                  <h1 className={classes.headingRightDescr}>Jasa Kargo Darat, Laut, dan Udara</h1>
                  <p className={classes.textRight}>Jasa Kurir Domestik dalam negeri yang dapat diandalkan, GLEDEX menjamin kecepatan pengantaran ke seluruh wilayah di Indonesia. Beroperasi 24 jam sehari, 7 hari seminggu, GLEDEX menawarkan waktu penjemputan dan transit yang cepat dan fleksibel kepada pelanggan.</p>
              </Grid>
          </Grid>
      </Grid>
    </div>
  );

}