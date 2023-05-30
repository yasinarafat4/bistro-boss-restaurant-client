import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Swal from "sweetalert2";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import loginImg from "../../assets/others/login.png";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Great!!!",
          text: "You have logged in successfully!",
          icon: "success",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          setError("User Not Found. Invalid email or password!");
        } else if (error.code === "auth/wrong-password") {
          setError("Wrong Password. Please try again!");
        } else {
          setError(error.message);
        }
      });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevVisible) => !prevVisible);
  };

  return (
    <>
      <Helmet>
        <title>Bistro | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-[url(https://i.ibb.co/3NkCw3b/Wood-pattern-white-brown1x-Png-Vectors-Photos-and-PSD-files-Free-Download.png)]">
        <div
          className="hero-content flex-col lg:flex-row  bg-[url(https://i.ibb.co/3NkCw3b/Wood-pattern-white-brown1x-Png-Vectors-Photos-and-PSD-files-Free-Download.png)] lg:py-[50px] lg:mx-20"
          style={{ boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }}
        >
          <div className="text-center lg:text-left">
            <img
              className="w-full md:w-6/12 lg:w-9/12 mx-auto"
              src={loginImg}
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm">
            <form onSubmit={handleLogin} className="card-body">
              <h2 className="text-3xl text-center font-bold">Login</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type here"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
                <div
                  className="absolute top-[245px] right-10 transform -translate-y-1/2 h-8 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FiEyeOff className="text-gray-500" />
                  ) : (
                    <FiEye className="text-gray-500" />
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  onBlur={handleValidateCaptcha}
                  name="captcha"
                  placeholder="Type here"
                  className="input input-bordered"
                />
              </div>
              <p className="text-red-600 text-sm m-1 font-semibold">{error}</p>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  type="submit"
                  value="Login"
                  className="btn text-lg bg-[#D1A054B3] hover:bg-[#D1A054] hover:duration-500 text-white font-semibold border-none"
                />
              </div>
              <div className="text-center">
                <Link to="/signup">
                  {" "}
                  <p className="font-semibold text-lg text-[#D1A054]">
                    New here? Create a New Account
                  </p>
                </Link>
              </div>
              <SocialLogin text={"Or sign in with"}></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
