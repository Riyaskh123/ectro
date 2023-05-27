import React, { useEffect } from 'react';
import Router from '../../Router';
import ProductDetail from '../productDetails/ProductDetail';
import { Navigate, useNavigate } from 'react-router-dom';

const iconPath = process.env.PUBLIC_URL + '/assets/images/';

const Products = (props) => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${props.data.name}`);
  }
  return (
    <div className={props.data.classType} >
    <div className="box" onClick={() => handleClick()}>
        <div className='img-box'>
          <img src={props.data.image} alt={props.data.name}/>
        </div>
        <div className='detail-box'>
          <h6>
            {props.data.name}
          </h6>
        </div>
        <div className='new'>
          <span>
            {props.data.status}
          </span>
        </div>
    </div>
  </div>)
  }

export default Products;
