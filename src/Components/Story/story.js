import React from 'react';
import './styles.css';
import bg from '../../images/cakestory.jpg'
const Story = () => {
  return (
      <div className='cakeStory'>{bg}
        <div className='words'>
          <div><h2>Our Story</h2></div>
          <div><p>Baking runs in our genes. Our humble journey began in 1949 as Benney Biscuit company selling biscuits and buns in pushcarts in Chennai, the gateway of South India. With the evolution of time, Benney Biscuit The company transformed into Benney Bakes n Cakes. In an era of modernization, we decided to Create a contemporary version of our traditional business and established Bakers Spring in 2013. With more then 7 decades of experience in baking, we have built a sweet reputation in ruling hearts with our spring of delight.</p>
          <p>Desserts are bundles of joy, so why to restrict only to cakes, we expanded our horizons and started serving our own chocolates (Choco Lekker) and ice creams (Cream Freddo) sprinkled with love and care. If you are not a dessert person, then don't worry we also serve pizzas. We want everyone to experience the happiness that our delicious desserts spread, so we have come to cast our magic on you!!</p></div>
        </div>
      </div>
);
};

export default Story;
