import { Accordion, AccordionTab } from "primereact/accordion";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}
export default function Faqs() {
  const faqs: FAQItem[] = [
    {
      question: "What services do you offer as a freelance web developer?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula pharetra ligula, ac varius velit aliquam ut.",
    },
    {
      question: "Do you provide website maintenance after launch?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit magna eu massa auctor, et dignissim lorem volutpat.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula urna at elit cursus, eget sollicitudin elit dapibus.",
    },
    {
      question: "Can you help with SEO and performance optimization?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus.",
    },
    {
      question: "Do you work with existing websites for redesign or improvements?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus mauris ut risus facilisis, in tempus justo dictum.",
    },
  ];
  return (
    <section className="bg-color">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Heading */}
        <div className="heading-section">
          <h1 className="h1">FAQs</h1>
          <h3 className="h3">Helping You Understand, One Question at a Time!</h3>
        </div>

        {/* FAQ Accordion */}
        <div className="faq-div">
          <Accordion activeIndex={0} className="accordion">
            {faqs.map((faq, index) => (
              <AccordionTab key={index} header={faq.question} className="accordion-tab">
                <p className="para">{faq.answer}</p>
              </AccordionTab>
            ))}
          </Accordion>
        </div>
      </motion.div>
    </section>
  );
}
