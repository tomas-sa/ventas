import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {Link} from 'react-router-dom'
import '../App.css'
import { useContext } from "react"
import { DataContext } from "../context/DataContext"

function Hero(){

    const {categoriaChanger} = useContext(DataContext)
    
    const images = [
        "/men.jpg",
        "/women.jpg",
        "/electronics.jpg",
        "/jewelry.jpg",
    ];


    return(
        <div className="heroContainer">
            <Slide transitionDuration={700} indicators={true}>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                        <Link className='link3' onClick={() => categoriaChanger("/category/men's clothing")} to="/products">
                            <div className="containerCompra">
                                <p>comprar</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                        <Link className='link3' onClick={() => categoriaChanger("/category/women's clothing")} to="/products">
                            <div className="containerCompra">
                                <p>comprar</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                        <Link className='link3' onClick={() => categoriaChanger('/category/electronics')} to="/products">
                            <div className="containerCompra">
                                <p>comprar</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                        <Link className='link3' onClick={() => categoriaChanger('/category/jewelery')} to="/products">
                            <div className="containerCompra">
                                <p>comprar</p>
                            </div>
                        </Link>
                    </div>
                </div>
        </Slide>
        </div>
    )
}
export default Hero