import "./styles/main.scss";
import Header from "./components/Header";
import Features from "./components/Features";
import Reward from "./components/Reward";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
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
