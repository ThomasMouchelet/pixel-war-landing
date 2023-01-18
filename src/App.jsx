import "./styles/main.scss";
import Header from "./components/Header";
import Features from "./components/Features";
import Reward from "./components/Reward";
import Footer from "./components/Footer";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import { listenTopUser } from "./services/services/user.service";
import Team from "./components/Team";

function App() {

  return (
    <div className="App">
      <Header />
      <Features />
      <Reward />
      <Team />
      <Form />
      <Footer />
    </div>
  );
}

export default App;