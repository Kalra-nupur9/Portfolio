import { useState } from "react";
import Swal from "sweetalert2";

interface FormData {
Name: string;
email: string;
contactNumber: string;
message: string;
}

const ContactForm = () => {
const [formData, setFormData] = useState<FormData>({
Name: "",
email: "",
contactNumber: "",
message: "",
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
const { name, value } = e.target;

if (name === "Name" && value.length > 50) return; // Limit name to 50 characters
if (name === "contactNumber" && value.length > 15) return; // Limit contact number

setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(formData.email)) {
  alert("Please enter a valid email address.");
  return;
}

// Message on submission


Swal.fire({
  title: "Details Submitted!",
  text: "Thank you for reaching out! You will receive a call or email from us soon. For urgent matters, please Mail on the given email.",
  icon: "success",
  confirmButtonText: "OK",
});

// Reset form after submission
setFormData({ Name: "", email: "", contactNumber: "", message: "" });
};
return (
<>


  <form onSubmit={handleSubmit} className="">
    
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="w-full">
        <label className="label">Full Name</label>
        <input
          type="text"
          name="Name"
          value={formData.Name}
          onChange={handleChange}
          className="input-form"
          maxLength={50}
          required
          placeholder="Enter Your Full Name"
        />
      </div>
    </div>

    <div className="mt-2 flex flex-col gap-2 ">
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
        placeholder="Enter Your Message "
      ></textarea>
    </div>

    <div className="btn-div">
      <button type="submit" className="btn btn-blue">
        Submit Query
      </button>
    </div>

    {/* {responseMessage && (
          <p className="mt-4 text-center text-lg text-green-600">{responseMessage}</p>
        )} */}
  </form>
</>
);
};

export default ContactForm;
