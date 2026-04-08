
import { useState } from "react";
import flower from "./assets/flower/flower.png";
import './Flower.css'


function Flower() {

    const [flowerValue, setFlowerValue] = useState();
    const [Count, setCount] = useState(0);
    const [limit] = useState(() => Math.floor(Math.random() * 10) + 1);
    function pullFlower() {
        setCount((prevCount) => {

            if (prevCount >= limit) {
                return prevCount;
              }

            const newCount = prevCount + 1;

            if (newCount < limit) {
                const value = newCount % 2 === 0 ? "Nemīl" : "Mīl";
                setFlowerValue(value);
              } else {
                const value = newCount % 2 === 0 ? "Nemīl" : "Mīl";
                setFlowerValue("Limit - " + value);
              }

        return newCount;
    });
}

const remaining = limit - Count;

    return <article className="flower">
    <h2>Puķite</h2>
    <button onClick={pullFlower} className="button" disabled={Count >= limit}>Raut</button>
    <p><strong>{flowerValue}</strong></p>
    <div className="petals">
        {Array.from({ length: remaining }).map((_, index) => (
          <img
            key={index}
            src={flower}
            alt="petal"
            width="40"
          />
        ))}
      </div>
   
    </article>;

}

export default Flower;