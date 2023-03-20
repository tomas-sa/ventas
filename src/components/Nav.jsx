import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import {Link} from 'react-router-dom'
import "../App.css"



function Nav(){

    const {carrito, categoriaChanger} = useContext(DataContext)
    const carritoCantidad = carrito.reduce((total, current)=>{
        return current.cantidad + total
    }, 0)

    return(
        <div className="navBox">
            <Link className="link1" to="/"><h1 className="header">shopping</h1></Link>
            <div className="categorias">
                
                <ul className="listaCategorias">
                    <Link className="link2" to="/products">
                        <li onClick={() => categoriaChanger('/category/jewelery')} className="itemLista">jewelery</li>
                    </Link>
                    <Link className="link2" to="/products">
                        <li onClick={() => categoriaChanger('/category/electronics')} className="itemLista">electronics</li>
                    </Link>
                    <Link className="link2" to="/products">
                        <li onClick={() => categoriaChanger("/category/men's clothing")} className="itemLista">men's clothing</li>
                    </Link>
                    <Link className="link2" to="/products">
                        <li onClick={() => categoriaChanger("/category/women's clothing")} className="itemLista">women's clothing</li>
                    </Link>
                    <Link className="link2" to="/products">
                        <li onClick={() => categoriaChanger("")} className="itemLista">All</li>
                    </Link>
                </ul>
                
            </div>
            <Link className="link2" to="/cart">
                <div className="carritoBox">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p className="carritoCantidad">{carritoCantidad}</p>
                </div>
            </Link>
        </div>
    )
}
export default Nav