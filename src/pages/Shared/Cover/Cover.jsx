const Cover = ({ bgImg, title, text }) => {
  return (
    <div
      className="hero h-[400px] lg:h-[600px]"
      style={{
        backgroundImage: `url("${bgImg}")`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content px-10 py-8  md:px-28 md:py-16 lg:px-40 lg:py-20 bg-black bg-opacity-40">
        <div className="max-w-md" style={{ fontFamily: "Cinzel, serif" }}>
          <h1 className="mb-5 text-3xl md:text-4xl lg:text-6xl font-bold">
            {title}
          </h1>
          <p className="mb-5 text-xs md:text-sm lg:text-lg uppercase">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
