import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import loginImg from "../../assets/others/login.png";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
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
                <span className="label-text text-lg font-semibold">Email</span>
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
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                ref={captchaRef}
                name="captcha"
                placeholder="Type here"
                className="input input-bordered"
                required
              />
              <button
                onClick={handleValidateCaptcha}
                className="btn btn-outline btn-xs mt-2"
              >
                Validate
              </button>
            </div>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
