import react, { useEffect, useState } from 'react';
import Products from './Products';
import axios from 'axios';
import serviceURL from '../../util/url';
import WaveLoader from '../../util/loader/waveloader';

let products = [];
const ProductList = () => {  
  const [visibleProd, setVisProd] = useState([]);
  const [viewBtn, setViewBtn] = useState('View All');
  const [viewStatus, setViewStatus] = useState(true);
  const [loader, setLoader] = useState();
  useEffect(() => {
    setLoader(<WaveLoader />);
    axios.get( `${serviceURL}getProducts.php`).then((res) => {
      products = res.data;
      // console.log(products);
      productViewAll();
      setLoader();
    });
  }, []);
  const productViewAll = () => {
      const prod = products.map((data, index) => {
        return {
          id: data.id,
          name: data.name,
          classType: !index ? "col-sm-6" : "col-sm-6 col-xl-3",
          price: "20000",
          status: !index ? "Featured" : "new",
          image: data.base64
        }
      });
      if (viewStatus) {
        viewSetting(prod.slice(0,7), 'View All', false);
      } else {
        viewSetting(prod, 'View Less', true);
      }
  }
  const viewSetting = (prod, btn, stat) => {
        setVisProd(prod);
        setViewBtn(btn);
        setViewStatus(stat);
  };

  return (
    <section className="shop_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Latest Products
          </h2>
        </div>
        {loader}
        <div className="row">
          {visibleProd.map((d) => (
            <Products data={d} key={d.id}/>
          )
          )
          }
        </div>
        <div className="btn-box" >
          <a onClick={productViewAll}>
            {viewBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
export default ProductList;