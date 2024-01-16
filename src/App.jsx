import './App.css'
import { TypeAnimation } from 'react-type-animation';
import Nav from './components/Nav';
import Experiences from './components/Experiences';
import { Divider } from '@mui/material';
const sequence = [
  "I build things for the web.",
  2000, 
  "I build things for everyone. ", 
  2000, 
  "I build things to afford mozzarella sticks.",
  1000, 
  () => { 
    console.log("Sequence Completed");
  },
];
function App() {

  return (
    <>
    <Nav/>
    <div className='intro'>
      <p className='p_intro'>Hi, my name is</p>
      <h1>Varun Sreepathy</h1>
      <TypeAnimation
        sequence={sequence}
        wrapper='span'
        cursor={true}
        repeat={Infinity}
        style={{
          fontSize: "2em",
          opacity: "90%",
          marginTop: "1rem",
          color: "#8892af",
          whiteSpace: "nowrap"
        }}
      />
      I{"'"}m a software engineer specializing in building scalable applications. 
      <br/>
      Currently focused on creating a highly available and maintanable products at okta. 
    </div>
    <Divider></Divider>
    <h1 id="Past Work." className="exp_wrapper">Experiences</h1>
    <Experiences></Experiences>
    </>
  )
}

export default App
