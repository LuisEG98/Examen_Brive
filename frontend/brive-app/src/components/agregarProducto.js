import React from 'react'
import ProductoService from '../service/productoService'

class AgregarProducto extends React.Component{
    sucursales = ['A','B']
    guardar = async (e) => {
        e.preventDefault()
        let producto = {}
        producto['sucursal']=document.getElementById('sucursal').value
        producto['nombre']=document.getElementById('nombre').value
        producto['codigo_barras']=document.getElementById('codigo').value
        producto['cantidad']=document.getElementById('cantidad').value
        producto['precio']=document.getElementById('precio').value

        let productoService = new ProductoService()
        await productoService.guardarProducto(producto)

        window.location='/'
    }
    regresar = async (e) => {
        e.preventDefault()
        window.location = '/'
    }
    render(){
        return(
            <div className='row'>
                <div className='col-sm-2'></div>
                <div className='col-sm-8 form-group'>
                    <form onSubmit={this.guardar}>
                        <h3>Agregar un producto</h3>
                        <p>
                            <label htmlFor='sucursal'>Sucursal: </label>
                            <select className='form-control' id='sucursal'>
                            {
                                this.sucursales.map((sucursal) => {
                                        return(
                                        <option key={sucursal} value={sucursal}>{sucursal}</option>
                                    )
                                })
                            }
                            </select>
                        </p>
                        <p>
                            <label htmlFor='nombre'>Nombre:</label>
                            <input className='form-control' type='text' id='nombre' required/>
                        </p>
                        <p>
                            <label htmlFor='codigo'>Codigo de Barras: </label>
                            <input className='form-control' type='text' id='codigo' required/>
                        </p>
                        <p>
                            <label htmlFor='cantidad'>Cantidad: </label>
                            <input className='form-control' type='number' id='cantidad' required/>
                        </p>
                        <p>
                            <label htmlFor='precio'>Precio: </label>
                            <input className='form-control' type='number' id='precio' required/>
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

export default AgregarProducto