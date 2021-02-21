import React from 'react'
import ProductoService from '../service/productoService'

class Agregar extends React.Component{
    subir = async (e) => {
        e.preventDefault()
        let numero = parseInt(document.getElementById('add').value)

        let product = this.props.id
        product.cantidad=product.cantidad+numero
        let productoService = new ProductoService()
        let resp = await productoService.updateProducto(product)
        window.location = '/'
    }
    regresar = async (e) => {
        e.preventDefault()
        window.location = '/'
    }
    render(){
        return(
            <div className='row'>
                <div className='col-sm-2'></div>
                <div className='col-sm-8'>
                    <form onSubmit = {this.subir}>
                        <h3>Modificar Producto</h3>
                        <h5>Aumenta para agregar productos y disminuye para comprar</h5>
                        <p>La disminucion esta validada de modo que no haya productos negativos</p>
                        <p>
                            <input className='form-control' type='number' id='add' min={this.props.min*-1} step='1' placeholder='0'/>
                        </p>
                        <input className='btn btn-light' type='submit' value='Enviar'/>
                    </form>
                    <p>
                        <button className='btn btn-light float-right' onClick={this.regresar}>Regresar</button>
                    </p>
                </div>
                <div className='col-sm-2'></div>
            </div>
        )
    }
}
export default Agregar