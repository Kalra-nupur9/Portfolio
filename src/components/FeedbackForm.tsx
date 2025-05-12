import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
interface Feedback {
  id: number;
  name: string;
  message: string;
  image: string;
  approved: boolean;
}
const randomImages = [
  "https://randomuser.me/api/portraits/men/10.jpg",
  "https://randomuser.me/api/portraits/women/15.jpg",
  "https://placedog.net/200",
  "https://placekitten.com/200/200",
  "https://randomfox.ca/images/1.jpg",
];

const FeedbackForm = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });
  // const [successMessage, setSuccessMessage] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newFeedBack: Feedback = {
      id: Date.now(),
      name: formData.name,
      message: formData.message,
      image: randomImages[Math.floor(Math.random() * randomImages.length)],
      approved: false,
    };

    const existingFeedback = JSON.parse(localStorage.getItem("feedbackList") || "[]");
    localStorage.setItem("feedbackList", JSON.stringify([...existingFeedback, newFeedBack]));

    // Show success alert using SweetAlert2
    Swal.fire({
      title: "Feedback Submitted!",
      text: "Your feedback has been submitted successfully. Estimated approval time: 24 hours.",
      icon: "success",
      confirmButtonText: "OK",
    });

    setFormData({ name: "", message: "" });
  };
  return (
    <>
      <form
        className="contact-div w-full sm:w-[50%]  "
        onSubmit={handleSubmit}
      >
        <div className="flex w-full flex-col">
          <label className="label">First Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-form"
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="label">
            Feedback
          </label>
          <textarea
            name="message"
            id=""
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your Feedback"
            className="input-form"
          ></textarea>
          <div className="btn-div">
            <button type="submit" className="btn btn-blue">
              Submit Feedback
            </button>
          </div>
        </div>
        {/* {successMessage && (
          <p className="mt-3 text-green-600">
            Feedback Submited successfully! Awaiting approval. estitmated time for the feedback
            update is 24hrs Please wait.
          </p>
        )} */}
      </form>
    </>
  );
};

export default FeedbackForm;
