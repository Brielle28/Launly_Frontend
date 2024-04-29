import { useState } from "react";
import { accordionData } from "../../utils/accordionData";

// mapping
const LeftSide = ({ toggleAccordion, accordOpen }) => {
  return (
    <section>
      <div className="flex flex-col gap-8">
        <h3 className="faqheading capitalize text-[64px] font-extrabold">
          frequently asked questions
        </h3>
        <div className="faq11 accordion flex flex-col gap-[2px]">
          {accordionData.map(({ title, content }, idx) => (
            <AccordionItem
              key={idx}
              title={title}
              content={content}
              toggleAccordion={() => toggleAccordion(idx)}
              accordOpen={accordOpen === idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Rightside = () => {
  return (
    <div className="faq2">
      <img src="/10.png" className="w-[720px] relative"></img>
      <img
        src="/housework-concept-puzzled-householder-raises-fore-2022-02-05-01-55-14-utc-1.png"
        className="w-[510px] h-[607.56px] absolute -mt-[38rem] ml-[6rem]"
      ></img>
    </div>
  );
};

const FrequentQuestions = () => {
  const [accordOpen, setAccordOpen] = useState(null);

  const toggleAccordion = (index) => {
    setAccordOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq bg-[#fff] flex mx-auto px-8">
      <LeftSide toggleAccordion={toggleAccordion} accordOpen={accordOpen} />
      <Rightside />
    </div>
  );
};
export default FrequentQuestions;

//props
function AccordionItem({ title, content, toggleAccordion, accordOpen }) {
  return (
    <div className="faq1 accordion-item LongButtons transition duration-150">
      <h2
        className="flex items-center justify-between w-full p-5 font-medium  gap-3 text-xl"
        onClick={toggleAccordion}
      >
        {title}
        <svg
          data-accordion-icon=""
          className={`w-4 h-4 shrink-0 ${
            accordOpen ? "" : "rotate-180"
          } transition duration-100`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5 5 1 1 5"
          />
        </svg>
      </h2>
      {accordOpen && (
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 rounded-b-[40px]">
          <p className="mb-2 text-gray-500 dark:text-gray-400">{content}</p>
        </div>
      )}
    </div>
  );
}
