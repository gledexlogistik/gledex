import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    whiteGrid: {
        [theme.breakpoints.between('xs','sm')]: {
          backgroundColor: '#FFFFFF',
          marginTop: '80px'
        },
        [theme.breakpoints.between('sm','md')]: {
          backgroundColor: '#FFFFFF',
        },
        [theme.breakpoints.between('md','lg')]: {
          backgroundColor: '#FFFFFF',
          marginTop: '120px',
          width:'100%'
        },
        [theme.breakpoints.up('lg')]: {
          backgroundColor: '#FFFFFF',
          marginTop: '110px',
          width:'100%'
        },
        [theme.breakpoints.up('xl')]: {
          backgroundColor: '#FFFFFF',
          marginTop: '130px',
          width:'100%'
        },
    },
    heading: {
        [theme.breakpoints.between('xs','sm')]: {
          color: '#006936',
          marginLeft: '25px',
        },
        [theme.breakpoints.between('sm','md')]: {
          color: '#006936'
        },
        [theme.breakpoints.between('md','lg')]: {
          color: '#006936',
          marginLeft: '50px'
        },
        [theme.breakpoints.up('lg')]: {
          color: '#006936',
          marginLeft: '100px'
        },
        [theme.breakpoints.up('xl')]: {
          color: '#006936',
          marginLeft: '20%',
          fontSize:'36px'
        },
    },
    headingGreyGrid: {
        [theme.breakpoints.between('xs','sm')]: {
          color: '#006936',
          marginLeft: '25px',
        },
        [theme.breakpoints.between('sm','md')]: {
          color: '#006936'
        },
        [theme.breakpoints.between('md','lg')]: {
          color: '#006936',
          marginLeft: '50px'
        },
        [theme.breakpoints.up('lg')]: {
          color: '#006936',
          marginLeft: '100px'
        },
        [theme.breakpoints.up('xl')]: {
          color: '#006936',
          marginLeft: '10%',
          fontSize:'36px'
        },
    },
    textWhiteGrid: {
        [theme.breakpoints.between('xs','sm')]: {
          marginLeft:'25px'
        },
        [theme.breakpoints.between('sm','md')]: {
        },
        [theme.breakpoints.between('md','lg')]: {
            color: '#006936',
            marginLeft:'50px',
            fontFamily: 'arial',
            fontSize:'18px'
        },
        [theme.breakpoints.up('lg')]: {
            color: '#006936',
            marginLeft:'100px'
        },
        [theme.breakpoints.up('xl')]: {
            color: '#006936',
            marginLeft: '20%',
            fontSize:'30px'
        },
    },
    imgWhiteGrid: {
        [theme.breakpoints.between('xs','sm')]: {
          width:'100%'
        },
        [theme.breakpoints.between('sm','md')]: {
        },
        [theme.breakpoints.between('md','lg')]: {
            marginLeft: '50%',
            width: '521.3px',
            height: '734.6px',
            marginBottom: '100px'
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: '40%',
            width: '821.3px',
            height: '1034.6px',
            marginBottom: '100px'
        },
        [theme.breakpoints.up('xl')]: {
            marginLeft: '55%',
            // width: '821.3px',
            // height: '1034.6px',
            width: 'auto',
            height: 'auto',
            marginBottom: '10%',
        },
    },
    greyGrid: {
        [theme.breakpoints.between('xs','sm')]: {
          backgroundColor: '#F3F5F4',
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
        },
        [theme.breakpoints.up('xl')]: {
          backgroundColor: '#F3F5F4',
          width:'100%'
        },
    },
    textGreyGrid: {
        [theme.breakpoints.between('xs','sm')]: {
          marginLeft:'25px'
        },
        [theme.breakpoints.between('sm','md')]: {
        },
        [theme.breakpoints.between('md','lg')]: {
            marginLeft:'50px',
            marginRight:'50px'
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft:'100px'
        },
        [theme.breakpoints.up('xl')]: {
            fontFamily:'arial',
            marginLeft:'10%',
            fontSize:'30px',
        },
    },
}));

export default function Structure(){
    const classes = useStyles();

    return(
    <div className={classes.root}>
        <Grid container>
            <Grid container spacing={3} className={classes.whiteGrid}>
                <Grid item>
                <h2 className={classes.heading}>Structure</h2>
                <p className={classes.textWhiteGrid}>
                    If you have some question or inquiries, feel free to contact us
                </p>
                <img className={classes.imgWhiteGrid} src='./Assets/struktur.png'/>
                </Grid>
            </Grid>
            <Grid container className={classes.greyGrid}>
                <Grid item>
                    <h2 className={classes.headingGreyGrid}>
                        DOKUMENTASI LEGAL USAHA<br/>
                        PT GLOBAL BATI EKSPRESINDO
                    </h2>
                    <p className={classes.textGreyGrid}>
                    Izin Usaha Jasa Pengurusan Transportasi (SIUJPT) Nomor 396/6.12T/31/-1.819.6/2017, Direktorat Jenderal Perhubungan Laut Kantor Otoritas Pelabuhan Utama Tanjung Priuk<br/><br/>

                    Akte Pendirian Perseroan Terbatas Nomor 54, tanggal 20 Mei 2015, Notaris Maria Gunarti,S.H.,M.Kn<br/><br/>

                    Pengesahan Akta Pendirian Perseroan Terbatas Nomor AHU-2446727.AH.01.01.Tahun 2015, Keputusan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia<br/><br/>

                    Nomor Pokok Wajib Pajak (NPWP) 73.340.827.2-013.000<br/><br/>

                    Nomor Induk Berusaha (NIB) Nomor 9120301881734, tanggal 13 Agustus 2019, Nama KBLI : Jasa Pengurusan Transportasi (JPT), Angkutan Multimoda, Aktivitas Kurir, Aktivitas Agen Kurir<br/><br/>
                    </p>
                </Grid>
            </Grid>
        </Grid>
    </div>
    );
}