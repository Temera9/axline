import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main>
      <div className="cd-index cd-main-content">
        <div
          id="clapat-page-content"
          className="light-content"
          data-bgcolor="#0c0c0c"
        >
          <Header />

          <div id="content-scroll">
            <div id="main">
              <div
                className="content-row full row_padding_top row_padding_bottom dark-section text-align-center"
                data-bgcolor="#0c0c0c"
              >
                <div className="inner">
                  <h1 className="hero-title primary-font-title">
                    <span>Project Not Found</span>
                  </h1>
                  <p className="bigger has-opacity">
                    The project you're looking for doesn't exist or has been
                    moved.
                  </p>

                  <div className="button-box text-align-center has-animation">
                    <div className="clapat-button-wrap parallax-wrap hide-ball">
                      <div className="clapat-button parallax-element">
                        <div className="button-border outline rounded parallax-element-second">
                          <Link
                            href="/"
                            className="ajax-link"
                            data-type="page-transition"
                          >
                            <span data-hover="View All Projects">
                              View All Projects
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="button-box text-align-center has-animation"
                    style={{ marginTop: "20px" }}
                  >
                    <div className="clapat-button-wrap parallax-wrap hide-ball">
                      <div className="clapat-button parallax-element">
                        <div className="button-border outline rounded parallax-element-second">
                          <Link
                            href="/"
                            className="ajax-link"
                            data-type="page-transition"
                          >
                            <span data-hover="Back to Home">Back to Home</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>

          <div id="app"></div>
        </div>
      </div>
    </main>
  );
}
