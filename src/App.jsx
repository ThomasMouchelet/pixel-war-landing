import "./styles/main.scss";
import Header from "./components/Header";
import Features from "./components/Features";
import Reward from "./components/Reward";
import Footer from "./components/Footer";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import { getTopUser, listenTopUser } from "./services/services/user.service";

function App() {

  const [topUsers, setTopUsers] = useState([])

  useEffect(() => {
    getTopUser(setTopUsers)
    listenTopUser(setTopUsers)
  },[])

  return (
    <div className="App">
      <Header />
      <Features />
      <Reward />
      <Form />
      <Footer />
    </div>
  );
}

export default App;