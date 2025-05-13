import { MdOutlineMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import ContactForm from "./ContactForm";

const ContactDetails = () => {
  return (
    <>
      <div className="contact-div">
        <div className="detail-box">
          <div className="space-y-4">
            <h1 className="detail-heading">Questions, Thoughts, Or Just Want to Say Hello?</h1>
          </div>
          <div className="contact-box">
            <div className="flex items-center gap-4">
              <MdOutlineMail className="contact-icon" />{" "}
              <div>
                <p className="text-sm opacity-60">Email</p>
                <a href="" className="text-sm">
                  kalranupur6@gmail.com
                </a>
              </div>
            </div>
            {/* <div className="flex items-center gap-4">
              <IoCall className="contact-icon" />{" "}
              <div>
                <p className="text-sm opacity-60">Email</p>
                <a href="" className="text-sm">
                 +91 99999 99999
                </a>
              </div>
            </div> */}
            <div className="flex items-center gap-4">
              <FaLinkedin className="contact-icon" />{" "}
              <div>
                <p className="text-sm opacity-60">Linkedin</p>
                <a href="" target="" className="text-sm">
                  nupur-kalra-122193287
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
    </>
  );
};

export default ContactDetails;
