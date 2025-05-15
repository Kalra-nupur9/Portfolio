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
           <h2 className="h2-Light">Let’s Connect & Build Something Amazing! </h2>
                    <p className="para-contact max-w-3xl ">
                      Whether you need a stunning website, a seamless user experience, or expert web
                      development services, I'm here to help. Drop your email, and I'll reach
                      out to discuss how we can turn your vision into reality.{" "}
                    </p>
                     <p className="quote">
                    "Great things start with a simple conversation. Let’s talk!"
                  </p>
          </div>
          <div className="contact-box">
            <div className="flex items-center gap-4">
              <MdOutlineMail className="contact-icon" />{" "}
              <div>
                <p className="text-sm opacity-60">Email</p>
                <p className="text-sm">
                  nupurk.work@gmail.com
                </p>
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
                <p className="text-sm">
                  https://www.linkedin.com/in/nupur-kalra-122193287/
                </p>
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
