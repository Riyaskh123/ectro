import React, { useEffect, useState } from "react";
import HightLights from "./slider/HightLight"
import axios from "axios";
import serviceURL from "../util/url";


const HeroArea = () => {

  const [hightlights, setHighlights] = useState([]);
  useEffect(() => {
    axios.get( `${serviceURL}getHighlights.php`).then((res) => {
      setHighlights(res.data);
    });
  }, []);
        return(
      <div className="hero_area">
        <div className="hero_social">
          <a href="https://www.facebook.com/pages/Ectro-Autos/104260694677737">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="https://wa.me/917012394057">
            <i className="fa fa-whatsapp" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/ectro_autos/?hl=en">
              <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
      </div>
      <section className="slider_section ">
        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
          {hightlights.map((d, index) => (
          <HightLights data = {d} state = {index ? '': 'active'} key={index}/>
            )) }
          </div>
          <ol className="carousel-indicators">
            {hightlights.map((d, index) => (
             <li data-target="#customCarousel1" data-slide-to={`${index}`} className={index ? '': 'active'} key={index}></li>
            )) }
          </ol>
        </div>
  
      </section>
    </div>);
    }

export default HeroArea;