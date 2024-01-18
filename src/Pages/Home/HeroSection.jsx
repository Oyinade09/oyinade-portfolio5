export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm </p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Oyinade</span> <br />
              Odogun
            </h1>
            <p className="hero--section-description">
              I develop web applications,
              <br /> user interfaces and Data Analysis
            </p>
          </div>
          <div className=" flex items-center object-center">
            <div>
              <button className="btn btn-primary">Get In Touch</button>
            </div>
          </div>
        </div>
        <div className="hero--section--img">
          <div className="mx-auto rounded-full m-3 bg-gradient-to-r from-purple-500 to-purple-300   w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 pb-0">
            <img src="./img/avater-oyin.png" alt="Hero Section" />
          </div>
        </div>
      </section>
    );
  }