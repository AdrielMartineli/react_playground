import { useState } from "react"

function Contador() {
  const[valor, setvalor] = useState(0);
  function handleClick(){
    setvalor(valor+1);
  }
  console.log(valor);
  return (
    <div>
      <h2>Componente Contador</h2>
      <p>o valor atual é :{valor}</p>
      <button onClick={handleClick}>adicionar 1</button>
      </div>
  )
}

export default Contador