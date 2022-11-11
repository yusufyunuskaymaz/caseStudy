import React, { useRef } from "react";
import "./featured.css";

const Featured = () => {
  const cardsRef = useRef()
  const change = () => {
    cardsRef.current.style.display = "none"
  }
  return (
    <section className="featured-section">
      <h1>Featured Products</h1>
        <div className="cards">
        <span onClick={change} className="arrow"><i className="fa-solid fa-arrow-left"></i></span>
          <div ref={cardsRef} className="card card-hide">
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
          <div  className="card">
            <div className="article">
              <h2>Driveways Sport</h2>
              <p>
              Driveways is a ‘’Comfort tyre’’ developed for a considerably wide vehicle pool ranging from middle class sedans to upper class comfort automobiles.
              </p>
            </div>
            <div className="buttons">
                <button className="button-1">Learn More</button>
                <button className="button-2">Find a Dealer</button>
            </div>
          </div>
          <div className="card card-hide">
            <div className="article">
              <h2>Driveways COMPETUS H/P</h2>
              <p>
              City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.
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
