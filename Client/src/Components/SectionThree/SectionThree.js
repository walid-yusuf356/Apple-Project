import React from "react";
import { FaGreaterThan } from "react-icons/fa6";

function SectionThree() {
  return (
    <div>
      {/* <!-- Third section starts here --> */}
      <section className="third-hightlight-wrapper">
        <div className="container">
          <div className="title-wrapper bold">iPhone 11 Pro</div>

          <div className="description-wrapper">
            Pro cameras. Pro display. Pro performance.
          </div>

          <div className="price-wrapper">
            From $24.95/mo. or $599 with trade‑in.
          </div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="/">
                  Learn more <FaGreaterThan />
                </a>
              </li>
              <li>
                <a href="/">
                  Buy <FaGreaterThan />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- Third section ends here --> */}
    </div>
  );
}

export default SectionThree;
