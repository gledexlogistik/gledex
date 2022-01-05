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
    headContainer:{
        position:'relative',
        textAlign: 'center',
        color: 'white',
    },
    headImgGrid:{
        [theme.breakpoints.between('xs','sm')]: {
            backgroundColor: '#FFFFFF',
            width: '100%'
        },
        [theme.breakpoints.between('sm','md')]: {
            backgroundColor: '#FFFFFF',
            width:'100%'
        },
        [theme.breakpoints.between('md','lg')]: {
            backgroundColor: '#FFFFFF',
            width:'100%'
        },
        [theme.breakpoints.up('lg')]: {
            marginTop:'0px', 
            width:'100%'
        },
        [theme.breakpoints.up('xl')]: {
            marginTop:'-120px', 
            width:'100%',
        },
    },
    headerImg:{
        [theme.breakpoints.between('xs','sm')]: {
            backgroundColor: '#FFFFFF',
            width: '100%'
        },
        [theme.breakpoints.between('sm','md')]: {
            backgroundColor: '#FFFFFF',
            width:'100%'
        },
        [theme.breakpoints.between('md','lg')]: {
            backgroundColor: '#FFFFFF',
            width:'100%'
        },
        [theme.breakpoints.up('lg')]: {
            marginTop:'0%',
            width:'100%',
        },
        [theme.breakpoints.up('xl')]: {
            marginTop:'70px', 
            width:'100%',
        },
    },
    btn: {
        position: 'absolute',
        width: '26.511533242876528vw',
        height: '6.070294784580499vh',
        borderRadius: '50px',
        top: '70%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // -ms-transform: translate('-50%', '-50%');
        backgroundColor: '#006936',
        color: 'white',
        fontSize: 'x-large',
        padding: '12px 24px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        textAlign: 'center',
    },
    headerText: {
        position: 'absolute',
        display:'block',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        textAlign: 'center',
        fontSize: '2.7vw',
        color: 'white',
        fontFamily:'arial'
    },
    topHeadingGrey:{
        [theme.breakpoints.between('xs','sm')]: {
            marginTop:'-12px',
            backgroundColor:'#F3F5F4',
            width:'100%'
        },
        [theme.breakpoints.between('sm','md')]: {
            marginTop:'-12px',
            backgroundColor:'#F3F5F4',
            width:'100%'
        },
        [theme.breakpoints.up('lg')]: {
            marginTop:'-12px',
            backgroundColor:'#F3F5F4',
            width:'100%'
        },
        [theme.breakpoints.up('xl')]: {
            marginTop:'-12px',
            backgroundColor:'#F3F5F4',
            width:'100%'
        },
    },
    topHeading: {
        [theme.breakpoints.between('xs','sm')]: {
            textAlign: 'left',
            marginLeft: '30px',
            color: '#006936',
            fontSize: '30px'
        },
        [theme.breakpoints.between('sm','md')]: {
            textAlign: 'left',
            marginLeft: '30px',
            color: '#006936',
            fontSize: '30px',
            fontFamily:'arial'
        },
        [theme.breakpoints.between('md','lg')]: {
            textAlign: 'left',
            marginLeft: '30px',
            color: '#006936',
            fontSize: '30px',
            fontFamily:'arial'
        },
        [theme.breakpoints.up('lg')]: {
            textAlign: 'left',
            marginLeft: '50px',
            color: '#006936',
            fontSize: '50px'
        },
        [theme.breakpoints.up('xl')]: {
            textAlign: 'left',
            marginLeft: '200px',
            color: '#006936',
            fontSize: '50px'
        },
    },
    greyGrid: {
        [theme.breakpoints.between('xs','sm')]: {
            backgroundColor: '#F3F5F4',
            width: '100%',
        },
        [theme.breakpoints.between('sm','md')]: {
            backgroundColor: '#F3F5F4',
            width:'100%',
            height:'auto',
        },
        [theme.breakpoints.between('md','lg')]: {
            backgroundColor: '#F3F5F4',
            width:'100%',
            marginBottom:'100px',
            height:'auto'
        },
        [theme.breakpoints.up('lg')]: {
            backgroundColor: '#F3F5F4',
            height:'auto',
            width:'100%'
        },
        [theme.breakpoints.up('xl')]: {
            backgroundColor: '#F3F5F4',
            height:'auto',
            width:'100%',
        },
    },
    itemGridImg3: {
        [theme.breakpoints.between('xs','sm')]: {
            position:'relative',
            display:'block',
        },
        [theme.breakpoints.between('sm','md')]: {
            display:'block',
            position:'relative',
        },
        [theme.breakpoints.between('md','lg')]: {
            position:'relative',
            display:'block',
        },
        [theme.breakpoints.up('lg')]: {
            position:'relative',
            display:'block',
            height:'60vh'
        },
        [theme.breakpoints.up('xl')]: {
            position:'relative',
            display:'block',
        },
    },
    itemGridImg2: {
        [theme.breakpoints.between('xs','sm')]: {
            position:'relative',
            display:'block',
        },
        [theme.breakpoints.between('sm','md')]: {
            display:'block',
            position:'relative',
        },
        [theme.breakpoints.between('md','lg')]: {
            position:'relative',
            display:'block',
        },
        [theme.breakpoints.up('lg')]: {
            position:'relative',
            display:'block',
            height:'60vh'
        },
        [theme.breakpoints.up('xl')]: {
            position:'relative',
            display:'block',
        },
    },
    itemGridImg1: {
        [theme.breakpoints.between('xs','sm')]: {
            position:'relative',
            display:'block',
        },
        [theme.breakpoints.between('sm','md')]: {
            display:'block',
            position:'relative',
        },
        [theme.breakpoints.between('md','lg')]: {
            position:'relative',
            display:'block',
        },
        [theme.breakpoints.up('lg')]: {
            position:'relative',
            display:'block',
            height:'70vh'
        },
        [theme.breakpoints.up('xl')]: {
            position:'relative',
            display:'block',
            height:'70vh'
        },
    },
    imgLower: {
        [theme.breakpoints.between('xs','sm')]: {
            position: 'absolute',
            display:'wrap',
            height: '44vh', 
            width:'auto',
            top: '4rem', 
            left: '7%', 
            zIndex: '1',
            animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
            animationIterationCount: 'infinite'
        },
        [theme.breakpoints.between('sm','md')]: {
            position: 'absolute',
            display:'wrap',
            height: '44vh', 
            width:'auto',
            top: '4rem', 
            left: '0%', 
            zIndex: '1',
            animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
            animationIterationCount: 'infinite'
        },
        [theme.breakpoints.between('md','lg')]: {
            position: 'absolute',
            display:'wrap',
            height: '32vh', 
            width:'auto',
            top: '4rem', 
            left: '0%', 
            zIndex: '1',
            animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
            animationIterationCount: 'infinite'
        },
        [theme.breakpoints.up('lg')]: {
            position: 'absolute',
            display:'flex',
            height: '100%', 
            width:'auto',
            top: '6rem', 
            left: '0%', 
            zIndex: '1',
            animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
            animationIterationCount: 'infinite'
        },
        [theme.breakpoints.up('xl')]: {
            position: 'absolute',
            display:'wrap',
            height: 'auto', 
            width:'auto',
            top: '5rem', 
            left: '0%', 
            zIndex: '1',
            animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
            animationIterationCount: 'infinite'
        },
    },
    itemGridTxt4: {
        [theme.breakpoints.between('xs','sm')]: {
            height:'35vh',
        },
        [theme.breakpoints.between('sm','md')]: {
            height:'auto',
        },
        [theme.breakpoints.between('md','lg')]: {
            height:'35vh',
        },
        [theme.breakpoints.up('lg')]: {
            height:'35vh',
        },
        [theme.breakpoints.up('xl')]: {
            height:'35vh',
        },
    },
    itemGridTxt1: {
        [theme.breakpoints.between('xs','sm')]: {
            height:'35vh',
        },
        [theme.breakpoints.between('sm','md')]: {
            height:'auto',
        },
        [theme.breakpoints.between('md','lg')]: {
            height:'auto',
        },
        [theme.breakpoints.up('lg')]: {
            height:'auto',
        },
        [theme.breakpoints.up('xl')]: {
            height:'auto',
        },
    },
    itemGridTxt3: {
        [theme.breakpoints.between('xs','sm')]: {
            height:'auto',
        },
        [theme.breakpoints.between('sm','md')]: {
            height:'auto',
        },
        [theme.breakpoints.between('md','lg')]: {
            height:'auto',
        },
        [theme.breakpoints.up('lg')]: {
            height:'auto',
        },
        [theme.breakpoints.up('xl')]: {
            height:'auto',
        },
    },
    headingRight: {
        [theme.breakpoints.between('xs','sm')]: {
            color: '#006936',
            fontFamily: 'arial',
            fontSize: '22px',
            marginTop: '31%',
            marginLeft: '5%',
            lineHeight: '25.78px',
            weight:'700'
        },
        [theme.breakpoints.between('sm','md')]: {
            color: '#006936',
            fontFamily: 'arial',
            fontSize: '28px',
            marginTop: '18%',
            marginLeft: '-5%'
        },
        [theme.breakpoints.between('md','lg')]: {
            color: '#006936',
            fontFamily: 'arial',
            fontSize: '28px',
            marginTop: '10%',
            marginLeft: '-5.5%'
        },
        [theme.breakpoints.up('lg')]: {
            color: '#006936',
            fontFamily: 'arial',
            fontSize: '36px',
            marginTop: '23.5%',
            marginLeft: '5%'
        },
        [theme.breakpoints.up('xl')]: {
            color: '#006936',
            fontFamily: 'arial',
            fontSize: '36px',
            marginTop: '12.5%',
            marginLeft: '-15%'
        },
    },
    textRight: {
        [theme.breakpoints.between('xs','sm')]: {
            textAlign: 'left',
            fontFamily: 'arial',
            fontWeight:'400', 
            fontSize:'13px', 
            lineHeight:'15.23px',
            marginLeft: '5%',
            paddingRight:'5%'
        },
        [theme.breakpoints.between('sm','md')]: {
            textAlign: 'left',
            fontFamily: 'arial',
            fontWeight:'400', 
            fontSize:'13px', 
            lineHeight:'15.23px',
            marginLeft: '-5%',
            paddingRight:'5%'
        },
        [theme.breakpoints.between('md','lg')]: {
            textAlign: 'left',
            fontFamily: 'arial',
            fontWeight:'400', 
            fontSize:'18px', 
            lineHeight:'20.23px',
            marginLeft: '-5.5%',
            paddingRight:'15%'
        },
        [theme.breakpoints.up('lg')]: {
            textAlign: 'left',
            fontFamily: 'arial',
            fontWeight:'400', 
            fontSize:'19px', 
            lineHeight:'35.16px',
            marginLeft: '5%',
            paddingRight:'5%'
        },
        [theme.breakpoints.up('xl')]: {
            textAlign: 'left',
            fontFamily: 'arial',
            fontWeight:'400', 
            fontSize:'19px', 
            lineHeight:'35.16px',
            marginLeft: '-15%',
            marginRight:'10%',
        },
    },
    imgTop:{
        [theme.breakpoints.between('xs', 'sm')]: {
            position: 'relative',
            height:'44vh',
            width:'auto',
            maxWidth:'100%',
            // height: '760px', 
            // width:'555px',
            top: '0%', 
            left: '18%',
            '&:focus': {
                // animation: `$zEffectLow 1.5s alternate ${theme.transitions.easing.easeInOut}`,
                animation: `$zEffectLowFocus 250ms alternate ${theme.transitions.easing.easeInOut}`
            }, 
            zIndex: '1',
            animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
            animationIterationCount: 'infinite',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            position: 'relative',
            height:'44vh',
            width:'auto',
            // height: '760px', 
            // width:'555px',
            top: '0%', 
            left: '10%',
            '&:focus': {
                // animation: `$zEffectLow 1.5s alternate ${theme.transitions.easing.easeInOut}`,
                animation: `$zEffectLowFocus 250ms alternate ${theme.transitions.easing.easeInOut}`
            }, 
            zIndex: '1',
            animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
            animationIterationCount: 'infinite',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            position: 'relative',
            height:'32vh',
            width:'auto',
            // height: '760px', 
            // width:'555px',
            top: '0%', 
            left: '10%',
            '&:focus': {
                // animation: `$zEffectLow 1.5s alternate ${theme.transitions.easing.easeInOut}`,
                animation: `$zEffectLowFocus 250ms alternate ${theme.transitions.easing.easeInOut}`
            }, 
            zIndex: '1',
            animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
            animationIterationCount: 'infinite',
        },
        [theme.breakpoints.up('lg')]: {
            position: 'relative',
            height:'100%',
            width:'auto',
            // height: '760px', 
            // width:'555px',
            top: '0%', 
            left: '10%',
            '&:focus': {
                // animation: `$zEffectLow 1.5s alternate ${theme.transitions.easing.easeInOut}`,
                animation: `$zEffectLowFocus 250ms alternate ${theme.transitions.easing.easeInOut}`
            }, 
            zIndex: '1',
            animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
            animationIterationCount: 'infinite',
        },
        [theme.breakpoints.up('xl')]: {
            position: 'relative',
            height:'auto',
            width:'auto',
            maxWidth:'100%',
            // height: '760px', 
            // width:'555px',
            top: '0%', 
            left: '10%',
            '&:focus': {
                // animation: `$zEffectLow 1.5s alternate ${theme.transitions.easing.easeInOut}`,
                animation: `$zEffectLowFocus 250ms alternate ${theme.transitions.easing.easeInOut}`
            }, 
            zIndex: '1',
            animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
            animationIterationCount: 'infinite',
        },
    },
    whiteGrid:{
        [theme.breakpoints.between('xs','sm')]: {
          backgroundColor: '#FFFFFF',
          width: '100%',
          height:'50.3vh', 
        },
        [theme.breakpoints.between('sm','md')]: {
          backgroundColor: '#FFFFFF',
        },
        [theme.breakpoints.up('lg')]: {
          backgroundColor: '#FFFFFF',
          height:'50vh', 
          width:'100%',
          marginBottom:'13.333333333333334vh'
        },
        [theme.breakpoints.up('xl')]: {
          backgroundColor: '#FFFFFF',
          height:'80vh', 
          width:'100%'
        },
    },
    headingLeft: {
        [theme.breakpoints.between('xs','sm')]: {
          color: '#006936',
          fontFamily: 'arial',
          fontSize: '22px',
          marginTop: '-22%',
          marginLeft: '5%',
          lineHeight:'25.78px',
          weight:'700'
        },
        [theme.breakpoints.between('sm','md')]: {
          color: '#006936',
          fontFamily: 'arial',
          fontSize: '28px',
          marginTop: '185px',
          marginLeft: '25px'
        },
        [theme.breakpoints.between('md','lg')]: {
          color: '#006936',
          fontFamily: 'arial',
          fontSize: '28px',
          marginTop: '20%',
          marginLeft: '10%'
        },
        [theme.breakpoints.up('lg')]: {
          color: '#006936',
          fontFamily: 'arial',
          fontSize: '36px',
          marginTop: '22.5%',
          marginLeft: '10%'
        },
        [theme.breakpoints.up('xl')]: {
          color: '#006936',
          fontFamily: 'arial',
          fontSize: '36px',
          marginTop: '25%',
          marginLeft: '15%'
        },
    },
    textLeft: {
        [theme.breakpoints.between('xs','sm')]: {
          textAlign: 'left',
          fontFamily: 'arial',
          fontWeight:'400', 
          fontSize:'13px', 
          lineHeight:'15.23px',
          marginLeft: '5%',
          paddingRight:'5%'
        },
        [theme.breakpoints.between('sm','md')]: {
          textAlign: 'left',
          fontFamily: 'arial',
          fontWeight:'400', 
          fontSize:'13px', 
          lineHeight:'15.23px',
          marginLeft: '25px',
          paddingRight:'25px'
        },
        [theme.breakpoints.between('md','lg')]: {
          textAlign: 'left',
          fontFamily: 'arial',
          fontWeight:'400', 
          fontSize:'18px', 
          lineHeight:'20.23px',
          marginLeft: '10%',
          marginRight:'10%'
        },
        [theme.breakpoints.up('lg')]: {
          textAlign: 'left',
          fontFamily: 'arial',
          fontWeight:'400', 
          fontSize:'19px', 
          lineHeight:'35.16px',
          marginLeft: '10%',
          paddingRight:'5%'
        },
        [theme.breakpoints.up('xl')]: {
          textAlign: 'left',
          fontFamily: 'arial',
          fontWeight:'400', 
          fontSize:'30px', 
          lineHeight:'35.16px',
          marginLeft: '15%',
          marginRight:'2%'
        },
    },
    imgTopS_2: {
        [theme.breakpoints.between('xs','sm')]: {
          position: 'relative', 
          top: '5%', 
          left: '0%', 
          zIndex: '1',
          animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
          animationIterationCount: 'infinite',
          // width: '343px',
          // height: '245px',
          maxWidth:'70%',
          height:'auto',
          width:'auto',
        },
        [theme.breakpoints.between('sm','md')]: {
          position: 'relative', 
          top: '25%', 
          left: '20%', 
          zIndex: '1',
          animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
          animationIterationCount: 'infinite',
          width: 'auto',
          height: 'auto',
        },
        [theme.breakpoints.between('md','lg')]: {
          position: 'relative', 
          top: '27%', 
          left: '7%', 
          zIndex: '1',
          animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
          animationIterationCount: 'infinite',
          width: '38.37890625vw',
          height: '21.59590043923865vh',
        },
        [theme.breakpoints.up('lg')]: {
          position: 'relative', 
          top: '3.5%', 
          left: '21%', 
          zIndex: '1',
          animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
          animationIterationCount: 'infinite',
          // width: '586px',
          // height: '390px',
          width: '39.5vw',
          height: '40.2vh',
        },
        [theme.breakpoints.up('xl')]: {
          position: 'relative', 
          // top: '75px', 
          // left: '164px', 
          zIndex: '1',
          animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
          animationIterationCount: 'infinite',
          // width: '787.83px',
          // height: '477px',
          height:'auto',
          width:'auto',
          maxWidth:'100%',
          top: '10%', 
          left: '20%',
        },
    },
    imgLowerS_2: {
        [theme.breakpoints.between('xs','sm')]: {
          position: 'relative',
          left: '30%', 
          top: '-35%',
          display: 'wrap',
          '&:hover': {
            // opacity: '0.4',
            zIndex: '2',
            transition: 'zIndex 0.4s'
          },
          animation: `$zEffectLow 10s alternate ${theme.transitions.easing.easeInOut}`,
          animationIterationCount: 'infinite',
          // width: '343px',
          // height: '245px'
          maxWidth:'70%',
          height:'auto',
          width:'auto',
        },
        [theme.breakpoints.between('sm','md')]: {
          position: 'relative',
          left: '30%', 
          top: '-15%',
          display: 'wrap',
          '&:hover': {
            // opacity: '0.4',
            zIndex: '2',
            transition: 'zIndex 0.4s'
          },
          animation: `$zEffectLow 10s alternate ${theme.transitions.easing.easeInOut}`,
          animationIterationCount: 'infinite',
          width: 'auto',
          height: 'auto'
        },
        [theme.breakpoints.between('md','lg')]: {
          position: 'relative',
          left: '22.9%', 
          top: '-9.5%',
          display: 'wrap',
          '&:hover': {
            // opacity: '0.4',
            zIndex: '2',
            transition: 'zIndex 0.4s'
          },
          animation: `$zEffectLow 10s alternate ${theme.transitions.easing.easeInOut}`,
          animationIterationCount: 'infinite',
          width: '38.37890625vw',
          height: '21.59590043923865vh'
        },
        [theme.breakpoints.up('lg')]: {
          position: 'relative',
          left: '8.5%', 
          top: '-30.5%',
          display: 'wrap',
          '&:hover': {
            // opacity: '0.4',
            zIndex: '2',
            transition: 'zIndex 0.4s'
          },
          animation: `$zEffectLow 10s alternate ${theme.transitions.easing.easeInOut}`,
          animationIterationCount: 'infinite',
          width: '39.5vw',
          height: '40.2vh',
        },
        [theme.breakpoints.up('xl')]: {
          position: 'relative',
          // left: '59px', 
          // top: '-290px',
          display: 'wrap',
          '&:hover': {
            // opacity: '0.4',
            zIndex: '2',
            transition: 'zIndex 0.4s'
          },
          animation: `$zEffectLow 10s alternate ${theme.transitions.easing.easeInOut}`,
          animationIterationCount: 'infinite',
          height:'auto',
          width:'auto',
          maxWidth:'100%',
          top: '-30%', 
          left: '10%',
        },
    },
    greyGridSec3: {
        [theme.breakpoints.between('xs','sm')]: {
          backgroundColor: '#F3F5F4',
          width: '100%',
          height:'65.7vh'
        },
        [theme.breakpoints.between('sm','md')]: {
          backgroundColor: '#F3F5F4',
          width:'100%'
        },
        [theme.breakpoints.between('md','lg')]: {
          backgroundColor: '#F3F5F4',
          width:'100%'
        },
        [theme.breakpoints.up('lg')]: {
          backgroundColor: '#F3F5F4',
          width:'100%',
          height:'68vh'
        },
        [theme.breakpoints.up('xl')]: {
          backgroundColor: '#F3F5F4',
          height:'83vh',
          width:'100%',
        },
    },
    imgTopS_3: {
        [theme.breakpoints.between('xs','sm')]: {
          position: 'relative', 
          top: '15%', 
          left: '0px', 
          zIndex: '1',
          animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
          animationIterationCount: 'infinite',
          maxWidth:'70%',
          height:'auto',
          width:'auto',
        },
        [theme.breakpoints.between('sm','md')]: {
          position: 'relative', 
          top: '150px', 
          left: '0px', 
          zIndex: '1',
          animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
          animationIterationCount: 'infinite',
          width: '343px',
          height: '245px',
        },
        [theme.breakpoints.between('md','lg')]: {
          position: 'relative', 
          top: '27%', 
          left: '0%', 
          zIndex: '1',
          animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
          animationIterationCount: 'infinite',
          width: '38.37890625vw',
          height: '21.59590043923865vh',
        },
        [theme.breakpoints.up('lg')]: {
          position: 'relative', 
          top: '7.5%', 
          left: '0%', 
          zIndex: '1',
          animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
          animationIterationCount: 'infinite',
          // width: '586px',
          // height: '390px',
          width: '39.5vw',
          height: '40.2vh',
        },
        [theme.breakpoints.up('xl')]: {
          position: 'relative', 
          top: '75px', 
          left: '0px', 
          zIndex: '1',
          animation: `$zEffectAbv 10s alternate ${theme.transitions.easing.easeInOut}`,
          animationIterationCount: 'infinite',
          // width: '780px',
          // height: '494px',
          height:'auto',
          width:'auto',
          maxWidth:'100%',
          top: '10%', 
          left: '0%',
        },
    },
    imgLowerS_3: {
        [theme.breakpoints.between('xs','sm')]: {
          position: 'relative',
          left: '30%', 
          top: '-35%',
          display: 'wrap',
          '&:hover': {
            // opacity: '0.4',
            zIndex: '2',
            transition: 'zIndex 0.4s'
          },
          animation: `$zEffectLow 10s alternate ${theme.transitions.easing.easeInOut}`,
          animationIterationCount: 'infinite',
          maxWidth:'70%',
          height:'auto',
          width:'auto',
        },
        [theme.breakpoints.between('sm','md')]: {
          position: 'relative',
          left: '33px', 
          top: '-135px',
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
        [theme.breakpoints.between('md','lg')]: {
          position: 'relative',
          left: '13%', 
          top: '-33%',
          display: 'wrap',
          '&:hover': {
            // opacity: '0.4',
            zIndex: '2',
            transition: 'zIndex 0.4s'
          },
          animation: `$zEffectLow 10s alternate ${theme.transitions.easing.easeInOut}`,
          animationIterationCount: 'infinite',
          width: '38.37890625vw',
          height: '21.59590043923865vh'
        },
        [theme.breakpoints.up('lg')]: {
          position: 'relative',
          left: '8.8%', 
          top: '-25.5%',
          display: 'wrap',
          '&:hover': {
            // opacity: '0.4',
            zIndex: '2',
            transition: 'zIndex 0.4s'
          },
          animation: `$zEffectLow 10s alternate ${theme.transitions.easing.easeInOut}`,
          animationIterationCount: 'infinite',
          // width: '586px',
          // height: '390px',
          width: '39.5vw',
          height: '40.2vh',
        },
        [theme.breakpoints.up('xl')]: {
          position: 'relative',
          // left: '145px', 
          // top: '-305px',
          display: 'wrap',
          '&:hover': {
            // opacity: '0.4',
            zIndex: '2',
            transition: 'zIndex 0.4s'
          },
          animation: `$zEffectLow 10s alternate ${theme.transitions.easing.easeInOut}`,
          animationIterationCount: 'infinite',
          // width: '801.18px',
          // height: '492.64px',
          height:'auto',
          width:'auto',
          maxWidth:'100%',
          top: '-30%', 
          left: '20%',
        },
    },
    headingSec_3: {
        [theme.breakpoints.between('xs','sm')]: {
          color: '#006936',
          fontFamily: 'arial',
          fontSize: '22px',
          marginTop: '-35%',
          marginLeft: '5%',
          lineHeight: '25.78px'
        },
        [theme.breakpoints.between('sm','md')]: {
          color: '#006936',
          fontFamily: 'arial',
          fontSize: '28px',
          marginTop: '35%',
          marginLeft: '-5%'
        },
        [theme.breakpoints.between('md','lg')]: {
          color: '#006936',
          fontFamily: 'arial',
          fontSize: '28px',
          marginTop: '20%',
          marginLeft: '4.5%'
        },
        [theme.breakpoints.up('lg')]: {
          color: '#006936',
          fontFamily: 'arial',
          fontSize: '36px',
          marginTop: '18.5%',
          marginLeft: '5%'
        },
        [theme.breakpoints.up('xl')]: {
          color: '#006936',
          fontFamily: 'arial',
          fontSize: '36px',
          marginTop: '20%',
          marginLeft: '15%'
        },
    },
    textSec_3: {
        [theme.breakpoints.between('xs','sm')]: {
          textAlign: 'left',
          fontFamily: 'arial',
          fontWeight:'400', 
          fontSize:'13px', 
          lineHeight:'15.23px',
          marginLeft: '5%',
          paddingRight:'5%',
        },
        [theme.breakpoints.between('sm','md')]: {
          textAlign: 'left',
          fontFamily: 'arial',
          fontWeight:'400', 
          fontSize:'13px', 
          lineHeight:'15.23px',
          marginLeft: '-5%',
          paddingRight:'5%'
        },
        [theme.breakpoints.between('md','lg')]: {
          textAlign: 'left',
          fontFamily: 'arial',
          fontWeight:'400', 
          fontSize:'18px', 
          lineHeight:'20.23px',
          marginLeft: '4.5%',
          paddingRight:'4.5%'
        },
        [theme.breakpoints.up('lg')]: {
          textAlign: 'left',
          fontFamily: 'arial',
          fontWeight:'400', 
          fontSize:'19px', 
          lineHeight:'35.16px',
          marginLeft: '5%',
          paddingRight:'5%'
        },
        [theme.breakpoints.up('xl')]: {
          textAlign: 'left',
          fontFamily: 'arial',
          fontWeight:'400', 
          fontSize:'30px', 
          lineHeight:'35.16px',
          marginLeft: '15%',
          marginRight:'10%',
        },
    },
    serviceHead: {
        textAlign: 'center'
    },
    serviceImgs: {
        width: '176.78',
        height: '120.96px',
        marginBottom: '30px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    freightHead: {
        textAlign: 'center',
        color: '#006936'
    },
    freightText: {
        [theme.breakpoints.between('xs','sm')]: {
          textAlign: 'center',
          paddingLeft: '120px',
          paddingRight: '120px'
        },
        [theme.breakpoints.between('sm','md')]: {
          textAlign: 'center',
          paddingLeft: '50px',
          paddingRight: '50px'
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
    carouselHeading: {
        [theme.breakpoints.between('xs', 'sm')]: {
          color:'white', 
          textAlign:'center', 
          fontSize:'44px'
        },
        [theme.breakpoints.between('sm', 'md')]: {
        },
        [theme.breakpoints.between('md', 'lg')]: {
          color:'white', 
          textAlign:'center', 
          fontSize:'44px'
        },
        [theme.breakpoints.up('lg')]: {
          color:'white', 
          textAlign:'center', 
          fontSize:'44px'
        },
      },
      carouselText: {
        [theme.breakpoints.between('xs', 'sm')]: {
          color:'white', 
          textAlign:'center', 
          fontSize:'32px', 
          paddingLeft:'25px', 
          paddingRight:'25px', 
          paddingBottom:'25px', 
          paddingTop: '25px'
        },
        [theme.breakpoints.between('sm', 'md')]: {
          color:'white', 
          textAlign:'center', 
          fontSize:'32px', 
          paddingLeft:'25px', 
          paddingRight:'25px', 
          paddingBottom:'0px', 
          paddingTop: '25px'
        },
        [theme.breakpoints.up('lg')]: {
          color:'white', 
          textAlign:'center', 
          fontSize:'32px', 
          paddingLeft:'100px', 
          paddingRight:'100px', 
          paddingBottom:'50px', 
          paddingTop: '50px'
        },
      },
      carouselItem: {
        [theme.breakpoints.between('xs', 'sm')]: {
          backgroundColor: '#006936', 
          borderStyle: 'solid', 
          borderColor: 'white', 
          marginLeft:'25px',
          marginRight: '25px',
          marginTop:'25px'
        },
        [theme.breakpoints.between('sm', 'md')]: {
          backgroundColor: '#006936', 
          borderStyle: 'solid', 
          borderColor: 'white', 
          marginLeft:'25px',
          marginRight: '25px',
          marginTop:'25px'
        },
        [theme.breakpoints.up('lg')]: {
          backgroundColor: '#006936', 
          borderStyle: 'solid', 
          borderColor: 'white', 
          marginLeft:'25px',
          marginRight: '25px',
          marginTop:'25px'
        },
      },
      carouselWho: {
        [theme.breakpoints.between('xs', 'sm')]: {
          color:'white', 
          textAlign:'right',
          marginRight:'100px',
          fontSize:'26px'
        },
        [theme.breakpoints.between('sm', 'md')]: {
          color:'white', 
          textAlign:'right',
          marginRight:'100px',
          fontSize:'26px'
        },
        [theme.breakpoints.up('lg')]: {
          color:'white', 
          textAlign:'right',
          marginRight:'100px',
          fontSize:'26px'
        },
        [theme.breakpoints.up('xl')]: {
          color:'white', 
          textAlign:'right',
          marginRight:'100px',
          fontSize:'26px'
        },
    },
    headingHouseHold: {
        [theme.breakpoints.between('xs','sm')]: {
          color: '#006936',
          fontFamily: 'arial',
          fontSize: '22px',
          marginTop: '-50%',
          marginLeft: '5%',
          lineHeight: '25.78px'
        },
        [theme.breakpoints.between('sm','md')]: {
          color: '#006936',
          fontFamily: 'arial',
          fontSize: '28px',
          marginTop: '120px',
          marginLeft: '-25px'
        },
        [theme.breakpoints.between('md','lg')]: {
          color: '#006936',
          fontFamily: 'arial',
          fontSize: '28px',
          marginTop: '22%',
          marginLeft: '-5.5%'
        },
        [theme.breakpoints.up('lg')]: {
          color: '#006936',
          fontFamily: 'arial',
          fontSize: '36px',
          marginTop: '125px',
          marginLeft: '-50px'
        },
        [theme.breakpoints.up('xl')]: {
          color: '#006936',
          fontFamily: 'arial',
          fontSize: '36px',
          marginTop: '20%',
          marginLeft: '2%'
        },
    },
    textHousehold: {
        [theme.breakpoints.between('xs','sm')]: {
          textAlign: 'left',
          fontFamily: 'arial',
          fontWeight:'400', 
          fontSize:'13px', 
          lineHeight:'15.23px',
          marginLeft: '5%',
          paddingRight:'5%'
        },
        [theme.breakpoints.between('sm','md')]: {
          textAlign: 'left',
          fontFamily: 'arial',
          fontWeight:'400', 
          fontSize:'13px', 
          lineHeight:'15.23px',
          marginLeft: '-25px',
          paddingRight:'40px'
        },
        [theme.breakpoints.between('md','lg')]: {
          textAlign: 'left',
          fontFamily: 'arial',
          fontWeight:'400', 
          fontSize:'18px', 
          lineHeight:'20.23px',
          marginLeft: '-5.5%',
          paddingRight:'5.5%'
        },
        [theme.breakpoints.up('lg')]: {
          textAlign: 'left',
          fontFamily: 'arial',
          fontWeight:'400', 
          fontSize:'19px', 
          lineHeight:'35.16px',
          marginLeft: '-50px',
          paddingRight:'50px'
        },
        [theme.breakpoints.up('xl')]: {
          textAlign: 'left',
          fontFamily: 'arial',
          fontWeight:'400', 
          fontSize:'30px', 
          lineHeight:'35.16px',
          marginLeft: '2%',
          marginRight:'5%',
        },
    },
    greyGridHousehold: {
        [theme.breakpoints.between('xs','sm')]: {
            backgroundColor: '#F3F5F4',
            width: '100%',
        },
        [theme.breakpoints.between('sm','md')]: {
            backgroundColor: '#F3F5F4',
            width:'100%',
            height:'auto',
        },
        [theme.breakpoints.between('md','lg')]: {
            backgroundColor: '#F3F5F4',
            width:'100%',
            height:'auto'
        },
        [theme.breakpoints.up('lg')]: {
            backgroundColor: '#F3F5F4',
            height:'auto',
            width:'100%'
        },
        [theme.breakpoints.up('xl')]: {
            backgroundColor: '#F3F5F4',
            height:'auto',
            width:'100%',
        },
    },
    greyGridWarehouse: {
        [theme.breakpoints.between('xs','sm')]: {
          backgroundColor: '#F3F5F4',
          width: '100%',
          height:'50%'
        },
        [theme.breakpoints.between('sm','md')]: {
          backgroundColor: '#F3F5F4',
          width:'100%'
        },
        [theme.breakpoints.between('md','lg')]: {
          backgroundColor: '#F3F5F4',
          width:'100%',
          height:'40vh'
        },
        [theme.breakpoints.up('lg')]: {
          backgroundColor: '#F3F5F4',
          height:'60vh',
          width:'100%'
        },
        [theme.breakpoints.up('xl')]: {
          backgroundColor: '#F3F5F4',
          height:'83vh',
          width:'100%',
        },
    },
    imgSection_3: {
      [theme.breakpoints.between('xs','sm')]: {
        position: 'relative', 
        top: '5%', 
        left: '15%', 
        zIndex: '1',
        maxWidth:'70%',
        height:'auto',
        width:'auto',
      },
      [theme.breakpoints.between('sm','md')]: {
        position: 'relative', 
        top: '80px', 
        left: '0px', 
        zIndex: '1',
        width: '343px',
        height: '245px',
      },
      [theme.breakpoints.between('md','lg')]: {
        position: 'relative', 
        top: '25%', 
        left: '0%', 
        zIndex: '1',
        width: '38.37890625vw',
        height: '21.59590043923865vh',
      },
      [theme.breakpoints.up('lg')]: {
        position: 'relative', 
        top: '7.5%', 
        left: '0%', 
        zIndex: '1',
        // width: '586px',
        // height: '390px',
        width: '39.5vw',
        height: '40.2vh',
      },
      [theme.breakpoints.up('xl')]: {
        position: 'relative', 
        // top: '75px', 
        // left: '0px', 
        zIndex: '1',
        // width: '790.62px',
        // height: '550px',
        height:'auto',
        width:'auto',
        maxWidth:'100%',
        top: '20%', 
        left: '0%',
      },
  },
    headingWarehouse: {
        [theme.breakpoints.between('xs','sm')]: {
          color: '#006936',
          fontFamily: 'arial',
          fontSize: '22px',
          marginTop: '-60%',
          marginLeft: '5%'
        },
        [theme.breakpoints.between('sm','md')]: {
          color: '#006936',
          fontFamily: 'arial',
          fontSize: '28px',
          marginTop: '120px',
          marginLeft: '25px'
        },
        [theme.breakpoints.between('md','lg')]: {
          color: '#006936',
          fontFamily: 'arial',
          fontSize: '28px',
          marginTop: '32.5%',
          marginLeft: '9.5%'
        },
        [theme.breakpoints.up('lg')]: {
          color: '#006936',
          fontFamily: 'arial',
          fontSize: '36px',
          marginTop: '18%',
          marginLeft: '10%'
        },
        [theme.breakpoints.up('xl')]: {
          color: '#006936',
          fontFamily: 'arial',
          fontSize: '36px',
          marginTop: '15%',
          marginLeft: '15%'
        },
    },
    textWarehouse: {
        [theme.breakpoints.between('xs','sm')]: {
          textAlign: 'left',
          lineHeight:'35.16px',
          fontFamily: 'arial',
          fontWeight:'400', 
          fontSize:'13px', 
          lineHeight:'15.23px',
          marginLeft: '5%',
          paddingRight:'5%'
        },
        [theme.breakpoints.between('sm','md')]: {
          textAlign: 'left',
          fontFamily: 'arial',
          fontWeight:'400', 
          fontSize:'13px', 
          lineHeight:'15.23px',
          marginLeft: '25px',
          paddingRight:'25px',
          marginBottom:'80px'
        },
        [theme.breakpoints.between('md','lg')]: {
          textAlign: 'left',
          fontFamily: 'arial',
          fontWeight:'400', 
          fontSize:'18px', 
          lineHeight:'20.23px',
          marginLeft: '9.5%',
          paddingRight:'9.5%'
        },
        [theme.breakpoints.up('lg')]: {
          textAlign: 'left',
          fontFamily: 'arial',
          fontWeight:'400', 
          fontSize:'19px', 
          lineHeight:'35.16px',
          marginLeft: '10%',
          paddingRight:'5%'
        },
        [theme.breakpoints.up('xl')]: {
          textAlign: 'left',
          fontFamily: 'arial',
          fontWeight:'400', 
          fontSize:'30px', 
          lineHeight:'35.16px',
          marginLeft: '15%',
          marginRight:'2%'
        },
    },
    bottomCarCargo: {
        [theme.breakpoints.between('xs','sm')]: {
          position: 'relative', 
          top: '-150%', 
          left: '15%', 
          zIndex: '1',
          maxWidth:'70%',
          height:'auto',
          width:'auto',
        },
        [theme.breakpoints.between('sm','md')]: {
          position: 'relative', 
          top: '80px', 
          left: '18px', 
          zIndex: '1',
          width: '343px',
          height: '245px',
        },
        [theme.breakpoints.between('md','lg')]: {
          position: 'relative', 
          top: '27.5%', 
          left: '22%', 
          zIndex: '1',
          width: '38.37890625vw',
          height: '21.59590043923865vh'
        },
        [theme.breakpoints.up('lg')]: {
          position: 'relative', 
          top: '13%', 
          left: '12.5%', 
          zIndex: '1',
          // width: '586px',
          // height: '390px',
          width: '39.5vw',
          height: '40.2vh',
        },
        [theme.breakpoints.up('xl')]: {
          position: 'relative', 
          // top: '75px', 
          // left: '125px', 
          zIndex: '1',
          // width: '816px',
          // height: '550px',
          height:'auto',
          width:'auto',
          maxWidth:'100%',
          top: '10%', 
          left: '19%',
        },
    },
    "@keyframes zEffectLowFocus": {
      zIndex: '3',
      filter: 'grayscale(0%)',
      transform: "translateZ(2)"
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

export default function HomeSample(){
    const classes = useStyles();

    var items = [
      {
          name: "What They Said",
          description: "“Kepercayaan tidak bisa didapatkan hanya dalam 1 malam. Gledex telah memberikan kepercayaan kepada lebih dari 5 tahun lamanya tanpa kekurangan sedikit pun. ”",
          bywho: "-Gerry Pramana, CFO Pupuk Hidayat "
      },
      {
          name: "What They Said",
          description: "Passwordku adalah hmmmm",
          bywho: "-hahahaha"
      }
    ]
    function Item(props)
    {
        return (
            <Paper className={classes.carouselItem}>
                <h2 className={classes.carouselHeading}>{props.item.name}</h2>
                <p className={classes.carouselText}>{props.item.description}</p>
                <p className={classes.carouselWho}>{props.item.bywho}</p>

                {/* <Button className="CheckButton">
                    <p style={{color:'white'}}>Check it out!</p>
                </Button> */}
            </Paper>
        )
    }

    return(
    <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid container className={classes.headContainer}>
            <Grid item xs={12} className={classes.headImgGrid}>
                <img src='./Assets/truck-heading-home.png' className={classes.headerImg}/>
                <button className={classes.btn}>Learn More</button>
                <p className={classes.headerText}>This is Gledex<br/>Number 1 Logistic Services in Indonesia</p>
            </Grid>
          </Grid>
          <Grid container xs={12} className={classes.topHeadingGrey}>
            <h2 className={classes.topHeading}>What We Are!</h2>
          </Grid>
          <Grid container spacing={0} className={classes.greyGrid}>
            <Grid item xs={12} sm={6} className={classes.itemGridImg1}>
                <img src='./Assets/home-picture-top.png' className={classes.imgTop}/>
                <img src='./Assets/truk-home.png' className={classes.imgLower}/>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.itemGridTxt1}>
                <h2 className={classes.headingRight}>We Deliver Perfection</h2>
                <p className={classes.textRight}>When your items is in our hands, we guarantee safety and on time. Everything will be secured and delivered with no flaw.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus eleifend sapien, sed consequat velit gravida ut. Nullam eros augue, commodo a metus eget, lacinia feugiat dui.</p>
                <a className={classes.textRight} style={{color:'#006936', textDecoration:'none'}} href='#'>Learn More...</a>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.whiteGrid}>
            <Box clone order={{ xs: 2, sm: 1 }}>
              <Grid item xs={12} sm={6} className={classes.itemGridTxt1}>
                <h2 className={classes.headingLeft}>Safety = Priority</h2>
                <p className={classes.textLeft}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus eleifend sapien, sed consequat velit gravida ut. Nullam eros augue, commodo a metus eget, lacinia feugiat dui.</p>
                <a className={classes.textLeft} style={{color:'#006936', textDecoration:'none'}} href='#'>Learn More...</a>
              </Grid>
            </Box>
            <Box clone order={{ xs: 1, sm: 2 }}>
              <Grid item xs={12} sm={6} className={classes.itemGridImg2}>
                <img src='./Assets/airplane-cargo.png' className={classes.imgTopS_2}/>
                <img src='./Assets/car-cargo.png' className={classes.imgLowerS_2}/>
              </Grid>
            </Box>
          </Grid>
          <Grid container spacing={0} className={classes.greyGridSec3}>
            <Grid item xs={12} sm={6} className={classes.itemGridImg2}>
              <img src='./Assets/container-size.png' className={classes.imgTopS_3}/>
              <img src='./Assets/truk-size.png' className={classes.imgLowerS_3}/>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.itemGridTxt3}>
              <h2 className={classes.headingSec_3}>Size is not a Problem</h2>
              <p className={classes.textSec_3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus eleifend sapien, sed consequat velit gravida ut. Nullam eros augue, commodo a metus eget, lacinia feugiat dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <a className={classes.textSec_3} style={{ color:'#006936', textDecoration:'none' }} href='#'>Learn More...</a>
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <h2 className={classes.serviceHead}>Our Services</h2>
            </Grid>
            <Grid item xs={12} sm={4}>
              <img src='./Assets/truck-vector.png' className={classes.serviceImgs} />
              <h2 className={classes.freightHead}>Land <span style={{color:'#FFC700'}}>Freight</span></h2>
              <p className={classes.freightText} >Kami menyediakan jasa transportasi darat menggunakan mini box, truk box, dan trailer.</p>
              <button className={classes.btnLower} >Learn More</button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <img src='./Assets/freight-vector.png' className={classes.serviceImgs} />
              <h2 className={classes.freightHead}>Sea <span style={{color:'#FFC700'}}>Freight</span></h2>
              <p className={classes.freightText} >Kami menangani pengiriman laut untuk semua tujuan dari pengiriman tunggal ataupun kargo proyek</p>
              <button className={classes.btnLower} >Learn More</button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <img src='./Assets/airplane-vector.png' className={classes.serviceImgs} />
              <h2 className={classes.freightHead}>Air <span style={{color:'#FFC700'}}>Freight</span></h2>
              <p className={classes.freightText} >Divisi angkutan udara kami siap untuk memberikan layanan kepada Anda hampir ke setiap lokasi.</p>
              <button className={classes.btnLower} >Learn More</button>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.greyGridHousehold}>
            <Grid item xs={12} sm={6} className={classes.itemGridImg3}>
              <img src='./Assets/services-section3.png' className={classes.imgSection_3}/>
            </Grid>
            <Grid item xs={12} sm={6} classname={classes.itemGridTxt4}>
              <h2 className={classes.headingHouseHold}>Household & Office Movers</h2>
              <p className={classes.textHousehold}>Adalah salah satu layanan GLEDEX yang melayani Pindahan Kantor / Rumah anda, anda tinggal menghubungi kami, dan kami akan membantu anda dalam memindahkan barang-barang anda ke lokasi yang baru, dengan keamanan dan kenyamanan yang kami utamakan.</p>
              <a className={classes.textHousehold} style={{color:'#006936', textDecoration:'none'}} href='#'>Learn More...</a>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.greyGridWarehouse}>
            <Box clone order={{ xs: 2, sm: 1 }}>
              <Grid item xs={12} sm={6} classname={classes.itemGridTxt1}>
                <h2 className={classes.headingWarehouse}>Warehouse & Distribution</h2>
                <p className={classes.textWarehouse}>Sistem kami menyediakan pergudangan dan distribusi pusat untuk perusahaan dengan kebutuhan untuk kinerja tinggi, namun infrastruktur yang fleksibel. Melalui kemampuan logistik bersama kami, pelanggan kami mendapatkan keuntungan dari layanan yang customized.</p>
                <a className={classes.textWarehouse} style={{color:'#006936', textDecoration:'none'}} href='#'>Learn More...</a>
              </Grid>
            </Box>
            <Box clone order={{ xs: 1, sm: 2 }}>
              <Grid item xs={12} sm={6} classname={classes.itemGridImg2}>
                <img src='./Assets/car-cargo.png' className={classes.bottomCarCargo}/>
              </Grid>
            </Box>
          </Grid>
          <Grid container spacing={0}>
            <Grid item xs={12} style={{backgroundColor: '#006936'}}>
              <Carousel>
                  {
                      items.map( (item, i) => <Item key={i} item={item} /> )
                  }
              </Carousel>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );

}