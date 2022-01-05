import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
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
  itemGridHead1:{
    marginTop:'9vh',
    width:'100%'
  },
  rowGrid:{
    marginTop:'9vh',
    width:'100%'
  },
  textPaper:{
    textAlign:'left'
  },
  headingContent:{
    [theme.breakpoints.between('xs','sm')]: {
      fontFamily: 'arial',
      fontSize:'24px',
      // fontSize:'2vw',
      color: '#006936',
      textAlign:'left',
    },
    [theme.breakpoints.between('sm','md')]: {
      fontFamily: 'arial',
      fontSize:'24px',
      // fontSize:'2vw',
      color: '#006936',
      textAlign:'left'
    },
    fontFamily: 'arial',
    fontSize:'30px',
    // fontSize:'2vw',
    color: '#006936',
    textAlign:'left'
  },
  headingPaper:{
    textAlign:'left'
  },
  paperContentGrid1:{
    [theme.breakpoints.between('xs','sm')]: {
      paddingLeft:'13vw !important'
    },
    [theme.breakpoints.between('sm','md')]: {
      paddingLeft:'19vw !important',
      paddingBottom:'2em !important'
    },
    [theme.breakpoints.between('md','lg')]: {
      paddingLeft:'13vw !important',
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft:'13vw !important',
    },
  },
  paperContentGrid2:{
    [theme.breakpoints.between('xs','sm')]: {
      paddingLeft:'13vw !important'
    },
    [theme.breakpoints.between('sm','md')]: {
      paddingLeft:'13vw !important'
    },
    [theme.breakpoints.up('lg')]: {

    },
  },
  paperPhoto:{
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
  paperGrid:{
    [theme.breakpoints.between('xs', 'sm')]: {
      paddingLeft:'5vw !important',
      paddingRight:'1vw !important'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      paddingLeft:'4vw !important',
      paddingRight:'1vw !important'
    },
    paddingLeft:'2vw !important',
    paddingRight:'1vw !important'
  },
  paperPhotoGrid:{
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
  }
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Armada1(){
    const classes = useStyles();

    return(
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className={classes.rowGrid}>
        <h2 className={classes.heading}>OUR ARMADA</h2>
        <Grid item xs={12} md={12} className={classes.paperGrid}>
          <Item elevation={2}>
            <Grid container spacing={3}>
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12} className={classes.paperPhotoGrid}>
                <img src='./Assets/pickup.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={12} xs={12} className={classes.paperContentGrid1}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <h2 className={classes.headingContent}>PickUp</h2>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <h2 className={classes.headingPaper}>Panjang</h2>
                    <p className={classes.textPaper}>230cm</p>
                    <h2 className={classes.headingPaper}>Tinggi</h2>
                    <p className={classes.textPaper}>60cm</p>
                    <h2 className={classes.headingPaper}>Berat Kosong</h2>
                    <p className={classes.textPaper}>800kg</p>
                  </Grid>
                  <Grid item>
                    <h2 className={classes.headingPaper}>Lebar</h2>
                    <p className={classes.textPaper}>145 cm</p>
                    <h2 className={classes.headingPaper}>Dimensi</h2>
                    <p className={classes.textPaper}>4 CBM</p>
                    <h2 className={classes.headingPaper}>Berat Max</h2>
                    <p className={classes.textPaper}>2 Ton</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} md={12} className={classes.paperGrid}>
          <Item elevation={2}>
            <Grid container spacing={3}>
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12} className={classes.paperPhotoGrid}>
                <img src='./Assets/blandvan.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={12} xs={12} className={classes.paperContentGrid1}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <h2 className={classes.headingContent}>Bland Van</h2>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <h2 className={classes.headingPaper}>Panjang</h2>
                    <p className={classes.textPaper}>250cm</p>
                    <h2 className={classes.headingPaper}>Tinggi</h2>
                    <p className={classes.textPaper}>60cm</p>
                    <h2 className={classes.headingPaper}>Berat Kosong</h2>
                    <p className={classes.textPaper}>750kg</p>
                  </Grid>
                  <Grid item>
                    <h2 className={classes.headingPaper}>Lebar</h2>
                    <p className={classes.textPaper}>145 cm</p>
                    <h2 className={classes.headingPaper}>Dimensi</h2>
                    <p className={classes.textPaper}>1 CBM</p>
                    <h2 className={classes.headingPaper}>Berat Max</h2>
                    <p className={classes.textPaper}>2 Ton</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} md={12} className={classes.paperGrid}>
          <Item elevation={2}>
            <Grid container spacing={3}>
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12} className={classes.paperPhotoGrid}>
                <img src='./Assets/mobilbox.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={12} xs={12} className={classes.paperContentGrid1}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <h2 className={classes.headingContent}>Mobil Box</h2>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <h2 className={classes.headingPaper}>Panjang</h2>
                    <p className={classes.textPaper}>237 cm</p>
                    <h2 className={classes.headingPaper}>Tinggi</h2>
                    <p className={classes.textPaper}>129 cm</p>
                    <h2 className={classes.headingPaper}>Berat Kosong</h2>
                    <p className={classes.textPaper}>1 Ton</p>
                  </Grid>
                  <Grid item>
                    <p className={classes.textPaper}>155 cm</p>
                    <h2 className={classes.headingContent}>&nbsp;</h2>
                    <h2 className={classes.headingPaper}>Dimensi</h2>
                    <p className={classes.textPaper}>4 CBM</p>
                    <h2 className={classes.headingPaper}>Berat Max</h2>
                    <p className={classes.textPaper}>1,5 Ton</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} md={12} className={classes.paperGrid}>
          <Item elevation={2}>
            <Grid container spacing={3}>
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12} className={classes.paperPhotoGrid}>
                <img src='./Assets/cdebak.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={12} xs={12} className={classes.paperContentGrid1}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <h2 className={classes.headingContent}>CDE Bak</h2>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <h2 className={classes.headingPaper}>Panjang</h2>
                    <p className={classes.textPaper}>350 cm </p>
                    <h2 className={classes.headingPaper}>Tinggi</h2>
                    <p className={classes.textPaper}>80cm</p>
                    <h2 className={classes.headingPaper}>Berat Kosong</h2>
                    <p className={classes.textPaper}>1,5 Ton</p>
                  </Grid>
                  <Grid item>
                    <h2 className={classes.headingPaper}>Lebar</h2>
                    <p className={classes.textPaper}>160 cm</p>
                    <h2 className={classes.headingPaper}>Dimensi</h2>
                    <p className={classes.textPaper}>10 CBM</p>
                    <h2 className={classes.headingPaper}>Berat Max</h2>
                    <p className={classes.textPaper}>5,1 Ton</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} md={12} className={classes.paperGrid}>
          <Item elevation={2}>
            <Grid container spacing={3}>
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12} className={classes.paperPhotoGrid}>
                <img src='./Assets/cdebox.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={12} xs={12} className={classes.paperContentGrid1}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <h2 className={classes.headingContent}>CDE Box</h2>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <h2 className={classes.headingPaper}>Panjang</h2>
                    <p className={classes.textPaper}>350 cm </p>
                    <h2 className={classes.headingPaper}>Tinggi</h2>
                    <p className={classes.textPaper}>160 cm</p>
                    <h2 className={classes.headingPaper}>Berat Kosong</h2>
                    <p className={classes.textPaper}>1,5 Ton</p>
                  </Grid>
                  <Grid item>
                    <h2 className={classes.headingPaper}>Lebar</h2>
                    <p className={classes.textPaper}>160 cm</p>
                    <h2 className={classes.headingPaper}>Dimensi</h2>
                    <p className={classes.textPaper}>10 CBM</p>
                    <h2 className={classes.headingPaper}>Berat Max</h2>
                    <p className={classes.textPaper}>5,1 Ton</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} md={12} className={classes.paperGrid}>
          <Item elevation={2}>
            <Grid container spacing={3}>
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12} className={classes.paperPhotoGrid}>
                <img src='./Assets/cddbak.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={12} xs={12} className={classes.paperContentGrid1}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <h2 className={classes.headingContent}>CDD Bak</h2>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <h2 className={classes.headingPaper}>Panjang</h2>
                    <p className={classes.textPaper}>560 cm </p>
                    <h2 className={classes.headingPaper}>Tinggi</h2>
                    <p className={classes.textPaper}>220 cm</p>
                    <h2 className={classes.headingPaper}>Berat Kosong</h2>
                    <p className={classes.textPaper}>2,3 Ton</p>
                  </Grid>
                  <Grid item>
                    <h2 className={classes.headingPaper}>Lebar</h2>
                    <p className={classes.textPaper}>200 cm</p> 
                    <h2 className={classes.headingPaper}>Dimensi</h2>
                    <p className={classes.textPaper}>26 CBM</p>
                    <h2 className={classes.headingPaper}>Berat Max</h2>
                    <p className={classes.textPaper}>7,5 Ton</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} md={12} className={classes.paperGrid}>
          <Item elevation={2}>
            <Grid container spacing={3}>
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12} className={classes.paperPhotoGrid}>
                <img src='./Assets/cddbox.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={12} xs={12} className={classes.paperContentGrid1}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <h2 className={classes.headingContent}>CDD Box</h2>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <h2 className={classes.headingPaper}>Panjang</h2>
                    <p className={classes.textPaper}>560 cm </p>
                    <h2 className={classes.headingPaper}>Tinggi</h2>
                    <p className={classes.textPaper}>220 cm</p>
                    <h2 className={classes.headingPaper}>Berat Kosong</h2>
                    <p className={classes.textPaper}>2,5 Ton</p>
                  </Grid>
                  <Grid item>
                    <h2 className={classes.headingPaper}>Berat Max</h2>
                    <p className={classes.textPaper}>8 Ton</p>
                    <h2 className={classes.headingPaper}>Dimensi</h2>
                    <p className={classes.textPaper}>24 CBM</p>
                    <h2 className={classes.headingPaper}>Lebar</h2>
                    <p className={classes.textPaper}>200 cm</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} md={12} className={classes.paperGrid}>
          <Item elevation={2}>
            <Grid container spacing={3}>
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12} className={classes.paperPhotoGrid}>
                <img src='./Assets/trontonbak.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={12} xs={12} className={classes.paperContentGrid1}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <h2 className={classes.headingContent}>Tronton Bak</h2>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <h2 className={classes.headingPaper}>Panjang</h2>
                    <p className={classes.textPaper}>630 cm </p>
                    <h2 className={classes.headingPaper}>Tinggi</h2>
                    <p className={classes.textPaper}>230 cm</p>
                    <h2 className={classes.headingPaper}>Berat Kosong</h2>
                    <p className={classes.textPaper}>7,2 Ton</p>
                  </Grid>
                  <Grid item>
                    <h2 className={classes.headingPaper}>Lebar</h2>
                    <p className={classes.textPaper}>220 cm</p>
                    <h2 className={classes.headingPaper}>Dimensi</h2>
                    <p className={classes.textPaper}>30 CBM</p>
                    <h2 className={classes.headingPaper}>Berat Max</h2>
                    <p className={classes.textPaper}>15 Ton</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} md={12} className={classes.paperGrid}>
          <Item elevation={2}>
            <Grid container spacing={3}>
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12} className={classes.paperPhotoGrid}>
                <img src='./Assets/trontonwingbox.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={12} xs={12} className={classes.paperContentGrid1}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <h2 className={classes.headingContent}>Tronton Wingbox</h2>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <h2 className={classes.headingPaper}>Panjang</h2>
                    <p className={classes.textPaper}>940 cm </p>
                    <h2 className={classes.headingPaper}>Tinggi</h2>
                    <p className={classes.textPaper}>290 cm</p>
                    <h2 className={classes.headingPaper}>Berat Kosong</h2>
                    <p className={classes.textPaper}>7,2 Ton</p>
                  </Grid>
                  <Grid item>
                    <h2 className={classes.headingPaper}>Lebar</h2>
                    <p className={classes.textPaper}>240 cm</p>
                    <h2 className={classes.headingPaper}>Dimensi</h2>
                    <p className={classes.textPaper}>65 CBM</p>
                    <h2 className={classes.headingPaper}>Berat Max</h2>
                    <p className={classes.textPaper}>25 Ton</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} md={12} className={classes.paperGrid}>
          <Item elevation={2}>
            <Grid container spacing={3}>
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12} className={classes.paperPhotoGrid}>
                <img src='./Assets/sliddingbad.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={12} xs={12} className={classes.paperContentGrid1}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <h2 className={classes.headingContent}>Slidding Bad</h2>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <h2 className={classes.headingPaper}>Panjang</h2>
                    <p className={classes.textPaper}>1800 cm </p>
                    <h2 className={classes.headingPaper}>Tinggi</h2>
                    <p className={classes.textPaper}>150 cm</p>
                    <h2 className={classes.headingPaper}>Berat Kosong</h2>
                    <p className={classes.textPaper}>- Ton</p>
                  </Grid>
                  <Grid item>
                    <h2 className={classes.headingPaper}>Lebar</h2>
                    <p className={classes.textPaper}>240 cm</p>
                    <h2 className={classes.headingPaper}>Dimensi</h2>
                    <p className={classes.textPaper}>- CBM</p>
                    <h2 className={classes.headingPaper}>Berat Max</h2>
                    <p className={classes.textPaper}>45 Ton</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} md={12} className={classes.paperGrid}>
          <Item elevation={2}>
            <Grid container spacing={3}>
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12} className={classes.paperPhotoGrid}>
                <img src='./Assets/yapcrane.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={12} xs={12} className={classes.paperContentGrid1}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <h2 className={classes.headingContent}>Yap Crane</h2>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <h2 className={classes.headingPaper}>Panjang</h2>
                    <p className={classes.textPaper}>850 cm </p>
                    <h2 className={classes.headingPaper}>Tinggi</h2>
                    <p className={classes.textPaper}>150 cm</p>
                    <h2 className={classes.headingPaper}>Berat Kosong</h2>
                    <p className={classes.textPaper}>- Ton</p>
                  </Grid>
                  <Grid item>
                    <h2 className={classes.headingPaper}>Lebar</h2>
                    <p className={classes.textPaper}>240 cm</p>
                    <h2 className={classes.headingPaper}>Dimensi</h2>
                    <p className={classes.textPaper}>- CBM</p>
                    <h2 className={classes.headingPaper}>Berat Max</h2>
                    <p className={classes.textPaper}>20 Ton</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} md={12} className={classes.paperGrid}>
          <Item elevation={2}>
            <Grid container spacing={3}>
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12} className={classes.paperPhotoGrid}>
                <img src='./Assets/lowboy.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={12} xs={12} className={classes.paperContentGrid1}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <h2 className={classes.headingContent}>Low Boy</h2>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <h2 className={classes.headingPaper}>Panjang</h2>
                    <p className={classes.textPaper}>- cm </p>
                    <h2 className={classes.headingPaper}>Tinggi</h2>
                    <p className={classes.textPaper}>- cm</p>
                    <h2 className={classes.headingPaper}>Berat Kosong</h2>
                    <p className={classes.textPaper}>- Ton</p>
                  </Grid>
                  <Grid item>
                    <h2 className={classes.headingPaper}>Lebar</h2>
                    <p className={classes.textPaper}>- cm</p>
                    <h2 className={classes.headingPaper}>Dimensi</h2>
                    <p className={classes.textPaper}>- CBM</p>
                    <h2 className={classes.headingPaper}>Berat Max</h2>
                    <p className={classes.textPaper}>150 Ton</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} md={12} className={classes.paperGrid}>
          <Item elevation={2}>
            <Grid container spacing={3}>
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12} className={classes.paperPhotoGrid}>
                <img src='./Assets/lowbed.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={12} xs={12} className={classes.paperContentGrid1}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <h2 className={classes.headingContent}>Low Bed</h2>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <h2 className={classes.headingPaper}>Panjang</h2>
                    <p className={classes.textPaper}>1200 cm </p>
                    <h2 className={classes.headingPaper}>Tinggi</h2>
                    <p className={classes.textPaper}>100 cm</p>
                    <h2 className={classes.headingPaper}>Berat Kosong</h2>
                    <p className={classes.textPaper}>- Ton</p>
                  </Grid>
                  <Grid item>
                    <h2 className={classes.headingPaper}>Lebar</h2>
                    <p className={classes.textPaper}>300 cm</p>
                    <h2 className={classes.headingPaper}>Dimensi</h2>
                    <p className={classes.textPaper}>- CBM</p>
                    <h2 className={classes.headingPaper}>Berat Max</h2>
                    <p className={classes.textPaper}>70 Ton</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} md={12} className={classes.paperGrid}>
          <Item elevation={2}>
            <Grid container spacing={3}>
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12} className={classes.paperPhotoGrid}>
                <img src='./Assets/drycontainer20.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={12} xs={12} className={classes.paperContentGrid1}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <h2 className={classes.headingContent}>Dry Container 20 Feet</h2>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <h2 className={classes.headingPaper}>Panjang</h2>
                    <p className={classes.textPaper}>600 cm </p>
                    <h2 className={classes.headingPaper}>Tinggi</h2>
                    <p className={classes.textPaper}>239 cm</p>
                    <h2 className={classes.headingPaper}>Berat Kosong</h2>
                    <p className={classes.textPaper}>2,3 Ton</p>
                  </Grid>
                  <Grid item>
                    <h2 className={classes.headingPaper}>Lebar</h2>
                    <p className={classes.textPaper}>235 cm</p>
                    <h2 className={classes.headingPaper}>Dimensi</h2>
                    <p className={classes.textPaper}>- CBM</p>
                    <h2 className={classes.headingPaper}>Berat Max</h2>
                    <p className={classes.textPaper}>33 Ton</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} md={12} className={classes.paperGrid}>
          <Item elevation={2}>
            <Grid container spacing={3}>
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12} className={classes.paperPhotoGrid}>
                <img src='./Assets/drycontainer40.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={12} xs={12} className={classes.paperContentGrid1}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <h2 className={classes.headingContent}>Dry Container 40 Feet</h2>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <h2 className={classes.headingPaper}>Panjang</h2>
                    <p className={classes.textPaper}>1200 cm </p>
                    <h2 className={classes.headingPaper}>Tinggi</h2>
                    <p className={classes.textPaper}>239 cm</p>
                    <h2 className={classes.headingPaper}>Berat Kosong</h2>
                    <p className={classes.textPaper}>3,7 Ton</p>
                  </Grid>
                  <Grid item>
                    <h2 className={classes.headingPaper}>Lebar</h2>
                    <p className={classes.textPaper}>235 cm</p>
                    <h2 className={classes.headingPaper}>Dimensi</h2>
                    <p className={classes.textPaper}>- CBM</p>
                    <h2 className={classes.headingPaper}>Berat Max</h2>
                    <p className={classes.textPaper}>64 Ton</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
    );
}