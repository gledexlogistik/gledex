import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 0,
    },
    whiteGrid: {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: '#FFFFFF',
        width: '100%'
      },
      [theme.breakpoints.up('md')]: {
        backgroundColor: '#FFFFFF',
      },
      [theme.breakpoints.up('lg')]: {
        backgroundColor: '#FFFFFF',
        height:'450px', 
        width:'1285px'
      },
    },
    jakaDaluGrid: {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: '#FFFFFF',
        width: '100%'
      },
      [theme.breakpoints.up('md')]: {
        backgroundColor: '#FFFFFF',
      },
      [theme.breakpoints.up('lg')]: {
        backgroundColor: '#FFFFFF', 
        width:'100%'
      },
    },
    headingWhiteGrid: {
      [theme.breakpoints.down('sm')]: {
        marginLeft: '15px',
        color: '#006936'
      },
      [theme.breakpoints.up('md')]: {
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: '25px',
        color: '#006936',
        fontSize: '55px',
        marginLeft: '150px'
      },
    },
    warehouseHeading: {
      [theme.breakpoints.down('sm')]: {
        marginLeft: '15px',
        color: '#006936'
      },
      [theme.breakpoints.up('md')]: {
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: '25px',
        color: '#006936',
        fontSize: '36px',
        marginLeft: '150px'
      },
    },
    jakaDaluHeading: {
      [theme.breakpoints.down('sm')]: {
        marginLeft: '15px',
        color: '#006936'
      },
      [theme.breakpoints.up('md')]: {
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: '25px',
        color: '#006936',
        fontSize: '55px',
        marginLeft: '150px'
      },
    },
    greyGrid: {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: '#F3F5F4',
        width: '100%',
      },
      [theme.breakpoints.up('md')]: {
        backgroundColor: '#F3F5F4',
      },
      [theme.breakpoints.up('lg')]: {
        backgroundColor: '#F3F5F4',
        width:'100%',
        height: 'auto'
      },
    },
    jaskudoGrid: {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: '#F3F5F4',
        width: '100%',
      },
      [theme.breakpoints.up('md')]: {
        backgroundColor: '#F3F5F4',
      },
      [theme.breakpoints.up('lg')]: {
        backgroundColor: '#F3F5F4',
        width:'100%',
        height:'100%'
      },
      [theme.breakpoints.up('xl')]: {
        backgroundColor: '#F3F5F4',
        width:'100%',
      },
    },
    textWhiteGrid: {
      [theme.breakpoints.down('sm')]: {
        marginLeft:'15px'
      },
      [theme.breakpoints.up('md')]: {
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft:'150px'
      },
    },
    textJakadaluGrid: {
      [theme.breakpoints.down('sm')]: {
        marginLeft:'15px'
      },
      [theme.breakpoints.up('md')]: {
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft:'150px',
        paddingRight: '50px'
      },
    },
    textGreyGrid: {
      [theme.breakpoints.down('sm')]: {
        marginLeft:'15px',
      },
      [theme.breakpoints.up('md')]: {
      },
      [theme.breakpoints.up('lg')]: {
        fontFamily: 'arial',
        weight: '400',
        style: 'normal',
        fontSize: '25px',
        lineHeight:'29.3px',
      },
    },
    headImgGrid: {
      [theme.breakpoints.down('xs')]: {
        width:'100%',
      },
      [theme.breakpoints.down('sm')]: {
        width:'100%'
      },
      [theme.breakpoints.up('md')]: {
        width:'960px'
      },
      [theme.breakpoints.up('lg')]: {
        marginTop:'100px', 
        width:'100%'
      },
      [theme.breakpoints.up('xl')]: {
        marginTop:'100px', 
        width:'100%'
      },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    headerText: {
        position: 'absolute',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center',
        paddingLeft: '100px',
        paddingRight: '100px',
        fontSize: '50px',
        color: 'white'
    },
    btn: {
        position: 'absolute',
        width: '335px',
        height: '60px',
        borderRadius: '50px',
        top: '563px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // -ms-transform: translate('-50%', '-50%');
        backgroundColor: '#006936',
        color: 'white',
        fontSize: '25px',
        padding: '12px 24px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        textAlign: 'center',
    },
    text: {
        textAlign: 'left',
        top: '50px'
    },
    topHeading: {
      textAlign: 'left',
      marginLeft: '50px',
      color: '#006936',
      fontSize: '25px'

    },
    heading: {
      [theme.breakpoints.down('sm')]: {
        color: '#006936',
        marginLeft: '15px',
        marginTop: '-140px'
      },
      [theme.breakpoints.up('md')]: {
        color: '#006936'
      },
      [theme.breakpoints.up('lg')]: {
        color: '#006936',
        fontSize: '55px',
        marginTop:'80px'
      },
      [theme.breakpoints.up('xl')]: {
        color: '#006936',
        fontSize: '55px',
        marginTop:'80px'
      },
    },
    headingHouseHold: {
      [theme.breakpoints.down('sm')]: {
        color: '#006936',
        marginLeft: '15px'
      },
      [theme.breakpoints.up('md')]: {
        color: '#006936'
      },
      [theme.breakpoints.up('lg')]: {
        color: '#006936'
      },
    },
    serviceImgs: {
      width: '300px',
      height: '300px',
      marginBottom: '30px'
    },
    imgLower: {
      [theme.breakpoints.down('sm')]: {
        position: 'relative',
        display: 'wrap',
        '&:hover': {
          // opacity: '0.4',
          zIndex: '2',
          transition: 'zIndex 0.4s'
        },
        animation: `$zEffectLow 10s alternate ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: 'infinite',
        width: '343px',
        top: '-250px'
      },
      [theme.breakpoints.up('md')]: {
        backgroundColor: '#FFFFFF',
      },
      [theme.breakpoints.up('lg')]: {
        position: 'relative',
        display: 'wrap',
        '&:hover': {
          // opacity: '0.4',
          zIndex: '2',
          transition: 'zIndex 0.4s'
        },
        animation: `$zEffectLow 10s alternate ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: 'infinite',
        width: '543.31px',
        height: '372.15px',
        top: '-250px'
      },
      [theme.breakpoints.up('xl')]: {
        position: 'relative',
        display: 'wrap',
        '&:hover': {
          // opacity: '0.4',
          zIndex: '2',
          transition: 'zIndex 0.4s'
        },
        animation: `$zEffectLow 10s alternate ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: 'infinite',
        width: '543.31px',
        height: '372.15px',
        top: '-250px'
      },
    },
    imgTop: {
      [theme.breakpoints.down('sm')]: {
        position: 'relative', 
        top: '60px', 
        left: '33px', 
        zIndex: '1',
        animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: 'infinite',
        width: '343px',
        height: '245px',
      },
      [theme.breakpoints.up('md')]: {
        backgroundColor: '#FFFFFF',
      },
      [theme.breakpoints.up('lg')]: {
        position: 'relative', 
        top: '100px', 
        left: '32px', 
        zIndex: '1',
        animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: 'infinite',
        width: '545.23px',
        height: '372.15px'
      },
    },
    imgTopS_2: {
      [theme.breakpoints.down('sm')]: {
        position: 'relative', 
        top: '60px', 
        left: '25px', 
        zIndex: '1',
        animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: 'infinite',
        width: '343px',
        height: '245px',
      },
      [theme.breakpoints.up('md')]: {
        backgroundColor: '#FFFFFF',
      },
      [theme.breakpoints.up('lg')]: {
        position: 'relative', 
        top: '30px', 
        left: '12px', 
        zIndex: '1',
        animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: 'infinite',
        width: '545.23px',
        height: '372.15px'
      },
      [theme.breakpoints.up('xl')]: {
        position: 'relative', 
        top: '30px', 
        left: '12px', 
        zIndex: '1',
        animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: 'infinite',
        width: '601px',
        height: '395px',
      },
    },
    imgLowerS_2: {
      [theme.breakpoints.down('sm')]: {
        position: 'relative',
        left: '38px', 
        top: '-215px',
        display: 'wrap',
        '&:hover': {
          // opacity: '0.4',
          zIndex: '2',
          transition: 'zIndex 0.4s'
        },
        animation: `$zEffectLow 10s alternate ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: 'infinite',
        width: '343px',
        height: '245px'
      },
      [theme.breakpoints.up('md')]: {
        backgroundColor: '#FFFFFF',
      },
      [theme.breakpoints.up('lg')]: {
        position: 'relative',
        left: '80px', 
        top: '-300px',
        display: 'wrap',
        '&:hover': {
          // opacity: '0.4',
          zIndex: '2',
          transition: 'zIndex 0.4s'
        },
        animation: `$zEffectLow 10s alternate ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: 'infinite',
        width: '543.31px',
        height: '372.15px',
      },
      [theme.breakpoints.up('xl')]: {
        position: 'relative',
        left: '80px', 
        top: '-300px',
        display: 'wrap',
        '&:hover': {
          // opacity: '0.4',
          zIndex: '2',
          transition: 'zIndex 0.4s'
        },
        animation: `$zEffectLow 10s alternate ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: 'infinite',
        width: '587px',
        height: '387px',
      },
    },
    serBot: {
      [theme.breakpoints.down('sm')]: {
        width: '343px',
        height: '245px',
        marginLeft: '15px'
      },
      [theme.breakpoints.up('md')]: {
      },
      [theme.breakpoints.up('lg')]: {
        position: 'relative',
        top: '25px',
        left: '55px',
        width: '535px',
      },
    },
    imgBot: {
      [theme.breakpoints.down('sm')]: {
        width: '343px',
        height: '245px',
        marginLeft: '18px'
      },
      [theme.breakpoints.up('md')]: {
      },
      [theme.breakpoints.up('lg')]: {
        position: 'relative', 
        top: '25px', 
        left: '100px', 
        width: '536.44px',
        height: '372px',
      },
    },
    readMore: {
      color: 'green',
      textDecoration: 'underline',
      letterSpacing: '1px',
      cursor: 'pointer'
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

export default function Services(){
    const classes = useStyles();
    const [readMore,setReadMore]=useState(false);
    const extraContent=
    <div>
      <p className="extra-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur nequeab 
        porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
        commodi officia aliquam! Maxime.
        asdfjjsajdfkasjkfjasdf
        asjdkfasjkdfjasdjfskadjfksajfkjasdjf
        jaskfskadfjksjdfksajdfkjasf
        asdkfjasdkfjjskadhjkdfhgjkdfhgjkhdfjghdsf'asdhjsaf
        djaskfksdgjkdfshgjkhdfjkhasfd
        dfhjkghjdfkhgjkdshgjkdsfhgfh
      </p>
    </div>
    const linkName=readMore?'Read Less << ':'Read More >> '

    return(
    <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <img src='./Assets/services-maps.png' className={classes.headImgGrid}/>
          </Grid>
          <Grid container spacing={0} className={classes.jaskudoGrid}>
            <Grid item xs={12} sm={6}>
              <img src='./Assets/services-section1.png' className={classes.imgTop}/>
              <img src='./Assets/services-section1_2.png' className={classes.imgLower}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <h2 className={classes.heading}>JasKu<span style={{color:'#FFC700'}}>DO</span></h2>
              <h1 style={{marginTop:'-35px', color: '#006936'}}>Jasa Kurir Domestik</h1>
              <p className={classes.textGreyGrid}>JasKu DO
              When your items is in our hands, we guarantee safety and on time. Everything will be secured and delivered with no flaw.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus eleifend sapien, sed consequat velit gravida ut. Nullam eros augue, commodo a metus eget, lacinia feugiat dui. 
              <a className={classes.readMore} onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
              {readMore && extraContent}
              </p>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.jakaDaluGrid}>
            <Grid item xs={12} sm={6}>
              <h2 className={classes.jakaDaluHeading}>JaKa <span style={{color:'#FFC700'}}>DaLu</span></h2>
              <h1 style={{marginTop:'-35px', color: '#006936', marginLeft: '150px', fontSize: '30px'}}>Jasa Kargo Darat, Laut, dan Udara</h1>
              <p className={classes.textJakadaluGrid} style={{fontSize:'25px', fontFamily:'roboto'}}>JaKa DaLu
              When your items is in our hands, we guarantee safety and on time. Everything will be secured and delivered with no flaw.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus eleifend sapien, sed consequat velit gravida ut. Nullam eros augue, commodo a metus eget, lacinia feugiat dui. 
              Learn more...
              </p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src='./Assets/services-section2.png' className={classes.imgTopS_2}/>
              <img src='./Assets/services-section2_1.png' className={classes.imgLowerS_2}/>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.greyGrid}>
            <Grid item xs={12} sm={6}>
              <img src='./Assets/services-section3.png' className={classes.serBot}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <h2 className={classes.headingHouseHold}>Household & <span style={{color:'#FFC700'}}>Office Movers</span></h2>
              <p className={classes.textGreyGrid} style={{fontSize:'25px', fontFamily:'roboto'}}>Moving needs a lot of efforts and hardwork to do. We’re here for you. We will do all do hardwork. All you need is just pay some money to us and told us what to do. It’s easy right? Oh, and don’t worry, it won’t be that expensive though.
              <a className={classes.readMore} onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
              {readMore && extraContent}
              </p>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.whiteGrid}>
            <Grid item xs={12} sm={6}>
              <h2 className={classes.warehouseHeading}>Warehouse & <span style={{color:'#FFC700'}}>Distribution</span></h2>
              <p  className={classes.textWhiteGrid} style={{fontSize:'25px', fontFamily:'roboto'}}>When your items is in our hands, we guarantee safety and on time. Everything will be secured and delivered with no flaw.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus eleifend sapien, sed consequat velit gravida ut. Nullam eros augue, commodo a metus eget, lacinia feugiat dui.</p>            </Grid>
            <Grid item xs={12} sm={6}>
              <img src='./Assets/services-bot.png' className={classes.imgBot}/>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
}