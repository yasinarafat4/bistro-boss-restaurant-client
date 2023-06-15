import { useContext } from "react";
import { BsGoogle } from "react-icons/bs";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = ({ text }) => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);

        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
        };
        fetch("https://bistro-boss-server-self-eta.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="text-center">
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider font-semibold">{text}</div>
      </div>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-circle btn-outline text-2xl"
      >
        {" "}
        <BsGoogle></BsGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
