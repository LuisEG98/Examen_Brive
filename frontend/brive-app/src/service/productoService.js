import axios from 'axios'

class ProductoService{
    backUrl = 'http://localhost:3700/'
    constructor(){
        this.res = []
    }

    getProductos = async () => {
        try{
            const res = await axios.get(this.backUrl+'productos')
            const data = await res.data
            this.res = data
        }
        catch(e){
            console.log(e)
        }
        return this.res
    }
    updateProducto = async (e) => {
        try{
            const res = await axios.put(this.backUrl+'producto/'+e._id,e)
            const data = await res.data
            this.res = data
        }
        catch(e){
            console.log(e)
        }
        return this.res
    }
    guardarProducto = async (e) => {
        try{
            const res = await axios.post(this.backUrl+'saveproducto',e)
            const data = await res.data
            this.res = data
        }
        catch(e){
            console.log(e)
        }
        return this.res
    }
}

export default ProductoService;