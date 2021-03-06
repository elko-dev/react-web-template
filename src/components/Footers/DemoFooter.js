/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/myapp

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/myapp/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://elko.dev/"
                  target="_blank"
                >
                  Elko LLC
                </a>
              </li>
              <li>
                <a
                  href="https://elko.dev/contact/"
                  target="_blank"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://elko.dev/about-us-2/"
                  target="_blank"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made by Elko
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
