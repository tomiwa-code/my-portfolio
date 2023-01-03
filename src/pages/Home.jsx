import yo from "../img/yo.png";

const Home = () => {
  return (
    <div className="bg-secondary w-screen h-screen flex flex-col justify-center items-center relative">
      {/* <div className="bg-pattern w-screen h-screen absolute top-0 z-10 bg-darkGrey opacity-10"></div> */}
      <div className="z-20 text-center space-y-2.5 md:mt-12">
        <p className="text-white text-xs md:text-sm font-light">Hi, my name is</p>
        <h1 className="font-stretch text-primary uppercase text-2xl md:text-4xl">
          toomiwa
        </h1>
        <p className="text-white w-2/3 mx-auto text-center text-xs md:text-sm font-light">
          I'm a software developer specialize in building and occasionally
          designing exceptional digital experiences.
        </p>
        <div className="flex flex-col md:block p-4 space-y-6 md:space-x-8 buttons">
          <a href="myResume">
            <button
              className="btn-flip w-36 text-sm md:w-40 h-10 md:h-12 relative text-center font-medium"
              data-back="My Resumé"
              data-front="Download CV"
            ></button>
          </a>
          <a href="github">
            <button className="text-primary text-sm w-36 h-12 md:w-40 font-medium view relative">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>
              View GitHub
            </button>
          </a>
        </div>
        <div className="flex items-center justify-center yo">
          <div className="w-48 h-52 md:w-64 md:h-56 bg-primary holder overflow-hidden">
            <img src={yo} alt="yo" className="w-64 h-56 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
