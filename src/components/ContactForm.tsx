import { useState } from "react";
import Swal from "sweetalert2";

interface FormData {
  name: string;
  email: string;
  contactNumber: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "Name" && value.length > 50) return;
    if (name === "contactNumber" && value.length > 15) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Swal.fire({
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    setIsSubmitting(true);

    // Show loading popup
    Swal.fire({
      title: "Submitting...",
      text: "Please wait while we send your message.",
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const res = await fetch("https://portfolio-backend-0gej.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          contactNumber: formData.contactNumber,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      Swal.fire({
        title: "Details Submitted!",
        text: "Thank you for reaching out! You will receive a call or email from us soon.",
        icon: "success",
        confirmButtonText: "OK",
      });

      setFormData({ name: "", email: "", contactNumber: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong while submitting the form.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="w-full">
            <label className="label">Full Name</label>
            <input
              type="text"
              name="Name"
              value={formData.name}
              onChange={handleChange}
              className="input-form"
              maxLength={50}
              required
              placeholder="Enter Your Full Name"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="mt-2 flex flex-col gap-2">
          <div className="w-full">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-form"
              required
              placeholder="Enter Your Email id"
              disabled={isSubmitting}
            />
          </div>
          <div className="w-full">
            <label className="label">Contact No.</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="input-form"
              maxLength={15}
              required
              placeholder="Enter number with country code"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="mt-2">
          <label className="label">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="input-form"
            rows={4}
            required
            placeholder="Enter Your Message"
            disabled={isSubmitting}
          ></textarea>
        </div>

        <div className="btn-div">
          <button
            type="submit"
            className="btn btn-blue"
            disabled={isSubmitting}
            style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? "not-allowed" : "pointer" }}
          >
            {isSubmitting ? "Submitting..." : "Submit Query"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;