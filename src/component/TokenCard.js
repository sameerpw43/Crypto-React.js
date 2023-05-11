import React from 'react';

 export const tokenLogos = {
  BTCUSDT: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png',
  ETHUSDT: 'https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png',
  MATICUSDT: 'https://cryptologos.cc/logos/polygon-matic-logo.png?v=025',
  BNBUSDT: 'https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=025',
  XRPUSDT: 'https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=025',
  SOLUSDT: 'https://cryptologos.cc/logos/solana-sol-logo.svg?v=025',
  ADAUSDT:'https://cryptologos.cc/logos/cardano-ada-logo.svg?v=025',
  DOGEUSDT:'https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=025',
 DOTUSDT:'https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=025',
 LTCUSDT:'https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=025',
BUSDUSDT:'https://cryptologos.cc/logos/binance-usd-busd-logo.svg?v=025',
SHIBUSDT:'https://cryptologos.cc/logos/shiba-inu-shib-logo.svg?v=025',
TRXUSDT:'https://cryptologos.cc/logos/tron-trx-logo.svg?v=025',
DAIUSDT:'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.svg?v=025',
LEOUSDT:'https://cryptologos.cc/logos/unus-sed-leo-leo-logo.svg?v=025',
UNIUSDT:'https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=025',
XMRUSDT:'https://cryptologos.cc/logos/monero-xmr-logo.svg?v=025',
OKGUSDT:'https://cryptologos.cc/logos/okb-okb-logo.svg?v=025',
ETCUSDT:'https://cryptologos.cc/logos/ethereum-classic-etc-logo.svg?v=025',
FLOKIUSDT:'https://cryptologos.cc/logos/floki-inu-floki-logo.svg?v=025',
RVNUSDT:'https://cryptologos.cc/logos/ravencoin-rvn-logo.svg?v=025',
KBCUSDT:'https://cryptologos.cc/logos/karatgold-coin-kbc-logo.svg?v=025'

};

function TokenCard({ token, price }) {
  console.log(token,price);
  return (
    <div className="token-card text-white">
      <div className="token-logo">
      <img src={tokenLogos[token]} alt={`${token} logo`} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
      </div>
      <div className="d-flex flex-row justify-content-between token-info">
  <div className="token-name">Current Value</div>
  <div className="token-price">&#x20B9;{price}</div>
</div>


    </div>
  );
}

export default TokenCard;
