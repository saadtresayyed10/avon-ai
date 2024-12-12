"use client";

import { useEffect, useState } from "react";

type Feedback = {
  id: string;
  fullname: string;
  email: string;
  message: string;
};

const FeedbackShowcase = () => {
  const [feedback, setFeedback] = useState<Feedback[]>([]);

  useEffect(() => {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => setFeedback(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {feedback.map((fdb) => (
        <p>{fdb.fullname}</p>
      ))}
    </div>
  );
};

export default FeedbackShowcase;
