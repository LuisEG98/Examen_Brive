import React from 'react'
import ReactDOM from 'react-dom'
import Producto from '../components/producto'
import ProductoService from '../service/productoService'

class Home extends React.Component{
    ProductoService = new ProductoService()
    productos = []
    met = async () =>{
        this.productos = await this.ProductoService.getProductos()
        ReactDOM.render(
            <div><Producto variable={this.productos}/></div>,document.getElementById('prods')
        )
    }
    render(){
        this.met()
        return(
            <div>
                
            </div> 
        )
    }
}

export default Home 