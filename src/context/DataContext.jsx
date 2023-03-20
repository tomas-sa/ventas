import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext()

export function DataProvider({children}) {
    const [datos, setDatos] = useState([])
    const [carrito, setCarrito] = useState([])
    const [categoriaLink, setCategoriaLink] = useState("/category/electronics")



    useEffect(()=>{
      apiCall()
    }, [categoriaLink])


    function apiCall() {
      fetch(`https://fakestoreapi.com/products${categoriaLink}`)
            .then(res=>res.json())
            .then(data => setDatos(data))
            
    }

    function eliminarItem(indice){
      setCarrito(item =>{
        return item.filter( objeto => objeto.id != indice)
      })
    }

    function sumarRestarCarrito(e){
      const id = e.target.getAttribute('valor')
      const accion = e.target.innerText
      
      if(accion == '-'){
        setCarrito(items=>{
        return items.map(x=>{
          if(x.id == id){
            if(x.cantidad !=1){
              return {...x, cantidad: x.cantidad -1}
            }else{
              eliminarItem(x.id)
              return x
            }
        } else{
          return x
        }
        })
      })
      }else{
        setCarrito(items=>{
        return items.map(x=>{
          if(x.id == id){
            return {...x, cantidad: x.cantidad + 1}
        } else{
          return x
        }
        })
      })
      }
      
    }

    function categoriaChanger(valor){
      setCategoriaLink(valor)
    }
    

    function sumarCarrito(e){
      const actualNombre = e.target.getAttribute('identi')
      setCarrito(currItems => {
        const itemFound = currItems.find((item) => actualNombre == item.id)
        if(itemFound){
          return currItems.map((item) =>{
            if(actualNombre == item.id){
              return {...item, cantidad: item.cantidad + 1}
            } else{
              return item
            }
          })
        } else{
          const productoNuevo = datos.find(x=> x.id == actualNombre)
          productoNuevo.cantidad = 1
          return [...currItems, productoNuevo]
        }
      })
    }

    return(
        <DataContext.Provider value={{datos, setDatos, carrito, sumarCarrito, sumarRestarCarrito, categoriaChanger}}>
            { children }
        </DataContext.Provider>
    )
}