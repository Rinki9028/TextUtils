import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "black" : "orange",
  };

  // Function to generate accordion items
  const generateAccordionItem = (id, title, content) => {
    return (
      <div className="accordion-item" key={id}>
        <h2 className="accordion-header" id={`heading${id}`}>
          <button
            className="accordion-button collapsed"
            style={myStyle}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${id}`}
            aria-expanded="false"
            aria-controls={`collapse${id}`}
          >
            <strong>{title}</strong>
          </button>
        </h2>
        <div
          id={`collapse${id}`}
          className="accordion-collapse collapse"
          aria-labelledby={`heading${id}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={myStyle}>
            {content}
          </div>
        </div>
      </div>
    );
  };

  // Content for each section
  const accordionData = [
    {
      id: "One",
      title: "Analyze Your Text",
      content:
        "TextUtils is your go-to word and character counting utility, empowering you to take control of your text effortlessly. Whether you're a writer, student, or professional, our tool simplifies text manipulation to suit your needs. With TextUtils, you can seamlessly eliminate unnecessary spaces, ensuring your text is tidy and well-formatted. The utility goes beyond simple counting – it enables you to copy the manipulated text with ease, streamlining your workflow. Need to change the case of your text? TextUtils has you covered, allowing swift conversion between uppercase and lowercase, giving you flexibility and customization.",
    },
    {
      id: "Two",
      title: "Free to Use",
      content:
        "TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. It reports the number of words and characters, making it suitable for writing text with word/character limits.",
    },
    {
      id: "Three",
      title: "Browser Compatible",
      content:
        "This word counter software works in any web browser, such as Chrome, Firefox, Internet Explorer, Safari, Opera. It's suitable for counting characters in Facebook, blogs, books, Excel documents, PDFs, essays, and more.",
    },
    {
      id: "Four",
      title: "Use This App Without Worry",
      content:
        "Welcome to TextUtils! Your go-to tool for manipulating text. Whether you need to count words, characters, convert case, or remove extra spaces, TextUtils has you covered. This app empowers you to take control of your text and tailor it to your specific needs.",
    },
    {
      id: "Five",
      title: "Learn From TextUtils",
      content:
        "With TextUtils, you can easily perform operations like converting text from uppercase to lowercase and vice versa. The app is designed to be user-friendly, allowing you to streamline your text editing tasks efficiently.",
    },
    {
      id: "Six",
      title: "Streamline Your Text",
      content:
        "Use TextUtils to enhance your writing, clean up formatting, and make your text exactly the way you want it. Feel free to explore the features and make the most out of this versatile text manipulation tool.",
    },
    {
      id: "Seven",
      title: "Feedback Matters",
      content:
        "TextUtils is continually evolving, and we value your feedback. If you have suggestions or encounter any issues, don't hesitate to reach out. Enjoy using TextUtils and make your text work for you!",
    },
  ];

  return (
    <>
      <div className="container">
        <h1
          className="my-3 py-4 text-center"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          See The About Us Section...
        </h1>
        <div className="accordion" id="accordionExample">
          {accordionData.map((item) =>
            generateAccordionItem(item.id, item.title, item.content)
          )}
        </div>
        <div className="py-4"></div>
      </div>
    </>
  );
}
