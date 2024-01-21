import React, { useState, useEffect } from "react";

export default function Features(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuresData = [
    {
      title: "Advanced Text Analysis",
      description:
        "Gain insights into your text with advanced analysis tools. Understand word frequency, sentiment, and more.",
    },
    {
      title: "Smart Case Conversion",
      description:
        "Effortlessly transform your text's case. Toggle between uppercase and lowercase intelligently with one click.",
    },
    {
      title: "Whitespace Optimization",
      description:
        "Optimize your text by removing redundant spaces. Enhance readability and give your content a polished look.",
    },
    {
      title: "Keyword Density Checker",
      description:
        "Analyze your content's keyword distribution. Perfect for SEO optimization and improving search engine ranking.",
    },
    {
      title: "Grammar Enhancement",
      description:
        "Improve your text's grammar with suggestions and corrections. Enhance the overall quality and professionalism of your writing.",
    },
    {
      title: "Cross-Browser Compatibility",
      description:
        "Experience seamless functionality across popular browsers like Chrome, Firefox, Safari, and more. Access powerful text tools anytime, anywhere.",
    },
  
  ];

  const handleCardHover = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    // Implement automatic slide logic here
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === featuresData.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); // Adjust the interval as needed (3000ms = 3 seconds)

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, featuresData.length]);
  return (
    <>
      <div className="container my-5">
        <h1
          className="my-3 py-4 text-center infinite-scroll-text"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          See The TextUtils Features...
        </h1>

        <div className="row">
          {featuresData.map((feature, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className="card"
                style={{
                  height: "180px",
                  color: props.mode === "dark" ? "white" : "black",
                  backgroundColor: props.mode === "dark" ? "black" : "orange",
                }}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div
                  className="card-body"
                  style={{
                    background:
                      currentIndex === index
                        ? "linear-gradient(to right, #FFA500, #FFFFFF, #008000)"
                        : "orange",
                    backgroundSize: "200px",
                    transition: "background .95s ease",
                  }}
                >
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="card-text">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
