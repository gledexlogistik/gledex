import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      [theme.breakpoints.between('xs','sm')]: {
      },
      [theme.breakpoints.between('sm','md')]: {
        marginTop: '5px',
        marginLeft: '120px',
        padding: theme.spacing(2),
        textAlign: 'center',
        borderRadius:'10px',
        color: theme.palette.text.secondary,
        width:'500px'
      },
      [theme.breakpoints.between('md','lg')]: {
        marginTop: '5px',
        padding: theme.spacing(2),
        textAlign: 'center',
        borderRadius:'10px',
        color: theme.palette.text.secondary,
        width:'73vw'
      },
      [theme.breakpoints.up('lg')]: {
        marginTop: '0.5%',
        marginLeft: '13%',
        padding: theme.spacing(2),
        textAlign: 'center',
        borderRadius:'10px',
        color: theme.palette.text.secondary,
      },
      [theme.breakpoints.up('xl')]: {
        marginTop: '0.5%',
        marginLeft: '10%',
        marginRight: '10%',
        padding: theme.spacing(2),
        textAlign: 'center',
        borderRadius:'10px',
        color: theme.palette.text.secondary,
      },
    },
    paperPhoto: {
      [theme.breakpoints.between('xs','sm')]: {
        width:'250px'
      },
      [theme.breakpoints.between('sm','md')]: {
      },
      [theme.breakpoints.between('md','lg')]: {
        marginBottom: '70px',
        marginTop: '50px'
      },
      [theme.breakpoints.up('lg')]: {
        marginBottom: '7%',
        marginTop: '2.5%'
      },
    },
    headingContent: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
        textAlign:'left'
      },
      [theme.breakpoints.up('md')]: {
        color: '#000000'
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '24px',
        textAlign:'left',
        color:'#006936'
      },
    },
    headingPaper: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '11px',
        textAlign:'left'
      },
      [theme.breakpoints.up('md')]: {
        color: '#000000'
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '18px',
        textAlign:'left'
      },
    },
    textPaper: {
      [theme.breakpoints.between('xs','sm')]: {

      },
      [theme.breakpoints.between('sm','md')]: {

      },
      [theme.breakpoints.between('md','lg')]: {
        textAlign: 'left',
        marginLeft:'100px'
      },
      [theme.breakpoints.up('lg')]: {
        textAlign: 'left',
        marginLeft:'0%'
      },
      [theme.breakpoints.up('xl')]: {

      },
    },
    paperContentGrid1:{
      [theme.breakpoints.down('sm')]: {
        marginTop:'150px', 
        marginLeft:'-50px'
      },
      [theme.breakpoints.up('md')]: {
      },
      [theme.breakpoints.up('lg')]: {

      },
    },
    paperContentGrid2:{
      [theme.breakpoints.down('sm')]: {
        marginTop:'163px', 
        marginLeft:'30px'
      },
      [theme.breakpoints.up('md')]: {
      },
      [theme.breakpoints.up('lg')]: {

      },
    },
    heading:{
      [theme.breakpoints.between('xs','sm')]: {
        marginTop:'180px', 
        textAlign:'left', 
        marginLeft:'200px', 
        fontSize:'35px', 
        color:'#006936'
      },
      [theme.breakpoints.between('sm','md')]: {
        marginTop:'180px', 
        textAlign:'left', 
        marginLeft:'200px', 
        fontSize:'35px', 
        color:'#006936'
      },
      [theme.breakpoints.between('md','lg')]: {
        marginTop:'11.018518518518517vh', 
        textAlign:'left', 
        marginLeft:'7.5vw', 
        fontSize:'30px', 
        color:'#006936'
      },
      [theme.breakpoints.up('lg')]: {

      },
      [theme.breakpoints.up('xl')]: {
        marginTop:'11.018518518518517vh', 
        textAlign:'left', 
        marginLeft:'7.5vw', 
        fontSize:'30px', 
        color:'#006936'
      },
    },
    itemGridTxt1:{
      display:'block',
      boxSizing:'border-box',
      width:'48%',
      // border:'1px solid grey',
      // padding:'40px',
      paddingRight:'0',
      paddingLeft:'4.8%',
    },
}));

export default function Armada(){
    const classes = useStyles();

    return(
    <div className={classes.root}>
    <Grid container spacing={0} className={classes.itemGridTxt1}>
      <h2 className={classes.heading}>OUR ARMADA</h2>
    </Grid>
    <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={4}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <img src='./Assets/truk-oren.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid1}>
                <h2 className={classes.headingContent}>PickUp</h2>
                <h2 className={classes.headingPaper}>Berat Kosong</h2>
                <p className={classes.textPaper}>800kg</p>
                <h2 className={classes.headingPaper}>Panjang</h2>
                <p className={classes.textPaper}>230cm</p>
                <h2 className={classes.headingPaper}>Tinggi</h2>
                <p className={classes.textPaper}>60cm</p>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid2}>
                <h2 className={classes.headingContent}>&nbsp;</h2>
                <h2 className={classes.headingPaper}>Dimensi</h2>
                <p className={classes.textPaper}>4 CBM</p>
                <h2 className={classes.headingPaper}>Lebar</h2>
                <p className={classes.textPaper}>145 cm</p>
                <h2 className={classes.headingPaper}>Berat Max</h2>
                <p className={classes.textPaper}>2 Ton</p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper} elevation={4}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <img src='./Assets/truk-oren.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid1}>
                <h2 className={classes.headingContent}>PickUp</h2>
                <h2 className={classes.headingPaper}>Berat Kosong</h2>
                <p className={classes.textPaper}>800kg</p>
                <h2 className={classes.headingPaper}>Panjang</h2>
                <p className={classes.textPaper}>230cm</p>
                <h2 className={classes.headingPaper}>Tinggi</h2>
                <p className={classes.textPaper}>60cm</p>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid2}>
                <h2 className={classes.headingContent}>&nbsp;</h2>
                <h2 className={classes.headingPaper}>Dimensi</h2>
                <p className={classes.textPaper}>4 CBM</p>
                <h2 className={classes.headingPaper}>Lebar</h2>
                <p className={classes.textPaper}>145 cm</p>
                <h2 className={classes.headingPaper}>Berat Max</h2>
                <p className={classes.textPaper}>2 Ton</p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={4}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <img src='./Assets/truk-oren.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid1}>
                <h2 className={classes.headingContent}>PickUp</h2>
                <h2 className={classes.headingPaper}>Berat Kosong</h2>
                <p className={classes.textPaper}>800kg</p>
                <h2 className={classes.headingPaper}>Panjang</h2>
                <p className={classes.textPaper}>230cm</p>
                <h2 className={classes.headingPaper}>Tinggi</h2>
                <p className={classes.textPaper}>60cm</p>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid2}>
                <h2 className={classes.headingContent}>&nbsp;</h2>
                <h2 className={classes.headingPaper}>Dimensi</h2>
                <p className={classes.textPaper}>4 CBM</p>
                <h2 className={classes.headingPaper}>Lebar</h2>
                <p className={classes.textPaper}>145 cm</p>
                <h2 className={classes.headingPaper}>Berat Max</h2>
                <p className={classes.textPaper}>2 Ton</p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={4}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <img src='./Assets/truk-oren.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid1}>
                <h2 className={classes.headingContent}>PickUp</h2>
                <h2 className={classes.headingPaper}>Berat Kosong</h2>
                <p className={classes.textPaper}>800kg</p>
                <h2 className={classes.headingPaper}>Panjang</h2>
                <p className={classes.textPaper}>230cm</p>
                <h2 className={classes.headingPaper}>Tinggi</h2>
                <p className={classes.textPaper}>60cm</p>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid2}>
                <h2 className={classes.headingContent}>&nbsp;</h2>
                <h2 className={classes.headingPaper}>Dimensi</h2>
                <p className={classes.textPaper}>4 CBM</p>
                <h2 className={classes.headingPaper}>Lebar</h2>
                <p className={classes.textPaper}>145 cm</p>
                <h2 className={classes.headingPaper}>Berat Max</h2>
                <p className={classes.textPaper}>2 Ton</p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={4}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <img src='./Assets/truk-oren.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid1}>
                <h2 className={classes.headingContent}>PickUp</h2>
                <h2 className={classes.headingPaper}>Berat Kosong</h2>
                <p className={classes.textPaper}>800kg</p>
                <h2 className={classes.headingPaper}>Panjang</h2>
                <p className={classes.textPaper}>230cm</p>
                <h2 className={classes.headingPaper}>Tinggi</h2>
                <p className={classes.textPaper}>60cm</p>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid2}>
                <h2 className={classes.headingContent}>&nbsp;</h2>
                <h2 className={classes.headingPaper}>Dimensi</h2>
                <p className={classes.textPaper}>4 CBM</p>
                <h2 className={classes.headingPaper}>Lebar</h2>
                <p className={classes.textPaper}>145 cm</p>
                <h2 className={classes.headingPaper}>Berat Max</h2>
                <p className={classes.textPaper}>2 Ton</p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={4}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <img src='./Assets/truk-oren.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid1}>
                <h2 className={classes.headingContent}>PickUp</h2>
                <h2 className={classes.headingPaper}>Berat Kosong</h2>
                <p className={classes.textPaper}>800kg</p>
                <h2 className={classes.headingPaper}>Panjang</h2>
                <p className={classes.textPaper}>230cm</p>
                <h2 className={classes.headingPaper}>Tinggi</h2>
                <p className={classes.textPaper}>60cm</p>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid2}>
                <h2 className={classes.headingContent}>&nbsp;</h2>
                <h2 className={classes.headingPaper}>Dimensi</h2>
                <p className={classes.textPaper}>4 CBM</p>
                <h2 className={classes.headingPaper}>Lebar</h2>
                <p className={classes.textPaper}>145 cm</p>
                <h2 className={classes.headingPaper}>Berat Max</h2>
                <p className={classes.textPaper}>2 Ton</p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={4}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <img src='./Assets/truk-oren.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid1}>
                <h2 className={classes.headingContent}>PickUp</h2>
                <h2 className={classes.headingPaper}>Berat Kosong</h2>
                <p className={classes.textPaper}>800kg</p>
                <h2 className={classes.headingPaper}>Panjang</h2>
                <p className={classes.textPaper}>230cm</p>
                <h2 className={classes.headingPaper}>Tinggi</h2>
                <p className={classes.textPaper}>60cm</p>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid2}>
                <h2 className={classes.headingContent}>&nbsp;</h2>
                <h2 className={classes.headingPaper}>Dimensi</h2>
                <p className={classes.textPaper}>4 CBM</p>
                <h2 className={classes.headingPaper}>Lebar</h2>
                <p className={classes.textPaper}>145 cm</p>
                <h2 className={classes.headingPaper}>Berat Max</h2>
                <p className={classes.textPaper}>2 Ton</p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={4}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <img src='./Assets/truk-oren.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid1}>
                <h2 className={classes.headingContent}>PickUp</h2>
                <h2 className={classes.headingPaper}>Berat Kosong</h2>
                <p className={classes.textPaper}>800kg</p>
                <h2 className={classes.headingPaper}>Panjang</h2>
                <p className={classes.textPaper}>230cm</p>
                <h2 className={classes.headingPaper}>Tinggi</h2>
                <p className={classes.textPaper}>60cm</p>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid2}>
                <h2 className={classes.headingContent}>&nbsp;</h2>
                <h2 className={classes.headingPaper}>Dimensi</h2>
                <p className={classes.textPaper}>4 CBM</p>
                <h2 className={classes.headingPaper}>Lebar</h2>
                <p className={classes.textPaper}>145 cm</p>
                <h2 className={classes.headingPaper}>Berat Max</h2>
                <p className={classes.textPaper}>2 Ton</p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={4}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <img src='./Assets/truk-oren.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid1}>
                <h2 className={classes.headingContent}>PickUp</h2>
                <h2 className={classes.headingPaper}>Berat Kosong</h2>
                <p className={classes.textPaper}>800kg</p>
                <h2 className={classes.headingPaper}>Panjang</h2>
                <p className={classes.textPaper}>230cm</p>
                <h2 className={classes.headingPaper}>Tinggi</h2>
                <p className={classes.textPaper}>60cm</p>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid2}>
                <h2 className={classes.headingContent}>&nbsp;</h2>
                <h2 className={classes.headingPaper}>Dimensi</h2>
                <p className={classes.textPaper}>4 CBM</p>
                <h2 className={classes.headingPaper}>Lebar</h2>
                <p className={classes.textPaper}>145 cm</p>
                <h2 className={classes.headingPaper}>Berat Max</h2>
                <p className={classes.textPaper}>2 Ton</p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={4}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <img src='./Assets/truk-oren.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid1}>
                <h2 className={classes.headingContent}>PickUp</h2>
                <h2 className={classes.headingPaper}>Berat Kosong</h2>
                <p className={classes.textPaper}>800kg</p>
                <h2 className={classes.headingPaper}>Panjang</h2>
                <p className={classes.textPaper}>230cm</p>
                <h2 className={classes.headingPaper}>Tinggi</h2>
                <p className={classes.textPaper}>60cm</p>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid2}>
                <h2 className={classes.headingContent}>&nbsp;</h2>
                <h2 className={classes.headingPaper}>Dimensi</h2>
                <p className={classes.textPaper}>4 CBM</p>
                <h2 className={classes.headingPaper}>Lebar</h2>
                <p className={classes.textPaper}>145 cm</p>
                <h2 className={classes.headingPaper}>Berat Max</h2>
                <p className={classes.textPaper}>2 Ton</p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={4}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <img src='./Assets/truk-oren.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid1}>
                <h2 className={classes.headingContent}>PickUp</h2>
                <h2 className={classes.headingPaper}>Berat Kosong</h2>
                <p className={classes.textPaper}>800kg</p>
                <h2 className={classes.headingPaper}>Panjang</h2>
                <p className={classes.textPaper}>230cm</p>
                <h2 className={classes.headingPaper}>Tinggi</h2>
                <p className={classes.textPaper}>60cm</p>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid2}>
                <h2 className={classes.headingContent}>&nbsp;</h2>
                <h2 className={classes.headingPaper}>Dimensi</h2>
                <p className={classes.textPaper}>4 CBM</p>
                <h2 className={classes.headingPaper}>Lebar</h2>
                <p className={classes.textPaper}>145 cm</p>
                <h2 className={classes.headingPaper}>Berat Max</h2>
                <p className={classes.textPaper}>2 Ton</p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={4}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <img src='./Assets/truk-oren.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid1}>
                <h2 className={classes.headingContent}>PickUp</h2>
                <h2 className={classes.headingPaper}>Berat Kosong</h2>
                <p className={classes.textPaper}>800kg</p>
                <h2 className={classes.headingPaper}>Panjang</h2>
                <p className={classes.textPaper}>230cm</p>
                <h2 className={classes.headingPaper}>Tinggi</h2>
                <p className={classes.textPaper}>60cm</p>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid2}>
                <h2 className={classes.headingContent}>&nbsp;</h2>
                <h2 className={classes.headingPaper}>Dimensi</h2>
                <p className={classes.textPaper}>4 CBM</p>
                <h2 className={classes.headingPaper}>Lebar</h2>
                <p className={classes.textPaper}>145 cm</p>
                <h2 className={classes.headingPaper}>Berat Max</h2>
                <p className={classes.textPaper}>2 Ton</p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={4}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <img src='./Assets/truk-oren.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid1}>
                <h2 className={classes.headingContent}>PickUp</h2>
                <h2 className={classes.headingPaper}>Berat Kosong</h2>
                <p className={classes.textPaper}>800kg</p>
                <h2 className={classes.headingPaper}>Panjang</h2>
                <p className={classes.textPaper}>230cm</p>
                <h2 className={classes.headingPaper}>Tinggi</h2>
                <p className={classes.textPaper}>60cm</p>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid2}>
                <h2 className={classes.headingContent}>&nbsp;</h2>
                <h2 className={classes.headingPaper}>Dimensi</h2>
                <p className={classes.textPaper}>4 CBM</p>
                <h2 className={classes.headingPaper}>Lebar</h2>
                <p className={classes.textPaper}>145 cm</p>
                <h2 className={classes.headingPaper}>Berat Max</h2>
                <p className={classes.textPaper}>2 Ton</p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={4}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <img src='./Assets/truk-oren.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid1}>
                <h2 className={classes.headingContent}>PickUp</h2>
                <h2 className={classes.headingPaper}>Berat Kosong</h2>
                <p className={classes.textPaper}>800kg</p>
                <h2 className={classes.headingPaper}>Panjang</h2>
                <p className={classes.textPaper}>230cm</p>
                <h2 className={classes.headingPaper}>Tinggi</h2>
                <p className={classes.textPaper}>60cm</p>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid2}>
                <h2 className={classes.headingContent}>&nbsp;</h2>
                <h2 className={classes.headingPaper}>Dimensi</h2>
                <p className={classes.textPaper}>4 CBM</p>
                <h2 className={classes.headingPaper}>Lebar</h2>
                <p className={classes.textPaper}>145 cm</p>
                <h2 className={classes.headingPaper}>Berat Max</h2>
                <p className={classes.textPaper}>2 Ton</p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={4}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <img src='./Assets/truk-oren.png' className={classes.paperPhoto}/>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid1}>
                <h2 className={classes.headingContent}>PickUp</h2>
                <h2 className={classes.headingPaper}>Berat Kosong</h2>
                <p className={classes.textPaper}>800kg</p>
                <h2 className={classes.headingPaper}>Panjang</h2>
                <p className={classes.textPaper}>230cm</p>
                <h2 className={classes.headingPaper}>Tinggi</h2>
                <p className={classes.textPaper}>60cm</p>
              </Grid>
              <Grid item xs={4} className={classes.paperContentGrid2}>
                <h2 className={classes.headingContent}>&nbsp;</h2>
                <h2 className={classes.headingPaper}>Dimensi</h2>
                <p className={classes.textPaper}>4 CBM</p>
                <h2 className={classes.headingPaper}>Lebar</h2>
                <p className={classes.textPaper}>145 cm</p>
                <h2 className={classes.headingPaper}>Berat Max</h2>
                <p className={classes.textPaper}>2 Ton</p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
    </Grid>
    </div>
    );
}