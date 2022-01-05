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
// import '../../HomeTest.css'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 0,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    jaskuContent: {
      [theme.breakpoints.between('xs','sm')]: {
        marginTop:'-60px'
      },
      [theme.breakpoints.between('sm','md')]: {
      },
      [theme.breakpoints.up('lg')]: {
        marginTop:'-240px'
      },
      [theme.breakpoints.up('xl')]: {

      },
    },
    bottomCarCargo: {
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
          top: '75px', 
          left: '0px', 
          zIndex: '1',
          animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
          animationIterationCount: 'infinite',
          width: '586px',
          height: '390px',
        },
        [theme.breakpoints.up('xl')]: {
          position: 'relative', 
          top: '75px', 
          left: '350px', 
          zIndex: '1',
          animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
          animationIterationCount: 'infinite',
          width: '586px',
          height: '390px',
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
        // height:'680px',
        width:'100%'
      },
    },
    serBotGrid: {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: '#FFFFFF',
        width: '100%',
      },
      [theme.breakpoints.up('md')]: {
        backgroundColor: '#FFFFFF',
      },
      [theme.breakpoints.up('lg')]: {
        backgroundColor: '#FFFFFF',
        // height:'680px',
        width:'100%'
      },
    },
    whiteGrid:{
      [theme.breakpoints.down('sm')]: {
        backgroundColor: '#FFFFFF',
        width: '100%'
      },
      [theme.breakpoints.up('md')]: {
        backgroundColor: '#FFFFFF',
      },
      [theme.breakpoints.up('lg')]: {
        backgroundColor: '#FFFFFF',
        // height:'450px', 
        width:'100%'
      },
    },
    imgTopS_2: {
      [theme.breakpoints.between('xs','sm')]: {
        position: 'relative', 
        top: '60px', 
        left: '25px', 
        zIndex: '1',
        animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: 'infinite',
        width: '343px',
        height: '245px',
      },
      [theme.breakpoints.between('sm','md')]: {
        backgroundColor: '#FFFFFF',
      },
      [theme.breakpoints.up('lg')]: {
        position: 'relative', 
        top: '75px', 
        left: '0px', 
        zIndex: '1',
        animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: 'infinite',
        width: '586px',
        height: '390px',
      },
      [theme.breakpoints.up('xl')]: {
        position: 'relative', 
        top: '75px', 
        left: '180px', 
        zIndex: '1',
        animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: 'infinite',
        width: '771px',
        height: '500px',
      },
    },
    bottomCarCargo: {
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
        top: '75px', 
        left: '0px', 
        zIndex: '1',
        animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: 'infinite',
        width: '586px',
        height: '390px',
      },
      [theme.breakpoints.up('xl')]: {
        position: 'relative', 
        top: '75px', 
        left: '350px', 
        zIndex: '1',
        animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: 'infinite',
        width: '586px',
        height: '390px',
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
        left: '88px', 
        top: '-255px',
        display: 'wrap',
        '&:hover': {
          // opacity: '0.4',
          zIndex: '2',
          transition: 'zIndex 0.4s'
        },
        animation: `$zEffectLow 10s alternate ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: 'infinite',
        width: '586px',
        height: '390px',
      },
      [theme.breakpoints.up('xl')]: {
        position: 'relative',
        left: '80px', 
        top: '-350px',
        display: 'wrap',
        '&:hover': {
          // opacity: '0.4',
          zIndex: '2',
          transition: 'zIndex 0.4s'
        },
        animation: `$zEffectLow 10s alternate ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: 'infinite',
        width: '771px',
        height: '500px',
      },
    },
    imgTopS_3: {
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
        top: '75px', 
        left: '0px', 
        zIndex: '1',
        animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: 'infinite',
        width: '586px',
        height: '390px',
      },
    },
    imgLowerS_3: {
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
        left: '88px', 
        top: '-255px',
        display: 'wrap',
        '&:hover': {
          // opacity: '0.4',
          zIndex: '2',
          transition: 'zIndex 0.4s'
        },
        animation: `$zEffectLow 10s alternate ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: 'infinite',
        width: '586px',
        height: '390px',
      },
    },
    headerText: {
      [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      },
      [theme.breakpoints.up('md')]: {
      },
      [theme.breakpoints.up('lg')]: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        textAlign: 'center',
        fontSize: '50px',
        color: 'white'
      },
      [theme.breakpoints.up('xl')]: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      },
    },
    btn: {
      [theme.breakpoints.down('sm')]: {
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
      [theme.breakpoints.up('md')]: {
      },
      [theme.breakpoints.up('lg')]: {
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
      [theme.breakpoints.up('xl')]: {
        position: 'absolute',
        width: '335px',
        height: '60px',
        borderRadius: '50px',
        top: '700px',
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

    },
    textRight: {
      [theme.breakpoints.between('xs','sm')]: {
        textAlign: 'left',
        fontFamily: 'arial',
        fontWeight:'400', 
        fontSize:'30px', 
        // lineHeight:'35.16px',
        marginLeft: '25px',
      },
      [theme.breakpoints.between('sm','md')]: {
        textAlign: 'left',
        fontFamily: 'arial',
        fontWeight:'400', 
        fontSize:'13px', 
        // lineHeight:'35.16px',
        marginLeft: '25px',
      },
      [theme.breakpoints.up('lg')]: {
        textAlign: 'left',
        fontFamily: 'arial',
        fontWeight:'400', 
        fontSize:'19px', 
        lineHeight:'35.16px',
        // marginLeft: '-50px',
        paddingRight:'50px'
      },
      [theme.breakpoints.up('xl')]: {
        textAlign: 'left',
        fontFamily: 'arial',
        fontWeight:'400', 
        fontSize:'30px', 
        lineHeight:'35.16px',
        marginLeft: '-50px',
        paddingRight:'50px'
      },
    },
    textRightJasku: {
      [theme.breakpoints.between('xs','sm')]: {
        textAlign: 'left',
        fontFamily: 'arial',
        fontWeight:'400', 
        fontSize:'30px', 
        // lineHeight:'35.16px',
        marginLeft: '25px',
      },
      [theme.breakpoints.up('sm','md')]: {
        textAlign: 'left',
        fontFamily: 'arial',
        // fontWeight:'400', 
        fontSize:'13px', 
        // lineHeight:'35.16px',
        marginLeft: '25px',
        paddingRight:'30px'
      },
      [theme.breakpoints.up('lg')]: {
        textAlign: 'left',
        fontFamily: 'arial',
        fontWeight:'400', 
        fontSize:'19px', 
        lineHeight:'35.16px',
        marginLeft: '0px',
        paddingRight:'50px'
      },
      [theme.breakpoints.up('xl')]: {
        textAlign: 'left',
        fontFamily: 'arial',
        fontWeight:'400', 
        fontSize:'30px', 
        lineHeight:'35.16px',
        marginLeft: '-50px',
        paddingRight:'50px'
      },
    },
    textLeft: {
        [theme.breakpoints.between('xs','sm')]: {
            textAlign: 'left',
            fontFamily: 'arial',
            fontWeight:'400', 
            fontSize:'30px', 
            // lineHeight:'35.16px',
            marginLeft: '25px',
        },
        [theme.breakpoints.between('sm','md')]: {
          textAlign: 'left',
          fontFamily: 'arial',
          fontWeight:'400', 
          fontSize:'13px', 
          // lineHeight:'35.16px',
          marginLeft: '25px',
        },
        [theme.breakpoints.up('lg')]: {
            textAlign: 'justify',
            fontFamily: 'arial',
            fontWeight:'400', 
            fontSize:'19px', 
            lineHeight:'35.16px',
            marginLeft: '55px',
            paddingRight:'20px'
        },
        [theme.breakpoints.up('xl')]: {
            textAlign: 'left',
            fontFamily: 'arial',
            fontWeight:'400', 
            fontSize:'30px', 
            lineHeight:'35.16px',
            marginLeft: '200px',
            // paddingRight:'50px'
        },
    },
    topHeadingGrey:{
      marginTop:'-12px',
      backgroundColor:'#F3F5F4',
    },
    topHeading: {
      textAlign: 'left',
      marginLeft: '50px',
      color: '#006936',
      fontSize: '50px'
    },
    // imgTopS_2: {
    //     [theme.breakpoints.down('sm')]: {
    //         position: 'relative', 
    //         top: '60px', 
    //         left: '25px', 
    //         zIndex: '1',
    //         animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
    //         animationIterationCount: 'infinite',
    //         width: '343px',
    //         height: '245px',
    //     },
    //     [theme.breakpoints.up('md')]: {
    //         backgroundColor: '#FFFFFF',
    //     },
    //     [theme.breakpoints.up('lg')]: {
    //         position: 'relative', 
    //         top: '30px', 
    //         left: '12px', 
    //         zIndex: '1',
    //         animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
    //         animationIterationCount: 'infinite',
    //         width: '545.23px',
    //         height: '372.15px'
    //     },
    //     [theme.breakpoints.up('xl')]: {
    //         position: 'relative', 
    //         top: '30px', 
    //         left: '12px', 
    //         zIndex: '1',
    //         animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
    //         animationIterationCount: 'infinite',
    //         width: '601px',
    //         height: '395px',
    //     },
    // },
    // imgLowerS_2: {
    //     [theme.breakpoints.down('sm')]: {
    //         position: 'relative',
    //         left: '38px', 
    //         top: '-215px',
    //         display: 'wrap',
    //         '&:hover': {
    //         // opacity: '0.4',
    //         zIndex: '2',
    //         transition: 'zIndex 0.4s'
    //         },
    //         animation: `$zEffectLow 10s alternate ${theme.transitions.easing.easeInOut}`,
    //         animationIterationCount: 'infinite',
    //         width: '343px',
    //         height: '245px'
    //     },
    //     [theme.breakpoints.up('md')]: {
    //         backgroundColor: '#FFFFFF',
    //     },
    //     [theme.breakpoints.up('lg')]: {
    //         position: 'relative',
    //         left: '80px', 
    //         top: '-300px',
    //         display: 'wrap',
    //         '&:hover': {
    //         // opacity: '0.4',
    //         zIndex: '2',
    //         transition: 'zIndex 0.4s'
    //         },
    //         animation: `$zEffectLow 10s alternate ${theme.transitions.easing.easeInOut}`,
    //         animationIterationCount: 'infinite',
    //         width: '543.31px',
    //         height: '372.15px',
    //     },
    //     [theme.breakpoints.up('xl')]: {
    //         position: 'relative',
    //         left: '80px', 
    //         top: '-300px',
    //         display: 'wrap',
    //         '&:hover': {
    //         // opacity: '0.4',
    //         zIndex: '2',
    //         transition: 'zIndex 0.4s'
    //         },
    //         animation: `$zEffectLow 10s alternate ${theme.transitions.easing.easeInOut}`,
    //         animationIterationCount: 'infinite',
    //         width: '587px',
    //         height: '387px',
    //     },
    // },    
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
    jakaDaluHeading: {
        [theme.breakpoints.between('xs','sm')]: {
          marginLeft: '25px',
          color: '#006936',
          marginTop:'-100px',
          fontSize: '30px'
        },
        [theme.breakpoints.between('sm','md')]: {
          marginLeft: '25px',
          color: '#006936',
          marginTop:'50px',
          fontSize: '30px'
        },
        [theme.breakpoints.up('lg')]: {
          marginLeft: '25px',
          color: '#006936',
          fontSize: '55px',
          marginLeft: '55px'
        },
        [theme.breakpoints.up('xl')]: {
          marginLeft: '200px',
          color: '#006936',
          fontSize: '55px',
          marginTop: '180px',
          fontFamily:'arial'
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
          paddingRight: '20px'
        },
    },
    headImgGrid: {
        [theme.breakpoints.down('xs')]: {
          width:'100%',
        },
        [theme.breakpoints.down('sm')]: {
          width:'100%',
          marginTop: '100px'
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
    serBot: {
      [theme.breakpoints.between('xs','sm')]: {
        marginTop: '-125px',
        width: '343px',
        height: '245px',
        marginLeft: '15px'
      },
      [theme.breakpoints.between('sm','md')]: {
      },
      [theme.breakpoints.up('lg')]: {
        position: 'relative',
        top: '125px',
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
        top: '125px', 
        left: '95px', 
        width: '536.44px',
        height: '372px',
      },
    },
    heading: {
        color: '#006936',
        fontFamily: 'arial',
        fontSize: '36px',
        marginTop: '75px',
    },
    headingDescrRight: {
      [theme.breakpoints.between('xs','sm')]: {
        marginLeft:'25px', 
        color: '#006936',
        marginTop: '-25px',
        fontSize:'30px'
      },
      [theme.breakpoints.between('sm','md')]: {
      },
      [theme.breakpoints.up('lg')]: {
        marginTop:'-35px', 
        color: '#006936'
      },
    },
    headingRight: {
      [theme.breakpoints.between('xs','sm')]: {
        fontSize: '30px',
        marginLeft: '25px',
        fontFamily: 'arial',
        color: '#006936',
        marginTop: '-120px'
      },
      [theme.breakpoints.between('sm','md')]: {
        fontSize: '28px',
        marginLeft: '25px',
        fontFamily: 'arial',
        color: '#006936',
        marginTop: '50px'
      },
      [theme.breakpoints.up('lg')]: {
        color: '#006936',
        fontFamily: 'arial',
        fontSize: '36px',
        marginTop: '125px',
        // marginLeft: '-50px'
      },
      [theme.breakpoints.up('xl')]: {
        color: '#006936',
        fontFamily: 'arial',
        fontSize: '36px',
        marginTop: '125px',
        marginLeft: '-50px'
      },
    },
    headingHouseHold: {
      [theme.breakpoints.between('xs','sm')]: {
        fontSize: '28px',
        marginLeft: '25px',
        fontFamily: 'arial',
        color: '#006936',
        marginTop: '50px'
      },
      [theme.breakpoints.between('sm','md')]: {
        fontSize: '28px',
        marginLeft: '25px',
        fontFamily: 'arial',
        color: '#006936',
        marginTop: '-120px'
      },
      [theme.breakpoints.up('lg')]: {
        color: '#006936',
        fontFamily: 'arial',
        fontSize: '36px',
        marginTop: '125px',
        // marginLeft: '-50px'
      },
      [theme.breakpoints.up('xl')]: {
        color: '#006936',
        fontFamily: 'arial',
        fontSize: '36px',
        marginTop: '125px',
        marginLeft: '-50px'
      },
    },
    headingLeftDescr: {
      [theme.breakpoints.between('xs','sm')]: {
        marginTop:'-25px', 
        color: '#006936', 
        marginLeft: '25px', 
        fontSize: '30px'
      },
      [theme.breakpoints.between('sm','md')]: {
        marginTop:'-35px', 
        color: '#006936', 
        marginLeft: '25px', 
        fontSize: '30px'
      },
      [theme.breakpoints.up('lg')]: {
        marginTop:'-35px', 
        color: '#006936', 
        marginLeft: '55px', 
        fontSize: '30px'
      },
      [theme.breakpoints.up('xl')]: {
        marginTop:'-35px', 
        color: '#006936', 
        marginLeft: '200px', 
        fontSize: '30px',
        fontFamily: 'arial'
      },
    },
    headingLeft: {
      [theme.breakpoints.between('xs','sm')]: {
        fontSize: '30px',
        marginLeft: '25px',
        fontFamily: 'arial',
        color: '#006936',
        marginTop: '50px',
      },
      [theme.breakpoints.between('sm','md')]: {
      },
      [theme.breakpoints.up('lg')]: {
        color: '#006936',
        fontFamily: 'arial',
        fontSize: '36px',
        marginTop: '125px',
        marginLeft: '55px'
      },
    },
    serviceImgs: {
      width: '176.78',
      height: '120.96px',
      marginBottom: '30px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    serviceHead: {
      textAlign: 'center'
    },
    freightHead: {
      textAlign: 'center',
      color: '#006936'
    },
    freightText: {
      [theme.breakpoints.down('sm')]: {

      },
      [theme.breakpoints.up('md')]: {
      },
      [theme.breakpoints.up('lg')]: {
        textAlign: 'center',
        paddingLeft: '120px',
        paddingRight: '120px'
      },
      [theme.breakpoints.up('xl')]: {
        textAlign: 'center',
        paddingLeft: '200px',
        paddingRight: '200px'
      },
    },
    btnLower: {
      height: '35.76px',
      width: '152px',
      top: '836px',
      borderRadius: '15px',
      backgroundColor: '#006936',
      color: 'white',
      fontSize: '15px',
      fontFamily: 'arial',
      fontWeight:'400',
      textAlign: 'center',
      lineHeight:'17.58px',
      padding: '12px 24px',
      border: 'none',
      marginBottom: '100px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto'
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

export default function Land(){
    const classes = useStyles();

    return(
    <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid container spacing={0} className={classes.whiteGrid} style={{marginBottom:'150px'}}>
            <Box clone order={{ xs: 2, sm: 1 }}>
              <Grid item xs={12} sm={6}>
                {/* <h2 className={classes.headingLeft}>We Deliver Perfection</h2> */}
                <h2 className={classes.jakaDaluHeading}>Land <span style={{color:'#FFC700'}}>Freight Services</span></h2>
                <h1 className={classes.headingLeftDescr}>Services / Trucking Express (TRX)</h1>
                <p className={classes.textLeft}>Kami menyediakan jasa transportasi darat menggunakan mini box, truk box, dan trailer. Pengiriman dibagi menjadi dua bentuk yaitu layanan ritel dengan berat minimum dan charter kendaraan penuh.</p>
                <p className={classes.textLeft}>GLEDEX menyediakan jalur darat untuk ekspedisi alat elektronik, ekspedisi pakaian, ekspedisi bahan material, hingga ekspedisi alat berat dengan harga yang kompetitif dan waktu yang sesuai dengan jadwal.</p>
              </Grid>
            </Box>
            <Box clone order={{ xs: 1, sm: 2 }} style={{marginTop:'100px'}}>
              <Grid item xs={12} sm={6}>
                <img src='./Assets/services-section2.png' className={classes.imgTopS_2}/>
                <img src='./Assets/services-section2_1.png' className={classes.imgLowerS_2}/>
              </Grid>
            </Box>
            <Box clone order={{ xs: 3, sm: 3 }} style={{marginTop:'-225px'}}>
              <Grid item xs={12}>
                <p className={classes.textLeft}>Armada kami mempunyai jadwal teratur dan rutin antar pulau Jawa, dan juga menyediakan layanan diluar jadwal rutin kami untuk kebutuhan khusus pengiriman anda. Rute yang kami layani adalah seluruh pulau Indonesia.</p>
                <p className={classes.textLeft}>Pengiriman barang dengan menggunakan jalur darat biasanya dengan jumlah barang yang tidak sedikit. Oleh karena itu, menggunakan cargo via darat adalah solusi tepat untuk anda sebagai pelaku bisnis yang ingin melakukan pengiriman barang dalam jumlah banyak dan besar ke berbagai pulau di Indonesia.</p>
                <p className={classes.textLeft}>Dengan menggunakan jalur darat, anda mendapatkan beberapa keuntungan, kemudahan dan tepat waktu.</p>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </div>
    );

}