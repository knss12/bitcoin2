import "./App.css";

import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Coininfo from "./routes/Coininfo";
import Home from "./routes/Home";
import Login from "./routes/Login";

import Question from "./routes/Question";
import Notfound from "./routes/Notfound";

import data from "./data.js";

import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Account from "./routes/Account.js";

function App() {
  let navigate = useNavigate();
  let [coin] = useState(data);

  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>CoinMarket</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/question");
              }}
            >
              Q&A
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home coin={coin} />}></Route>
        <Route path="/coininfo/:id" element={<Coininfo coin={coin} />}></Route>
        <Route path="/question" element={<Question />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
