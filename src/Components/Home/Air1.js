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
      display:'block',
      boxSizing:'border-box',
      width:'100%',
      // border:'1px solid grey',
      padding:'40px',
      paddingTop:'0',
      paddingRight:'0',
      paddingLeft:'4.8%',
    },
    itemGridTxt1:{
      display:'block',
      boxSizing:'border-box',
      width:'48%',
      // border:'1px solid grey',
      padding:'40px',
      paddingBottom:'0',
      paddingRight:'0',
      paddingLeft:'4.8%',
    },
    textRight:{
      [theme.breakpoints.between('xs','sm')]: {
        fontFamily:'arial',
        fontWeight:'400', 
        fontSize:'14px', 
        lineHeight:'25px',
        paddingRight:'4.8%'
      },
      [theme.breakpoints.between('sm','md')]: {
        fontFamily:'arial',
        fontWeight:'400', 
        fontSize:'14px', 
        lineHeight:'25px',
        paddingRight:'10%'
      },
      fontFamily:'arial',
      fontWeight:'400', 
      fontSize:'18px', 
      lineHeight:'25px',
      paddingRight:'10%'
    },
    headingRightDescr:{
      [theme.breakpoints.between('xs', 'sm')]: {
        color: '#006936',
        fontFamily:'arial',
        fontSize: '20px',
        display:'block',
        marginBlockEnd: '1.5em',
        marginBlockStart: '-0.5em',
        marginInlineStart:'0px',
        marginInlineEnd:'0px'
      },
      color: '#006936',
      fontFamily:'arial',
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
        fontFamily:'arial',
        fontSize: '24px',
        display:'block',
        marginBlockStart: '1em',
        marginInlineStart:'0px',
        marginInlineEnd:'0px'
      },
      color: '#006936',
      fontFamily:'arial',
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
        width:'auto',
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
        width:'auto',
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
        width:'auto',
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
        top:'55%',
        transform:'translate(0,-50%)',
        left:'0%',
        height:'auto',
        width:'25vw',
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
        width:'auto',
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
        width:'auto',
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
        width:'auto',
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
        top:'55%',
        transform:'translate(0,-50%)',
        left:'0%',
        height:'auto',
        width:'25vw',
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
          left:'10%',
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
          left:'10%',
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
          left:'10%',
          top:'45%',
          transform:'translate(0,-50%)',
          height:'auto',
          width:'25vw',
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
          left:'10%',
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
          left:'10%',
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
          left:'10%',
          top:'45%',
          transform:'translate(0,-50%)',
          height:'auto',
          width:'25vw',
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
          // height:'40vh',
          height:'57vh',
          width:'48%',
          // border:'1px solid grey',
          top:'0vh'
      },
    },
    whiteContainer:{
      backgroundColor: '#FFFFFF',
    },
    whiteGrid:{
      display:'flex',
      flexDirection:'row-reverse',
      flexWrap:'wrap',
      justifyContent:'space-between',
      marginLeft:'9%',
      marginRight:'9%',
      width:'100%',
      paddingTop:'9vh',
      // paddingBottom:'16vh',
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

export default function Air1(){
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
                  src='./Assets/services-section2_1.png' 
                  className={classes.imgLower}
                  alt="img1.1"
                  onMouseOver={() => setHoverImgLower(true)}
                  onMouseLeave={() => setHoverImgLower(true)}
                />:
                <img 
                  src='./Assets/services-section2_1.png' 
                  className={classes.imgLowerDown}
                  alt="img1.1"
                  onMouseOver={() => setHoverImgLower(true)}
                  onMouseLeave={() => setHoverImgLower(true)}
                />}
              {hoverImgLower === true ?
                <img 
                  src='./Assets/services-sectionair.png' 
                  className={classes.imgTopDown}
                  onMouseOver={() => setHoverImgLower(false)}
                  onMouseLeave={() => setHoverImgLower(false)}
                />:
                <img 
                  src='./Assets/services-sectionair.png' 
                  className={classes.imgTop}
                  onMouseOver={() => setHoverImgLower(false)}
                  onMouseLeave={() => setHoverImgLower(false)}
                />
              }
            </Grid>
            <Grid item xl={6} lg={6} md={12} xs={12} sm={12} className={classes.itemGridTxt1}>
              <h2 className={classes.headingRight}>Air<span style={{color:'#FFC700'}}> Freight Services</span></h2>
              <p className={classes.textRight}>Jasa angkutan udara domestik dan internasional, kami akan memastikan bahwa kiriman Anda dikirim sesuai dengan tujuan yang anda inginkan. Dan tiba ketika Anda membutuhkannya cepat.</p>
              <p className={classes.textRight}>Dengan jasa kargo udara ini, anda bisa mengirimkan barang, berapa pun besar dan beratnya (sesuai ukuran pintu pesawat dan berat maksimal sesuai ketentuan airlines), dengan cepat dan murah.</p>
            </Grid>
            <Grid item xl={12} lg={12} md={12} xs={12} sm={12} className={classes.itemGridTxt2}>
                <p className={classes.textRight}>Divisi angkutan udara kami siap untuk memberikan layanan kepada Anda hampir ke setiap lokasi. Karena permintaan yang semakin meningkat untuk waktu transit yang lebih pendek dalam dunia pengiriman barang, mulai dari packing barang yang harus sesuai standard, kamipun menyarankan untuk setiap kirim barang via udara di asuransikan.</p>
                <p className={classes.textRight}>Saat ini kami melayani pengiriman dengan sistem port to port ataupun port to door, tergantung dengan kebutuhan customer. Ketepatan waktu atau pengiriman barang yang terjadwal sangat dipengaruhi oleh moda transportasi dan ini menjadi bagian paling penting untuk memaksimalkan layanan pada customer.</p>
                <p className={classes.textRight}>Dengan menggandeng beberapa maskapai penerbangan ternama di Indonesia, kami sangat memprioritaskan kebutuhan customer terutama dalam memberikan layanan terbaik berdasarkan ketepatan waktu pengiriman, harga yang terjangkau, serta konsep schedule yang benar-benar tertata.</p>
                <p className={classes.textRight}>Dibanding metode jasa pengiriman kargo lainnya, pengiriman barang lewat jalur udara adalah yang paling praktis, cepat, dan aman. Umumnya jenis pengiriman ini dilakukan oleh mereka yang memiliki kepentingan mendesak sehingga barang yang dikirim harus tiba ditempat tujuan dalam batasan waktu tertentu. Sayangnya, untuk kargo udara jelas barang yang dikirim jumlah dan dimensinya dibatasi.</p>
            </Grid>
          </Grid>
      </Grid>
      </div>
    );

}