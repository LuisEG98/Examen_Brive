import React from 'react'
import ReactDOM from 'react-dom'
import Agregar from './agregar'
import AgregarProducto from './agregarProducto'
import Tabla from './tabla'
import Buscar from './buscar'

class Producto extends React.Component{
    agregarProducto = async (e) => {
        e.preventDefault()
        ReactDOM.render(
            <AgregarProducto/>,document.getElementById('prods')
        )
    }
    render(){
        let sucursalA = this.props.variable.productos.filter(sucursal => sucursal.sucursal=='A')
        let sucursalB = this.props.variable.productos.filter(sucursal => sucursal.sucursal=='B')

        return(
            <div>
                <Tabla aux={sucursalA} suc='A'/>
                <Tabla aux={sucursalB} suc='B'/>
                <div className='row'>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-8'>
                        <button className='btn btn-light' onClick={this.agregarProducto}>Agregar Producto</button>
                    </div>
                    <div className='col-sm-2'></div>
                </div>
                <Buscar producto={this.props.variable.productos}/>
                <div id='search'></div>
            </div>
        )
    }
}

export default Producto