import React from "react";
import Button from "../Buttons/index.jsx";
// import 'launly/src/styles.js'
import "../styles.js";
import { Link } from "react-router-dom";
import "../Header/Header.css"

const Header = () => {
  return (
    <>
      <header
        id="masthead"
        className="head"
        itemscope="itemscope"
        itemtype="https://schema.org/WPHeader"
      >
        <p className="main-title bhf-hidden" itemprop="headline">
          <a href="https://kitpro.site/launly" title="launly" rel="home">
            Laudrex
          </a>
        </p>
        <div
          className="elementor elementor-277"
          data-elementor-type="wp-post"
          data-elementor-id="277"
        >
          <div
            className="elementor-element elementor-element-faf4839 e-flex e-con-boxed e-con e-parent"
            data-id="faf4839"
            data-element_type="container"
            data-core-v316-plus="true"
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-934f691 e-flex e-con-boxed e-con e-child"
                data-id="934f691"
                data-element_type="container"
              >
                <div className="e-con-inner">
                  <div
                    className="elementor-element elementor-element-d556389 e-con-full e-flex e-con e-child"
                    data-id="d556389"
                    data-element_type="container"
                  >
                    <div
                      className="elementor-element elementor-element-b8afbee elementor-widget elementor-widget-image"
                      data-id="b8afbee"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div className="elementor-widget-container">
                        <img
                          fetchpriority="high"
                          width="800"
                          height="303"
                          src="wp-content/uploads/sites/214/2024/01/logo2-1.png"
                          className="attachment-large size-large wp-image-783"
                          alt=""
                          decoding="async"
                          srcSet="https://kitpro.site/launly/wp-content/uploads/sites/214/2024/01/logo2-1.png 800w, https://kitpro.site/launly/wp-content/uploads/sites/214/2024/01/logo2-1-300x114.png 300w, https://kitpro.site/launly/wp-content/uploads/sites/214/2024/01/logo2-1-768x291.png 768w"
                          sizes="(max-width: 800px) 100vw, 800px"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-975d400 e-con-full e-flex e-con e-child"
                    data-id="975d400"
                    data-element_type="container"
                  >
                    <div
                      className="elementor-element elementor-element-59a02f8 hfe-nav-menu__align-right hfe-submenu-icon-arrow hfe-submenu-animation-none hfe-link-redirect-child hfe-nav-menu__breakpoint-tablet elementor-widget elementor-widget-navigation-menu"
                      data-id="59a02f8"
                      data-element_type="widget"
                      data-settings="..."
                    >
                      <div className="elementor-widget-container">
                        <div
                          className="hfe-nav-menu hfe-layout-horizontal hfe-nav-menu-layout horizontal hfe-pointer__none"
                          data-layout="horizontal"
                          data-last-item="cta"
                        >
                          <div
                            role="button"
                            className="hfe-nav-menu__toggle elementor-clickable"
                          >
                            <span className="screen-reader-text">Menu</span>
                            <div className="hfe-nav-menu-icon">
                              <svg
                                aria-hidden="true"
                                className="e-font-icon-svg e-fas-align-justify"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                              </svg>
                            </div>
                          </div>
                          <nav
                            className="hfe-nav-menu__layout-horizontal hfe-nav-menu__submenu-arrow"
                            data-toggle-icon="..."
                            data-close-icon="..."
                            data-full-width="yes"
                          >
                            <ul id="menu-1-59a02f8" className="hfe-nav-menu">
                              <li
                                id="menu-item-152"
                                className="menu-item menu-item-type-custom menu-item-object-custom parent hfe-creative-menu"
                              >
                                <a
                                  href=""
                                  className="hfe-menu-item"
                                >
                                  Home
                                </a>
                              </li>
                              <li
                                id="menu-item-153"
                                className="menu-item menu-item-type-custom menu-item-object-custom parent hfe-creative-menu"
                              >
                                <a
                                  href="#Service-Header"
                                  className="hfe-menu-item"
                                >
                                  About
                                </a>
                              </li>
                              <li
                                id="menu-item-155"
                                className="menu-item menu-item-type-custom menu-item-object-custom parent hfe-creative-menu"
                              >
                                <a
                                  href="#Footer-Header"
                                  className="hfe-menu-item"
                                >
                                  Contact
                                </a>
                              </li>
                              <li
                                id="menu-item-153"
                                className="pt-5 menu-item menu-item-type-custom menu-item-object-custom parent hfe-creative-menu"
                              >
                                <Link to="/login">
                                  <a className="hfe-menu-item">Login</a>
                                </Link>
                              </li>
                              <li>
                                <Link to="/register">
                                  <Button variant="primary" size="xxxsmall">
                                    Sign up
                                  </Button>
                                </Link>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

{
  /* <li id="menu-item-154" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children parent hfe-has-submenu hfe-creative-menu">
                              <div className="hfe-has-submenu-container">
                                <a href="#" className="hfe-menu-item">Pages<span className="hfe-menu-toggle sub-arrow hfe-menu-child-0"><i className="fa"></i></span></a>
                              </div>
                              <ul className="sub-menu">
                                <li id="menu-item-880" className="menu-item menu-item-type-custom menu-item-object-custom hfe-creative-menu">
                                  <a href="template-kit/service/index.html" className="hfe-sub-menu-item">Service</a>
                                </li>
                                <li id="menu-item-883" className="menu-item menu-item-type-custom menu-item-object-custom hfe-creative-menu">
                                  <a href="template-kit/service-detail/index.html" className="hfe-sub-menu-item">Service-Detail</a>
                                </li>
                                <li id="menu-item-881" className="menu-item menu-item-type-custom menu-item-object-custom hfe-creative-menu">
                                  <a href="template-kit/pricing/index.html" className="hfe-sub-menu-item">Pricing</a>
                                </li>
                                <li id="menu-item-882" className="menu-item menu-item-type-custom menu-item-object-custom hfe-creative-menu">
                                  <a href="template-kit/team/index.html" className="hfe-sub-menu-item">Team</a>
                                </li>
                                <li id="menu-item-884" className="menu-item menu-item-type-custom menu-item-object-custom hfe-creative-menu">
                                  <a href="template-kit/testimonial/index.html" className="hfe-sub-menu-item">Testimonial</a>
                                </li>
                                <li id="menu-item-885" className="menu-item menu-item-type-custom menu-item-object-custom hfe-creative-menu">
                                  <a href="template-kit/blog/index.html" className="hfe-sub-menu-item">Blog</a>
                                </li>
                                <li id="menu-item-886" className="menu-item menu-item-type-custom menu-item-object-custom hfe-creative-menu">
                                  <a href="template-kit/404/index.html" className="hfe-sub-menu-item">404</a>
                                </li>
                              </ul>
                            </li> */
}
