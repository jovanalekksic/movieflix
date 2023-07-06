import React from "react";

const Footer = () => {
  return (
    <div className="container my-5" id="footer--pin">
      <footer className="text-center text-lg-start text-white" id="prvaLinija">
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Movieflix</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  id="trecaLinija"
                />
                <p>
                  Stories move us. They make us feel more emotion, see new
                  perspectives, and bring us closer to each other.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  id="cetvrtaLinija"
                />
                <p>
                  <a href="#!" className="text-white">
                    Popular TV Shows
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Movies
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Studio
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Movie Sets
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  id="petaLinija"
                />
                <p>
                  <a href="#!" className="text-white">
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Careers
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Pricing tables
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  id="sestaLinija"
                />
                <p>
                  <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> info@movieflix.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-3" id="#sedmaLinija">
          © 2023 Copyright:
          <a className="text-white" href="/">
            Movieflix.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
