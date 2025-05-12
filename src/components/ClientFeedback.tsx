import { useState, useEffect } from "react";
import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import { Tag } from "primereact/tag";
import Feedback from "../Pages/AddFeedback";


interface Feedback {
  id: number;
  name: string;
  message: string;
  image: string;
  approved: boolean;
}


const ClientFeedback=() => {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);
  

  const responsiveOptions: CarouselResponsiveOption[] = [
    { breakpoint: "1400px", numVisible: 2, numScroll: 1 },
    { breakpoint: "1199px", numVisible: 3, numScroll: 1 },
    { breakpoint: "767px", numVisible: 2, numScroll: 1 },
    { breakpoint: "575px", numVisible: 1, numScroll: 1 },
  ];

  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem("feedbackList") || "[]");
    const approvedFeedback = storedFeedback.filter((feedback: Feedback) => feedback.approved);
    setFeedbackList(approvedFeedback);
  }, []);

  const feedbackTemplate = (feedback: Feedback) => {
    return (
      <div className="feedback-bg">
        <div className="feedback-card ">
          <div>
            <div className="flex justify-center">
              <img
                src={feedback.image}
                alt={feedback.name}
                className="feedback-img"
              />
            </div>
            <h4 className="client-name">{feedback.name}</h4>
            <Tag value={feedback.message} className="para italic" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="bg-color">
        

        {feedbackList.length > 0 ? (
          <Carousel
            value={feedbackList}
            numVisible={3}
            numScroll={3}
            responsiveOptions={responsiveOptions}
            className="custom-carousel"
            circular
            autoplayInterval={5000}
            itemTemplate={feedbackTemplate}
          />
        ) : (
          <p className="No-feedback">No feedback available.</p>
        )}

        
      </div>
    </>
  );
}
export default ClientFeedback;