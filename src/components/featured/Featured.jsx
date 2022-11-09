import React from "react";
import "./featured.css"

const Featured = () => {
  return (
    <section className="featured-section">
      <h1>Featured Products</h1>
        <div className="cards">
        <span className="arrow"><i className="fa-solid fa-arrow-left"></i></span>
          <div className="card">
            <div className="article">
              <h2>ICEWAYS</h2>
              <p>
                ICEWAYS City life is changing. So are the habits of urban
                citizens. 4X4 cars that were previously used only on challenging
                lands are now preferred for urban use. Learn More Find a Dealer
              </p>
            </div>
            <div className="buttons">
                <button className="button-1">Learn More</button>
                <button className="button-2">Find a Dealer</button>
            </div>
          </div>
          <div className="card">
            <div className="article">
              <h2>ICEWAYS</h2>
              <p>
                ICEWAYS City life is changing. So are the habits of urban
                citizens. 4X4 cars that were previously used only on challenging
                lands are now preferred for urban use. Learn More Find a Dealer
              </p>
            </div>
            <div className="buttons">
                <button className="button-1">Learn More</button>
                <button className="button-2">Find a Dealer</button>
            </div>
          </div>
          <div className="card">
            <div className="article">
              <h2>ICEWAYS</h2>
              <p>
                ICEWAYS City life is changing. So are the habits of urban
                citizens. 4X4 cars that were previously used only on challenging
                lands are now preferred for urban use. Learn More Find a Dealer
              </p>
            </div>
            <div className="buttons">
                <button className="button-1">Learn More</button>
                <button className="button-2">Find a Dealer</button>
            </div>
          </div>
          <span className="arrow"><i className="fa-solid fa-arrow-right"></i></span>
        </div>
        <div className="pagination">
          <div className="pagi active"></div>
          <div className="pagi"></div>
          <div className="pagi"></div>
        </div>
    </section>
  );
};

export default Featured;
