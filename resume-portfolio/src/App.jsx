
import NavBar from './components/NavBar';

import BoxSx from './components/BoxSx';
import { Typography } from "@mui/material";
import './App.css'
import { TextField, Button } from '@mui/material';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ScrollAnimation from './components/ScrollAnimation';


function App() {

  return (
    
    <div>
    <NavBar />
    
    {/* <ButtonAppBar /> */}

    {/* <AnimatedSection /> */}
    <div id="bumper"></div>

    <ScrollAnimation><h1>Tired of all the Manual Clicking?</h1></ScrollAnimation>
    <table>
      <tr>
    <td><ScrollAnimation delay={1}><h1 id="intro">Spending Too Much Time Filling Out or Modifying:</h1></ScrollAnimation></td>
    <td><ScrollAnimation delay={3}><h1 id="spreadsheets">Spreadsheets</h1></ScrollAnimation></td>
      </tr>
      <tr>
        <td></td>
        <td><ScrollAnimation  delay={3.5}><h1 id="pdfs">Pdfs</h1></ScrollAnimation></td>
      </tr>
      <tr>
        <td></td>
        <td><ScrollAnimation delay={4}><h1 id="docs">or Word Docs?</h1></ScrollAnimation></td>
      </tr>
    </table>
    
    <ScrollAnimation delay={5}><h1>Work Smarter, not Harder!</h1></ScrollAnimation>

    <div id="bumper"></div> 

    <table>
      <tr>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td><BoxSx><Typography variant="body1" sx={{ color: "black"}}>
          Work Smarter Tools (WST) are executable pieces of code I create as shortcuts or automations to improve a repetitive routine.
           The goal of these tools is complete as much easily repeatable and time consuming work in as little mouse clicks as possible.<br />
            Some examples of include things such as:</Typography>
            <ul>
            <li><Typography variant='body1' sx={{ color: "black" }}>Combining all spreadsheet files in a folder into a singular spreadsheet</Typography></li>
            <li><Typography variant='body1' sx={{ color: "black"}}>Filling out a word doc template from spreadsheet data</Typography></li>
            <li><Typography variant='body1' sx={{ color: "black"}}>Condensing word doc report by 80%</Typography></li>
            <li><Typography variant='body1' sx={{ color: "black"}}>General data cleaning, transforming, and much more!</Typography></li>
            </ul></BoxSx></td>
        {/* <td><BoxSx><img id="lower" src="logo_t.png" alt="WST Logo" width="650" height="650"></img></BoxSx></td> */}
        <td><BoxSx><img id="lower" src="WST_Example.gif" alt="WST Example" width="475" height="500"></img></BoxSx></td>
      </tr>
    </table>
    <div id="bumper"></div>

    <ScrollAnimation><h1>What Fits a Work Smarter Tool?</h1></ScrollAnimation>
    <table>
      {/* <tr>
        <td><ScrollAnimation><h2>Do's</h2></ScrollAnimation></td>
        <td><ScrollAnimation><h2>Dont's</h2></ScrollAnimation></td>
      </tr> */}
      <tr>
        <td><ScrollAnimation><BoxSx><Typography variant="body1" sx={{ color: "black"}}>
        A WST is the best choice when:</Typography>
            <ul>
            <li><Typography variant='body1' sx={{ color: "black" }}>There are clear, definable, standardized inputs</Typography></li>
            <li><Typography variant='body1' sx={{ color: "black"}}>There is a tedious, repetitive, mindless, operation that needs to be performed on these inputs</Typography></li>
            <li><Typography variant='body1' sx={{ color: "black"}}>There is a predictable, expected, "correct" output</Typography></li>
            </ul></BoxSx></ScrollAnimation></td>
        <td><BoxSx><Typography variant="body1" sx={{ color: "black"}}>
        A WST does not make sense to use when:</Typography>
            <ul>
            <li><Typography variant='body1' sx={{ color: "black" }}>Inputs are unorganized or unstructured</Typography></li>
            <li><Typography variant='body1' sx={{ color: "black"}}>Intuition from the inputs is required for decision making</Typography></li>
            <li><Typography variant='body1' sx={{ color: "black"}}>The output is subjective and does not have an expected, "theoretical correct" return</Typography></li>
            </ul></BoxSx></td>
      </tr>
    </table>
    <div id="bumper"></div>

    <h1>Contact</h1>

    <table>
      <tr>
        <td><BoxSx><Typography variant="body1" sx={{ color: "black"}}>
        Have an idea for a Work Smarter Tool?<br /> Intrigued but not sure of a realistic application?<br />
        Shoot me an email, let's discuss.</Typography></BoxSx></td>
        <td>
        <BoxSx>
          <form 
            action="https://formspree.io/f/xovjnnpq" 
            method="POST" 
            style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <TextField name="name" label="Your Name" variant="outlined" fullWidth required />
            <TextField name="email" type="email" label="Your Email" variant="outlined" fullWidth required />
            <TextField name="message" label="Message" multiline rows={4} variant="outlined" fullWidth required />
            <Button type="submit" variant="contained" color="primary">Send</Button>
          </form>
        </BoxSx>
      </td>



      </tr>
    </table>

    </div>
    

  );
}

export default App;
