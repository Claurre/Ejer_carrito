import Input from "./Input"


function ProductForm() {

    //const [productName, setProductName]
    return (
        <form>
        <Input id="name" label="nombre del producto"/>
        <div>
          <input type="text" id="descripcion"/>
          <label htmlFor="description">Descripcion (opcional)</label>
        </div>
        <div>
          <input type="text" id="price"/>
          <label htmlFor="price">Precio</label>
        </div>
        <button type='submit'></button>
      </form>
        
    )
}
export default ProductForm