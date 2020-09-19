import React, {Fragment,useState} from 'react';
import { useForm } from 'react-hook-form';

import { Link } from "react-router-dom";

const Principal = () =>{
    
    const {register,handleSubmit} = useForm()

    const onSubmit =(dato) => {
        console.log(dato)
        setDatos(dato)
    }
    
    const [datos,setDatos]=useState([])

    const[productos,setProductos]= React.useState([])

    
    React.useEffect(() => {
        obetenerProductos()
    },)
    
    const obetenerProductos= async () =>{
        const data = await fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${datos.busqueda}`)
        const {results} = await data.json()
        setProductos(results)
        
    }
    return(
        <Fragment>
        <form className="row" onSubmit={handleSubmit(onSubmit)}> 
           <div className="col-md-3">
               <input placeholder="ingrese el producto"
               name="busqueda"
               className="form-control"
               type="text"
               ref = {register({require: {value:true, message: 'campo vacio'}})}>   
               </input>
           </div >
                
           <div className="col-md-3">
                <button className="btn btn-primary">Buscar</button>
           </div>
        </form>
            <div className="row">
                { 
                    productos.map(item =>(
                        <div className="col-md-4">
                        <div className="card">
                            <div className="card text-center">
                                <img 
                                    src={item.thumbnail}
                                    width="100"
                                    height="100"
                                    alt="No se encontro imagen"
                                />
                                <Link to={`/productos/${item.id}`}>
                                <h4 className="card title">{item.title}</h4>
                                </Link>
                                <h3 className="card text">$ {item.price}</h3>
                            </div>
                        </div>
                        </div>
                    ))
                }
            
            </div>
   
    </Fragment>  
    )

}

export default Principal