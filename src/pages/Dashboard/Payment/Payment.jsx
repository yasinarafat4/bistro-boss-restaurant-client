import { Helmet } from "react-helmet-async";
import DashTitle from "../../../components/DashTitle/DashTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  return (
    <div className="w-9/12 overflow-y-auto">
      <Helmet>
        <title>Bistro | Payment</title>
      </Helmet>
      <DashTitle
        subHeading={"---Please Process---"}
        heading={"PAYMENT"}
      ></DashTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
