
import FeedbackForm from "../components/FeedbackForm";



const AddFeedback = () => {
 
     
  return (
    <>
      <div className="bg-color flex flex-col items-center justify-center py-5">
        <div className="heading-section">
          <h1 className="h2">Your  Feedback</h1>
          <h3 className="h3">Helping Us Improve, One Feedback at a Time!</h3>
        </div>
       <FeedbackForm/>
      </div>

      
    </>
  );
}

export default AddFeedback
