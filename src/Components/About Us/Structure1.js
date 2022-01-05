import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    whiteGrid:{
        maxWidth:'100%',
        width:'auto',
        marginTop:'9vh'
    },
    heading: {
        [theme.breakpoints.down('md')]: {
            fontFamily:'arial',
            fontSize:'22px',
            color: '#006936',
            paddingLeft:'13vw',
            paddingRight:'13vw',
            paddingTop:'2.2em',
            marginBlockStart:'0em',
            marginBlockEnd:'0em'          
        },
        fontFamily:'arial',
        fontSize:'30px',
        color: '#006936',
        paddingLeft:'13vw',
        paddingTop:'0.2em'
    },
    textSubHeading:{
        [theme.breakpoints.down('md')]: {
            fontFamily:'arial',
            fontSize:'16px',
            paddingLeft:'13vw',
            paddingRight:'2em',
            color: '#006936',   
            marginBlockStart:'0em', 
        },
        fontFamily:'arial',
        fontSize:'26px',
        paddingLeft:'13vw',
        paddingRight:'5em',
        color: '#006936',
    },
    textWhiteGrid:{
        fontFamily:'arial',
        fontSize:'18px',
        paddingLeft:'13vw',
        paddingRight:'5em',
    },
    headingGreySub:{
        [theme.breakpoints.down('md')]: {
            fontFamily:'arial',
            fontSize:'20px',
            color: '#006936',
            paddingLeft:'13vw',
            paddingTop:'0.2em'            
        },
        fontFamily:'arial',
        fontSize:'26px',
        color: '#006936',
        paddingLeft:'13vw',
        paddingTop:'0.2em'
    },
    imgWhiteGrid:{
        [theme.breakpoints.down('md')]: {
            position:'absolute',
            maxWidth:'100%',
            maxHeight:'100%',
            height:'70.85185185185185vh',
            width:'65.739583333333334vw',
            paddingLeft:'5vw',
            paddingRight:'5vw'           
        },
        position:'absolute',
        maxWidth:'100%',
        maxHeight:'100%',
        height:'auto',
        width:'auto',
        paddingLeft:'6vw',
        paddingRight:'7vw'
    },
    imgGrid: {
        [theme.breakpoints.between('xs','sm')]: {
            position:'relative',
            boxSizing:'border-box',
            flexBasis:'auto',
            flexWrap:'1',
            display:'block',
            height:'46vh',
            width:'50%',           
        },
        [theme.breakpoints.down('md')]: {
            position:'relative',
            boxSizing:'border-box',
            flexBasis:'auto',
            flexWrap:'1',
            display:'block',
            height:'50vh',
            width:'70%',           
        },
        position:'relative',
        boxSizing:'border-box',
        flexBasis:'auto',
        flexWrap:'1',
        display:'block',
        height:'100vh',
        width:'50%',
    },
    greyGrid:{
        maxWidth:'100%',
        width:'100%',
        marginTop:'2vh',
        backgroundColor:'#F3F5F4'  
    }
}));

export default function Structure1(){
    const classes = useStyles();

    return(
    <div className={classes.root}>
        <Grid container>
            <Grid container spacing={3} className={classes.whiteGrid}>
                <Grid item xs={12}>
                    <h2 className={classes.heading}>Structure</h2>
                    <p className={classes.textSubHeading}>
                        If you have some question or inquiries, feel free to contact us
                    </p>
                </Grid>
                {/* <Grid item xs={12}>

                </Grid> */}
            </Grid>
            <Grid container justifyContent="center">
                <Grid item xs={12} className={classes.imgGrid}>
                    <img className={classes.imgWhiteGrid} src='./Assets/struktur.png'/>
                </Grid>
            </Grid>
            <Grid container className={classes.greyGrid}>
                <Grid item>
                    <h2 className={classes.heading}>
                        DOKUMENTASI LEGAL USAHA
                    </h2>
                    <h2 className={classes.headingGreySub}>
                        PT GLOBAL BATI EKSPRESINDO
                    </h2>
                    <p className={classes.textWhiteGrid}>
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