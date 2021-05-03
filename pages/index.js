import Head from 'next/head'
import Image from 'react-bootstrap/Image'


export default function index() {
  return (
    <section className="hero hero-bg d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
            <div className="hero-text">
              <h1 className="text-white" data-aos="fade-up">SMA Pangudi Luhur Yogyakarta</h1>
              <a href="contact.html" className="custom-btn btn-bg btn mt-3" data-aos="fade-up" data-aos-delay={100}>Lorem lorem!</a>
              <strong className="d-block py-3 pl-5 text-white" data-aos="fade-up" data-aos-delay={200}><i className="fa fa-phone mr-2" /> +62xx</strong>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="hero-image" data-aos="fade-up" data-aos-delay={300}>
              <Image width="300" height="100" src="logo-sma.png" fluid />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
