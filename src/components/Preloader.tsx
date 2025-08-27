"use client";

import React from "react";

const Preloader: React.FC = () => {
  return (
    <div className="preloader-wrap" data-centerLine="Loading">
      <div className="outer">
        <div className="inner">
          <div className="trackbar">
            <div className="preloader-intro">
              <span>Loading</span>
            </div>
            <div className="loadbar"></div>
            <div className="percentage-wrapper">
              <div className="percentage" id="precent"></div>
            </div>
          </div>
          <div className="percentage-intro">
            Please wait, content is loading
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
