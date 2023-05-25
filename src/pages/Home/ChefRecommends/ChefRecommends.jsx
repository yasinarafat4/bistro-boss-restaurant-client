import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const recipes = [
  {
    name: "Caesar Salad",
    items: [
      "Romaine lettuce",
      "Parmesan cheese",
      "Croutons",
      "Caesar dressing",
      "Chicken (optional)",
    ],
    image: "https://i.ibb.co/6txf0fT/slide1.jpg",
  },
  {
    name: "Minestrone Soup",
    items: ["Vegetable broth", "Tomatoes", "Carrots", "Celery", "Pasta"],
    image: "https://i.ibb.co/GVWdZgy/slide3.jpg",
  },
  {
    name: "Margherita Pizza",
    items: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella",
      "Basil leaves",
      "Olive oil",
    ],
    image: "https://i.ibb.co/BGd3dV6/slide2.jpg",
  },
  {
    name: "Greek Salad",
    items: [
      "Cucumbers",
      "Tomatoes",
      "Red onions",
      "Feta cheese",
      "Kalamata olives",
    ],
    image: "https://i.ibb.co/85QVRJ7/salad-bg.jpg",
  },
];

const ChefRecommends = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="flex justify-center mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="max-w-sm rounded overflow-hidden shadow-lg"
              data-aos="fade-down-right"
              data-aos-duration="1000"
            >
              <img
                className="w-full h-48 object-cover"
                src={recipe.image}
                alt={recipe.name}
              />
              <div className="px-6 py-4">
                <div className="font-semibold text-xl mb-2 text-center">
                  {recipe.name}
                </div>
                <ul className="list-disc ms-12">
                  {recipe.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4 flex justify-center">
                <button
                  style={{ borderBottom: "3px solid #BB8506" }}
                  className="bg-[#E8E8E8] hover:bg-[#1F2937] hover:duration-500 text-[#BB8506] font-semibold py-2 px-4 rounded-md"
                >
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;
