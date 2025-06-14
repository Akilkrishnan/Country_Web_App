import React, { createContext, useEffect, useState } from "react";
import Slider from "../../component/Slider/Slider";
import CustomNavbar from "../../component/Navbar/Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./home.css";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../../feature/Countries/Slices/Country_Slices";
export const CountryContext = createContext();
function Home() {
  const [filterType, setfilterType] = useState("All");
  const [limit, setlimit] = useState(10);
  const list = ["All", "Asia", "Europe", "Europe"];
  const Images = [
    "src/assets/Auth/google.svg",
    "src/assets/Auth/fb.svg",
    "src/assets/Auth/linkdin.svg",
    "src/assets/Auth/youtube.svg",
  ];
  const dispatch = useDispatch();
  const { countries, status, error } = useSelector((state) => state.countries);
  useEffect(() => {
    setlimit(10);
    if (status === "idle") {
      dispatch(fetchCountries());
    }
  }, [status, dispatch,filterType]);
  
  if (status === "failed") return <p>Error: {error}</p>;
  return (
    <CountryContext.Provider value={{ filterType, setfilterType }}>
      <CustomNavbar />
      <Row className="mt-4 mb-4">
        <Col lg={4} style={{ borderTop: "3px solid #3D3D3D" }} id="border">
          {" "}
        </Col>
        <Col lg={4} id="border-2">
          {" "}
          <h1
            style={{ color: "#3D3D3D", fontSize: "40px", fontWeight: "bold" }}
          >
            WELCOME
          </h1>{" "}
        </Col>
        <Col lg={4} style={{ borderBottom: "3px solid #3D3D3D" }} id="border">
          {" "}
        </Col>
      </Row>
      <Slider />
      <Row>
        {status === "loading" ? (
          <p>Loading...</p>
        ) : (
          countries
            .filter((country) =>
              filterType === "All" ? true : country.region === filterType
            ).slice(0, limit)
            .map((country, item) => {
              return (
                <Col lg={6}>
                  <Container key={item} className="country-container">
                    <Row>
                      <Col xs={3}>
                        <img
                          src={country.flag}
                          alt={country.name}
                          // src="/src/assets/home/Group 1.png"
                          // alt=""
                          width={127}
                          height={100}
                          style={{ objectFit: "contain" }}
                        />
                      </Col>
                      <Col xs={9} id="country-name">
                        <h6>{country.name}</h6>
                        <p>{country.region}</p>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              );
            })
        )}
      </Row>
      <button
        className="load-more"
        onClick={() => {
          console.log("clicked", status, countries.length, limit, filterType);
          // dispatch(fetchCountries());
          setlimit(limit + 10);
        }}
      >
        Load More
      </button>
      <div className="signin-icons">
        {Images.map((item) => (
          <div id="signin-icon">
            <img src={item} height={20} />
          </div>
        ))}
      </div>
      <p id="home-email">Example@email.com </p>
      <p id="home-copyright">Copyright © 2020 Name. All rights reserved. </p>
    </CountryContext.Provider>
  );
}

export default Home;
