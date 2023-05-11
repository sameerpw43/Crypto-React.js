import React, { useState } from 'react';
import { w3cwebsocket as WebSocket } from 'websocket';
import TokenCard from './component/TokenCard';
import TokenSelector from './component/TokenSelector';
import NavBar from './component/NavBar';


const ws = new WebSocket('wss://fstream.binance.com/ws');


function App() {
  const [selectedToken, setSelectedToken] = useState('BTCUSDT');
  const [price, setPrice] = useState(0);
  const [investmentAmount, setInvestmentAmount] = useState(0);

  ws.onopen = () => {
    console.log('WebSocket connection opened');
    ws.send(`{"method": "SUBSCRIBE", "params": ["${selectedToken.toLowerCase()}@trade"], "id": 1}`);
  };

  ws.onmessage = (event) => {
    try {
      const trade = JSON.parse(event.data);
      setPrice(parseFloat(trade.p));
    } catch (error) {
      console.error('Error parsing trade data:', error);
    }
  };

  ws.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  ws.onclose = (event) => {
    console.log(`WebSocket connection closed with code ${event.code}: ${event.reason}`);
  };

  const handleTokenChange = (token) => {
    setSelectedToken(token);
    ws.send(`{"method": "UNSUBSCRIBE", "params": ["${selectedToken.toLowerCase()}@trade"], "id": 1}`);
    ws.send(`{"method": "SUBSCRIBE", "params": ["${token.toLowerCase()}@trade"], "id": 1}`);
  };
console.log(selectedToken);
  const handleInvestmentAmountChange = (event) => {
    setInvestmentAmount(event.target.value);
  };

  const estimatedReturn = investmentAmount * price;

  return (
    <>
   

    <NavBar></NavBar>
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
    <div className="btn btn-lg btn-success rounded-pill border border-success opacity-10">
  <form className="bg-dark text-blue">
      <div className="form-group text-blue">
        <TokenCard className="text-primary" token={selectedToken} price={price} />
      </div>
      <div className="form-group">
        <TokenSelector selectedToken={selectedToken} onTokenChange={handleTokenChange} />
      </div>
      <div className="form-group mb-3">
        <label className='text-light'>Investment amount:</label>
        <input type="number" className="form-control" value={investmentAmount} onChange={handleInvestmentAmountChange} />
      </div>
      <div className="form-group">
        <label className='text-light'> 
          Estimated return:
          <p className="mb-0">&#x20B9;{estimatedReturn}</p>
        </label>
      </div>
      <div className="form-group">
        <button className="btn btn-primary btn-block rounded-{md}">Buy</button>
      </div>
    </form>
  </div>
</div>
</>
  );
}

export default App;
