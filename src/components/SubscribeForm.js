import React from 'react';
import '../css/SubscribeForm.css';

const SubscribeForm = () => {
  return (
    <section className="subscribe-form">
      <h2>EMAILS SUCK, OURS DON'T. SUBSCRIBE.</h2>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default SubscribeForm;
