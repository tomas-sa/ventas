import '../App.css'
import { useContext } from "react"
import { DataContext } from "../context/DataContext"


function Cart() {

    const {carrito, sumarRestarCarrito} = useContext(DataContext)

    const precioFinal = carrito.reduce((total, current) =>{
        return (current.price * current.cantidad) + total
    }, 0)

    const carritoMostrar = carrito.map(x =>{

        return (
        <div className='boxCart'>
            <div className="imgBoxCart">
                <img className='imgMain' src={x.image} alt="" />
            </div>
            <p className="tituloProducto">{x.title}</p>
            <div className="infoBox">
                <p className="precioProducto">$ {x.price}</p>
                <div className="controlCantidadBox">
                    <button valor={x.id} onClick={sumarRestarCarrito}>-</button>
                    <p className='cantidadProducto'>{x.cantidad}</p>
                    <button valor={x.id} onClick={sumarRestarCarrito}>+</button>
                </div>
            </div>
        </div>
        )
    })


    return(
        <div className="CartBody">
            {carritoMostrar}
            <h2 className='precioFinal'>total: $ {(precioFinal).toFixed(2)}</h2>
        </div>
    )
}
export default Cart