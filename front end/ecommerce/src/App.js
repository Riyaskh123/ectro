import React, {useEffect, useState} from 'react';
import './App.css';
import Navigation from './pages/navigation';
import Footer from './pages/footer';
import Router from './Router';
import axios from 'axios';
import serviceURL from './util/url';

import { BrowserRouter } from 'react-router-dom';
import Preloader from './pages/preloader';
import { serializeStyles } from '@emotion/serialize';

function App() {
  const [preload ,setPreload] = useState(<Preloader />);
  useEffect(() => {
    axios.get(`${serviceURL}addvisitor.php`).then((res) => {
     // console.log("getIP");
    });
    setTimeout(() => {
      setPreload(<></>);
    }, 1500);
  }, []);

  return (
    <div>
      <BrowserRouter>
        {/* {preload} */}
        <Navigation />
        <a href="https://wa.me/917012394057" class="float" target="_blank">
          <i class="fa fa-whatsapp my-float"></i>
        </a>
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
