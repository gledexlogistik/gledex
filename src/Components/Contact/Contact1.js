import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import Maps from '../../GoogleMaps/Maps';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    greyGrid:{
        backgroundColor: '#F3F5F4',
        marginTop:'9vh',
        width:'100%'
    },
    rowGrid:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginLeft:'9%',
        marginRight:'9%',
        width:'100%',
        // paddingTop:'8vh',
        // paddingBottom:'16vh',
        alignItems:'center',
        // // border:'1px solid grey'
    },
    imgLoc: {
        paddingLeft:'5vw',
        paddingRight:'5vw',
        position:'relative',
        display:'wrap',
        height:'auto',
        maxWidth:'80%',

    },
    headLoc:{
        marginLeft :'5vw',
        borderBottom:'1px solid grey',
        fontFamily:'arial',
        fontSize:'19px',
        width:'72%',
        color:'#006936'
    },
    txtLoc:{
        [theme.breakpoints.between('xs','sm')]: {
            marginLeft :'5vw',
            fontSize:'14px',
            fontFamily:'arial',
            color:'#006936',
            lineHeight:'25px'
        },
        [theme.breakpoints.between('sm','md')]: {
            marginLeft :'5vw',
            fontSize:'14px',
            fontFamily:'arial',
            color:'#006936',
            lineHeight:'25px'
        },
        marginLeft :'5vw',
        fontSize:'18px',
        fontFamily:'arial',
        color:'#006936',
        lineHeight:'25px'
    },
    imgGrid:{
        position:'relative',
        boxSizing:'border-box',
        flexBasis:'auto',
        flexWrap:'1',
        display:'block',
        height:'auto',
        width:'auto',
        paddinggBottom:'4vh'
        // // border:'1px solid grey',
    },
    textSubHeading:{
        [theme.breakpoints.between('xs','sm')]: {
            fontFamily: 'arial',
            fontSize:'22px',
            paddingLeft:'13vw',
            // fontSize:'1.5vw',
            paddingRight:'5em',
            color: '#006936',
        },
        [theme.breakpoints.between('sm','md')]: {
            fontFamily:'arial',
            fontSize:'22px',
            paddingLeft:'13vw',
            // fontSize:'1.5vw',
            paddingRight:'5em',
            color: '#006936',
        },
        fontFamily: 'arial',
        fontSize:'26px',
        paddingLeft:'13vw',
        // fontSize:'1.5vw',
        paddingRight:'5em',
        color: '#006936',
    },
    heading: {
        [theme.breakpoints.between('xs','sm')]: {
            fontFamily: 'arial',
            fontSize:'24px',
            // fontSize:'2vw',
            color: '#006936',
            paddingLeft:'13vw',
            paddingTop:'0.2em',
            marginBottom:'0em'
        },
        [theme.breakpoints.between('sm','md')]: {
            fontFamily: 'arial',
            fontSize:'24px',
            // fontSize:'2vw',
            color: '#006936',
            paddingLeft:'13vw',
            paddingTop:'0.2em',
            marginBottom:'0em'
        },
        fontFamily:'arial',
        fontSize:'30px',
        // fontSize:'2vw',
        color: '#006936',
        paddingLeft:'13vw',
        paddingTop:'0.2em',
        marginBottom:'0em'
    },
}));

export default function Contact1(){
    const classes = useStyles();

    return(
    <div className={classes.root}>
      <Grid container className={classes.greyGrid}>
        <Grid container>
            <Grid item xs={12}>
                <h2 className={classes.heading}>Contacts</h2>
            </Grid>
            <Grid item xs={12}>
                <p className={classes.textSubHeading}>All of our Offices are opens 8.00 to 17.00 WIB</p>
            </Grid>
        </Grid>
        <Grid container className={classes.rowGrid}>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className={classes.imgGrid}>
                <a href="https://goo.gl/maps/6sGvia3RZ9Y1KqSs8" target="_blank"><img src='./Assets/Gledex Jakarta Maps.png' className={classes.imgLoc}/></a>
                <p className={classes.headLoc}>Jakarta Office</p>
                <p className={classes.txtLoc}>
                Jl. Cempaka Putih Tengah II No. 2D,<br/>
                Jakarta Pusat 10510<br/>
                Whatsapp: +62 81357575757<br/>
                Fax: 021-4203122<br/>
                Email: info@gledex.co.id<br/>
                </p>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className={classes.imgGrid}>
                <a href="https://goo.gl/maps/1D2zF8b8gDHHuinb8" target="_blank"><img src='./Assets/Gledex Bandung Maps.png' className={classes.imgLoc}/></a>
                <p className={classes.headLoc}>Bandung Office</p>
                <p className={classes.txtLoc}>
                Komplek Kopo Mas Regency, Blok 88 X<br/>
                Bandung 40225<br/>
                Phone: 022-54410266<br/>
                <br/>
                <br/>
                </p>
            </Grid>
        </Grid>
        <Grid container className={classes.rowGrid}>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className={classes.imgGrid}>
                <a href="https://goo.gl/maps/b3LWX9inJVLxAr8e6" target="_blank"><img src='./Assets/Gledex Cirebon Maps.png' className={classes.imgLoc}/></a>
                <p className={classes.headLoc}>Cirebon Office</p>
                <p className={classes.txtLoc}>
                Jl. Jendral Sudirman No. 148<br/>
                Cirebon 45144<br/>
                Phone: 0231-8228255<br/>
                <br/>
                </p>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className={classes.imgGrid}>
                <a href="https://goo.gl/maps/xpei6J47Jh6N7cPS8" target="_blank"><img src='./Assets/Gledex Surabaya Maps.png' className={classes.imgLoc}/></a>
                <p className={classes.headLoc}>Surabaya Office</p>
                <p className={classes.txtLoc}>
                Jl. Raya Sedati Gede Komplek Pasar Wisata Juanda Blok C No. 16<br/>
                Jakarta Pusat 10510<br/>
                Surabaya 61253<br/>
                Phone: 031- 9683240<br/>
                </p>
            </Grid>
        </Grid>
      </Grid>
    </div>
    );
}