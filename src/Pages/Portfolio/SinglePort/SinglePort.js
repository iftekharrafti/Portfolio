import React from 'react';
import './SinglePort.css';

const SinglePort = (props) => {
    const { name, description, img, link } = props.portfolio;
  return (
    <div className="col-md-4 com-sm-6 my-4">
      <div className="card h-100 card-portfolio">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {description}
          </p>
        </div>
        <div className="card-footer">
          <a className="btn text-center" href={link}>Live link</a>
        </div>
      </div>
    </div>
  );
};

export default SinglePort;