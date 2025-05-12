import { useState, useEffect } from "react";

interface Feedback {
  id: number;
  name: string;
  message: string;
  approved: boolean;
}

const FeedbackAdmin = () => {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);

    // Reads stored feedback from localStorage.
  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem("feedbackList") || "[]");
    setFeedbackList(storedFeedback);
  }, []);


// approve feedback and update localstorage
  const handleApprove = (id: number) => {
    const updatedFeedback = feedbackList.map((feedback) =>
      feedback.id === id ? { ...feedback, approved: true } : feedback
    );
    setFeedbackList(updatedFeedback);
    localStorage.setItem("feedbackList", JSON.stringify(updatedFeedback));
  };

  // Deletes feedback and update localstorage

  const handleDelete = (id: number) => {
    const updatedFeedback = feedbackList.filter((feedback) => feedback.id !== id);
    setFeedbackList(updatedFeedback);
    localStorage.setItem("feedbackList", JSON.stringify(updatedFeedback));
  };

  return (
    <div className="bg-color flex justify-center flex-col items-center space-y-4">
      <h2 className="h1 text-center">Manage Feedback</h2>
      <div className="grid gap-10 px-5 sm:grid-cols-1 sm:px-10 md:grid-cols-2">
      {feedbackList.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        feedbackList.map((feedback) => (
          <div key={feedback.id} className="p-4 border rounded-lg shadow-lg items-center gap-4 bg-white flex-col flex mb-3 w-full " >
           
            <div>
            <p className="h3"><strong>Name:</strong> {feedback.name}</p>
            </div>
           <div>
           <p className="para border-2 p-2 bg-pink-50 border-pink-500"> <strong>Message:</strong> {feedback.message}</p>
           </div>
            <div className="flex flex-col  items-center sm:flex-row gap-3">
            {!feedback.approved ? (
              <button onClick={() => handleApprove(feedback.id)} className="btn btn-blue">
                Approve
              </button>
            ) : (
              <span className="text-green-600">✅ Approved</span>
            )}
            <button onClick={() => handleDelete(feedback.id)} className=" btn btn-red">
              Delete Feedback
            </button>
            </div>
          </div>
        ))
      )}
      </div>
    </div>
  );
};

export default FeedbackAdmin;
