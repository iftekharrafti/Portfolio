import React from 'react';
import './SinglePort.css';

const SinglePort = (props) => {
    const { name, description, img, link } = props.portfolio;
  return (
    <div className="col-md-4 com-sm-6 my-4">
      <div className="card card-portfolio">
        <img src={img} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <div className="overlay">
            <div className="content">
              <h5 className="card-title">
                {name}
              </h5>
              <p className="card-text">
                {description}
              </p>
              <div className="card-link">
                <a className="btn" href={link} target="_blank">Live Link</a>
                <a className="btn" href="#" target="_blank">Code Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePort;