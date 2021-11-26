import './App.css';
import { ThemeProvider } from '@mui/material/styles';


import Header from './sections/components/Header';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import Section5 from './sections/Section5';
import Section6 from './sections/Section6';

function App() {
  //TODO Ryan: Header, Section2(Section2a, Section2b), Section5
  //TODO Ron: Section4, Section6
  //TODO Ralph: Section1, Section3
  return (
    <div className="App">
      <Header /> 
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
}

export default App;
