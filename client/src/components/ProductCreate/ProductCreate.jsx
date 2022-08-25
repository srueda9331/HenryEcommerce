// import React, { useState, useEffect } from 'react'
// import { Link, useHistory } from 'react-router-dom'
// import { postPhone, getBrands } from '../../redux/actions/actionCreators'
// import { useDispatch, useSelector } from 'react-redux'

// function validate (input) {

//     let errors = {}

    if (!input.name) {
        errors.name = 'Se requiere un modelo'
    }
    if (!input.price) {
        errors.price = 'Se debe incluir un precio'
    }

    if(!/^[a-zA-z]+$/.test(input.name)) errors.name = 'Use solo letras para escribir el nombre del modelo'

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
    if (input.brands !== 'Samsung' || input.brands !== 'Huawei' || input.brands !=='Asus' || input.brands !== 'Apple' || input.brands !== 'Xiaomi'){
        errors.brands = 'Debe colocar alguna de las siguientes marcas permitidas: Samsung - Huawei - Asus - Apple - Xiaomi'
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

//     function handleSubmit (e) {
//         e.preventDefault()
//         dispatch(postPhone(input))
//         alert('Telefono a la venta!')
//         setInput({
//             name : '',
//             price: '',
//             weight: '',
//             height: '',
//             description: '',
//             image: '',
//             brands: '',
//             quantity: '',
//             stock: '',
//             rating: '',
//             review: '',
//         })
//         history.push('/home')
//     }

//     return (
//         <div>
//             <Link to = '/home'>
//                 <button>Volver</button>
//             </Link>

//             <h1>Postea tu telefono</h1>
//             <form onSubmit={(e) => handleSubmit(e)}>
//                 <div>
//                     <label>Nombre:</label>
//                     <input
//                     type = 'text'
//                     value= {input.name}
//                     name = 'name'
//                     onChange={handleChange}
//                     />
//                     {
//                         errors.name && (
//                             <p>{errors.name}</p>
//                         )
//                     }
//                 </div>
//                 <div>
//                     <label>Precio:</label>
//                     <input
//                     type = 'number'
//                     value= {input.price}
//                     name = 'price'
//                     onChange={handleChange}
//                     />
//                     {
//                         errors.price && (
//                             <p>{errors.price}</p>
//                         )
//                     }
//                 </div>
//                 <div>
//                     <label>Alto:</label>
//                     <input
//                     type = 'number'
//                     value= {input.height}
//                     name = 'height'
//                     onChange={handleChange}
//                     />
//                     {
//                         errors.height && (
//                             <p>{errors.height}</p>
//                         )
//                     }
//                 </div>
//                 <div>
//                     <label>Peso:</label>
//                     <input
//                     type = 'number'
//                     value= {input.weight}
//                     name = 'weight'
//                     onChange={handleChange}
//                     />
//                     {
//                         errors.weight && (
//                             <p>{errors.weight}</p>
//                         )
//                     }
//                 </div>
//                 <div>
//                     <label>Descripcion:</label>
//                     <input
//                     type = 'text'
//                     value= {input.description}
//                     name = 'description'
//                     onChange={handleChange}
//                     />
//                     {
//                         errors.description && (
//                             <p>{errors.description}</p>
//                         )
//                     }
//                 </div>
//                 <div>
//                     <label>Imagen:</label>
//                     <input
//                     type = 'url'
//                     value= {input.image}
//                     name = 'image'
//                     onChange={handleChange}
//                     />
//                     {
//                         errors.image && (
//                             <p>{errors.image}</p>
//                         )
//                     }
//                 </div>
//                 <div>
//                     <label>Marca:</label>
//                     <input
//                     type = 'text'
//                     value= {input.brands}
//                     name = 'brands'
//                     onChange={handleChange}
//                     />
//                     {
//                         errors.brands && (
//                             <p>{errors.brands}</p>
//                         )
//                     }
//                 </div>
//                 <div>
//                     <label>Disponibles:</label>
//                     <input
//                     type = 'number'
//                     value= {input.quantity}
//                     name = 'quantity'
//                     onChange={handleChange}
//                     />
//                     {
//                         errors.quantity && (
//                             <p>{errors.quantity}</p>
//                         )
//                     }
//                 </div>
//                 <div>
//                     <label>Stock:</label>
//                     <input
//                     type = 'text'
//                     value= {input.stock}
//                     name = 'quantity'
//                     onChange={handleChange}
//                     />
//                     {
//                         errors.stock && (
//                             <p>{errors.stock}</p>
//                         )
//                     }
//                 </div>
//                 <button type='submit'>Postear Telefono</button>
//             </form>

//         </div>
//     )
// }
