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
    itemGridTxt3:{
      display:'flex',
      flexDirection:'row',
      boxSizing:'border-box',
      width:'100%',
      // border:'1px solid grey',
    //   padding:'40px',
      paddingRight:'0',
      paddingLeft:'4.8%',
    },
    itemGridTxt2:{
      display:'block',
      boxSizing:'border-box',
      width:'100%',
      // border:'1px solid grey',
    //   padding:'40px',
      paddingRight:'0',
      paddingLeft:'4.8%',
    },
    itemGridTxt1:{
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
        lineHeight:'25px',
        paddingRight:'10%'
      },
      [theme.breakpoints.between('sm','md')]: {
        fontFamily: 'arial',
        fontWeight:'400', 
        fontSize:'14px', 
        lineHeight:'25px',
        paddingRight:'10%'
      },
      fontFamily: 'arial',
      fontWeight:'400', 
      fontSize:'18px', 
      lineHeight:'25px',
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
        left:'45%',
        height:'auto',
        width:'70vw',
        maxHeight:'100%',
        maxWidth:'100%',
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
        left:'0%',
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
        left:'0%',
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
        // top:'5rem',
        top:'55%',
        transform:'translate(0,-50%)',
        left:'0%',
        height:'auto',
        width:'30vw',
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
        left:'45%',
        height:'auto',
        width:'70vw',
        maxHeight:'100%',
        maxWidth:'100%',
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
        left:'0%',
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
        left:'0%',
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
        // top:'5rem',
        top:'55%',
        transform:'translate(0,-50%)',
        left:'0%',
        height:'auto',
        width:'30vw',
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
          width:'70vw',
          height:'auto',
          // left:'10%',
          left:'55%',
          transform:'translate(-50%,0)',
          top:'0%',
          maxWidth:'91%',
          maxHeight:'100%',
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
          left:'55%',
          transform:'translate(-50%,0)',
          top:'0%',
          maxWidth:'91%',
          maxHeight:'100%',
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
          left:'55%',
          transform:'translate(-50%,0)',
          top:'0%',
          maxWidth:'91%',
          maxHeight:'100%',
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
          // top:'40%',
          top:'45%',
          transform:'translate(0,-50%)',
          height:'auto',
          width:'30vw',
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
          width:'70vw',
          height:'auto',
          // left:'10%',
          left:'55%',
          transform:'translate(-50%,0)',
          top:'0%',
          maxWidth:'91%',
          maxHeight:'100%',
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
          left:'55%',
          transform:'translate(-50%,0)',
          top:'0%',
          maxWidth:'91%',
          maxHeight:'100%',
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
          left:'55%',
          transform:'translate(-50%,0)',
          top:'0%',
          maxWidth:'91%',
          maxHeight:'100%',
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
          // top:'40%',
          top:'45%',
          transform:'translate(0,-50%)',
          height:'auto',
          width:'30vw',
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
          height:'35vh',
          width:'100%',
          // border:'1px solid grey',
      },
      [theme.breakpoints.between('sm', 'md')]: {
          position:'relative',
          boxSizing:'border-box',
          flexBasis:'auto',
          flexWrap:'1',
          display:'block',
          height:'49vh',
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
          // height:'57vh',
          height:'63vh',
          width:'48%',
          // border:'1px solid grey',
          justifyContent:'center'
      },
    },
    whiteContainer:{
      backgroundColor: '#FFFFFF',
    },
    whiteGridBot:{
      display:'flex',
      flexDirection:'row-reverse',
      flexWrap:'wrap',
      justifyContent:'space-between',
      marginLeft:'9%',
      marginRight:'9%',
      width:'100%',
      // paddingTop:'8vh',
      paddingBottom:'16vh',
      // alignItems:'center'
    },
    whiteGrid:{
      display:'flex',
      flexDirection:'row-reverse',
      flexWrap:'wrap',
      justifyContent:'space-between',
      marginLeft:'9%',
      marginRight:'9%',
      width:'100%',
      paddingTop:'4vh',
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

export default function Household1(){
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
                    src='./Assets/services-section3.png' 
                    className={classes.imgLower}
                    alt="img1.1"
                    onMouseOver={() => setHoverImgLower(true)}
                    onMouseLeave={() => setHoverImgLower(true)}
                  />:
                  <img 
                    src='./Assets/services-section3.png' 
                    className={classes.imgLowerDown}
                    alt="img1.1"
                    onMouseOver={() => setHoverImgLower(true)}
                    onMouseLeave={() => setHoverImgLower(true)}
                  />}
                {hoverImgLower === true ?
                  <img 
                    src='./Assets/services-section3.png' 
                    className={classes.imgTopDown}
                    alt="img1.2"
                    onMouseOver={() => setHoverImgLower(false)}
                    onMouseLeave={() => setHoverImgLower(false)}
                  />:
                  <img 
                    src='./Assets/services-section3.png' 
                    className={classes.imgTop}
                    alt="img1.2"
                    onMouseOver={() => setHoverImgLower(false)}
                    onMouseLeave={() => setHoverImgLower(false)}
                  />
                }
              </Grid>
              <Grid item xl={6} lg={6} md={12} xs={12} sm={12} className={classes.itemGridTxt1}>
                <h2 className={classes.headingRight}>Household & <span style={{color:'#FFC700'}}>Office Movers</span></h2>
                <p className={classes.textRight}>Adalah salah satu layanan GLEDEX yang melayani Pindahan Kantor / Rumah anda, anda dapat menghubungi kami, dan kami akan membantu anda dalam memindahkan barang-barang anda ke lokasi yang baru, dengan keamanan dan kenyamanan yang kami utamakan.</p>
                <p className={classes.textRight}>GLEDEX melayani seluruh jasa pindahan rumah, kost, apartement, perkantoran, gudang, dan lain-lain. Layanan yang kami berikan meliputi: survey gratis, pencatatan, pengepakan, pemuatan, pengiriman, pembongkaran, dan penataan kembali.</p>
                <p className={classes.textRight}>Dengan menggunakan layanan GLEDEX, anda tidak perlu lagi direpotkan oleh proses pemindahan barang yang dapat mengurus waktu, dan tenaga yang harus anda keluarkan dalam prosesnya.</p>
              </Grid>
          </Grid>
          {/* <Grid container className={classes.whiteGrid}>
              <Grid item xl={6} lg={12} md={12} xs={12} sm={12} className={classes.itemGridTxt3}>
                <p className={classes.textRight}>Dengan menggunakan layanan GLEDEX, anda tidak perlu lagi direpotkan oleh proses pemindahan barang yang dapat mengurus waktu, dan tenaga yang harus anda keluarkan dalam prosesnya. Dalam proses pemindahan barang, dibutuhkan banyak sekali energi, mulai dari sortir barang yang akan dipindahkan, packing barang, pemberian tanda pada packing, pengangkutan barang, hingga ke proses pemasangan kembali barang-barang yang dipindahkan serta penataan letak barang sesuai yang diinginkan oleh anda.</p>
              </Grid>
          </Grid> */}
          <Grid container className={classes.whiteGridBot}>
             <Grid item xl={12} lg={12} md={12} xs={12} sm={12} className={classes.itemGridTxt2}>
                    <p className={classes.textRight}>Dalam proses pemindahan barang, dibutuhkan banyak sekali energi, mulai dari sortir barang yang akan dipindahkan, packing barang, pemberian tanda pada packing, pengangkutan barang, hingga ke proses pemasangan kembali barang-barang yang dipindahkan serta penataan letak barang sesuai yang diinginkan oleh anda.</p>
                    <p className={classes.textRight}>Didukung oleh tenaga kerja yang profesional dan berpengalaman di bidang pindahan serta peralatan kerja yang berstandar, kami berkomitmen untuk menjadi solusi terbaik bagi kebutuhan pindahan anda. GLEDEX membuat proses pindahan menjadi simple dan gak pake repot.</p>
                    <p className={classes.textRight}>Bagi sebuah perusahaan, akan sangat merepotkan apabila proses pemindahan barang harus dilakukan menggunakan tenaga kerja yang ada di perusahaan, karena selain akan bisa mengganggu pekerjaan karyawan, hal ini juga dapat berakibat mengganggu kenyamanan kerja karyawan pada saat jam kerja. Oleh karena hal itu GLEDEX hadir disini untuk menawarkan jasa kepada anda yang membutuhkan layanan kami.</p>
                    <p className={classes.textRight}>Untuk menapatkan pelayanan terbaik kami, akan sangat kami hargai apabila Bapak/Ibu/Saudara/i memperkenankan kami untuk melakukan survey barang yang akan dipindahkan ke lokasi anda.</p>
                    <p className={classes.textRight}>Pindahan terdengar sederhana, namun sebenarnya pindahan merupakan pekerjaan yang merepotkan. Itu sebabnya pindahan bagi kebanyakan orang dianggap sebagai pekerjaan yang memusingkan, GLEDEX siap membantu.</p>
              </Grid>
          </Grid>
        </Grid>
      </div>
    );

}