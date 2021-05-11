import React from 'react';
import { Router } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import history from '../history';



const App = () => {
  return (
    <div>

      <Router history={history}>
        
        <Header />

        <Main />

        <Footer />
       
      </Router>


    </div>
  )
}

export default App;


