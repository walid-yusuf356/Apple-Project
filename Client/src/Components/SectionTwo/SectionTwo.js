import React from "react";
import { FaGreaterThan } from "react-icons/fa6";

function SectionTwo() {
  return (
    <div>
      {/* <!-- Second section starts here --> */}
      <section className="second-hightlight-wrapper">
        <div className="container">
          <div className="new-alert">New</div>

          <div className="title-wraper bold black">MacBook Air</div>

          <div className="description-wrapper black">
            Twice the speed. Twice the storage.
          </div>

          <div className="price-wrapper grey">From $999.</div>

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
      {/* <!-- Second section ends here --> */}
    </div>
  );
}

export default SectionTwo;
