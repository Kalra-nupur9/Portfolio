import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineAlternateEmail } from "react-icons/md";
const ContactDetails = () => {
  return (
    <>
      <div className="contact-div ">
        <div className="heading-section">
          <h3 className="h2">Contact Details</h3>
        </div>

        <div className="contact-detail">
          <TbPhoneCall className="contact-icon" /> +91 99999xxxxx
        </div>
        <div className="contact-detail">
          <MdOutlineAlternateEmail className="contact-icon" /> kalranupur6@gmai.com
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
