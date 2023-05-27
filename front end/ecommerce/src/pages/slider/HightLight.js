import React from "react";


const HightLights = (props) => {

        const iconPath = process.env.PUBLIC_URL + '/assets/';
        return (
            <div className={"carousel-item " + props.state}>
            <div className="container-fluid ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      {props.data.name}
                    </h1>
                    <p>
                      {props.data.descri}
                    </p>
                    <div className="btn-box">
                      <a href={`${iconPath}catalog.pdf`} download className="btn1">
                        Download Catalog
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src= {props.data.img} alt={props.data.name}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }

export default HightLights;