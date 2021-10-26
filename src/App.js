import { Component } from "react";
import "./App.css";
import Logo from "./Components/Logo/Logo";
import Hero from "./Components/Hero/Hero";
import ImageForm from "./Components/ImageForm/ImageForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Hero />
        <ImageForm />
        {/*<PlantDetails /> */}
      </div>
    );
  }
}

export default App;
