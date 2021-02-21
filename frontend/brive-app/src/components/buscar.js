import React from 'react'
import ReactDOM from 'react-dom'
import TablaBuscar from './tablaBuscar'

class Buscar extends React.Component{
    buscar = async (e) => {
        e.preventDefault()
        console.log(this.props)
        let palabra  = await this.props.producto.filter(producto => producto.nombre.toUpperCase().indexOf(document.getElementById('palabra').value.toUpperCase()) == 0)
        ReactDOM.render(
            <TablaBuscar aux={palabra}/>,document.getElementById('search')
        )
    }
    render(){
        return(
            <div className='row'>
                <div className='col-sm-2'></div>
                <div className='col-sm-8'>
                    <label htmlFor='palabra'><h4>Busqueda por nombre de los productos</h4></label>
                    <input className='form-control' type='text' id='palabra' onChange={this.buscar}/>
                </div>
                <div className='col-sm-2'></div>
            </div>
        )
    }
}

export default Buscar