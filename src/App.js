import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";

function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
    <Header/>
    <div className="container">
      <FeedbackList feedback={feedback}/>
      </div>
    </>
  );
}

export default App;
