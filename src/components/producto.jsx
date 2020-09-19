import React, {useState, useEffect} from 'react';

import { useParams} from "react-router-dom";

const Producto = () =>{

  const [producto,setProducto] = useState([])

  const {id} = useParams()  

  useEffect(() => {
      obetenerProducto()
  },)
  
  const obetenerProducto= async () =>{
        const data = await fetch(`https://api.mercadolibre.com/items/${id}`)
        const {resultados} = await data.json()
        setProducto(resultados)
        
    }
  return(
    <div>
      {
        producto.map(item =>(
          <div>
          <img 
            src={item.thumbnail}
            width="100"
            height="100"
            alt="No se encontro imagen"
            />
          <h3>{item.title}</h3>
          </div>

        )

        )
      }
    </div>  

  )
    
  
}
export default Producto