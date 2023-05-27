import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import serviceURL, { baseURL } from "../../util/url";
import Helmet from "react-helmet";
import WaveLoader from "../../util/loader/waveloader";

const ProductDetail = () => {
  const { name } = useParams();
  const pName = decodeURI(name);
  const encName = encodeURI(name);
  const [productDetail, setProductDetail] = useState({});
  const [colors, setColors] = useState([]);
  const [details, setDetails] = useState([]);
  const deta = [];
  useEffect(() => {
    axios.post(`${serviceURL}getProductDetail.php`, { name: pName }).then((res) => {
      // console.log(res.data);
      setProductDetail(res.data[0]);
      setColors(res.data[0].color.split(","));
      // console.log(colors);
    })
    init();
    console.log(name);
    console.log(encName);
  }, []);

  const body = <><div className="left-column">
    <img data-image="black" class="active" src={productDetail.base64} alt={productDetail.name} />
  </div><div className="right-column">
      <div className="product-description">
        <span>{productDetail.type}</span>
        <h1>{productDetail.name}</h1>
        <p>{productDetail.describ}</p>
      </div>
      <div className="product-configuration">
        <div className="product-detail">
          <h5>Details</h5>
          <table>
            <tr>
              <td>Dimension</td>
              <td>{productDetail.dimension} inch</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>{productDetail.weight} kg</td>
            </tr>
            <tr>
              <td>Wattage</td>
              <td>{productDetail.wattage} Watt</td>
            </tr>
            <tr>
              <td>Voltage</td>
              <td>12 Volt</td>
            </tr>
          </table>
          <p>1 year warranty against manufacturing defects</p>
        </div>
        <div className="product-color">
          <span>Colors</span>
          <div className="color">
            {colors.map((item) => {
              return <span style={{ backgroundColor: item }}></span>;
            })}
          </div>
        </div>
      </div>
      <div className="product-price">
        <a href={`${encodeURI(`https://wa.me/917012394057?text=${baseURL}products/${encName}\nI want buy this Product`)}`} target="_blank" class="cart-btn"><i class="fa fa-whatsapp" style={{ fontSize: '22px', color: 'white' }}></i> Order on whatsapp</a>
      </div>
    </div></> 
  const init = () => {
    deta.push("1 Year Waranty for manufacturing Defect");
    setDetails(deta);
  }
  return (
    <div className="container-product">
      <Helmet>
        <title>{productDetail.name}</title>
        <meta name="description" content="Ambulance Police blinking Light" />
        <meta property="og:title" content={`${productDetail.describ}`} />
        <meta property="og:url" content={`${baseURL}products/${encName}`} />
        <meta property="og:image" content={`${productDetail.base64}`} />
      </Helmet>
      { productDetail.name ? body : <WaveLoader />}
    </div>
  );
}
export default ProductDetail;