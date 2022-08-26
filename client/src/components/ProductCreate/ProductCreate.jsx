import React, { useState, useEffect } from 'react' 
import { Link,  } from 'react-router-dom'
import { postPhone, getBrands } from '../../redux/actions/actionCreators'
import { useDispatch, useSelector } from 'react-redux'
import Style from './ProductCreate.module.css'



function validate (input) {


    let errors = {}
    if(!input.name) errors.name = 'Escriba el nombre de un modelo'

    else if(!input.name ||!/^[a-zA-z]+$/.test(input.name) ) {
        errors.name = 'Use solo letras para escribir su nombre'
    }
    if (!input.price) {
        errors.price = 'Se debe incluir un precio'
    }

    // if(!/^[a-zA-z]+$/.test(input.name)) errors.name = 'Use solo letras para escribir el nombre del modelo'

    if (input.price < 0) {
        errors.price = 'No puedes añadirle un valor menor a cero!'
    }
    if (!input.weight) {
        errors.weight = 'Se requiere el peso del producto'
    }
    if (input.weight < 0) {
        errors.weight = 'No puedes definirle un valor menor a cero!'
    }
    if (!input.height) {
        errors.height = 'Se requiere el alto del producto'
    }
    if (input.height < 0) {
        errors.height = 'No puedes definirle un valor menor a cero!'
    }
    if (!input.description) {
        errors.description = 'Se requiere una descripción del producto'
    }
    if (input.description.length > 300) {
        errors.description = 'La descripcion unicamente consta de 300 caracteres'
    }
    if (!input.image) {
        errors.image = 'Se requiere una imagen del producto'
    }
     if(!/(http(s?):)([/|.|\w|\s|-])*\.(jpg|gif|png|jpeg)/.test(input.image)) {
        errors.image = 'La URL no es vaida , la imagen debe ser de tipo .png, .jpeg, .jpg o .gif en su extensión'
      }
    if (!input.brands) {
        errors.brands = 'Se requiere la marca del product'
    }
    if (input.brands.length > 1){
        errors.brands = 'El producto solo puede constar de una sola marca'
    }
    if (!input.quantity) {
        errors.quantity = 'Se requiere la cantidad disponible del producto'
    }
    if (input.quantity < 0 || input.quantity > 10000){
        errors.quantity = 'La cantidad a ofrecer no debe superar las 10000 unidades'
    }
    if (!input.stock) {
        errors.stock = 'Se requiere que indique si hay disponibilidad del producto (Solo responda Si o No)'
    }
    return errors
}
// export function PhoneCreate ( ) {
//     const dispatch = useDispatch()
//     const [errors, setErrors] = useState({})
//     const history = useHistory()
//     const [input, setInput] = useState({
//       name : '',
//       price: '',
//       weight: '',
//       height: '',
//       description: '',
//       image: '',
//       brands: '',
//       quantity: '',
//       stock: '',
//     })

//     useEffect(() => {
//         dispatch(getBrands())
//     },[])

//     function handleChange (e) {
//         setInput( {
//             ...input,
//             [e.target.name] : e.target.value
//         } )
//         setErrors(validate({
//             ...input,
//             [e.target.name] : e.target.value
//         }))
//     }

export default function PhoneCreate() {

    const dispatch = useDispatch()
    const [errors, setErrors] = useState({})
    // const history = useHistory()
    const brands = useSelector((state) => state.brands)
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
    })

    function handleChange (e) {
        setInput( {
            ...input,
            [e.target.name] : e.target.value
        } )
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }

    function handleSelect (e) {
        if (!input.brands > 1){
            setInput({
                ...input,
                brands: [e.target.vale]
            })
        }
        return
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
            <Link to = '/'>
                <button className={Style.btn}>Volver</button>
            </Link>

            <h1>Postea tu telefono</h1>
            <form onSubmit={(e) => handleSubmit(e)}> 
                <div>
                    <label className ={Style.text}>Modelo:</label>
                    <input
                    type = 'text'
                    value= {input.name}
                    name = 'name'
                    onChange={handleChange}
                    className = {errors.name ? Style.inpE : Style.inp}
                    />
                    {
                        errors.name && (
                            <p className= {Style.error}>{errors.name}</p>
                        )
                    }
                </div>
                <div>
                    <label className ={Style.text}>Precio:</label>
                    <input
                    type = 'number'
                    value= {input.price}
                    name = 'price'
                    onChange={handleChange}
                    className = {errors.price ? Style.inpE : Style.inp}
                    />
                    {
                        errors.price && (
                            <p className= {Style.error}>{errors.price}</p>
                        )
                    }
                </div>
                <div className ={Style.text}>
                    <label>Alto:</label>
                    <input
                    type = 'number'
                    value= {input.height}
                    name = 'height'
                    onChange={handleChange}
                    className = {errors.height ? Style.inpE : Style.inp}
                    />
                    {
                        errors.height && (
                            <p className= {Style.error}>{errors.height}</p>
                        )
                    }
                </div>
                <div className ={Style.text}>
                    <label>Peso:</label>
                    <input
                    type = 'number'
                    value= {input.weight}
                    name = 'weight'
                    onChange={handleChange}
                    className = {errors.weight ? Style.inpE : Style.inp}
                    />
                    {
                        errors.weight && (
                            <p className= {Style.error}>{errors.weight}</p>
                        )
                    }
                </div>
                <div>
                    <label className ={Style.text}>Descripcion:</label>
                    <input
                    type = 'text'
                    value= {input.description}
                    name = 'description'
                    onChange={handleChange}
                    className = {errors.description ? Style.inpE : Style.inp}
                    />
                    {
                        errors.description && (
                            <p className= {Style.error}>{errors.description}</p>
                        )
                    }
                </div>
                <div className ={Style.text}>
                    <label>Imagen:</label>
                    <input
                    type = 'file'
                    accept="image/png, image/jpg"
                    value= {input.image}
                    name = 'image'
                    onChange={handleChange}
                    className = {errors.description ? Style.inpE : Style.inp}
                    />
                    {
                        errors.image && (
                            <p className= {Style.error}>{errors.image}</p>
                        )
                    }
                </div>
                <div>
                    <select onChange={e => handleSelect(e)}>
                   {
                    brands && brands.map((el) => {
                        return (
                            <option value={el}>{el}</option>
                        )
                    })
                   }
                   </select>
                </div>
                <ul><li>{input.brands}</li></ul>
                <div>
                    <label className ={Style.text}>Disponibles:</label>
                    <input
                    type = 'number'
                    value= {input.quantity}
                    name = 'quantity'
                    onChange={handleChange}
                    className = {errors.quantity ? Style.inpE : Style.inp}
                    />
                    {
                        errors.quantity && (
                            <p className= {Style.error}>{errors.quantity}</p>
                        )
                    }
                </div>
                
                <button disabled = {errors.name || !input.price || errors.weight || errors.height || errors.brands || errors.description || errors.price || errors.quantity ? true : false} type = 'submit'>Postear telefono</button>
            </form>
            </div>
    )}
            