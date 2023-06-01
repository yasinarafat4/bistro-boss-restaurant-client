import { Helmet } from "react-helmet-async";
import DashTitle from "../../../components/DashTitle/DashTitle";
import { useForm } from "react-hook-form";
import { ImSpoonKnife } from "react-icons/im";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="w-10/12">
      <Helmet>
        <title>Bistro | Add Items</title>
      </Helmet>
      <DashTitle
        subHeading={"---What's new?---"}
        heading={"ADD AN ITEM"}
      ></DashTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="md:flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Category*</span>
            </label>
            <select
              className="select select-bordered font-semibold"
              {...register("category", { required: true })}
            >
              <option disabled selected>
                Pick One
              </option>
              <option>Dessert</option>
              <option>Pizza</option>
              <option>Salad</option>
              <option>Soup</option>
              <option>Drinks</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Recipe Details*</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
            {...register("details", { required: true })}
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">Choose an Image*</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-yellow-800 via-yellow-700 to-yellow-600 flex items-center justify-center px-4 py-2 rounded-md text-white mt-3"
        >
          <span className="mr-2">Add Item</span>
          <ImSpoonKnife className="w-5 h-5 mr-2" />
        </button>
      </form>
    </div>
  );
};

export default AddItems;
