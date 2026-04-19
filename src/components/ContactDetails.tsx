import { MdOutlineMail } from "react-icons/md";
// import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import ContactForm from "./ContactForm";
type ContactDetailsProps = {
  onClose: () => void;
};

const ContactDetails = ({ onClose } : ContactDetailsProps) => {
  return (
    <div className="relative contact-div ">
      
      {/* ✅ Close Button INSIDE */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
      >
        ✕
      </button>

      <div className="detail-box">
        <div className="space-y-4">
          <h2 className="h2-Light ">Let’s Connect & Build Something Amazing!</h2>
          <p className="para-contact max-w-3xl">
            Whether you need a stunning website, a seamless user experience, or expert web
            development services, I'm here to help.
          </p>
          <p className="quote">
            "Great things start with a simple conversation. Let’s talk!"
          </p>
        </div>

        <div className="contact-box">
          <div className="flex items-center gap-4">
            <MdOutlineMail className="contact-icon" />
            <div >
              <p className="text-sm opacity-60 text-white">Email</p>
              <p className="text-sm  text-white">nupurk.work@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaLinkedin className="contact-icon" />
            <div>
              <p className="text-sm opacity-60  text-white">Linkedin</p>
              <a
                href="https://www.linkedin.com/in/nupur-kalra-122193287/"
                target="_blank"
                className="text-sm hover:text-cyan-color  text-white"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-5 sm:w-[50%]">
        <h1 className="h3 text-center">Send me a Message</h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactDetails;
