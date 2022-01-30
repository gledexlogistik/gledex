import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@mui/material';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 0
    },
    footerMenuHeader:{
      [theme.breakpoints.between('xs','sm')]: {
        fontFamily:'arial',
        fontSize:'14px',
        fontWeight:'700',
        color:'white',
        paddingBottom:'1vh'
      },
      [theme.breakpoints.between('sm','md')]: {
        fontFamily:'arial',
        fontSize:'14px',
        fontWeight:'700',
        color:'white',
        paddingBottom:'1vh'
      },
      fontFamily:'arial',
      fontSize:'16px',
      fontWeight:'700',
      color:'white',
      paddingBottom:'1vh'
    },
    footerMenuItem:{
      [theme.breakpoints.between('xs','sm')]: {
        display:'block',
        fontFamily:'arial',
        fontSize:'12px',
        fontWeight:'500',
        color:'white'
      },
      [theme.breakpoints.between('sm','md')]: {
        display:'block',
        fontFamily:'arial',
        fontSize:'12px',
        fontWeight:'500',
        color:'white'
      },
      display:'block',
      fontFamily:'arial',
      fontSize:'16px',
      fontWeight:'500',
      color:'white'
    },
    copyRightInfo:{
      display:'block',
      paddingTop:'4.5vh'
    },
    footerMenuCol:{
      display:'block',
      flexBasis:'0%',
      width:'100%',
      flexGrow:1,
      flexShrink:1
    },
    footerMenus:{
      [theme.breakpoints.down('xs')]: {
        columnGap: '20vw',
        rowGap:'5vh'
      },
      alignItems:'flex-start',
      display:'flex',
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'flex-start',
      width:'60.79%',
    },
    footerSection:{
      backgroundColor:'#006936'
    },
    footerCopyRight:{
      [theme.breakpoints.between('xs','sm')]: {
        color:'#FFFFFF',
        fontSize: '10px',
        fontFamily:'arial',
        marginBlockEnd:'0.5em'
      },
      // [theme.breakpoints.down('md')]: {
      //   color:'#FFFFFF',
      //   fontSize: '10px',
      //   fontFamily:'arial',
      //   marginBlockEnd:'0.5em'
      // },
      color:'#FFFFFF',
      fontSize: '12px',
      fontFamily:'arial',
      marginBlockEnd:'0.5em'
    },
    footerInfo:{
      display:'flex',
      flexDirection:'column',
      flexWrap:'wrap',
      alignItems:'flex-start',
      width: '39.02439024%',
      justifyContent:'space-between'
    },
    footerGrid:{
      display:'flex',
      alignItems:'stretch',
      flexDirection:'row',
      justifyContent:'space-between',
      flexWrap:'wrap',
      padding: '3vh 0',
      paddingBottom:'1vh',
      paddingLeft: '9%',
      paddingRight: '6%'
    },
    footerBio:{
      [theme.breakpoints.between('xs', 'sm')]: {
        display:'block',
        color:'white', 
        textAlign:'left',
        fontSize: '14px',
        lineHeight:'25.87px',
        fontFamily:'arial',
        fontWeight:'500',
        paddingRight:'15vw'
      },
      display:'block',
      color:'white', 
      textAlign:'left',
      // fontSize: '18px',
      fontSize: '16px',
      // lineHeight:'35.87px',
      lineHeight:'30px',
      fontFamily:'arial',
      // fontWeight:'500',
      fontWeight:'700',
      paddingRight:'15vw'
    },
    footerLogo: {
      // [theme.breakpoints.between('xs','sm')]: {
      //   marginLeft:'50px'
      // },
      // [theme.breakpoints.between('sm','md')]: {
      //   marginLeft:'50px'
      // },
      // [theme.breakpoints.up('lg')]: {
      //   marginLeft: '100px'
      // },
      // [theme.breakpoints.up('xl')]: {
      //   marginLeft: '200px'
      // },
      // display:'block',
      // boxSizing:'border-box',
      // maxWidth:'100%',
      // // width:'7.446808510638298vw',
      // height:'12.585034013605442vh',
      paddingLeft:'9%',
      display:'block',
      maxWidth:'100%',
      height:'9vh' 
    },
    link:{
      textDecoration:'none',
      color:'white',
    },
    ptag:{
      display: 'block !improtant',
      margin: '0px !important',
      border: '0px !important',
      padding: '0px !important'
    }
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer>
      <Grid container style={{width: '100%'}}>
        <Grid item xs={12}>
            <img src='./Assets/gledex-logo.png' className={classes.footerLogo}/>
        </Grid>
      </Grid>
      <Grid container className={classes.footerSection}>
        <Grid container className={classes.footerGrid}>
          <Grid container className={classes.footerInfo}>
              <Grid item xl={6} lg={6} md={12} xs={12} sm={12} className={classes.itemGridImg1}>
                <p className={classes.footerBio}>Puasnya Pelanggan Adalah Nafas Kami, Tetap Profesional, Layani Dengan Hati.<br/>
                  Halangan Dengan Semangat Tinggi Demi Visi Kami.<br/>
                  Terus Berinovasi Dengan Dedikasi Tinggi.<br/>
                  GLEDEX LOGISTICS, Cepat Dan Tepat
                </p>
              </Grid>
              <Grid item xl={6} lg={6} md={12} xs={9} sm={12} className={classes.footerMenus}>
                <Grid container className={classes.footerMenuCol}>
                  <h2 className={classes.footerMenuHeader}>Services</h2>
                  <Grid container style={{display:'block', color:'white',fontFamily:'arial', fontSize:'12px', fontWeight:'500'}}>
                    <Grid item>
                      <a href="/jaskudo" className={classes.link}>JasKu Do</a>
                    </Grid>
                    <br/>
                    <Grid item>
                      <a href="/jakadalu" className={classes.link}>JaKa DaLu</a>
                    </Grid>
                    <br/>
                    <Grid item>
                      <a href="/household" className={classes.link}>Household</a>
                    </Grid>
                    <br/>
                    <Grid item>
                      <a href="/warehouse" className={classes.link}>Warehouse</a>
                    </Grid>
                    <br/>
                    <Grid item>
                      <a href="/armada" className={classes.link}>Armada</a>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className={classes.footerMenuCol}>
                  <h2 className={classes.footerMenuHeader}>Gallery</h2>
                  <Grid container  style={{display:'block', color:'white',fontFamily:'arial', fontSize:'12px', fontWeight:'500'}}>
                    <Grid item>
                      <a href="/gallery" className={classes.link}>Projects</a>
                    </Grid>
                    <br/>
                    <Grid item>
                      <a href="/gallery" className={classes.link}>Gathering</a>
                    </Grid>
                    <br/>
                    <Grid item>
                      <a href="/gallery" className={classes.link}>CSR</a>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className={classes.footerMenuCol}>
                  <h2 className={classes.footerMenuHeader}>About</h2>
                  <Grid container style={{display:'block', color:'white',fontFamily:'arial', fontSize:'12px', fontWeight:'500'}}>
                    <Grid item>
                      <a href="/aboutus" className={classes.link}>Overview</a>
                    </Grid>
                    <br/>
                    <Grid item>
                      <a href="/structure" className={classes.link}>Structure and <br/>Legal</a>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className={classes.footerMenuCol}>
                  <h2 className={classes.footerMenuHeader}>Contact Us</h2>
                  <Grid container style={{display:'block', color:'white',fontFamily:'arial', fontSize:'12px', fontWeight:'500'}}>
                    <Grid item>
                      <p className={classes.ptag}><a className={classes.link} href="https://wa.me/message/KMHQ55COCYWMB1" target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
                    </Grid>
                    <br/>
                    <Grid item>
                      <p className={classes.ptag}><a className={classes.link} href="https://instagram.com/gledexlogistik?utm_medium=copy_link" target="_blank" rel="noopener noreferrer">Instagram</a></p>
                    </Grid>
                    <br/>
                    <Grid item>
                      <p className={classes.ptag}><a className={classes.link} href="https://www.facebook.com/gledex.logistics" target="_blank" rel="noopener noreferrer">Facebook</a></p>
                    </Grid>
                  </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.copyRightInfo}>
              <p className={classes.footerCopyRight}>©2021 Gledex Logistics. All rights reserved</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}
