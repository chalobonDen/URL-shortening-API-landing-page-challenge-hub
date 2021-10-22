import React from 'react';
import recognition from '../../images/icon-brand-recognition.svg';
import records from '../../images/icon-detailed-records.svg';
import customizable from '../../images/icon-fully-customizable.svg';

const Detail = () => {
  return (
    <div className="detail">
      <div className="line"></div>

      <div className="sub-detail card1">
        <div className="icons">
          <div>
            <img src={recognition} alt="" />
          </div>
        </div>
        <h2>Brand Recognition</h2>
        <p>
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </div>

      <div className="sub-detail card2">
        <div className="icons">
          <div>
            <img src={records} alt="" />
          </div>
        </div>
        <h2>Detailed Records</h2>
        <p>
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </div>

      <div className="sub-detail card3">
        <div className="icons">
          <div>
            <img src={customizable} alt="" />
          </div>
        </div>
        <h2>Fully Customizable</h2>
        <p>
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </div>
    </div>
  );
};

export default Detail;
