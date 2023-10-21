import "./App.css";

import { Footer } from "./Footer/Footer";

import { Header } from "./Header/Header";

const rates = [];

async function getCurrencies() {
  const response = await fetch("https://api.coinbase.com/v2/currencies");
  const data = await response.json();
  const result = await data;
  const array = result.data;
  for (let i = 0; i < array.length; i++) {
    rates.push(array[i].id);
  }
  console.log(rates);
}
getCurrencies();

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
