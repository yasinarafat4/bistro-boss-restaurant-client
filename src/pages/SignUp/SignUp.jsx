import { Link, useNavigate } from "react-router-dom";
import signUpImg from "../../assets/others/login.png";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

/*
Email: bistro@boss.com
Pass: bisTro4@
*/

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = { name: data.name, email: data.email };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire(
                  "Good job!",
                  "You have successfully signed up!",
                  "success"
                );
                navigate("/");
              }
            });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevVisible) => !prevVisible);
  };

  return (
    <div>
      <Helmet>
        <title>Bistro | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-[url(https://i.ibb.co/3NkCw3b/Wood-pattern-white-brown1x-Png-Vectors-Photos-and-PSD-files-Free-Download.png)]">
        <div
          className="hero-content flex-col lg:flex-row  bg-[url(https://i.ibb.co/3NkCw3b/Wood-pattern-white-brown1x-Png-Vectors-Photos-and-PSD-files-Free-Download.png)] lg:py-[50px] lg:mx-20"
          style={{ boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }}
        >
          <div className="text-center lg:text-left">
            <img
              className="w-full md:w-6/12 lg:w-9/12 mx-auto"
              src={signUpImg}
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h2 className="text-3xl text-center font-bold">Sign Up</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Type here"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-700 font-semibold">
                    Name is required! Please give your name.
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Photo URL
                  </span>
                </label>
                <input
                  type="url"
                  {...register("photoURL", {
                    required: true,
                    pattern: /^(ftp|http|https):\/\/[^ "]+$/,
                  })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && errors.photoURL.type === "required" && (
                  <span className="text-red-700 font-semibold">
                    Photo URL is required! Please provide a valid URL.
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Email
                  </span>
                </label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  placeholder="Type here"
                  className="input input-bordered"
                />
                {errors.email && (
                  <>
                    {errors.email.type === "required" && (
                      <span className="text-red-700 font-semibold">
                        Email is required!
                      </span>
                    )}
                    {errors.email.type === "pattern" && (
                      <span className="text-red-700 font-semibold">
                        You must provide a valid email!
                      </span>
                    )}
                  </>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  })}
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                <div
                  className="absolute top-[70px] right-4 transform -translate-y-1/2 h-8 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FiEyeOff className="text-gray-500" />
                  ) : (
                    <FiEye className="text-gray-500" />
                  )}
                </div>
                {errors.password && (
                  <>
                    {errors.password?.type === "required" && (
                      <span className="text-red-700 font-semibold">
                        Password is required!
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="text-red-700 font-semibold">
                        Your password must be at least 6 characters long!
                      </span>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <span className="text-red-700 font-semibold">
                        Your password must not exceed 20 characters!
                      </span>
                    )}
                    {errors.password?.type === "pattern" && (
                      <span className="text-red-700 font-semibold">
                        Your password must have one uppercase, one lowercase,
                        one number and one special character!
                      </span>
                    )}
                  </>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn text-lg bg-[#D1A054B3] hover:bg-[#D1A054] hover:duration-500 text-white font-semibold border-none"
                />
              </div>

              <div className="text-center">
                <Link to="/login">
                  {" "}
                  <p className="font-semibold text-lg text-[#D1A054]">
                    Already registered? Go to log in
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
