import React, { useState, useEffect } from 'react' 
// import { Link, useHistory } from 'react-router-dom'
import { postPhone, getBrands } from '../../redux/actions/actionCreators'
import { useDispatch, useSelector } from 'react-redux'


export function PhoneCreate ( ) {
    const dispatch = useDispatch()
    // const history = useHistory()
    const [input, setInput] = useState({
      name : '',
      price: '',
      weight: '',
      height: '',
      description: '',
      image: '',
      brands: '',
      quantity: '',
      stock: '',
      rating: '',
      review: '',
    })

    useEffect(() => {
        dispatch(getBrands())
    },[])

    function handleChange (e) {
        setInput( {
            ...input,
            [e.target.name] : e.target.value
        } )
    }

    function handleSubmit (e) {
        e.preventDefault()
        dispatch(postPhone(input))
        alert('Telefono a la venta!')
        setInput({
            name : '',
            price: '',
            weight: '',
            height: '',
            description: '',
            image: '',
            brands: '',
            quantity: '',
            stock: '',
            rating: '',
            review: '',
        })
        // history.push('/home')
    }

    return (
        <div>
            {/* <Link to = '/home'>
                <button>Volver</button>
            </Link> */}

            <h1>Postea tu telefono</h1>
            <form onSubmit={(e) => handleSubmit(e)}> 
                <div>
                    <label>Nombre:</label>
                    <input
                    type = 'text'
                    value= {input.name}
                    name = 'name'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Precio:</label>
                    <input
                    type = 'number'
                    value= {input.price}
                    name = 'price'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Alto:</label>
                    <input
                    type = 'number'
                    value= {input.height}
                    name = 'height'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Peso:</label>
                    <input
                    type = 'number'
                    value= {input.weight}
                    name = 'weight'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Descripcion:</label>
                    <input
                    type = 'text'
                    value= {input.description}
                    name = 'description'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Imagen:</label>
                    <input
                    type = 'url'
                    value= {input.image}
                    name = 'image'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Marca:</label>
                    <input
                    type = 'text'
                    value= {input.brands}
                    name = 'brands'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Disponibles:</label>
                    <input
                    type = 'number'
                    value= {input.quantity}
                    name = 'quantity'
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Stock:</label>
                    <input
                    type = 'text'
                    value= {input.quantity}
                    name = 'quantity'
                    onChange={handleChange}
                    />
                </div>
                <div>
                <label>Puntuación:</label>
                    <input
                    type = 'number'
                    value= {input.rating}
                    name = 'rating'
                    onChange={handleChange}
                    />
                </div>
                <div>
                <label>Reseña:</label>
                    <input
                    type = 'text'
                    value= {input.review}
                    name = 'review'
                    onChange={handleChange}
                    />
                </div>
                <button type='submit'>Postear Telefono</button>
            </form>

        </div>
    )
}