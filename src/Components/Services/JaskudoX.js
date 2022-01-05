import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, Box, Link } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import { color, fontSize } from '@material-ui/system';
// import '../../HomeTest.css'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 0,
    },
    itemGridTxt2:{
      [theme.breakpoints.between('xs', 'sm')]: {
        display:'block',
        boxSizing:'border-box',
        width:'100%',
        // border:'1px solid grey',
        padding:'40px',
        paddingTop:'0',
        paddingRight:'0',
        paddingLeft:'4.8%',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        display:'block',
        boxSizing:'border-box',
        width:'100%',
        // border:'1px solid grey',
        padding:'40px',
        paddingTop:'0',
        paddingRight:'0',
        paddingLeft:'4.8%',
      },
      display:'block',
      boxSizing:'border-box',
      width:'100%',
      // border:'1px solid grey',
      padding:'40px',
      paddingRight:'0',
      paddingLeft:'4.8%',
    },
    itemGridTxt1:{
      [theme.breakpoints.between('xs', 'sm')]: {
        display:'block',
        boxSizing:'border-box',
        width:'48%',
        // border:'1px solid grey',
        padding:'40px',
        paddingBottom:'0',
        paddingRight:'0',
        paddingLeft:'4.8%',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        display:'block',
        boxSizing:'border-box',
        width:'48%',
        // border:'1px solid grey',
        padding:'40px',
        paddingRight:'0',
        paddingLeft:'4.8%',
      },
      display:'block',
      boxSizing:'border-box',
      width:'48%',
      // border:'1px solid grey',
      padding:'40px',
      paddingRight:'0',
      paddingLeft:'4.8%',
    },
    textRight:{
      [theme.breakpoints.between('xs','sm')]: {
        fontFamily: 'arial',
        fontWeight:'400', 
        fontSize:'14px', 
        lineHeight:'20px',
        paddingRight:'4.8%'
      },
      [theme.breakpoints.between('sm','md')]: {
        fontFamily: 'arial',
        fontWeight:'400', 
        fontSize:'14px', 
        lineHeight:'20px',
        paddingRight:'10%'
      },
      fontFamily: 'arial',
      fontWeight:'400', 
      fontSize:'18px', 
      lineHeight:'20px',
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
      color: '#006936',
      fontFamily: 'arial',
      fontSize: '30px',
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
      [theme.breakpoints.between('xs','sm')]: {
        position:'relative',
        display:'wrap',
        top:'3rem',
        // left:'0%',
        height:'auto',
        maxHeight:'100%',
        maxWidth:'91%',
        left:'45%',
        transform:'translate(-50%,0)',
        '&:hover, &:focus': {
          zIndex:'2'
        },
        transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
        transitionDuration:'0.25s',
        // transitionDelay:'0.25s',
        zIndex:'2'
      },
      [theme.breakpoints.between('sm','md')]: {
        position:'relative',
        display:'wrap',
        top:'5rem',
        // left:'0%',
        height:'auto',
        maxHeight:'100%',
        maxWidth:'91%',
        left:'45%',
        transform:'translate(-50%,0)',
        '&:hover, &:focus': {
          zIndex:'2'
        },
        transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
        transitionDuration:'0.25s',
        // transitionDelay:'0.25s',
        zIndex:'2'
      },
      [theme.breakpoints.between('md','lg')]: {
        position:'relative',
        display:'wrap',
        top:'4rem',
        // left:'0%',
        height:'auto',
        maxHeight:'100%',
        maxWidth:'91%',
        left:'45%',
        transform:'translate(-50%,0)',
        '&:hover, &:focus': {
          zIndex:'2'
        },
        transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
        transitionDuration:'0.25s',
        // transitionDelay:'0.25s',
        zIndex:'2'
      },
      [theme.breakpoints.up('lg')]: {
        position:'relative',
        display:'wrap',
        // top:'5rem',
        top:'55%',
        transform:'translate(0,-50%)',
        left:'0%',
        height:'auto',
        width:'auto',
        maxHeight:'100%',
        maxWidth:'100%',
        '&:hover, &:focus': {
          zIndex:'2'
        },
        transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
        transitionDuration:'0.25s',
        // transitionDelay:'0.25s',
        zIndex:'2'
      }
    },
    imgLowerDown:{
      [theme.breakpoints.between('xs','sm')]: {
        position:'relative',
        display:'wrap',
        top:'3rem',
        // left:'0%',
        height:'auto',
        maxHeight:'100%',
        maxWidth:'91%',
        left:'45%',
        transform:'translate(-50%,0)',
        '&:hover, &:focus': {
          zIndex:'2'
        },
        transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
        transitionDuration:'0.25s',
        // transitionDelay:'0.25s',
        filter: 'grayscale(100%)',
        opacity:'0.5'
      },
      [theme.breakpoints.between('sm','md')]: {
        position:'relative',
        display:'wrap',
        top:'5rem',
        // left:'0%',
        height:'auto',
        maxHeight:'100%',
        maxWidth:'91%',
        left:'45%',
        transform:'translate(-50%,0)',
        '&:hover, &:focus': {
          zIndex:'2'
        },
        transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
        transitionDuration:'0.25s',
        // transitionDelay:'0.25s',
        filter: 'grayscale(100%)',
        opacity:'0.5'
      },
      [theme.breakpoints.between('md','lg')]: {
        position:'relative',
        display:'wrap',
        top:'4rem',
        // left:'0%',
        height:'auto',
        maxHeight:'100%',
        maxWidth:'91%',
        left:'45%',
        transform:'translate(-50%,0)',
        '&:hover, &:focus': {
          zIndex:'2'
        },
        transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
        transitionDuration:'0.25s',
        // transitionDelay:'0.25s',
        filter: 'grayscale(100%)',
        opacity:'0.5'
      },
      [theme.breakpoints.up('lg')]: {
        position:'relative',
        display:'wrap',
        // top:'5rem',
        top:'55%',
        transform:'translate(0,-50%)',
        left:'0%',
        height:'auto',
        width:'auto',
        maxHeight:'100%',
        maxWidth:'100%',
        '&:hover, &:focus': {
          zIndex:'2'
        },
        transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
        transitionDuration:'0.25s',
        // transitionDelay:'0.25s',
        filter: 'grayscale(100%)',
        opacity:'0.5'
      }
    },
    imgTop:{
      [theme.breakpoints.between('xs','md')]: {
          position:'absolute',
          width:'auto',
          height:'auto',
          // left:'10%',
          top:'0%',
          maxWidth:'91%',
          maxHeight:'100%',
          left:'55%',
          transform:'translate(-50%,0)',
          '&:hover, &:focus': {
            zIndex:'3',
            opacity:'1'
          },
          transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
          transitionDuration:'0.25s',
          // transitionDelay:'0.25s',
          zIndex:'3'
      },
      [theme.breakpoints.between('sm','md')]: {
          position:'absolute',
          width:'auto',
          height:'auto',
          // left:'10%',
          top:'0%',
          maxWidth:'91%',
          maxHeight:'100%',
          left:'55%',
          transform:'translate(-50%,0)',
          '&:hover, &:focus': {
            zIndex:'3',
            opacity:'1'
          },
          transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
          transitionDuration:'0.25s',
          // transitionDelay:'0.25s',
          zIndex:'3'
      },
      [theme.breakpoints.between('md','lg')]: {
          position:'absolute',
          width:'auto',
          height:'auto',
          // left:'10%',
          top:'0%',
          maxWidth:'91%',
          maxHeight:'100%',
          left:'55%',
          transform:'translate(-50%,0)',
          '&:hover, &:focus': {
            zIndex:'3',
            opacity:'1'
          },
          transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
          transitionDuration:'0.25s',
          // transitionDelay:'0.25s',
          zIndex:'3'
      },
      [theme.breakpoints.up('lg')]: {
          position:'absolute',
          // left:'10%',
          left:'55%',
          transform:'translate(-50%,0)',
          // top:'0%',
          height:'auto',
          width:'auto',
          maxHeight:'100%',
          maxWidth:'100%',
          '&:hover, &:focus': {
            zIndex:'3',
            opacity:'1'
          },
          transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
          transitionDuration:'0.25s',
          // transitionDelay:'0.25s',
          zIndex:'3'
      }
    },
    imgTopDown:{
      [theme.breakpoints.between('xs','md')]: {
          position:'absolute',
          width:'auto',
          height:'auto',
          // left:'10%',
          top:'0%',
          maxWidth:'91%',
          maxHeight:'100%',
          left:'55%',
          transform:'translate(-50%,0)',
          '&:hover, &:focus': {
            zIndex:'3',
            opacity:'1'
          },
          transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
          transitionDuration:'0.25s',
          // transitionDelay:'0.25s',
          zIndex:'0',
          filter: 'grayscale(100%)',
          opacity:'0.5'
      },
      [theme.breakpoints.between('sm','md')]: {
          position:'absolute',
          width:'auto',
          height:'auto',
          // left:'10%',
          top:'0%',
          maxWidth:'91%',
          maxHeight:'100%',
          left:'55%',
          transform:'translate(-50%,0)',
          '&:hover, &:focus': {
            zIndex:'3',
            opacity:'1'
          },
          transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
          transitionDuration:'0.25s',
          // transitionDelay:'0.25s',
          zIndex:'0',
          filter: 'grayscale(100%)',
          opacity:'0.5'
      },
      [theme.breakpoints.between('md','lg')]: {
          position:'absolute',
          width:'auto',
          height:'auto',
          // left:'10%',
          top:'0%',
          maxWidth:'91%',
          maxHeight:'100%',
          left:'55%',
          transform:'translate(-50%,0)',
          '&:hover, &:focus': {
            zIndex:'3',
            opacity:'1'
          },
          transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
          transitionDuration:'0.25s',
          // transitionDelay:'0.25s',
          zIndex:'0',
          filter: 'grayscale(100%)',
          opacity:'0.5'
      },
      [theme.breakpoints.up('lg')]: {
          position:'absolute',
          // left:'10%',
          left:'55%',
          transform:'translate(-50%,0)',
          // top:'0%',
          height:'auto',
          width:'auto',
          maxHeight:'100%',
          maxWidth:'100%',
          '&:hover, &:focus': {
            zIndex:'3',
            opacity:'1'
          },
          transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
          transitionDuration:'0.25s',
          // transitionDelay:'0.25s',
          zIndex:'0',
          filter: 'grayscale(100%)',
          opacity:'0.5'
      }
    },
    itemGridImg1:{
      [theme.breakpoints.between('xs', 'sm')]: {
          position:'relative',
          boxSizing:'border-box',
          flexBasis:'auto',
          flexWrap:'1',
          display:'block',
          height:'29vh',
          width:'100%',
          // border:'1px solid grey',
      },
      [theme.breakpoints.between('sm', 'md')]: {
          position:'relative',
          boxSizing:'border-box',
          flexBasis:'auto',
          flexWrap:'1',
          display:'block',
          height:'46vh',
          width:'100%',
          // border:'1px solid grey',
      },
      [theme.breakpoints.between('md', 'lg')]: {
          position:'relative',
          boxSizing:'border-box',
          flexBasis:'auto',
          flexWrap:'1',
          display:'block',
          height:'36vh',
          width:'100%',
          // border:'1px solid grey',
      },
      [theme.breakpoints.up('lg')]: {
          position:'relative',
          boxSizing:'border-box',
          flexBasis:'auto',
          flexWrap:'1',
          display:'block',
          height:'54vh',
          width:'48%',
          // border:'1px solid grey',
          top:'0vh'
      },
    },
    whiteContainer:{
      backgroundColor: '#FFFFFF',
    },
    whiteGrid:{
      [theme.breakpoints.between('xs','md')]: {
        display:'flex',
        flexDirection:'row-reverse',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginLeft:'9%',
        marginRight:'9%',
        width:'100%',
        paddingTop:'9vh',
        paddingBottom:'8vh',
        alignItems:'center'
      },
      [theme.breakpoints.between('sm','md')]: {
        display:'flex',
        flexDirection:'row-reverse',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginLeft:'9%',
        marginRight:'9%',
        width:'100%',
        paddingTop:'9vh',
        paddingBottom:'8vh',
        alignItems:'center'
      },
      [theme.breakpoints.between('md','lg')]: {
        display:'flex',
        flexDirection:'row-reverse',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginLeft:'9%',
        marginRight:'9%',
        width:'100%',
        paddingTop:'9vh',
        paddingBottom:'8vh',
        alignItems:'center'
      },
      [theme.breakpoints.up('lg')]: {
        display:'flex',
        flexDirection:'row-reverse',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginLeft:'9%',
        marginRight:'9%',
        width:'100%',
        paddingTop:'14vh',
        paddingBottom:'8vh',
        alignItems:'center'
      }
      // display:'flex',
      // flexDirection:'row-reverse',
      // flexWrap:'wrap',
      // justifyContent:'space-between',
      // marginLeft:'9%',
      // marginRight:'9%',
      // width:'100%',
      // paddingTop:'9vh',
      // paddingBottom:'8vh',
      // alignItems:'center'
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

export default function JaskudoX(){
    const classes = useStyles();
    const [hoverImgLower, setHoverImgLower] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
          setHoverImgLower(true)
      }, 7000);
      const intervalFalse = setInterval(() => {
          setHoverImgLower(false)
      }, 14000);
      return () => clearInterval(interval, intervalFalse);
  
    },[]);

    return(
    <div className={classes.root}>
    <Grid container className={classes.whiteContainer}>
        <Grid container className={classes.whiteGrid}>
            <Grid item xl={6} lg={6} md={12} xs={12} sm={12} className={classes.itemGridImg1}>
              {hoverImgLower === true ?
                <img 
                  src='./Assets/car-cargo.png' 
                  className={classes.imgLower}
                  alt="img1.1"
                  onMouseOver={() => setHoverImgLower(true)}
                  onMouseLeave={() => setHoverImgLower(true)}
                />:
                <img 
                  src='./Assets/car-cargo.png' 
                  className={classes.imgLowerDown}
                  alt="img1.1"
                  onMouseOver={() => setHoverImgLower(true)}
                  onMouseLeave={() => setHoverImgLower(true)}
                />}
                {hoverImgLower === true ?
                  <img 
                    src='./Assets/airplane-cargo.png' 
                    className={classes.imgTopDown}
                    onMouseOver={() => setHoverImgLower(false)}
                    onMouseLeave={() => setHoverImgLower(false)}
                  />:
                  <img 
                    src='./Assets/airplane-cargo.png' 
                    className={classes.imgTop}
                    onMouseOver={() => setHoverImgLower(false)}
                    onMouseLeave={() => setHoverImgLower(false)}
                  />
                }

            </Grid>
            <Grid item xl={6} lg={6} md={12} xs={12} sm={12} className={classes.itemGridTxt1}>
                <h2 className={classes.headingRight}>JasKu<span style={{color:'#FFC700'}}>Do</span></h2>
                <h1 className={classes.headingRightDescr}>Jasa Kargo Darat, Laut, dan Udara</h1>
                <p className={classes.textRight}>Jasa Kurir Domestik dalam negeri yang dapat diandalkan, GLEDEX menjamin kecepatan pengantaran ke seluruh wilayah di Indonesia. Beroperasi 24 jam sehari, 7 hari seminggu, GLEDEX menawarkan waktu penjemputan dan transit yang cepat dan fleksibel kepada pelanggan.</p>
            </Grid>
          </Grid>
      </Grid>
      </div>
    );

}