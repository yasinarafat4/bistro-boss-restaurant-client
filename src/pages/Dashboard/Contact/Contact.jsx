import { Helmet } from "react-helmet-async";
import contactImg from "../../../assets/contact/banner.jpg";
import Cover from "../../Shared/Cover/Cover";
import { BsSendFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    Swal.fire({
      text: "Thank you for sending the message. We will get back to you as soon as possible.",
      icon: "success",
      confirmButtonText: "OK",
    });

    emailjs
      .sendForm(
        "service_oyiwiik",
        "template_zxgqz7d",
        form.current,
        "EZqoPl1QBq6NL4AbD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <Helmet>
        <title>Bistro | Contact</title>
      </Helmet>
      <Cover
        bgImg={contactImg}
        title={"Contact Us"}
        text={"Send Us a Message"}
      ></Cover>
      <form ref={form} onSubmit={sendEmail} className="p-20 bg-[#F3F3F3]">
        <div className="lg:flex gap-2">
          <div className="mb-4 w-full">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#D99904]"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="from_subject"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#D99904]"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="from_email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#D99904]"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#D99904]"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-[#835D23] to-[#B58130] hover:from-[#835D23] hover:to-[#B58130] text-white font-bold py-2 px-4 rounded-sm"
        >
          <div className="flex justify-center items-center gap-2">
            <p>Send Message</p>
            <BsSendFill className="mt-1 text-white" />
          </div>
        </button>
      </form>
    </div>
  );
};

export default Contact;
