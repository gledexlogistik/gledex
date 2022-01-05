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
    greyGrid: {
        [theme.breakpoints.between('xs','sm')]: {
          backgroundColor: '#FFFFFF',
          marginTop: '60px'
        },
        [theme.breakpoints.between('sm','md')]: {
          backgroundColor: '#FFFFFF',
          marginTop:'90px'
        },
        [theme.breakpoints.between('md','lg')]: {
          backgroundColor: '#FFFFFF',
          marginTop:'120px'
        },
        [theme.breakpoints.up('lg')]: {
          backgroundColor: '#FFFFFF',
          marginTop: '110px',
        },
        [theme.breakpoints.up('xl')]: {
          backgroundColor: '#FFFFFF',
          marginTop: '10%',
        },
    },
    whiteGrid: {
        [theme.breakpoints.down('sm')]: {
          backgroundColor: '#F3F5F4',
          marginTop: '80px'
        },
        [theme.breakpoints.up('md')]: {
          backgroundColor: '#F3F5F4',
        },
        [theme.breakpoints.up('lg')]: {
          backgroundColor: '#F3F5F4',
          marginTop: '80px',
        },
        [theme.breakpoints.up('xl')]: {
          backgroundColor: '#F3F5F4',
          marginTop: '5%',
        },
    },
    heading: {
        [theme.breakpoints.between('xs','sm')]: {
          color: '#006936',
          marginLeft: '25px',
        },
        [theme.breakpoints.between('sm','md')]: {
          color: '#006936',
        },
        [theme.breakpoints.between('md','lg')]: {
          color: '#006936',
          marginLeft: '25px'
        },
        [theme.breakpoints.up('lg')]: {
          color: '#006936',
          marginLeft: '8%'
        },
        [theme.breakpoints.up('xl')]: {
          color: '#006936',
          marginLeft: '10%',
          fontSize:'36px'
        },
    },
    textGreyGrid: {
        [theme.breakpoints.between('xs','sm')]: {
          marginLeft:'25px'
        },
        [theme.breakpoints.between('sm','md')]: {
        },
        [theme.breakpoints.between('md','lg')]: {
            marginLeft:'25px',
            marginRight:'25px'
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft:'8%'
        },
        [theme.breakpoints.up('xl')]: {
            marginLeft:'10%',
            marginRight:'10%',
            fontSize:'19px'
        },
    },
    textWhiteGrid: {
      [theme.breakpoints.between('xs','sm')]: {
        marginLeft:'25px',
      },
      [theme.breakpoints.between('sm','md')]: {
      },
      [theme.breakpoints.between('md','lg')]: {
          marginLeft:'25px',
          marginRight:'25px'
      },
      [theme.breakpoints.up('lg')]: {
          marginLeft:'8%',
      },
      [theme.breakpoints.up('xl')]: {
          marginLeft:'10%',
          marginRight:'10%',
          fontSize:'19px'
      },
  },
}));

export default function Contact(){
    const classes = useStyles();

    return(
    <div className={classes.root}>
      <Grid container className={classes.greyGrid}>
          <Grid item xs={12}>
          <h2 className={classes.heading}>About Us</h2>
            <p className={classes.textGreyGrid}>
                GLEDEX perusahaan kurir, kargo dan logistik dalam negeri yang tidak hanya menjalankan pendistribusian kiriman melalui jalur darat tetapi kini pendistribusian dilakukan juga melalui jalur udara (plane freight). Kiriman dengan menggunakan jasa trucking  GLEDEX saat ini sudah sampai hampir ke seluruh pelosok Indonesia dan juga memiliki asuransi dalam setiap pengirimannya.<br/><br/>

                GLEDEX didukung oleh armada truck yang siap mengangkut barang–barang kiriman customer dan siap melayani jasa pengiriman mulai pukul 09.00 WIB dengan minimum beban 10 kilogram per kiriman. GLEDEX terus berusaha untuk mengembangkan sayapnya merambah dunia internasional sesuai dengan visi perusahaan. Selain melayani kiriman melalui jalur udara,darat dan laut, GLEDEX juga melayani jasa perpindahan (moving) dan juga warehousing.<br/><br/>

                GLEDEX telah memiliki kemampuan yang cukup untuk memasarkan produk trucking yang memiliki konsep berbeda dari yang selama ini dirasakan masyarakat. Target utama dalam peluncuran layanan angkutan udara, darat dan laut antar pulau adalah berkat keinginan yang besar dari GLEDEX untuk dapat mengangkat daya saing pengusaha lokal dan nasional dalam berkompetisi secara global. Dengan memperkenalkan suatu layanan yang sangat terjangkau namun tetap memberikan peningkatan kualitas layanan baik kecepatan maupun keamanannya.”<br/><br/>

                Mengembangkan bisnis baru bukan berarti tidak ada kendala sama sekali bagi sebuah perusahaan ekspedisi dan kargo. Direktur Pelaksana GLEDEX memaparkan sedikit kendala yang ada, bahwa memperkenalkan suatu kualitas atau nilai tambah kepada konsumen pengguna jasa angkutan darat tidaklah mudah. Pelan-pelan kami harus merubah mindset para pengguna layanan darat ini bahwa pengiriman barang bukan hanya murah, namun juga cepat dan aman.<br/><br/>

                Kiriman layanan darat GLEDEX akan dilengkapi dengan Standard Operation Procedure yang mengutamakan kecepatan dan keamanan. Dimulai sejak proses serah terima, kelayakan packing, manifesting, labelling, trace & tracking sampai dengan penerimaan oleh customer. “Pengangkutan ini pun terjamin keamanannya, seluruh armada GLEDEX dilengkapi oleh teknologi GPS (Global Positioning System), ditangani oleh SDM yang terlatih dan bertanggung jawab. Sistem komunikasi online juga akan mempermudah konsumen dalam memonitor posisi kirimannya.”<br/><br/>

                Dengan menggunakan layanan ini customer juga bisa melakukan pengecekan untuk mengetahui posisi kiriman, dengan menghubungi pusat layanan informasi GLEDEX di nomor telepon (021) 4203120.<br/><br/>
            </p>
          </Grid>
      </Grid>
      <Grid container className={classes.whiteGrid}>
          <Grid item xs={12}>
              <h2 className={classes.heading}>Vision Mission</h2>
          </Grid>
          <Grid item xs={12}>
          <h2 className={classes.heading}>VISION</h2>
              <p className={classes.textWhiteGrid}>Menjadi perusahaan Cargo terkemuka Skala Nasional dan Internasional, yang mengedepankan keunggulan kualitas, sumber daya manusia, dan memberikan solusi yang terbaik bagi pelanggan.</p>
              <h2 className={classes.heading}>MISSION</h2>
              <p className={classes.textWhiteGrid}>
                  Perusahaan kargo terkemuka, skala Nasional dan Internasional.
                  Terus meningkatkan dan berinovasi untuk kepentingan pelanggan.
                  Siap turut membangun bangsa, mengabdi, melayani sepenuh hati.
                  Berkomunikasi secara efektif melalui informasi teknologi sistem cargo dan distribusi.
                  Tetap menjaga kesehatan, keselamatan, dan lingkungan untuk semua kegiatan.
              </p>
          </Grid>
      </Grid>
    </div>
    );
}