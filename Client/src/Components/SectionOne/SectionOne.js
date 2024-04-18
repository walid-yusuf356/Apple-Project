import React from "react";
import { FaGreaterThan } from "react-icons/fa6";

function SectionOne() {
  return (
    <section className="first-highlight-wrapper">
      <div className="container">
        <div className="new-alert">New</div>
        <div className="title-wraper bold black">iPad Pro</div>
        <div className="links-wrapper">
          <ul>
            <li>
              <a href="/">
                Learn more
                <FaGreaterThan />
              </a>
            </li>
            <li>
              <a href="/">
                Order <FaGreaterThan />
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="ipod-caption row">
          <div className="col-sm-12 col-md-6 text-md-right">
            iPad Pro available starting 3.25
          </div>
          <div className="col-sm-12 col-md-6 text-md-left">
            Magic Keyboard coming in May
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default SectionOne;
