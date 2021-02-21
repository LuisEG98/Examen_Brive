import React from 'react'
import ReactDOM from 'react-dom'
import Agregar from './agregar'

class TablaReact extends React.Component{
    updateProducto = async (e) => {
        e.preventDefault()
        let aux = this.props.aux.find(element => (element._id === e.target.name))

        ReactDOM.render(
            <Agregar id={aux} min={aux.cantidad}/>,document.getElementById('prods')
        )
    }
    render(){
        return(
            <div className='row'>
                <div className='col-sm-2'></div>
                <div className='col-sm-8'>
                    <table className='table text-white text-center'>
                        <thead>
                            <tr>
                                <th>Sucursal</th>
                                <th>Nombre</th>
                                <th>Codigo de Barras</th>
                                <th>Cantidad</th>
                                <th>Precio Unitario</th>
                                <th>Agregar existencias / Comprar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.aux.map((producto) => {
                                    return(
                                                <tr key = {producto._id}>
                                                    <td>{producto.sucursal}</td>
                                                    <td>{producto.nombre}</td>
                                                    <td>{producto.codigo_barras}</td>
                                                    <td>{producto.cantidad}</td>
                                                    <td>{producto.precio}</td>
                                                    <td><button className='btn btn-light' onClick = {this.updateProducto} name = {producto._id}>Modificar</button></td>
                                                </tr> 
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className='col-sm-2'></div>
            </div>
        )
    }
}

export default TablaReact