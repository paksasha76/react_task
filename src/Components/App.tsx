import "./App.css";

import { Footer } from "./Footer/Footer";

import { Header } from "./Header/Header";

import { useAppSelector } from "../hooks/redux";

import { RootState } from "../store/store";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
