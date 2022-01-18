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
        fontFamily:'arial',
        fontWeight:'400', 
        fontSize:'14px', 
        lineHeight:'27px',
        paddingRight:'4.8%'
      },
      [theme.breakpoints.between('sm','md')]: {
        fontFamily:'arial',
        fontWeight:'400', 
        fontSize:'14px', 
        lineHeight:'27px',
        paddingRight:'10%'
      },
      fontFamily:'arial',
      fontWeight:'400', 
      fontSize:'18px', 
      lineHeight:'27px',
      paddingRight:'10%'
    },
    headingRightDescr:{
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
      [theme.breakpoints.between('xs','sm')]: {
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
          height:'26vh',
          width:'100%',
          // border:'1px solid grey',
      },
      [theme.breakpoints.between('sm', 'md')]: {
          position:'relative',
          boxSizing:'border-box',
          flexBasis:'auto',
          flexWrap:'1',
          display:'block',
          height:'50vh',
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
          height:'70vh',
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
      [theme.breakpoints.up('lg')]: {
        display:'flex',
        flexDirection:'row-reverse',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginLeft:'9%',
        marginRight:'9%',
        width:'100%',
        paddingTop:'9vh',
        paddingBottom:'16vh',
        // alignItems:'center'
      }
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
        fontSize: '26px',
        display:'block',
        marginBlockEnd: '1.5em',
        marginBlockStart: '-0.5em',
        marginInlineStart:'0px',
        marginInlineEnd:'0px'
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

export default function Land1(){
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
                  src='./Assets/services-sectionv2.jpg' 
                  className={classes.imgTopDown}
                  alt="img1.2"
                  onMouseOver={() => setHoverImgLower(false)}
                  onMouseLeave={() => setHoverImgLower(false)}
                />:
                <img 
                  src='./Assets/services-sectionv2.jpg' 
                  className={classes.imgTop}
                  alt="img1.2"
                  onMouseOver={() => setHoverImgLower(false)}
                  onMouseLeave={() => setHoverImgLower(false)}
                />}
            </Grid>
            <Grid item xl={6} lg={6} md={12} xs={12} sm={12} className={classes.itemGridTxt1}>
              <h2 className={classes.headingRight}>Land <span style={{color:'#FFC700'}}> Freight Services</span></h2>
              <h1 className={classes.headingRightDescr}>Land Freight Services / Trucking Express (TRX)</h1>
              <p className={classes.textRight}>Kami menyediakan jasa transportasi darat menggunakan mini box, truk box, dan trailer. Pengiriman dibagi menjadi dua bentuk yaitu layanan ritel dengan berat minimum dan charter kendaraan penuh.<br/><br/>
GLEDEX menyediakan jalur darat untuk ekspedisi alat elektronik, ekspedisi pakaian, ekspedisi bahan material, hingga ekspedisi alat berat dengan harga yang kompetitif dan waktu yang sesuai dengan jadwal.<br/><br/>
Armada kami mempunyai jadwal teratur dan rutin antar pulau Jawa, dan juga menyediakan layanan diluar jadwal rutin kami untuk kebutuhan khusus pengiriman anda. Rute yang kami layani adalah seluruh pulau Indonesia.<br/><br/>
Pengiriman barang dengan menggunakan jalur darat biasanya dengan jumlah barang yang tidak sedikit. Oleh karena itu, menggunakan cargo via darat adalah solusi tepat untuk anda sebagai pelaku bisnis yang ingin melakukan pengiriman barang dalam jumlah banyak dan besar ke berbagai pulau di Indonesia.</p>
              <p className={classes.textRight}>Dengan menggunakan jalur darat, anda mendapatkan beberapa keuntungan, kemudahan dan tepat waktu.</p>
            </Grid>
            {/* <Grid item xl={12} lg={12} md={12} xs={12} sm={12} className={classes.itemGridTxt2}>
                <p className={classes.textRight}>Dengan menggunakan jalur darat, anda mendapatkan beberapa keuntungan, kemudahan dan tepat waktu.</p>
                <p className={classes.textRight}>Integrated Pergudangan & Sistem Distribusi</p>
                <p className={classes.textRight}>Area Distribusi luas</p>
                <p className={classes.textRight}>Dengan mengutamakan pelayanan yang maksimal, sistem pengamanan yang terpadu selama 24 jam dan memiliki akses yang mudah untuk melakukan bongkar muat beras ataupun komoditi lainnya untuk memenuhi kebutuhan penyimpanan barang bisnis perusahaan anda, sehingga memudahkan proses distribusi dan kelancaran bisnis perusahaan, diperlukan sarana penyimpanan barang yang dapat di andalkan dan berfungsi secara maksimal.</p>
                <p className={classes.textRight}>Didukung oleh fasilitas berbasis aset yang tersebar di kota besar Indonesia, kami dapat mengefisiensikan biaya distribusi dan melakukan pelayanan kepada pelanggan dengan baik. Lebih lanjut tentang jaringan pergudangan nasional.</p>
                <p className={classes.textRight}>Peran penting dari pergudangan dirasa semakin penting oleh para pelaku usaha di Indonesia, khususnya untuk melayani bisnis dalam negeri dan juga untuk membantu proses ekspor-impor yang dilakukan oleh perusahaan.</p>
            </Grid> */}
          </Grid>
      </Grid>
      </div>
    );

}