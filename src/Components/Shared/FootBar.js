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
    contactGrid: {
      [theme.breakpoints.between('xs','sm')]: {
        marginRight:'1000px'
      },
    },
    footerBio: {
      [theme.breakpoints.between('xs','sm')]: {
        color:'white', 
        textAlign:'left',
        fontSize: '12px',
        lineHeight:'14.06px',
        fontFamily:'arial',
        marginLeft:'50px',
        marginRight:'50px'
      },
      [theme.breakpoints.between('sm','md')]: {
        color:'white', 
        textAlign:'left',
        fontSize: '22px',
        lineHeight:'24.06px',
        fontFamily:'arial',
        marginLeft:'50px',
        marginRight:'50px'
      },
      [theme.breakpoints.up('lg')]: {
        color:'white', 
        textAlign:'left',
        fontSize: '22px',
        lineHeight:'35.06px',
        fontFamily:'arial',
        marginLeft:'100px',
        marginRight:'-100px'
      },
      [theme.breakpoints.up('xl')]: {
        color:'white', 
        textAlign:'left',
        fontSize: '22px',
        lineHeight:'24.06px',
        fontFamily:'arial',
        marginLeft:'200px'
      },
    },
    footerTextItem: {
      [theme.breakpoints.between('xs','sm')]: {
        display:'block'
      },
      [theme.breakpoints.between('sm','md')]: {
        display:'inline'
      },
      [theme.breakpoints.between('md','lg')]: {
        display:'inline'
      },
      [theme.breakpoints.up('lg')]: {
        display:'inline'
      },
      [theme.breakpoints.up('xl')]: {
        display:'inline'
      },
    },
    footerTextGrid: {
      [theme.breakpoints.between('xs','sm')]: {
        marginLeft:'-85px'
      },
      [theme.breakpoints.between('sm','md')]: {
        marginLeft:'-135px'
      },
      [theme.breakpoints.between('md','lg')]: {
        marginLeft:'-385px'
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft:'-50px'
      },
      [theme.breakpoints.up('xl')]: {
        marginLeft:'-100px'
      },
    },
    footerCopyRight: {
      [theme.breakpoints.between('xs','sm')]: {
        color:'#FFFFFF',
        fontSize: '13px',
        fontFamily:'arial',
        marginLeft:'50px'
      },
      [theme.breakpoints.between('sm','md')]: {
        color:'#FFFFFF',
        fontSize: '13px',
        fontFamily:'arial',
        marginLeft:'50px'
      },
      [theme.breakpoints.up('lg')]: {
        color:'#FFFFFF',
        fontSize: '18px',
        fontFamily:'arial',
        marginLeft:'100px'
      },
      [theme.breakpoints.up('xl')]: {
        color:'#FFFFFF',
        fontSize: '18px',
        fontFamily:'arial',
        marginLeft:'200px'
      },
    },
    footerHeading: {
      [theme.breakpoints.between('xs','sm')]: {
        color:'white',
        fontSize:'18px',
        fontFamily:'arial'
      },
      [theme.breakpoints.between('sm','md')]: {
        color:'white',
        fontSize:'18px',
        fontFamily:'arial'
      },
      [theme.breakpoints.up('lg')]: {
        color:'white',
        fontSize:'18px',
        fontFamily:'arial'
      },
      [theme.breakpoints.up('xl')]: {
        color:'white',
        fontSize:'18px',
        fontFamily:'arial'
      },
    },
    footerText: {
      [theme.breakpoints.between('xs','sm')]: {
        color:'white',
        fontSize:'15px',
        fontFamily:'arial'
      },
      [theme.breakpoints.between('sm','md')]: {
        color:'white',
        fontSize:'13px',
        fontFamily:'arial'
      },
      [theme.breakpoints.up('lg')]: {
        color:'white',
        fontSize:'16px',
        fontFamily:'arial'
      },
      [theme.breakpoints.up('xl')]: {
        color:'white',
        fontSize:'16px',
        fontFamily:'arial'
      },
    },
    footerLogo: {
      [theme.breakpoints.between('xs','sm')]: {
        marginLeft:'50px'
      },
      [theme.breakpoints.between('sm','md')]: {
        marginLeft:'50px'
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: '100px'
      },
      [theme.breakpoints.up('xl')]: {
        marginLeft: '200px'
      },
    },
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FootBar() {
  const classes = useStyles();

  return (
    <footer>
    <Grid container style={{marginTop:'23px', width: '100%'}}>
        <Grid item xs={12}>
            <img src='./Assets/gledex-logo.png' className={classes.footerLogo}/>
        </Grid>
    </Grid>
    <Box sx={{ flexGrow: 1 }} bgcolor='#006936' style={{width: '100%', marginTop: '20px'}}>
      <Grid container spacing={2}>
        <Grid item xl={4} lg={4} xs={12} sm={12}>
          <Box>
            <p className={classes.footerBio}>Puasnya Pelanggan Adalah Nafas Kami, Tetap Profesional, Layani Dengan Hati.
            Halangan Dengan Semangat Tinggi Demi Visi Kami.
            Terus Berinovasi Dengan Dedikasi Tinggi.
            GLEDEX LOGISTICS, Cepat Dan Tepat</p>
          </Box>
        </Grid>
        <Grid item xl={8} lg={8} xs={12} sm={12} className={classes.footerTextItem}>
          <Grid   
            container
            direction="row"
            justifyContent="flex-end"
            columnGap={10}
            className={classes.footerTextGrid}>
              <Grid item>
                <Box>
                  <h4 className={classes.footerHeading}>Services</h4>
                </Box>
                <Box>
                  <Link href='#'>
                      <span className={classes.footerText}>Services List</span>
                  </Link>
                </Box>
                <br/>
                <Box>
                  <Link href='/armada'>
                    <span className={classes.footerText}>Armada</span>
                  </Link>
                </Box>
              </Grid>  
              <Grid item>
                <Box>
                  <h4 className={classes.footerHeading}>Gallery</h4>
                </Box>
                <Box>
                  <Link href='#'>
                    <span className={classes.footerText}>Projects</span>
                  </Link>
                </Box>
                <br/>
                <Box>
                  <Link href='#'>
                    <span className={classes.footerText}>Gathering</span>
                  </Link>
                </Box>
                <br/>
                <Box>
                  <Link href='#'>
                    <span className={classes.footerText}>CSR</span>
                  </Link>
                </Box>
              </Grid>  
              <Grid item>
                <Box>
                  <h4 className={classes.footerHeading}>About</h4>
                </Box>
                <Box>
                  <Link href='/aboutus'>
                    <span className={classes.footerText}>Overview</span>
                  </Link>
                </Box>
                <br/>
                <Box>
                  <Link href='/structure'>
                    <span className={classes.footerText}>Structure <br/>& Legal</span>
                  </Link>
                </Box>
              </Grid>  
              <Grid item className={classes.contactGrid}>
                <Box>
                  <h4 className={classes.footerHeading}>Contact Us</h4>
                </Box>
                <Box>
                  <Link href='#'>
                      <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                      }}>
                          {/* <WhatsAppIcon/> */}
                          <span className={classes.footerText}>WhatsApp</span>
                      </div>
                  </Link>
                </Box>
                <br/>
                <Box>
                  <Link href='#'>
                      <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                      }}>
                          {/* <InstagramIcon/> */}
                          <span className={classes.footerText}>Instagram</span>
                      </div>                
                  </Link>
                </Box>
                <br/>
                <Box>
                  <Link href='#'>
                      <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                      }}>
                          {/* <LinkedInIcon/> */}
                          <span className={classes.footerText}>LinkedIn</span>
                      </div>              
                  </Link>
                </Box>  
                <br/>          
                <Box>
                  <Link href='#'>
                      <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                      }}>
                          {/* <FacebookIcon/> */}
                          <span className={classes.footerText}>Facebook</span>
                      </div> 
                  </Link>
                </Box>
              </Grid>  
          </Grid>              
        </Grid>
      </Grid>
      <Grid container spacing={5} style={{marginBottom:'50px'}}>
        <Grid item>
          <p className={classes.footerCopyRight}>©2021 Gledex Logistics. All rights reserved</p>
        </Grid>
      </Grid>
    </Box>
    </footer>
  );
}
