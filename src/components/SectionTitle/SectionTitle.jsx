const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center space-y-4 my-6 md:my-16 w-8/12 md:w-5/12 lg:w-4/12 mx-auto">
      <p className="italic text-[#D99904] text-sm md:text-base">{subHeading}</p>

      <h2 className="text-xl md:text-3xl font-semibold border-y-4 py-2 md:py-4">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
