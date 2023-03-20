import { useState, useContext } from "react"
import { DataContext } from "../context/DataContext"
import {motion, AnimatePresence} from 'framer-motion'
import '../App.css'


function Cards() {
    const [modal, setModal] = useState(false)
    const [cartaActual, setcartaActual] = useState(0)
    const { datos, sumarCarrito, loading } = useContext(DataContext)



    function activarModal(e){
      const actualNumero = e.currentTarget.getAttribute('identi')
      for(let i = 0; i < datos.length; i ++){
        if(datos[i].id == actualNumero){
          setcartaActual(i)
        }
      }
      setModal(!modal)
    }

    const mapeado = datos.map(x=>{


          const estrellas = x.rating.rate
          const styleStar1 = {
            color: estrellas >= 1 ? 'rgb(207, 207, 0)': 'grey'
          }
          const styleStar2 = {
            color: estrellas >= 2 ? 'rgb(207, 207, 0)': 'grey'
          }
          const styleStar3 = {
            color: estrellas >= 3 ? 'rgb(207, 207, 0)': 'grey'
          }
          const styleStar4 = {
            color: estrellas >= 4 ? 'rgb(207, 207, 0)': 'grey'
          }
          const styleStar5 = {
            color: estrellas == 5 ? 'rgb(207, 207, 0)': 'grey'
          }

          return (
          <div identi={x.id} onClick={activarModal} className="hero">
            <div className="imgHeroBox">
              <img className="imgMain" src={x.image} alt="" />
            </div>
            <div className="tituloProductoBox">
              <p className="tituloProducto">{x.title}</p>
            </div>
            <div className="stars">
              <i style={styleStar1} class="fa fa-star"></i>
              <i style={styleStar2} class="fa fa-star"></i>
              <i style={styleStar3} class="fa fa-star"></i>
              <i style={styleStar4} class="fa fa-star"></i>
              <i style={styleStar5} class="fa fa-star"></i>
            </div>
            <p className="precioProducto">$ {x.price}</p>
        </div>
      )
        })


    return(
        <div className="mainSite">
          {mapeado}
          <AnimatePresence>
            {modal && <div onClick={() => setModal(!modal)} className="modalBack"></div>}
            {modal && 
        
          <motion.div 
              key={datos[cartaActual].id}
              initial={{ opacity: 0}}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} className="modal"
              >
                
            <div className="imgBox">
              <img style={{height:'200px'}} src={datos[cartaActual].image} alt="" />
            </div>
            <p className="tituloProducto">{datos[cartaActual].title}</p>
            <p>$ {datos[cartaActual].price}</p>
            <button className="btnBuy" identi={datos[cartaActual].id} onClick={sumarCarrito}>Add to cart</button>
        </motion.div>
        }
        </AnimatePresence>
      </div>
        
    )
}
export default Cards