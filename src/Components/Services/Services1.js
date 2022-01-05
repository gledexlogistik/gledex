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
        left: '280px', 
        zIndex: '1',
        animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
        animationIterationCount: 'infinite',
        width: '586px',
        height: '390px',
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
        left: '360px', 
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
            marginLeft: '100px',
            paddingRight:'50px'
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
        marginLeft: '100px', 
        fontSize: '30px'
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

export default function Services1(){
    const classes = useStyles();

    function Item(props)
    {
        return (
            <Paper style={{backgroundColor: '#006936', borderStyle: 'solid', borderColor: 'white', marginLeft:'20px'}}>
                <h2 style={{color:'white', textAlign:'center', fontSize:'44px'}}>{props.item.name}</h2>
                <p style={{color:'white', textAlign:'center', fontSize:'32px'}}>{props.item.description}</p>
                <p style={{color:'white', marginLeft:'800px', fontSize:'26px'}}>{props.item.bywho}</p>

                {/* <Button className="CheckButton">
                    <p style={{color:'white'}}>Check it out!</p>
                </Button> */}
            </Paper>
        )
    }

    return(
    <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <img src='./Assets/services-maps.png' className={classes.headImgGrid}/>
          </Grid>
          <Grid container spacing={0} className={classes.greyGrid}>
            <Grid item xs={12} sm={6}>
              <img src='./Assets/services-section1.png' className={classes.imgTop}/>
              <img src='./Assets/services-section1_2.png' className={classes.imgLower}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <h2 className={classes.headingRight}>We Deliver Perfection</h2> */}
              <h2 className={classes.headingRight}>JasKu<span style={{color:'#FFC700'}}>DO</span></h2>
              <h1 className={classes.headingDescrRight}>Jasa Kurir Domestik</h1>
              <p className={classes.textRightJasku}>Jasa Kurir Domestik dalam negeri yang dapat diandalkan, GLEDEX menjamin kecepatan pengantaran ke seluruh wilayah di Indonesia. Beroperasi 24 jam sehari, 7 hari seminggu, GLEDEX menawarkan waktu penjemputan dan transit yang cepat dan fleksibel kepada pelanggan.</p>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.whiteGrid} style={{marginBottom:'150px'}}>
            <Box clone order={{ xs: 2, sm: 1 }}>
              <Grid item xs={12} sm={6}>
                {/* <h2 className={classes.headingLeft}>We Deliver Perfection</h2> */}
                <h2 className={classes.jakaDaluHeading}>JaKa <span style={{color:'#FFC700'}}>DaLu</span></h2>
                <h1 className={classes.headingLeftDescr}>Jasa Kargo Darat, Laut, dan Udara</h1>
                <p className={classes.textLeft}>Kecepatan dan keamanan serta keakuratan kegiatan pengiriman adalah jaminan GLEDEX kepada pelanggan untuk keperluan Jasa Kargo Darat, Laut dan Udara. Dengan jaringan luas dan strategis diberbagai kota, GLEDEX memiliki sumber daya dan kemampuan menangani pengiriman cargo laut dan udara kemana saja setiap saat. Adapun jenis pengiriman dibedakan dalam 3 (tiga) kategori yaitu pada hari yang sama (sameday), sampai keesokan harinya (next day) dan diatas 2 (dua) hari.</p>
              </Grid>
            </Box>
            <Box clone order={{ xs: 3, sm: 3 }}>
              <Grid item xs={12} style={{marginTop:'-300px'}}>
                <Jakadalu/>
              </Grid>
            </Box>
            <Box clone order={{ xs: 1, sm: 2 }} style={{marginTop:'100px'}}>
              <Grid item xs={12} sm={6}>
                <img src='./Assets/services-section2.png' className={classes.imgTopS_2}/>
                <img src='./Assets/services-section2_1.png' className={classes.imgLowerS_2}/>
              </Grid>
            </Box>
          </Grid>
          <Grid container spacing={0} className={classes.greyGrid}>
            <Grid item xs={12} sm={6}>
                <img src='./Assets/services-section3.png' className={classes.serBot}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <h2 className={classes.headingLeft}>We Deliver Perfection</h2> */}
              <h2 className={classes.headingHouseHold}>Household & <span style={{color:'#FFC700'}}>Office Movers</span></h2>
              <p className={classes.textRight}>When your items is in our hands, we guarantee safety and on time. Everything will be secured and delivered with no flaw.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus eleifend sapien, sed consequat velit gravida ut. Nullam eros augue, commodo a metus eget, lacinia feugiat dui.</p>
            </Grid>
            <Grid item xs={12} style={{marginTop:'50px'}}>
              <Household/>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.serBotGrid}>
            <Box clone order={{ xs: 2, sm: 1 }}>
              <Grid item xs={12} sm={6}>
                {/* <h2 className={classes.headingLeft}>We Deliver Perfection</h2> */}
                <h2 className={classes.headingLeft}>Warehouse & <span style={{color:'#FFC700'}}>Distribution</span></h2>
                <p className={classes.textLeft}>Sistem kami menyediakan pergudangan dan distribusi pusat untuk perusahaan dengan kebutuhan untuk kinerja tinggi, namun infrastruktur yang fleksibel. Melalui kemampuan logistik bersama kami, pelanggan kami mendapatkan keuntungan dari layanan yang customized.</p>
              </Grid>
            </Box>
            <Box clone order={{ xs: 3, sm: 3 }}>
              <Grid item xs={12}>
                <Warehouse/>
              </Grid>
            </Box>
            <Box clone order={{ xs: 1, sm: 2 }}>
              <Grid item xs={12} sm={6}>
                <img src='./Assets/services-bot.png' className={classes.imgBot}/>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </div>
    );

}