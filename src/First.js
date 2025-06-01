import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';

import bgheader from './bgheader.png';
import A_R_U from './A_R_U.jpg'
import { alignProperty } from '@mui/material/styles/cssUtils';



function First() {
return (
    <Box>
        <Grid sx={{
             height:'100%',
             backgroundImage:`url(${bgheader})`,
             backgroundSize: "cover",
             backgroundPosition: "center",
             backgroundRepeat: "no-repeat",
             zIndex: "-1",
             position: "fixed"
        }} container spacing={0}>
        
    </Grid>
    <Grid sx={{position:'relative'}}>
        <Grid container spacing={1}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}><br />
                 <center><i className="borderstyles" style={{ fontSize: '55px', fontWeight: 'bold', color: 'white' }}>Hello...! </i></center>
                 <center><img src={A_R_U} className="pf" /></center>
                    <center><i><span className='letterfont' style={{ fontSize: '30px', fontWeight: 'bold', color: 'white' }}> I'm </span>
                    <span> <span className="letter text-color font">A</span>
                        <b className="letter text-color font">R</b>
                        <b className="letter text-color">U</b>
                        <b className="letter text-color">N</b>
                        <b className="letter text-color">A</b></span></i></center>
            </Grid>
            <Grid xs={4} ></Grid>
            
        </Grid><br />
        <Grid container spacing={1}>
            <Grid xs={2}></Grid>
        <Grid xs={8} >
            <center>
                <i><span style={{ fontSize: '15px', fontWeight: 'bold', color: 'rgb(254, 184, 33)' }}>Software Engineer</span></i><br />
                
                  <p className='headpara' style={{
                               lineHeight: '2',
                              color: 'white',
                            }}>"Computer Science and Engineering graduate | Full Stack Developer experienced in PHP, Html, Css, Bootstrap, Javascript, Ajax, Jquery, Codeigniter4, Mysql, Postgresql, MaterialUI, Java, Springboot | Eager to contribute my coding skills to drive innovation | Proven ability to learn quickly and excel in collaborative environments | Open to new opportunities and committed to enhancing team success."</p>
                            
                            <center><div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                        
                                         <a href="https://wa.me/<9488360328>?text=Hi" target="_blank" rel="noopener noreferrer" >
                                            <WhatsAppIcon className="wts" />
                                          </a>
                                          <a href="https://www.linkedin.com/in/aruna-mk-a85466244/" target="_blank" rel="noopener noreferrer">
                                            <LinkedInIcon className="wts" />
                                          </a>&nbsp;
                                        <Link href="#about" className='linkhover wts' style={{ textDecoration: 'none', padding: '2px', color: 'white',fontSize:'15px' }}>   &nbsp;Download CV<DownloadIcon sx={{verticalAlign: 'middle'}} className="wts" /></Link>
                                        </div></center>
                {/* <span className='link' ><br /> */}
              {/* <Link href="#about" className='linkhover wts' style={{ textDecoration: 'none', padding: '10px', color: 'white' }}>   &nbsp;Download CV  &nbsp;<DownloadIcon sx={{verticalAlign: 'middle'}} className="wts" /></Link> */}
              {/* <Link href="#about" className='linkhover' style={{ textDecoration: 'none', padding: '10px', color: 'white' }}>About</Link>   &nbsp;|   &nbsp;
              <Link href="index.html" className='linkhover' style={{ textDecoration: 'none', padding: '10px', color: 'white' }}>Skills</Link> */}

            {/* </span> */}
            </center>
            
            <br /> <br />
            </Grid>
        </Grid>
        </Grid>
    </Box>
    


);

}
export default First;
