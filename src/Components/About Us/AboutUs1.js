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
    whiteGrid: {
        maxWidth:'100%',
        width:'auto',
        marginTop:'9vh'
    },
    greyGrid:{
        maxWidth:'100%',
        width:'auto',
        backgroundColor: '#F3F5F4',
    },
    headingAbout: {
        fontFamily:'arial',
        fontSize:'30px',
        color: '#006936',
        paddingLeft:'13vw',
        paddingTop:'0.2em'
    },
    headingVision: {
        fontFamily:'arial',
        fontSize:'30px',
        color: '#006936',
        paddingLeft:'13vw',
        paddingTop:'0.2em'
    },
    headingLeftDescr: {
        fontFamily:'arial',
        fontSize:'26px',
        color: '#006936',
        paddingLeft:'13vw'
    },
    textGreyGridTop: {
        fontFamily:'arial',
        fontSize:'18px',
        paddingLeft:'13vw',
        paddingRight:'13vw',
        textAlign:'justify'
    },
    textGreyGrid: {
        fontFamily:'arial',
        fontSize:'18px',
        paddingLeft:'13vw',
        paddingRight:'13vw',
        paddingBottom:'2em',
        textAlign:'justify'
    }
}));

export default function AboutUs1(){
    const classes = useStyles();

    return(
    <div className={classes.root}>
      <Grid container className={classes.whiteGrid}>
        <Grid item xs={12}>
            <h2 className={classes.headingAbout}>About Us</h2>
        </Grid>
        <Grid item xs={12}>
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
      <Grid container className={classes.greyGrid}>
          <Grid item xs={12}>
              <h2 className={classes.headingVision}>Vision Mission</h2>
          </Grid>
          <Grid item xs={12}>
            <h2 className={classes.headingLeftDescr}>VISION</h2>
          </Grid>
          <Grid item xs={12}>
            <p className={classes.textGreyGridTop}>Menjadi perusahaan Cargo terkemuka Skala Nasional dan Internasional, yang mengedepankan keunggulan kualitas, sumber daya manusia, dan memberikan solusi yang terbaik bagi pelanggan.</p>
          </Grid>
          <Grid item xs={12}>
            <h2 className={classes.headingLeftDescr}>MISSION</h2>
          </Grid>
          <Grid item xs={12}>
            <p className={classes.textGreyGrid}>
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