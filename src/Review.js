import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(1);
  const { name, job, image, text } = people[index];

  const checknum = (n) => {
    if (n > people.length - 1) return 0;
    if (n < 0) return people.length - 1;
    return n;
  };

  const randomPerson = () => {
    let random = Math.floor(Math.random() * people.length);
    while (random === index) random = Math.floor(Math.random() * people.length);
    setIndex(random);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button
            className="prev-btn"
            onClick={() => setIndex(checknum(index - 1))}
          >
            <FaChevronLeft />
          </button>
          <button
            className="next-btn"
            onClick={() => setIndex(checknum(index + 1))}
          >
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>
          Surprise Me!
        </button>
      </div>
    </article>
  );
};

export default Review;
