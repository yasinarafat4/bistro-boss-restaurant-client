import { Parallax } from "react-parallax";

const InsideCover = ({ bgImg, title, text }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={bgImg}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero h-[200px] md:h-[300px] lg:h-[400px]">
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content px-2 pt-4 md:px-10 md:py-8 lg:px-20 lg:py-10 bg-black bg-opacity-40 mx-10 md:mx-0">
          <div className="max-w-md" style={{ fontFamily: "Cinzel, serif" }}>
            <h1 className="mb-5 text-xl md:text-3xl lg:text-4xl font-bold uppercase">
              {title}
            </h1>
            <p className="mb-5 text-[10px] md:text-sm">{text}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default InsideCover;
