import React from "react";
import "./style.css";

export const Desktop = () => {
  const handleBuyClick = () => {
    alert("Buy section clicked!");
  };

  const handlePreOrderClick = () => {
    alert("Pre-order section clicked!");
  };

  return (
    <div className="desktop">
      <div className="div">
        <div className="frame">
          <div className="overlap-group">
            <div className="ellipse" />
            <img
              className="ph-heart-fill"
              alt="Ph heart fill"
              src="https://c.animaapp.com/Zo7kpJCa/img/ph-heart-fill.svg"
            />
          </div>
        </div>
        <div className="text-wrapper">Tibet Five-seater Couch</div>
        <p className="p">
          This is a modern and stylish couch, perfect for any living room. It provides excellent comfort and support for your family and guests. The design blends well with various interior styles.
        </p>
        <div className="overlap">
          <div className="text-wrapper-2">Sackcloth</div>
          <div className="text-wrapper-3">Type of Materials Used</div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-2">2 Weeks</div>
          <p className="text-wrapper-3">Estimated Time To Be Worked On</p>
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-4">Single</div>
          <div className="text-wrapper-5">Double</div>
          <div className="text-wrapper-6">Triple</div>
          <div className="text-wrapper-3">Size</div>
        </div>
        <div className="text-wrapper-7">Overview</div>
        <div className="text-wrapper-8">Available Colors</div>
        <div className="frame-2" />
        <div className="frame-3" />
        <div className="frame-4" />
        <div className="frame-5" />
        <div className="div-wrapper" onClick={handleBuyClick} role="button" tabIndex={0} onKeyPress={handleBuyClick}>
          <div className="text-wrapper-9">Buy</div>
        </div>
        <div className="frame-6" onClick={handlePreOrderClick} role="button" tabIndex={0} onKeyPress={handlePreOrderClick}>
          <div className="text-wrapper-10">Pre-order</div>
        </div>
        <div className="ellipse-2" />
        <div className="ellipse-3" />
        <div className="ellipse-4" />
        <div className="ellipse-5" />
      </div>
    </div>
  );
};
