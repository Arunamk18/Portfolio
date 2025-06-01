// import pf_png from './pf_png.png';
import CSS from './CSS.png';
import A_R_U from './A_R_U.jpg';
import course from './course.jpg';
import htmlimg from './htmlimg.png';
import graduate from './graduate.png';
import js from './js.png';
import a from './a.png';
import bg_img from './bg_img.jpg';
import b from './b.png';
import c from './c.png';
import p from './p.png';
import j from './j.png';
import ps from './ps.png';
import mysq from './mysq.png';
import psl from './psl.png';


import SchoolIcon from '@mui/icons-material/School';


import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid'
import { Box, Button, Typography } from "@mui/material";
import './App.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import { alignProperty } from '@mui/material/styles/cssUtils';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App() {
  const words = ['Software Engineer', 'Full Stack Developer']; // The words to cycle through
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('in'); // Controls direction of slide (in or out)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('out'); // Start slide-out animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length); // Change to the next word
        setDirection('in'); // Start slide-in animation for the new word
      }, 2000); // Wait for slide-out to complete (1000ms)
    }, 4000); // Change word every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);




  return (
    <Box sx={{
      backgroundImage: `url(${bg_img})`,
      // backgroundColor:'black',
      // background: 'linear-gradient(to top, #531477, #531477,#2774b9, #2774b9)',
      // #531477,#6639b5,#182c9b,#2774b9
      // height: '100vh',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      // opacity:'0.9'
    }}><br /><br /><br /><br />
    
        <br /><br />
        {/* ==================About======================================= */}

        <Grid container spacing={2} id='about'>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}  >
            <Card style={{ color: 'white', border: '2px solid orange', padding: '10px', borderLeft: '3px solid orange', borderRight: '12px solid orange', borderBottomRightRadius: '30px', backgroundColor: 'transparent' }}>
              <CardContent className='align'>
                <center><i style={{ fontSize: '30px',color:'orange' }}><b>About Me</b></i></center><br />
                <i style={{
              textAlign: 'justify', lineHeight: '2',
              color: 'white',
            }}>"I'm aan IT professional with more than 2 year of experience, eager to take on challenges in web development, database management,
            software development, and IT project management. I'm known for helping innovative organizations grow. I'm excited to use my strong
            IT skills and love for innovation to excel in roles related to software and web development in dynamic and collaborative environments."</i><br />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={1} ></Grid>
        </Grid>
        {/* ---------------------- */}
        <br />
        <br />
        <br />
        <Grid container spacing={3}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}><Typography variant='h4' style={{ color: 'orange',fontStyle:'Bold',textAlign:'center', fontWeight: '800' }}>Education</Typography></Grid><br />
          <Grid item xs={4}></Grid>
        {/* </Grid>
        <Grid container> */}
          <Grid item xs={1} ></Grid><br />
                    <Grid item xs={1} className='clip'></Grid>

          <Grid item xs={3}>
            <img src={a} style={{ width: '100%' }} /></Grid>
          {/* <Grid item xs={1} ></Grid> */}
          <Grid item xs={6} style={{ textAlign: 'justify',color:'white' }}><br /><br /><br />
            <Typography variant=""  style={{ fontWeight: '800' }}>B.E Computer Science - (2018-2022)</Typography><br />
            <Typography variant=""  >Bethlahem Institute of Engineering</Typography><br />
            <Typography variant=""  >76%</Typography><br /><br />
            <Typography variant=""  style={{ fontWeight: '800' }}>Java Full-stack Development - (2022)</Typography><br />
            <Typography variant=""  >Qspider Software Training Institute</Typography><br /><br />
            <Typography variant="" >I completed my Java full-stack development course, where I gained knowledge in programming, algorithms, and software development. Throughout my studies, I worked on various projects that helped me build a solid foundation in technology and problem-solving.</Typography><br /><br />

          </Grid>
        </Grid>
        <br />
        <br />
        <br />
       

        
        <Grid style={{padding:"50px",display:"none"}}>
        <Grid style={{ border: '1px solid orange', padding: '10px', borderRight: '5px solid orange', borderRadius: '30px',
           backgroundColor: 'transparent'}}>
        <Typography variant='h4' style={{ color: 'orange',textAlign:'center', fontWeight: '800' }}>Professional Experiance</Typography>
        <br /><br />

        <Grid container style={{color:"white"}}>
          <Grid item xs={1} ></Grid>
          <Grid item xs={5}>
          <Typography variant=""  style={{ fontWeight: '800'}}>NOTECH TRICON PRIVATE LIMITED <span style={{ fontWeight: '600'}}> (January 2023 - May 2024)</span></Typography><br />
          <span>Php Full Stack Development</span><br />
          <span>As a Software Engineer at Notech Tricon Pvt Ltd, I worked on both front-end and back-end development.</span><br/><br/>
          <span><b>Tools</b> : Html,CSS, JavaScript, Ajax, PHP</span><br />
          <span><b>Framework</b> : Bootstrap, Codeigniter4</span><br/><br/>

          <Typography variant=""  style={{ fontWeight: '800'}}>FREELANCE SOFTWARE ENGINEER <span style={{ fontWeight: '600'}}> (May 2024 - July 2024)</span> </Typography><br />
          <span>Worked as a Freelance Backend Developer on a project focusing on server-side development and database management.</span><br /><br />
          <span><b>Technologies</b> : PHP </span><br />
          <span><b>Database</b> : MYSQL </span><br /><br />

          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        </Grid>
        </Grid>
<br/>

        {/* ======================================== */}
        <Typography variant='h4' style={{ color: 'orange',textAlign:'center', fontWeight: '800' }}>Professional Experiance</Typography>
        <Grid container spacing={3} style={{padding:"50px"}} >
        <Grid item xs={4}>
        <Card style={{ color: 'white', 
          border: '1px solid orange', padding: '10px', borderRight: '5px solid orange', borderRadius: '30px',
           backgroundColor: 'transparent'
           }}>
        <CardContent>
        <Typography variant=""  style={{ fontWeight: '800'}}>NOTECH TRICON PRIVATE LIMITED </Typography><br />
        <span style={{ fontWeight: '600',fontSize:"12px"}}>January 2023 - May 2024</span><br /><br />
          <span>As a Software Engineer at Notech Tricon Pvt Ltd, I worked on both front-end and back-end development.</span><br/><br />
          <span><b>Technologies</b> : Html, Css, JavaScript, Ajax, PHP, Jquery</span><br />
          <span><b>Framework</b> : Bootstrap, Codeigniter4</span><br/>
          <span><b>Database</b> : MYSQL </span><br />
        </CardContent>
      </Card>
        </Grid>

        <Grid item xs={4} style={{}}>
        <Card style={{ color: 'white',
          border: '1px solid orange', padding: '10px', borderRight: '5px solid orange', borderRadius: '30px',
           backgroundColor: 'transparent'
           }}>
        <CardContent>
          <Typography variant=""  style={{ fontWeight: '800'}}>FREELANCE SOFTWARE ENGINEER </Typography><br />
          <span style={{ fontWeight: '600',fontSize:"12px"}}>May 2024 - July 2024</span><br /><br />
          <span>Worked as a Freelance Backend Developer on a project focusing on server-side development and database management.</span><br /><br />
          <span><b>Technologies</b> : Html, Css, JavaScript, Ajax, Php, Jquery</span><br />
          <span><b>Framework</b> : Bootstrap, Codeigniter4</span><br/>
          <span><b>Database</b> : MYSQL </span><br />
        </CardContent>
      </Card>
        </Grid>

        <Grid item xs={4}>
        <Card style={{ color: 'white', 
          border: '1px solid orange', padding: '10px', borderRight: '5px solid orange', borderRadius: '30px',
           backgroundColor: 'transparent'
           }}>
        <CardContent>
        <Typography variant=""  style={{ fontWeight: '800'}}>KRAN CONSULTING PVT LTD </Typography><br />
          <span style={{ fontWeight: '600',fontSize:"12px"}}>July 2024 - Present</span><br /><br />
          {/* <span>Java Full Stack Development</span><br /> */}
          <span>As a Software Engineer at Kran Consulting Pvt Ltd, I work on 
            both front-end and back-end development.</span><br/><br />
          <span><b>Technologies</b> : Java, React Js, Css, Javascript, Thymeleaf, Jquery</span><br />
          <span><b>Framework</b> : Springboot, MaterialUI</span><br/>
          <span><b>Database</b> : Postgresql </span><br />

        </CardContent>
      </Card>
        </Grid>
        <Grid item xs={1}></Grid>
        </Grid><br />

        <Grid container spacing={3}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}><Typography variant='h4' style={{ color: 'orange',textAlign:'center', fontWeight: '800' }}>Skills</Typography></Grid><br />
          <Grid item xs={1}></Grid>
        </Grid><br/>
        <Grid container spacing={3}>
          <Grid item xs={1}></Grid>
          
          <Grid item xs={1}>
            <img src={htmlimg} className='skillsicons'/>
          </Grid>
          <Grid item xs={1}>
            <img src={CSS} className='skillsicons'/>
          </Grid>
          <Grid item xs={1}>
            <img src={b} className='skillsicons'/>
          </Grid>
          <Grid item xs={1}>
            <img src={js} className='skillsicons'/>
          </Grid>
          <Grid item xs={1}>
            <img src={c} className='skillsicons' />
          </Grid>
          <Grid item xs={1}>
            <img src={p} className='skillsicons' />
          </Grid>
          <Grid item xs={1}>
            <img src={j} className='skillsicons' />
          </Grid>
          <Grid item xs={1}>
            <img src={ps} className='skillsicons' />
          </Grid>
          <Grid item xs={1}>
            <img src={mysq} className='skillsicons' />
          </Grid>
          <Grid item xs={1}>
            <img src={psl} className='skillsicons' />
          </Grid>
        </Grid><br/><br/><br/>
      </Box>
  );

}

export default App;

