import { Helmet } from "react-helmet-async";
import DashTitle from "../../../components/DashTitle/DashTitle";
import { useForm } from "react-hook-form";
import { ImSpoonKnife } from "react-icons/im";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const AddItems = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgURL,
          };
          console.log(newItem, imgURL);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("After posting new menu item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire("Good job!", "Item added successfully!", "success");
            }
          });
        }
      });
  };

  return (
    <div className="w-10/12 overflow-auto">
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
              defaultValue="Pick One"
              className="select select-bordered font-semibold"
              {...register("category", { required: true })}
            >
              <option disabled>Pick One</option>
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
            {...register("recipe", { required: true })}
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">Choose an Image*</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            {...register("image", { required: true })}
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
