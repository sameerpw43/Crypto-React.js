import React from 'react';
import { tokenLogos } from './TokenCard';

const tokens = [
  { name: 'Bitcoin', value: 'BTCUSDT' },
  { name: 'Ethereum', value: 'ETHUSDT' },
  { name: 'Polygon', value: 'MATICUSDT' },
  { name: 'Binance Coin', value: 'BNBUSDT' },
  { name: 'XRP', value: 'XRPUSDT' },
  { name: 'Solana', value: 'SOLUSDT' },
  {name:'Cardano',value:'ADAUSDT'},
  {name:'Dogecoin',value:'DOGEUSDT'},
  {name:'Palkadot',value:'DOTUSDT'},
  {name:'Litecoin',value:'LTCUSDT'},
  {name:'Binance USD',value:'BUSDUSDT'},
  {name:'Shiba inu',value:'SHIBUSDT'},
  {name:'Tron',value:'TRXUSDT'},
  {name:'Dai',value:'DAIUSDT'},
  {name:'Unus Sed Leo',value:'LEOUSDT'},
  {name:'Uniswap',value:'UNI'},
  {name:'Monero',value:'XMR'},
  {name:'OKB',value:'OKB'},
  {name:'Ethereum-Classic',value:'ETCUSDT'},
  {name:'FLOKI',value:'FLOKI'}
  
 


];

const TokenSelector = ({ selectedToken, onTokenChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="token-select">Select a token:</label>
      <select id="token-select" className="form-control" value={selectedToken} onChange={(event) => onTokenChange(event.target.value)}>
        {tokens.map((token) => (
          <option key={token.value} value={token.value} style={{backgroundImage: `url(${tokenLogos[token.value]})`, backgroundRepeat: 'no-repeat', backgroundSize: '20px 20px', paddingLeft: '25px'}}>
            {token.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TokenSelector;
