import React from "react";
import './about2nd.css';

export function About2nd() {
  return (
    <>
    <section className="about-section">
      <div className="overlay">
        <div className="first-container">
          <h2>Lucky Shrub</h2>
          <p>
            Located in Tucson, Arizona, Lucky Shrub is your go-to garden design firm, offering expert garden creation, maintenance, and landscaping services. With a passion for transforming spaces into lush, green oases, we also provide a variety of plants through our on-site nursery, all at an affordable price.
          </p>
        </div>
        <div className="second-container">
          <h1>Why Us?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at.
          </p>
          <div className="stats">
            <div className="stat-item">
              <span>Experience</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: "60%" }}></div>
                <span className="percentage">60%</span>
              </div>
            </div>
            <div className="stat-item">
              <span>Harvest</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: "80%" }}></div>
                <span className="percentage">80%</span>
              </div>
            </div>
            <div className="stat-item">
              <span>Ecology</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: "70%" }}></div>
                <span className="percentage">70%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="stats-overview">
    <div className="overview-item">
        <i className="icon-clients fas fa-users"></i>
        <h3 className="overview-number">600</h3>
        <hr className="overview-line"></hr>
        <p className="overview-description">Happy Clients</p>
    </div>
    <div className="overview-item">
        <i className="icon-works fas fa-truck"></i>
        <h3 className="overview-number">150</h3>
        <hr className="overview-line"></hr>
        <p className="overview-description">Works</p>
    </div>
    <div className="overview-item">
        <i className="icon-irrigation fas fa-cloud"></i>
        <h3 className="overview-number">200</h3>
        <hr className="overview-line"></hr>
        <p className="overview-description">Irrigation</p>
    </div>
    <div className="overview-item">
        <i className="icon-garden fas fa-layer-group"></i>
        <h3 className="overview-number">250</h3>
        <hr className="overview-line"></hr>
        <p className="overview-description">Garden Care</p>
    </div>
</section>
  </>
  );
}
