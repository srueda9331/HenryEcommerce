

export function PhoneItem ({ name, image, brand, price, delFromCart, quantity }) {
    return (
        <div>
            <h4>{name}</h4>
            <h5>${price}.00 x {quantity} = ${price*quantity}.00</h5>
            <button onClick={() => delFromCart(id)}>Eliminar uno</button>
            <br />
            <button onClick={() => delFromCart(id, true)}>Eliminar</button>
        </div>
    )
}