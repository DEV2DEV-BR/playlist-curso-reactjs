import { useState } from "react";
import "./styles.css";

// PROPS => propriedades que um component pode receber
// PROPS => parametros

// INTERPOLAÇÃO => colocar um valor de uma constante ou seja uma variável dentro do JSX
// INTERPOLAÇÃO => <h1> {nomeVariavel} </h1>

interface CardProps {
  imageUrl: string;
  name: string;
}

export function Card(props: CardProps) {
  // let follow = false;
  //  useState => retorna 0: o valor do estado
  // 1: retorna uma função para mudar o valor do estado
  // template literals => ` onde podemos por javascript dentro interpolado

  const [follow, setFollow] = useState(false);

  function handleFollowAndUnFollow() {
    setFollow((prevState) => !prevState);
  }

  return (
    <div className="card">
      <div>
        <img src={props.imageUrl} alt={props.name} />
        <strong>{props.name}</strong>
      </div>

      <button
        onClick={handleFollowAndUnFollow}
        className={`${follow ? "btn-follow" : "btn"}`}
      >
        {follow ? "UnFollow" : "Follow"}
      </button>
    </div>
  );
}
