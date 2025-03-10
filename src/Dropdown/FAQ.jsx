import React, { useState } from 'react';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle FAQ open/close
  };

  const questionsAndAnswers = [
    {
      question: "What extracurricular activities do you offer?",
      answer: "We offer a wide range of extracurricular activities, including sports, arts, music, and drama. Students can participate in various clubs and teams.",
    },
    {
      question: "How can students get academic counseling?",
      answer: "Our counseling services are available to students for academic guidance. Students can schedule appointments with counselors for support and advice.",
    },
    {
      question: "Do you have a library?",
      answer: "Yes, our school has a well-equipped library with a variety of academic and recreational books. Students are encouraged to use the library for their studies.",
    },
    {
      question: "What technology tools are used in the classrooms?",
      answer: "Our classrooms are equipped with smartboards, projectors, and computers to enhance the learning experience. We also use educational software and online resources.",
    },
  ];

  return (
    <>
      <div className="services py-7">
        <h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Explore the various services provided by Shree Ghusel Secondary School, including extracurricular activities, counseling, and library facilities.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="faq-section bg-white py-7 px-8">
        <h2 className="text-3xl font-bold text-center mb-4">FAQs</h2>
        <p className="text-center text-gray-600 mb-8">
          Find answers to common questions about the services we offer at Shree Ghusel Secondary School.
        </p>
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1">
            {questionsAndAnswers.map((item, index) => (
              <div
                key={index}
                className="faq-item mb-6 border-b border-gray-300"
              >
                <div
                  className={`faq-question flex items-center justify-between p-4 cursor-pointer ${activeIndex === index ? "bg-indigo-600 text-white" : "bg-gray-100"}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <p className="font-semibold">{item.question}</p>
                  <span
                    className={`transition-transform ${
                      activeIndex === index ? "rotate-90 text-pink-500" : ""
                    }`}
                  >
                    ➤
                  </span>
                </div>

                {activeIndex === index && (
                  <div className="faq-answer p-4 bg-white text-gray-700 border-t border-gray-300">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-md">
              <img
                src="/assets/photo.png"
                alt="study"
                className="rounded-xl w-80 mx-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
