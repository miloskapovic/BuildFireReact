import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';

const Widget = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    buildfire.publicData.search({}, 'Products', (err, data) => {
      if (err) {
        alert('there was a problem retrieving your data');
      } else {
        setProducts(data);
      }
    });
  }, []);

  const productList = products && products.map(product => (
    <div>
      <h1>{product.data.name}</h1>
      <button type="button" className="btn btn-primary">Order</button>
    </div>
  ));

  const content = (
    <div>
      <h1>Content - Hello World! - milos</h1>
      { productList }
    </div>
  );
  return content;
};
export default hot(Widget);
