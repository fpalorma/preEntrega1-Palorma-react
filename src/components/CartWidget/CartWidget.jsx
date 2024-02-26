

function CartWidget() {

let estiloCarrito = {
  background: "transparent",
  border:"none",
color:"white",
fontSize: "1.3em",
cursor:"pointer"
}
    return(
    <>
    <button style={estiloCarrito}><i className="bi bi-cart4"></i></button>
    
    <p>0</p>    
    </>
    )
}

export default CartWidget