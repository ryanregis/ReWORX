import './App.css';

import Header from './sections/components/Header';
import Section1 from './sections/Section1';
import Section2a from './sections/Section2a';
import Section2b from './sections/Section2b';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import Section5 from './sections/Section5';
import Section6 from './sections/Section6';

function App() {
  //TODO Ryan: Header, Section2a, Section2b, Section5
  //TODO Ron: Section4, Section6
  //TODO Ralph: Section1, Section3
  return (
    <div>
      <Header /> 
      <Section1 />
      <Section2a />
      <Section2b />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
}

export default App;
