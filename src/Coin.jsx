import { useState } from "react";
import coin1 from "./assets/coin/head.png";
import coin2 from "./assets/coin/tail.png";
import './Coin.css'
function Coin() {

    const coinImages = [coin1, coin2];
    const [coinValue, setCoinValue] = useState(1);

    function throwCoin() {
        const randomNumber = Math.floor(Math.random() * 2) + 1;
        setCoinValue(randomNumber);
      }

    return <article className="coin">
    <h2>Monētas mešana!</h2>
    <button onClick={throwCoin} className="button">Mest</button>
    <p>Jūs uzmetāt <strong>{coinValue}</strong></p>
    <img className="image"
    src={coinImages[coinValue - 1]}
    alt={"Uzmestā monēta " + coinValue}
    />
    </article>;
}

export default Coin;