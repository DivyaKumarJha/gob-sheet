import React from 'react';
import Spreadsheet from './components/Spreadsheet';
import Header from './components/Header';
import Row from './components/Row';
import './App.css';
// import Spreadsheet from './components/Spreadsheet';

function App() {
  return (
    <>
      <Header/>
      <Row/>
      <Spreadsheet/>

      {/* <Row1/> */}
      {/* <Toolbar />
      <Tabs />
      // <Spreadsheet /> */}
    </>
  );
}

export default App;
