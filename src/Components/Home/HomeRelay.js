import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Box, Button, Link, styled } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel'
import { color, fontSize } from '@material-ui/system';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    carouselHeading: {
        [theme.breakpoints.between('xs', 'sm')]: {
          color:'white', 
          textAlign:'center', 
          fontSize:'26px'
        },
        [theme.breakpoints.between('sm', 'md')]: {
        },
        [theme.breakpoints.between('md', 'lg')]: {
          color:'white', 
          textAlign:'center', 
          fontSize:'26px'
        },
        [theme.breakpoints.up('lg')]: {
          color:'white', 
          textAlign:'center', 
          fontSize:'30px'
        },
      },
      carouselText: {
        [theme.breakpoints.between('xs', 'sm')]: {
          color:'white', 
          textAlign:'center', 
          fontSize:'14px', 
          paddingLeft:'25px', 
          paddingRight:'25px', 
          paddingBottom:'25px', 
          paddingTop: '25px'
        },
        [theme.breakpoints.between('sm', 'md')]: {
          color:'white', 
          textAlign:'center', 
          fontSize:'14px', 
          paddingLeft:'25px', 
          paddingRight:'25px', 
          paddingBottom:'0px', 
          paddingTop: '25px'
        },
        [theme.breakpoints.up('lg')]: {
          color:'white', 
          textAlign:'center', 
          fontSize:'18px', 
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
          marginRight:'5.208333333333334vw',
          fontSize:'14px'
        },
        [theme.breakpoints.between('sm', 'md')]: {
          color:'white', 
          textAlign:'right',
          marginRight:'5.208333333333334vw',
          fontSize:'14px'
        },
        [theme.breakpoints.up('lg')]: {
          color:'white', 
          textAlign:'right',
          marginRight:'5.208333333333334vw',
          fontSize:'18px'
        },
        [theme.breakpoints.up('xl')]: {
          color:'white', 
          textAlign:'right',
          marginRight:'5.208333333333334vw',
          fontSize:'18px'
        },
    },
    freightServiceHead:{
        textAlign: 'center',
        fontSize:'35px',
        fontFamily:'arial',
        fontWeight:'700'
    },
    freightBtn:{
        [theme.breakpoints.between('xs','sm')]: {
            borderRadius: '15px',
            backgroundColor: '#006936',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: 'white',
            fontSize: '12px',
            fontFamily: 'arial',
            fontWeight:'400',
            width:'30.916666666666667vw',
            height:'3.2407407407407405vh',
            border: 'none',
            cursor:'pointer'
        },
        [theme.breakpoints.between('sm','md')]: {
            borderRadius: '15px',
            backgroundColor: '#006936',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: 'white',
            fontSize: '12px',
            fontFamily: 'arial',
            fontWeight:'400',
            width:'12.916666666666667vw',
            height:'3.2407407407407405vh',
            border: 'none',
            cursor:'pointer'
        },
        borderRadius: '15px',
        backgroundColor: '#006936',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        fontSize: '15px',
        fontFamily: 'arial',
        fontWeight:'400',
        width:'7.916666666666667vw',
        height:'3.2407407407407405vh',
        border: 'none',
        cursor:'pointer'
    },
    freightImgs:{
        width: '176.78',
        height: '120.96px',
        marginBottom: '30px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    freightHead: {
        [theme.breakpoints.between('xs','sm')]: {
            textAlign: 'center',
            color: '#006936',
            fontSize:'18px'
        },
        [theme.breakpoints.between('sm','md')]: {
            textAlign: 'center',
            color: '#006936',
            fontSize:'18px'
        },
        textAlign: 'center',
        color: '#006936',
    },
    freightText:{
        [theme.breakpoints.between('xs','sm')]: {
            fontFamily: 'arial',
            fontWeight:'400', 
            fontSize:'14px', 
            lineHeight:'20px',
            paddingRight:'15%',
            paddingLeft:'15%',
            textAlign:'center'
        },
        [theme.breakpoints.between('sm','md')]: {
            fontFamily: 'arial',
            fontWeight:'400', 
            fontSize:'14px', 
            lineHeight:'20px',
            paddingRight:'15%',
            paddingLeft:'15%',
            textAlign:'center'
        },
        fontFamily: 'arial',
        fontWeight:'400', 
        fontSize:'18px', 
        lineHeight:'20px',
        paddingRight:'15%',
        paddingLeft:'15%',
        textAlign:'center'
    },
    freightTextGrid:{
        display:'block',
        boxSizing:'border-box',
        // border:'1px solid grey',
        padding:'40px',
        paddingLeft: '4.8%',
        paddingRight: '4.8%',
    },
    itemGridTxtDob:{
        display:'block',
        boxSizing:'border-box',
        width:'48%',
        // // border:'1px solid grey',
        padding:'40px',
        paddingTop:'0',
        paddingRight:'0',
        paddingLeft:'4.8%',
    },
    itemGridTxt1:{
        display:'block',
        boxSizing:'border-box',
        width:'48%',
        // // // border:'1px solid grey',
        padding:'40px',
        paddingRight:'0',
        paddingLeft:'4.8%',
    },
    itemGridImgLand:{
        [theme.breakpoints.between('xs', 'sm')]: {
            position:'relative',
            boxSizing:'border-box',
            flexBasis:'auto',
            flexWrap:'1',
            display:'block',
            height:'34vh',
            width:'100%',
            // // border:'1px solid grey',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            position:'relative',
            boxSizing:'border-box',
            flexBasis:'auto',
            flexWrap:'1',
            display:'block',
            height:'24vh',
            width:'100%',
            // // border:'1px solid grey',
        },
        [theme.breakpoints.up('lg')]: {
            position:'relative',
            boxSizing:'border-box',
            flexBasis:'auto',
            flexWrap:'1',
            display:'block',
            height:'50vh',
            width:'48%',
            // border:'1px solid grey',
        },
    },
    itemGridImg1:{
        [theme.breakpoints.between('xs', 'sm')]: {
            position:'relative',
            boxSizing:'border-box',
            flexBasis:'auto',
            flexWrap:'1',
            display:'block',
            height:'47vh',
            width:'100%',
            // // border:'1px solid grey',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            position:'relative',
            boxSizing:'border-box',
            flexBasis:'auto',
            flexWrap:'1',
            display:'block',
            height:'47vh',
            width:'100%',
            // // border:'1px solid grey',
        },
        [theme.breakpoints.up('lg')]: {
            position:'relative',
            boxSizing:'border-box',
            flexBasis:'auto',
            flexWrap:'1',
            display:'block',
            height:'70vh',
            width:'48%',
            top:'-5%',
            // // border:'1px solid grey',
        },
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
    headingRight:{
        [theme.breakpoints.between('xs','sm')]: {
            color: '#006936',
            fontFamily: 'arial',
            fontSize: '24px',
            display:'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            marginInlineStart:'0px',
            marginInlineEnd:'0px'
        },
        [theme.breakpoints.between('sm','md')]: {
            color: '#006936',
            fontFamily: 'arial',
            fontSize: '24px',
            display:'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            marginInlineStart:'0px',
            marginInlineEnd:'0px'
        },
        color: '#006936',
        fontFamily: 'arial',
        fontSize: '30px',
        display:'block',
        marginBlockStart: '1em',
        marginBlockEnd: '1em',
        marginInlineStart:'0px',
        marginInlineEnd:'0px'
    },
    imgSingle:{
        [theme.breakpoints.between('xs','sm')]: {
            position:'relative',
            display:'wrap',
            // top:'3rem',
            left:'50%',
            width:'auto',
            height:'auto',
            maxWidth:'100%',
            maxHeight:'100%',
            transform:'translate(-50%,0)'
        },
        [theme.breakpoints.between('sm','md')]: {
            position:'relative',
            display:'wrap',
            // top:'3rem',
            left:'50%',
            width:'auto',
            height:'auto',
            maxWidth:'91%',
            maxHeight:'100%',
            transform:'translate(-50%,0)'
        },
        [theme.breakpoints.between('md','lg')]: {
            position:'relative',
            display:'wrap',
            // top:'3rem',
            left:'50%',
            width:'auto',
            height:'auto',
            maxWidth:'91%',
            maxHeight:'100%',
        },
        [theme.breakpoints.up('lg')]: {
            position:'relative',
            display:'wrap',
            // top:'3rem',
            top:'50%',
            transform:'translate(0,-50%)',
            left:'0%',
            height:'auto',
            maxHeight:'86.59793814432989vh',
            maxWidth:'100%',
        },
    },
    imgLower2:{
        [theme.breakpoints.between('xs','sm')]: {
            position:'relative',
            display:'wrap',
            top:'3rem',
            // left:'0%',
            left:'45%',
            transform:'translate(-50%,0)',
            width:'auto',
            height:'auto',
            maxWidth:'91%',
            maxHeight:'100%',
            float:'left',
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
            top:'3rem',
            // left:'0%',
            left:'40%',
            transform:'translate(-50%,0)',
            width:'auto',
            height:'auto',
            maxWidth:'91%',
            maxHeight:'100%',
            float:'left',
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
            top:'6rem',
            left:'0%',
            height:'auto',
            maxHeight:'86.59793814432989vh',
            maxWidth:'100%',
            float:'left',
            '&:hover, &:focus': {
                zIndex:'2'
            },
            transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
            transitionDuration:'0.25s',
            // transitionDelay:'0.25s',
            zIndex:'2'
        },
    },
    imgLowerDown2:{
        [theme.breakpoints.between('xs','sm')]: {
            position:'relative',
            display:'wrap',
            top:'3rem',
            // left:'0%',
            left:'45%',
            transform:'translate(-50%,0)',
            width:'auto',
            height:'auto',
            maxWidth:'91%',
            maxHeight:'100%',
            float:'left',
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
            top:'3rem',
            // left:'0%',
            left:'40%',
            transform:'translate(-50%,0)',
            width:'auto',
            height:'auto',
            maxWidth:'91%',
            maxHeight:'100%',
            float:'left',
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
            top:'6rem',
            left:'0%',
            height:'auto',
            maxHeight:'86.59793814432989vh',
            maxWidth:'100%',
            float:'left',
            '&:hover, &:focus': {
                zIndex:'2'
            },
            transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
            transitionDuration:'0.25s',
            // transitionDelay:'0.25s',
            filter: 'grayscale(100%)',
            opacity:'0.5'
        },
    },
    imgLower3:{
        [theme.breakpoints.between('xs','sm')]: {
            position:'relative',
            display:'wrap',
            top:'3rem',
            // left:'0%',
            left:'45%',
            transform:'translate(-50%,0)',
            width:'auto',
            height:'auto',
            maxWidth:'91%',
            maxHeight:'100%',
            float:'left',
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
            top:'3rem',
            // left:'0%',
            left:'40%',
            transform:'translate(-50%,0)',
            width:'auto',
            height:'auto',
            maxWidth:'91%',
            maxHeight:'100%',
            float:'left',
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
            top:'6rem',
            left:'0%',
            height:'auto',
            maxHeight:'86.59793814432989vh',
            maxWidth:'100%',
            float:'left',
            '&:hover, &:focus': {
                zIndex:'2'
            },
            transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
            transitionDuration:'0.25s',
            // transitionDelay:'0.25s',
            zIndex:'2'
        },
    },
    imgLowerDown3:{
        [theme.breakpoints.between('xs','sm')]: {
            position:'relative',
            display:'wrap',
            top:'3rem',
            // left:'0%',
            left:'45%',
            transform:'translate(-50%,0)',
            width:'auto',
            height:'auto',
            maxWidth:'91%',
            maxHeight:'100%',
            float:'left',
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
            top:'3rem',
            // left:'0%',
            left:'40%',
            transform:'translate(-50%,0)',
            width:'auto',
            height:'auto',
            maxWidth:'91%',
            maxHeight:'100%',
            float:'left',
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
            top:'6rem',
            left:'0%',
            height:'auto',
            maxHeight:'86.59793814432989vh',
            maxWidth:'100%',
            float:'left',
            '&:hover, &:focus': {
                zIndex:'2'
            },
            transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
            transitionDuration:'0.25s',
            // transitionDelay:'0.25s',
            filter: 'grayscale(100%)',
            opacity:'0.5'
        },
    },
    imgLower:{
        [theme.breakpoints.between('xs','sm')]: {
            position:'relative',
            display:'wrap',
            top:'3rem',
            // left:'0%',
            left:'45%',
            transform:'translate(-50%,0)',
            width:'auto',
            height:'auto',
            maxWidth:'91%',
            maxHeight:'100%',
            float:'left',
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
            top:'3rem',
            // left:'0%',
            left:'45%',
            transform:'translate(-50%,0)',
            width:'auto',
            height:'auto',
            maxWidth:'91%',
            maxHeight:'100%',
            float:'left',
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
            top:'6rem',
            left:'0%',
            height:'auto',
            maxHeight:'86.59793814432989vh',
            maxWidth:'100%',
            float:'left',
            '&:hover, &:focus': {
                zIndex:'2'
            },
            transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
            transitionDuration:'0.25s',
            // transitionDelay:'0.25s',
            zIndex:'2'
        },
    },
    imgLowerDown:{
        [theme.breakpoints.between('xs','sm')]: {
            position:'relative',
            display:'wrap',
            top:'3rem',
            // left:'0%',
            left:'45%',
            transform:'translate(-50%,0)',
            width:'auto',
            height:'auto',
            maxWidth:'91%',
            maxHeight:'100%',
            float:'left',
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
            top:'3rem',
            // left:'0%',
            left:'45%',
            transform:'translate(-50%,0)',
            width:'auto',
            height:'auto',
            maxWidth:'91%',
            maxHeight:'100%',
            float:'left',
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
            top:'6rem',
            left:'0%',
            height:'auto',
            maxHeight:'86.59793814432989vh',
            maxWidth:'100%',
            float:'left',
            '&:hover, &:focus': {
                zIndex:'2'
            },
            transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
            transitionDuration:'0.25s',
            // transitionDelay:'0.25s',
            filter: 'grayscale(100%)',
            opacity:'0.5',
        },
    },
    // "@keyframes zEffectLowFocus": {
    //     zIndex: '3',
    //     filter: 'grayscale(0%)',
    //     transform: "translateZ(2)"
    //   },
    //   "@keyframes zEffectLow": {
    //     "0%": {
    //       zIndex: '0',
    //       filter: 'grayscale(100%)',
    //       transform: "translateZ(0)"
    //     },
    //     "100%": {
    //       zIndex: '2',
    //       filter: 'grayscale(0%)',
    //       transform: "translateZ(2)"
    //     }
    //   },
    //   "@keyframes zEffectAbv": {
    //     "0%": {
    //       filter: 'grayscale(0%)',
    //     },
    //     "100%": {
    //       filter: 'grayscale(100%)',
    //     }
    // },
    // "@keyframes myEffect": {
    //     "0%": {
    //       opacity: 0,
    //       zIndex:0,
    //       transform: "translate3D(2vw,6vw,0)"
    //     },
    //     "100%": {
    //       opacity: 1,
    //       zIndex:2
    //     //   transform: "translateY(0)"
    //     }
    //   },
    //   "@keyframes myEffectExit": {
    //     "0%": {
    //       opacity: 1,
    //       transform: "translateY(0)"
    //     },
    //     "100%": {
    //       opacity: 0,
    //       transform: "translate3D(2vw,6vw,0)"
    //     }
    //   },
    imgTop2:{
        [theme.breakpoints.between('xs','sm')]: {
            position:'absolute',
            width:'auto',
            height:'auto',
            // left:'10%',
            left:'65%',
            transform:'translate(-60%,0)',
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
            left:'60%',
            transform:'translate(-60%,0)',
            top:'0%',
            maxWidth:'91%',
            maxHeight:'100%',
            '&:hover': {
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
            top:'0%',
            height:'auto',
            maxHeight:'86.59793814432989vh',
            maxWidth:'100%',
            '&:hover': {
                zIndex:'3',
                opacity:'1'
            },
            transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
            transitionDuration:'0.25s',
            // transitionDelay:'0.25s',
            zIndex:'3',
        },
    },
    imgTopDown2:{
        [theme.breakpoints.between('xs','sm')]: {
            position:'absolute',
            width:'auto',
            height:'auto',
            // left:'10%',
            left:'65%',
            transform:'translate(-60%,0)',
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
            left:'60%',
            transform:'translate(-60%,0)',
            top:'0%',
            maxWidth:'91%',
            maxHeight:'100%',
            '&:hover': {
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
            top:'0%',
            height:'auto',
            maxHeight:'86.59793814432989vh',
            maxWidth:'100%',
            '&:hover': {
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
    },
    imgTop3:{
        [theme.breakpoints.between('xs','sm')]: {
            position:'absolute',
            width:'auto',
            height:'auto',
            // left:'10%',
            left:'65%',
            transform:'translate(-60%,0)',
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
            left:'60%',
            transform:'translate(-60%,0)',
            top:'0%',
            maxWidth:'91%',
            maxHeight:'100%',
            '&:hover': {
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
            top:'0%',
            height:'auto',
            maxHeight:'86.59793814432989vh',
            maxWidth:'100%',
            '&:hover': {
                zIndex:'3',
                opacity:'1'
            },
            transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
            transitionDuration:'0.25s',
            // transitionDelay:'0.25s',
            zIndex:'3',
        },
    },
    imgTopDown3:{
        [theme.breakpoints.between('xs','sm')]: {
            position:'absolute',
            width:'auto',
            height:'auto',
            // left:'10%',
            left:'65%',
            transform:'translate(-60%,0)',
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
            left:'60%',
            transform:'translate(-60%,0)',
            top:'0%',
            maxWidth:'91%',
            maxHeight:'100%',
            '&:hover': {
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
            top:'0%',
            height:'auto',
            maxHeight:'86.59793814432989vh',
            maxWidth:'100%',
            '&:hover': {
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
            '&:hover': {
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
            top:'0%',
            height:'auto',
            maxHeight:'86.59793814432989vh',
            maxWidth:'100%',
            '&:hover': {
                zIndex:'3',
                opacity:'1'
            },
            transition: `all 2000ms ${theme.transitions.easing.easeInOut}`,
            transitionDuration:'0.25s',
            // transitionDelay:'0.25s',
            zIndex:'3',
        },
    },
    imgTopDown:{
        [theme.breakpoints.between('xs','sm')]: {
            position:'absolute',
            width:'auto',
            height:'auto',
            // left:'10%',
            top:'0%',
            left:'55%',
            transform:'translate(-50%,0)',
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
            '&:hover': {
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
            top:'0%',
            height:'auto',
            maxHeight:'86.59793814432989vh',
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
        },
    },
    whiteContainer:{
        backgroundColor: '#FFFFFF',
    },
    greyContainer:{
        backgroundColor: '#F3F5F4',
    },
    singleGrid:{
        display:'flex',
        flexDirection:'row-reverse',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginLeft:'9%',
        marginRight:'9%',
        width:'100%',
        paddingTop:'-8vh',
        paddingBottom:'2vh',
        alignItems:'center'
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
            paddingTop:'8vh',
            paddingBottom:'3vh',
            alignItems:'center'        
        },
        display:'flex',
        flexDirection:'row-reverse',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginLeft:'9%',
        marginRight:'9%',
        width:'100%',
        paddingTop:'8vh',
        paddingBottom:'16vh',
        alignItems:'center'
    },
    greyGrid:{
        [theme.breakpoints.between('xs','sm')]: {
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'space-between',
            marginLeft:'9%',
            marginRight:'9%',
            width:'100%',
            paddingTop:'2vh',
            paddingBottom:'2vh',
            alignItems:'center'
        },
        [theme.breakpoints.between('sm','md')]: {
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'space-between',
            marginLeft:'9%',
            marginRight:'9%',
            width:'100%',
            paddingTop:'2vh',
            paddingBottom:'2vh',
            alignItems:'center'
        },
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginLeft:'9%',
        marginRight:'9%',
        width:'100%',
        paddingTop:'8vh',
        paddingBottom:'8vh',
        alignItems:'center'
    },
    greyGridDob:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginLeft:'9%',
        marginRight:'9%',
        width:'100%',
        paddingTop:'8vh',
        // paddingBottom:'16vh',
        alignItems:'center'
    },
    topHeading:{
        [theme.breakpoints.between('xs','sm')]: {
            textAlign: 'left',
            marginLeft: '10%',
            color: '#006936',
            fontSize: '28px'
        },
        [theme.breakpoints.between('sm','md')]: {
            textAlign: 'left',
            marginLeft: '10%',
            color: '#006936',
            fontSize: '28px'
        },
        textAlign: 'left',
        marginLeft: '10%',
        color: '#006936',
        fontSize: '36px'
    },
    topHeadingGrey:{
        backgroundColor:'#F3F5F4',
        width:'100%'
    },
    headerText: {
        [theme.breakpoints.between('xs','sm')]: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color:'white',
            fontFamily:'arial',
            fontSize:'20px'
        },
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color:'white',
        fontFamily:'arial',
        fontSize:'30px'
    },
    headContainer:{
        position:'relative',
        textAlign:'center',
        width:'auto',
        maxWidth: '100%'
    },
    headImgGrid:{
        position:'relative',
        width:'100%',
    },
    headerImg:{
        position:'relative',
        width:'100%',
        height:'100vh',
        objectFit:'cover'
    },
    btn:{
        [theme.breakpoints.between('xs','sm')]: {
            position: 'absolute',
            top: '65%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#006936',
            color: 'white',
            fontSize: '12px',
            padding: '12px 24px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '15px',
            height:'5.555555555555555vh',
            width:'36.447916666666668vw',
            '&:hover': {
                backgroundColor: '#006936',
            },
        },
        [theme.breakpoints.between('sm','md')]: {
            position: 'absolute',
            top: '65%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#006936',
            color: 'white',
            fontSize: '12px',
            padding: '12px 24px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '15px',
            height:'5.555555555555555vh',
            width:'22.447916666666668vw',
            '&:hover': {
                backgroundColor: '#006936',
            },
        },
        position: 'absolute',
        top: '70%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#006936',
        color: 'white',
        fontSize: '16px',
        padding: '12px 24px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '15px',
        height:'5.555555555555555vh',
        width:'17.447916666666668vw',
        '&:hover': {
            backgroundColor: '#006936',
        },
    }
}));


export default function HomeRelay(){
    const classes = useStyles();
    const [hoverImgLower, setHoverImgLower] = useState(false);
    const [hoverImgLower2, setHoverImgLower2] = useState(false);
    const [hoverImgLower3, setHoverImgLower3] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setHoverImgLower(true)
            setHoverImgLower2(true)
            setHoverImgLower3(true)
        }, 7000);
        const intervalFalse = setInterval(() => {
            setHoverImgLower(false)
            setHoverImgLower2(false)
            setHoverImgLower3(false)
        }, 14000);
        return () => clearInterval(interval, intervalFalse);
    
    },[]);

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
        <Grid container className={classes.headContainer}>
            <Grid item xs={12} className={classes.headImgGrid}>
                <img src='./Assets/truck-heading-home.png' className={classes.headerImg}/>
                <p className={classes.headerText}>This is Gledex<br/>Number 1 Logistic Services in Indonesia</p>
                <Button color="#006936" variant="contained" className={classes.btn}>Learn More</Button>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={12} className={classes.topHeadingGrey}>
                <h2 className={classes.topHeading}>What We Are!</h2>
            </Grid>
        </Grid>
        <Grid container className={classes.greyContainer}>
            <Grid container className={classes.greyGrid}>
                <Grid item xl={6} lg={6} md={6} xs={12} sm={12} className={classes.itemGridImg1}>
                    {hoverImgLower === true ?
                    <img 
                        src='./Assets/truk-home.png' 
                        className={classes.imgLower}
                        alt="img1.1"
                        onMouseOver={() => setHoverImgLower(true)}
                        onMouseLeave={()=>setHoverImgLower(true)}
                    />:                  
                    <img 
                        src='./Assets/truk-home.png' 
                        className={classes.imgLowerDown}
                        alt="img1.1"
                        onMouseOver={() => setHoverImgLower(true)}
                        onMouseLeave={()=>setHoverImgLower(true)}
                    />}
                    {hoverImgLower === true ?
                    <img 
                        src='./Assets/home-picture-top.png' 
                        className={classes.imgTopDown}
                        alt="img1.2"
                        onMouseOver={() => setHoverImgLower(false)}
                        onMouseLeave={()=>setHoverImgLower(false)}
                    />:                    
                    <img 
                        src='./Assets/home-picture-top.png' 
                        className={classes.imgTop}
                        alt="img1.2"
                        onMouseOver={() => setHoverImgLower(false)}
                        onMouseLeave={()=>setHoverImgLower(false)}
                    />}
                    {console.log(hoverImgLower)}

                    {/* <img src='./Assets/truk-home.png' className={classes.imgLower}/> */}
                </Grid>
                <Grid item xl={6} lg={6} md={6} xs={12} sm={12} className={classes.itemGridTxt1}>
                    <h2 className={classes.headingRight}>We Deliver Perfection</h2>
                    <p className={classes.textRight}>When your items is in our hands, we guarantee safety and on time. Everything will be secured and delivered with no flaw.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus eleifend sapien, sed consequat velit gravida ut. Nullam eros augue, commodo a metus eget, lacinia feugiat dui.</p>
                    <a className={classes.textRight} style={{color:'#006936', textDecoration:'none'}} href='#'>Learn More...</a>
                </Grid>
            </Grid>
        </Grid>
        <Grid container className={classes.whiteContainer}>
            <Grid container className={classes.whiteGrid}>
                <Grid item xl={6} lg={6} md={6} xs={12} sm={12} className={classes.itemGridImgLand}>
                    {hoverImgLower2 === true ?
                        <img 
                            src='./Assets/car-cargo.png' 
                            className={classes.imgLower2}
                            alt="img2.2"
                            onMouseOver={() => setHoverImgLower2(true)}
                            onMouseLeave={() => setHoverImgLower2(true)}
                        />:
                        <img 
                            src='./Assets/car-cargo.png' 
                            className={classes.imgLowerDown2}
                            alt="img2.2"
                            onMouseOver={() => setHoverImgLower2(true)}
                            onMouseLeave={() => setHoverImgLower2(true)}
                        />}
                    {hoverImgLower2 === true ?
                        <img 
                            src='./Assets/airplane-cargo.png' 
                            className={classes.imgTopDown2}
                            alt="img2.1"
                            onMouseOver={() => setHoverImgLower2(false)}
                            onMouseLeave={() => setHoverImgLower2(false)}
                        />:
                        <img 
                            src='./Assets/airplane-cargo.png' 
                            className={classes.imgTop2}
                            alt="img2.1"
                            onMouseOver={() => setHoverImgLower2(false)}
                            onMouseLeave={() => setHoverImgLower2(false)}
                        />
                    }
                </Grid>
                <Grid item xl={6} lg={6} md={6} xs={12} sm={12} className={classes.itemGridTxt1}>
                    <h2 className={classes.headingRight}>We Deliver Perfection</h2>
                    <p className={classes.textRight}>When your items is in our hands, we guarantee safety and on time. Everything will be secured and delivered with no flaw.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus eleifend sapien, sed consequat velit gravida ut. Nullam eros augue, commodo a metus eget, lacinia feugiat dui.</p>
                    <a className={classes.textRight} style={{color:'#006936', textDecoration:'none'}} href='#'>Learn More...</a>
                </Grid>
            </Grid>
        </Grid>
        <Grid container className={classes.greyContainer}>
            <Grid container className={classes.greyGrid}>
                <Grid item xl={6} lg={6} md={6} xs={12} sm={12} className={classes.itemGridImgLand}>
                    {hoverImgLower3 === true ?
                    <img 
                        src='./Assets/truk-size.png' 
                        className={classes.imgLower3}
                        alt="img3.1"
                        onMouseOver={() => setHoverImgLower3(true)}
                        onMouseLeave={() => setHoverImgLower3(true)}
                    />:
                    <img 
                        src='./Assets/truk-size.png' 
                        className={classes.imgLowerDown3}
                        alt="img3.1"
                        onMouseOver={() => setHoverImgLower3(true)}
                        onMouseLeave={() => setHoverImgLower3(true)}
                    />}
                    {hoverImgLower3 === true ?
                    <img 
                        src='./Assets/container-size.png' 
                        className={classes.imgTopDown3}
                        alt="img3.2"
                        onMouseOver={() => setHoverImgLower3(false)}
                        onMouseLeave={() => setHoverImgLower3(false)}
                    />:
                    <img 
                        src='./Assets/container-size.png' 
                        className={classes.imgTop3}
                        alt="img3.2"
                        onMouseOver={() => setHoverImgLower3(false)}
                        onMouseLeave={() => setHoverImgLower3(false)}
                    />
                    }

                </Grid>
                <Grid item xl={6} lg={6} md={6} xs={12} sm={12} className={classes.itemGridTxt1}>
                    <h2 className={classes.headingRight}>We Deliver Perfection</h2>
                    <p className={classes.textRight}>When your items is in our hands, we guarantee safety and on time. Everything will be secured and delivered with no flaw.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus eleifend sapien, sed consequat velit gravida ut. Nullam eros augue, commodo a metus eget, lacinia feugiat dui.</p>
                    <a className={classes.textRight} style={{color:'#006936', textDecoration:'none'}} href='#'>Learn More...</a>
                </Grid>
            </Grid>
        </Grid>
        <Grid container className={classes.whiteContainer}>
            <Grid container className={classes.greyGrid}>
                <Grid item xs={12}>
                    <h2 className={classes.freightServiceHead}>Our Services</h2>
                </Grid>
                <Grid item xl={4} lg={4} md={4} xs={12} sm={12} className={classes.freightTextGrid}>
                    <img src='./Assets/truck-vector.png' className={classes.freightImgs} />
                    <h2 className={classes.freightHead}>Land <span style={{color:'#FFC700'}}>Freight</span></h2>
                    <p className={classes.freightText} >Kami menyediakan jasa transportasi darat menggunakan mini box, truk box, dan trailer.</p>
                    <button className={classes.freightBtn} >Learn More</button>
                </Grid>
                <Grid item xl={4} lg={4} md={4} xs={12} sm={12} className={classes.freightTextGrid}>
                    <img src='./Assets/freight-vector.png' className={classes.freightImgs} />
                    <h2 className={classes.freightHead}>Sea <span style={{color:'#FFC700'}}>Freight</span></h2>
                    <p className={classes.freightText} >Kami menangani pengiriman laut untuk semua tujuan dari pengiriman tunggal ataupun kargo proyek</p>
                    <button className={classes.freightBtn} >Learn More</button>
                </Grid>
                <Grid item xl={4} lg={4} md={4} xs={12} sm={12} className={classes.freightTextGrid}>
                    <img src='./Assets/airplane-vector.png' className={classes.freightImgs} />
                    <h2 className={classes.freightHead}>Air <span style={{color:'#FFC700'}}>Freight</span></h2>
                    <p className={classes.freightText} >Divisi angkutan udara kami siap untuk memberikan layanan kepada Anda hampir ke setiap lokasi.</p>
                    <button className={classes.freightBtn} >Learn More</button>
                </Grid>
            </Grid>
        </Grid>
        <Grid container className={classes.greyContainer}>
            <Grid container className={classes.greyGridDob}>
                <Grid item xl={6} lg={6} md={6} xs={12} sm={12} className={classes.itemGridImgLand}>
                    <img src='./Assets/services-section3.png' className={classes.imgSingle}/>
                </Grid>
                <Grid item xl={6} lg={6} md={6} xs={12} sm={12} className={classes.itemGridTxtDob}>
                    <h2 className={classes.headingRight}>We Deliver Perfection</h2>
                    <p className={classes.textRight}>When your items is in our hands, we guarantee safety and on time. Everything will be secured and delivered with no flaw.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus eleifend sapien, sed consequat velit gravida ut. Nullam eros augue, commodo a metus eget, lacinia feugiat dui.</p>
                    <a className={classes.textRight} style={{color:'#006936', textDecoration:'none'}} href='#'>Learn More...</a>
                </Grid>
            </Grid>
        </Grid>
        <Grid container className={classes.greyContainer}>
            <Grid container className={classes.singleGrid}>
                <Grid item xl={6} lg={6} md={6} xs={12} sm={12} className={classes.itemGridImgLand}>
                    <img src='./Assets/services-section3.png' className={classes.imgSingle}/>
                </Grid>
                <Grid item xl={6} lg={6} md={6} xs={12} sm={12} className={classes.itemGridTxtDob}>
                    <h2 className={classes.headingRight}>We Deliver Perfection</h2>
                    <p className={classes.textRight}>When your items is in our hands, we guarantee safety and on time. Everything will be secured and delivered with no flaw.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus eleifend sapien, sed consequat velit gravida ut. Nullam eros augue, commodo a metus eget, lacinia feugiat dui.</p>
                    <a className={classes.textRight} style={{color:'#006936', textDecoration:'none'}} href='#'>Learn More...</a>
                </Grid>
            </Grid>
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
    </div>
    );

}