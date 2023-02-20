import React from "react";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackList() {
 const { feedback, isLoading } =useContext(FeedbackContext)


  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No feedback yet</p>;
  }

  return isLoading ? <h3>Loading....</h3> : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div 
          key={item.id}
          initial={{opacity: 0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          >
            <FeedbackItem item={item}  />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}



export default FeedbackList;
