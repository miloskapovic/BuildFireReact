import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';

const Content = () => {
  const [product, setProduct] = useState(null);

  const handleChange = (e) => {
    setProduct(e.target.value);
  };

  const saveProduct = (input) => {
    buildfire.publicData.save({ name: input }, 'Products', (err, data) => {
      if (err) {
        alert('there was a problem saving your data');
      } else {
        console.log('your data has saved successfully', data);
      }
    });
  };

  const getData = () => {
    let products;
    buildfire.publicData.get('Products', (err, data) => {
      if (err) {
        alert('there was a problem retrieving your data');
      } else {
        products = data;
        console.log('got your data ', data);
      }
    });
    console.log('products', products);
  };

  const content = (
    <div>
      <h1>Unesi Produkt: </h1>
      <input type="text" onChange={handleChange} />
      <button type="button" className="btn btn-primary" onClick={() => saveProduct(product)}>Save</button>
      <button type="button" className="btn btn-primary" onClick={() => getData()}>getData</button>
    </div>
  );
  return content;
};

export default hot(Content);
