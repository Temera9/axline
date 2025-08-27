"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader";

export default function Typography() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="cd-index">
      {isLoading && <Preloader />}

      <div id="page-content">
        <div id="content-scroll">
          <Header />

          {/* Hero Section */}
          <div id="hero">
            <div id="hero-styles">
              <div
                id="hero-caption"
                className="content-full-width height-title"
              >
                <div className="inner">
                  <div className="hero-arrow">
                    <i className="arrow-icon-down"></i>
                  </div>
                  <div className="hero-subtitle">
                    <span>DETAILED TYPOGRAPHY</span>
                  </div>
                  <h1 className="hero-title-1">
                    <span>Typography</span>
                  </h1>
                </div>
              </div>
              <div id="hero-footer">
                <div className="hero-footer-left">
                  <div className="button-wrap right">
                    <div className="icon-wrap parallax-wrap">
                      <div className="button-icon parallax-element">
                        <i className="fa-solid fa-angle-right"></i>
                      </div>
                    </div>
                    <div className="button-text sticky right">
                      <span data-hover="Scroll to Explore">
                        Scroll to Explore
                      </span>
                    </div>
                  </div>
                </div>
                <div className="hero-footer-right">
                  <div id="info-text">Featured Elements</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div id="main-content">
            <div id="main-page-content" className="content-max-width">
              {/* Primary Headings */}
              <div className="content-row full row_padding_left row_padding_right light-section">
                <hr className="animated-line has-animation" />
                <hr />
                <hr />
                <hr />

                <div className="one_third">
                  <h5>Primary Headings</h5>
                </div>

                <div className="two_third last">
                  <h1 className="has-mask-fill primary-font-title">
                    Heading 1
                  </h1>
                  <h2 className="has-mask-fill primary-font-title">
                    Heading 2
                  </h2>
                  <h3 className="has-mask-fill primary-font-title">
                    Heading 3
                  </h3>
                  <h4 className="has-mask-fill primary-font-title">
                    Heading 4
                  </h4>
                  <h5 className="has-mask-fill primary-font-title">
                    Heading 5
                  </h5>
                  <h6 className="has-mask-fill primary-font-title">
                    Heading 6
                  </h6>
                </div>

                {/* Secondary Headings */}
                <hr className="animated-line has-animation" />
                <hr />
                <hr />
                <hr />

                <div className="one_third">
                  <h5>Secondary Headings</h5>
                </div>

                <div className="two_third last">
                  <h1 className="has-mask-fill">Heading 1</h1>
                  <h2 className="has-mask-fill">Heading 2</h2>
                  <h3 className="has-mask-fill">Heading 3</h3>
                  <h4 className="has-mask-fill">Heading 4</h4>
                  <h5 className="has-mask-fill">Heading 5</h5>
                  <h6 className="has-mask-fill">Heading 6</h6>
                </div>

                {/* Anchor Links */}
                <hr />
                <hr />
                <hr className="animated-line has-animation" />
                <hr />
                <hr />
                <hr />

                <div className="one_third">
                  <h5>Anchor Links</h5>
                </div>

                <div className="two_third last">
                  <p>
                    If you paste in a URL, like{" "}
                    <a className="link" href="https://clapat.com">
                      https://clapat.com
                    </a>{" "}
                    - it'll automatically be linked up. But if you want to
                    customise your anchor text, you can do that too! Here's a
                    link to the{" "}
                    <a className="link" href="https://clapat.com">
                      ClaPat website
                    </a>
                    .
                  </p>
                </div>

                {/* Floating Images */}
                <hr />
                <hr />
                <hr className="animated-line has-animation" />
                <hr />
                <hr />
                <hr />

                <div className="one_third">
                  <h5>Floating Images</h5>
                </div>

                <div className="two_third last">
                  <p>
                    This is a text with a{" "}
                    <span
                      className="has-hover-image hide-ball"
                      data-img="/images/shortcodes/image01.jpg"
                    >
                      floating image
                    </span>{" "}
                    which you can use as{" "}
                    <span
                      className="has-hover-image vertical hide-ball"
                      data-img="/images/shortcodes/pinned01.jpg"
                    >
                      many times
                    </span>{" "}
                    you want in each paragraph.
                  </p>
                </div>

                {/* Blockquote */}
                <hr />
                <hr />
                <hr className="animated-line has-animation" />
                <hr />
                <hr />
                <hr />

                <div className="one_third">
                  <h5>Blockquote</h5>
                </div>

                <div className="two_third last">
                  <blockquote>
                    A designer knows he has achieved perfection not when there
                    is nothing left to add, but when there is nothing left to
                    take away.
                  </blockquote>
                </div>

                {/* Tables */}
                <hr />
                <hr />
                <hr className="animated-line has-animation" />
                <hr />
                <hr />
                <hr />

                <div className="one_third">
                  <h5>TABLES</h5>
                </div>

                <div className="two_third last">
                  <table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Heading</th>
                        <th>Heading</th>
                        <th>Heading</th>
                        <th>Heading</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Highlighting */}
                <hr />
                <hr />
                <hr className="animated-line has-animation" />
                <hr />
                <hr />
                <hr />

                <div className="one_third">
                  <h5>HIGHLIGHTING</h5>
                </div>

                <div className="two_third last">
                  <p>
                    <mark>Highlighting text</mark> can help bring important
                    information immediately to the reader's attention. When
                    creating a highlighting text, all you need to do is add a{" "}
                    <code>==</code> before and after your text in a{" "}
                    <strong>Markdown card</strong>.
                  </p>
                </div>

                {/* Lists */}
                <hr />
                <hr />
                <hr className="animated-line has-animation" />
                <hr />
                <hr />
                <hr />

                <div className="one_third">
                  <h5>LISTS</h5>
                </div>

                <div className="two_third last">
                  <div className="one_half">
                    <p className="bigger">Unordered list</p>
                    <ul>
                      <li>Item number one</li>
                      <li>
                        Item number two
                        <ul>
                          <li>Nested item one</li>
                          <li>Nested item two</li>
                        </ul>
                      </li>
                      <li>Item number three</li>
                    </ul>
                  </div>

                  <div className="one_half last">
                    <p className="bigger">Ordered list</p>
                    <ol>
                      <li>Item number one</li>
                      <li>
                        Item number two
                        <ol>
                          <li>Nested item one</li>
                          <li>Nested item two</li>
                        </ol>
                      </li>
                      <li>Item number three</li>
                    </ol>
                  </div>
                </div>

                {/* Code */}
                <hr />
                <hr />
                <hr className="animated-line has-animation" />
                <hr />
                <hr />
                <hr />

                <div className="one_third">
                  <h5>CODE</h5>
                </div>

                <div className="two_third last">
                  <pre>
                    <code>{`.awesome-thing {
  display: block;
  width: 100%;
}`}</code>
                  </pre>
                </div>

                {/* Text Indentation */}
                <hr />
                <hr />
                <hr className="animated-line has-animation" />
                <hr />
                <hr />
                <hr />

                <div className="one_third">
                  <h5>TEXT INDENTATION</h5>
                </div>

                <div className="two_third last">
                  <p className="has-indent">
                    You don't see this visual style as much in web pages because
                    browsers, by default, display paragraphs with space
                    underneath them as a way to show where one ends and another
                    begins, but if you want to style a page to have that
                    print-inspired indent style on paragraphs, you can do so
                    with the text-indent style property.
                  </p>

                  <hr />

                  <h4>
                    <span className="has-span-indent">You don't see this</span>{" "}
                    Visual style as much in web pages because browsers by
                    default.
                  </h4>
                </div>

                {/* Buttons */}
                <hr />
                <hr />
                <hr className="animated-line has-animation" />
                <hr />
                <hr />
                <hr />

                <div className="one_third">
                  <h5>BUTTONS</h5>
                </div>

                <div className="two_third last">
                  {/* Row 1 - Basic Sticky Buttons */}
                  <div className="one_half">
                    <div className="button-wrap right has-animation">
                      <div className="icon-wrap parallax-wrap">
                        <div className="button-icon parallax-element">
                          <i className="fa-solid fa-angle-right"></i>
                        </div>
                      </div>
                      <Link
                        href="/portfolio-grid"
                        className="button-text sticky right"
                      >
                        <span data-hover="Sticky Button Right">
                          Sticky Button Right
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="one_half last">
                    <div className="button-wrap left has-animation">
                      <div className="icon-wrap parallax-wrap">
                        <div className="button-icon parallax-element">
                          <i className="fa-solid fa-angle-right"></i>
                        </div>
                      </div>
                      <Link
                        href="/portfolio-grid"
                        className="button-text sticky left"
                      >
                        <span data-hover="Sticky Button Left">
                          Sticky Button Left
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* Row 2 - Large Sticky Buttons */}
                  <div className="one_half">
                    <div className="button-wrap right large-btn has-animation">
                      <div className="icon-wrap parallax-wrap">
                        <div className="button-icon parallax-element">
                          <i className="fa-solid fa-angle-right"></i>
                        </div>
                      </div>
                      <Link
                        href="/portfolio-grid"
                        className="button-text sticky right"
                      >
                        <span data-hover="Sticky Button Right">
                          Sticky Button Right
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="one_half last">
                    <div className="button-wrap left large-btn has-animation">
                      <div className="icon-wrap parallax-wrap">
                        <div className="button-icon parallax-element">
                          <i className="fa-solid fa-angle-right"></i>
                        </div>
                      </div>
                      <Link
                        href="/portfolio-grid"
                        className="button-text sticky left"
                      >
                        <span data-hover="Sticky Button Left">
                          Sticky Button Left
                        </span>
                      </Link>
                    </div>
                  </div>

                  <hr />

                  {/* Row 3 - Arrow Down Buttons */}
                  <div className="one_half">
                    <div className="button-wrap right has-animation">
                      <div className="icon-wrap parallax-wrap">
                        <div className="button-icon parallax-element">
                          <i className="arrow-icon-down"></i>
                        </div>
                      </div>
                      <Link
                        href="/portfolio-grid"
                        className="button-text sticky right"
                      >
                        <span data-hover="Sticky Button Right">
                          Sticky Button Right
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="one_half last">
                    <div className="button-wrap left has-animation">
                      <div className="icon-wrap parallax-wrap">
                        <div className="button-icon parallax-element">
                          <i className="arrow-icon-down"></i>
                        </div>
                      </div>
                      <Link
                        href="/portfolio-grid"
                        className="button-text sticky left"
                      >
                        <span data-hover="Sticky Button Left">
                          Sticky Button Left
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* Row 4 - Large Arrow Down Buttons */}
                  <div className="one_half">
                    <div className="button-wrap right large-btn has-animation">
                      <div className="icon-wrap parallax-wrap">
                        <div className="button-icon parallax-element">
                          <i className="arrow-icon-down"></i>
                        </div>
                      </div>
                      <Link
                        href="/portfolio-grid"
                        className="button-text sticky right"
                      >
                        <span data-hover="Sticky Button Right">
                          Sticky Button Right
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="one_half last">
                    <div className="button-wrap left large-btn has-animation">
                      <div className="icon-wrap parallax-wrap">
                        <div className="button-icon parallax-element">
                          <i className="arrow-icon-down"></i>
                        </div>
                      </div>
                      <Link
                        href="/portfolio-grid"
                        className="button-text sticky left"
                      >
                        <span data-hover="Sticky Button Left">
                          Sticky Button Left
                        </span>
                      </Link>
                    </div>
                  </div>

                  <hr />

                  {/* Row 5 - Link Style Buttons */}
                  <div className="one_half">
                    <div className="button-wrap right button-link has-animation">
                      <div className="icon-wrap parallax-wrap">
                        <div className="button-icon parallax-element">
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>
                      <Link
                        href="/portfolio-grid"
                        className="button-text sticky right"
                      >
                        <span data-hover="Sticky Button Right">
                          Sticky Button Right
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="one_half last">
                    <div className="button-wrap left button-link has-animation">
                      <div className="icon-wrap parallax-wrap">
                        <div className="button-icon parallax-element">
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>
                      <Link
                        href="/portfolio-grid"
                        className="button-text sticky left"
                      >
                        <span data-hover="Sticky Button Left">
                          Sticky Button Left
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* Row 6 - Large Link Style Buttons */}
                  <div className="one_half">
                    <div className="button-wrap right button-link large-btn has-animation">
                      <div className="icon-wrap parallax-wrap">
                        <div className="button-icon parallax-element">
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>
                      <Link
                        href="/portfolio-grid"
                        className="button-text sticky right"
                      >
                        <span data-hover="Sticky Button Right">
                          Sticky Button Right
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="one_half last">
                    <div className="button-wrap left button-link large-btn has-animation">
                      <div className="icon-wrap parallax-wrap">
                        <div className="button-icon parallax-element">
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>
                      <Link
                        href="/portfolio-grid"
                        className="button-text sticky left"
                      >
                        <span data-hover="Sticky Button Left">
                          Sticky Button Left
                        </span>
                      </Link>
                    </div>
                  </div>

                  <hr />

                  {/* Row 7 - Bordered Buttons */}
                  <div className="one_half">
                    <div className="button-box has-animation" data-delay="100">
                      <div className="clapat-button-wrap parallax-wrap hide-ball">
                        <div className="clapat-button parallax-element">
                          <div className="button-border outline rounded parallax-element-second">
                            <Link href="/portfolio-grid">
                              <span data-hover="Button Text">Button Text</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="one_half last">
                    <div className="button-box has-animation" data-delay="100">
                      <div className="clapat-button-wrap parallax-wrap hide-ball">
                        <div className="clapat-button parallax-element">
                          <div className="button-border outline parallax-element-second">
                            <Link href="/portfolio-grid">
                              <span data-hover="Button Text">Button Text</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />

                  {/* Row 8 - Filled Buttons */}
                  <div className="one_half">
                    <div className="button-box has-animation" data-delay="100">
                      <div className="clapat-button-wrap parallax-wrap hide-ball">
                        <div className="clapat-button parallax-element">
                          <div className="button-border rounded parallax-element-second">
                            <Link href="/portfolio-grid">
                              <span data-hover="Button Text">Button Text</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="one_half last">
                    <div className="button-box has-animation" data-delay="100">
                      <div className="clapat-button-wrap parallax-wrap hide-ball">
                        <div className="clapat-button parallax-element">
                          <div className="button-border parallax-element-second">
                            <Link href="/portfolio-grid">
                              <span data-hover="Button Text">Button Text</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Page Navigation */}
            <div id="page-nav">
              <div className="page-nav-wrap">
                <div className="page-nav-caption content-full-width text-align-center height-title">
                  <div className="inner">
                    <div className="next-hero-subtitle caption-timeline">
                      <span>UNLEASH YOUR CONTENT VISUAL STORYTELLING</span>
                    </div>
                    <Link
                      className="page-title next-ajax-link-page"
                      data-type="page-transition"
                      data-centerline="MOVE ON"
                      href="/multimedia"
                    >
                      <div className="next-hero-title primary-font-title caption-timeline">
                        <span>Multimedia</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </main>
  );
}
