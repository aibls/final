import React, { useState, useEffect } from "react";
import axios from "axios";
import CryptoAccordion from "./components/CryptoAccordion";
import SearchBar from "./components/SearchBar";

function App() {
  const [cryptos, setCryptos] = useState([]);
  const [filteredCryptos, setFilteredCryptos] = useState([]);

  // Получение данных с API
  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.coinlore.net/api/tickers/");
      setCryptos(response.data.data);
      setFilteredCryptos(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Загрузка данных при старте
  useEffect(() => {
    fetchData();
  }, []);

  // Поиск криптовалют
  const handleSearch = (query) => {
    const filtered = cryptos.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(query.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCryptos(filtered);
  };

  return (
    <div className="App">
      <h1>Cryptocurrency Prices</h1>
      <button onClick={fetchData}>Update</button>
      <SearchBar onSearch={handleSearch} />
      {filteredCryptos.map((crypto) => (
        <CryptoAccordion key={crypto.id} crypto={crypto} />
      ))}
    </div>
  );
}

export default App;
