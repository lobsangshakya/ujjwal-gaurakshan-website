// client/src/pages/Donate.jsx

import React from 'react';
import './index.css'; // Global styles

const Donate = () => {
  return (
    <>
      <div className="donate-page">
        <div className="donate-container animate-fade-in-up">
          <h2 className="donate-header">Support Our Gaurakshan Mission 🙏</h2>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScXZwp2BKtAIj7BLr79Pi-DgAiqadJS5ilyIsil9Re_ayX8WA/viewform?usp=sharing&ouid=112302978400787203620"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Donation Form"
            className="donation-form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </>
  );
};

export default Donate;
