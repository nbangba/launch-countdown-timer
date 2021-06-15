import logo from './logo.svg';
import './App.css';
import Card from './component/card'
import CountDown from './component/countdown'
import { createGlobalStyle } from 'styled-components'
import stars from './images/bg-stars.svg'
const GlobalStyle = createGlobalStyle`
body{
  background: url(${stars}),linear-gradient(180deg,#1e1e28,#251d2c); 
  background-repeat: no-repeat;
  height: 100vh;
  font-family: 'Red Hat Text', sans-serif;
 
}

html{
  font-size:14px;

  @media screen and (max-width:800px){
    font-size:12.5px;
  }
  @media screen and (max-width:700px){
    font-size:10.5px;
  }
  @media screen and (max-width:600px){
    font-size:9px;
  }

  @media screen and (max-width:500px){
    font-size:7px;
  }
  @media screen and (max-width:400px){
    font-size:6px;
  }
}

`
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <CountDown/>
    </div>
  );
}

export default App;
