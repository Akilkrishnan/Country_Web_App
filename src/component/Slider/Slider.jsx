
import React, { useState } from "react";
import "./Slider.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [
    { src: "../../assets/home/Group 1.png", caption: "Caption Text" },
    { src: "../../assets/home/Group 1.png", caption: "Caption Two" },
    { src: "../../assets/home/Group 1.png", caption: "Caption Three" },
  ];
  const nextSlide = () => {
    // setDirection("right");
    setSlideIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    // setDirection("left");
    setSlideIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setSlideIndex(index);
  };

  return (
    <Row className="slider-row">
      <Col lg={9}>
        <div className="slideshow-container">
          {images.map((img, i) => (
            <div
              key={i}
              className="mySlide-container"
              id="mySlide"
              style={{
                transform: `translateX(-${slideIndex * 100}%)`,
              }}
            >
              <img
                src={img.src}
                alt={img.caption}
                // style={{ margin: "20vh auto" }}
              />
            </div>
          ))}

          <div className="dots">
            <button className="prev" onClick={prevSlide}>
              <img src="../../assets/Slider/left-arrow.png" width={16} />
            </button>
            <div className="dot-container">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === slideIndex ? "active" : ""}`}
                  onClick={() => goToSlide(i)}
                />
              ))}
            </div>
            <button className="next" onClick={nextSlide}>
              <img src="../../assets/Slider/right-arrow.png" width={16} />
            </button>
          </div>
        </div>
      </Col>
      <Col lg={3}>
        <div className="slideshow-container">
          <div
            className="mySlide-container normal-Slide"
           
          >
            <img
              src={images[slideIndex].src}
              alt={images[slideIndex].caption}
              width={120}
              height={120}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Slider;
