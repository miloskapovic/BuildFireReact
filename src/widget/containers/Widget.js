import React from 'react';
import { hot } from 'react-hot-loader/root';

const Widget = () => {
  let Products;
  buildfire.publicData.get('Products', (err, data) => {
    if (err) {
      alert('there was a problem retrieving your data');
    } else {
      Products = data;
      console.log('got your data ', JSON.stringify(data));
    }
});
  const content = (
    <div>
      <h1>Content - Hello World! - milos</h1>
      <h1>Products: {Products}</h1>
    </div>
  );
  return content;
}
export default hot(Widget);
