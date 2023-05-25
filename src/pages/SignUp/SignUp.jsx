import { Link } from "react-router-dom";
import signUpImg from "../../assets/others/login.png";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
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
                  type="name"
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <>
                    {errors.password.type === "required" && (
                      <span className="text-red-700 font-semibold">
                        Password is required!
                      </span>
                    )}
                    {errors.password.type === "minLength" && (
                      <span className="text-red-700 font-semibold">
                        Your password must be at least 6 characters long!
                      </span>
                    )}
                    {errors.password.type === "maxLength" && (
                      <span className="text-red-700 font-semibold">
                        Your password must not exceed 20 characters!
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
