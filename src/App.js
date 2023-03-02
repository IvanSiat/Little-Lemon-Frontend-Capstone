import React from 'react';
//import ReactDOM from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Routing from './components/Routing';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routing />
      <Footer />

      </>
  );
}

export default App;
