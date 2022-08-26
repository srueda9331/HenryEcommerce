import { React, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { alertCustom, createProduct, updateProduct } from '../requests';
import { postImageToCloudinary, setImgProductErr } from '../methods';

import './AddProduct.css';
import '../Admin/AddProduct/AddProductViews/FormsGlobal.css';

function AddProduct({ data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [edit] = useState(isEdit());
  const [isRestore, setRestore] = useState(false);
  const [input, setInput] = useState({
    name: '',
    price: '',
    description: '',
    weight: '',
    height: '',
    ram: '',
    storage: '',
    camera: '',
    display: '',
    batery: '',
    image: '',
    brands: '',
    quantity: '',
    stock: '',
  });

  useEffect(() => {
    if (edit && !isRestore) {
      setInput({
        id: data.id,
        name: data.name,
        description: data.description,
        brands: data.brands,
        weight: data.weight,
        height: data.height,
        ram: data.ram,
        storage: data.storage,
        camera: data.camera,
        display: data.display,
        batery: data.batery,
        price: data.price,
        image: data.image ? data.image : '',
        quantity: data.quantity,
        stock: data.stock,
      });
      setRestore(true);
    }
  }, [dispatch, edit, isRestore, data]);

  function isDisabledSubmit() {
    return !input.name || !input.price;
  }

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  async function setImg(e) {
    const result = await postImageToCloudinary(e);

    if (result) {
      setInput({
        ...input,
        image: result,
      });
    } else {
      e.target.value = '';
    }
  }

  function isEdit() {
    return data && Object.keys(data).length;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (edit) {
      try {
        await updateProduct('product', input);
        alertCustom(
          input.name,
          'Actualizada con exito!',
          'https://www.pngitem.com/pimgs/m/423-4236284_png-images-success-icon-png-transparent-png-download.png'
        );
        navigate('/menu');
      } catch (error) {
        alertCustom(
          'Oops...',
          'No se pudo actualizar el producto!',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3gMZwXA2kl_k6Dw5SMN5eIySTs05Q4g7kQ&usqp=CAU'
        );
      }
    } else {
      try {
        await createProduct('product', input);
        alertCustom(
          input.name,
          'Creada con exito!',
          'https://www.pngitem.com/pimgs/m/423-4236284_png-images-success-icon-png-transparent-png-download.png'
        );
        navigate('/menu');
      } catch (error) {
        alertCustom(
          'Oops...',
          'No se pudo crear el producto!',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3gMZwXA2kl_k6Dw5SMN5eIySTs05Q4g7kQ&usqp=CAU'
        );
      }
    }
  };

  return (
    <Container className="mb-5">
      <h2>{edit ? 'Editar Producto' : 'Crear Producto'}</h2>
      <hr />
      <div className="editBurger__container">
        <img
          src={input.image}
          onError={(e) => setImgProductErr(e)}
          alt="img not"
          className="editOrCreate__img"
        ></img>

        <Form className="editOrCreate__form">
          <hr />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="burgerName">
              <Form.Label>Name *</Form.Label>
              <Form.Control
                placeholder="Nombre *"
                onChange={onChange}
                type="text"
                value={input.name}
                name="name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Price *</Form.Label>
              <Form.Control
                placeholder="Precio *"
                onChange={onChange}
                type="number"
                value={input.price}
                name="price"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="uploadImgBurger">
              <Form.Label>Image</Form.Label>
              <Form.Control
                placeholder="Url de la imagen"
                onChange={setImg}
                type="file"
                name="image"
              ></Form.Control>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Weight *</Form.Label>
              <Form.Control
                placeholder="Weight *"
                onChange={onChange}
                type="number"
                value={input.weight}
                name="weight"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Height *</Form.Label>
              <Form.Control
                placeholder="Height *"
                onChange={onChange}
                type="number"
                value={input.height}
                name="height"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Ram *</Form.Label>
              <Form.Control
                placeholder="Ram *"
                onChange={onChange}
                type="number"
                value={input.ram}
                name="ram"
              />
            </Form.Group>

            <Form.Group>
              <div className="editOrCreate__mainContainer"></div>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Storage *</Form.Label>
              <Form.Control
                placeholder="Storage *"
                onChange={onChange}
                type="number"
                value={input.storage}
                name="storage"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Camera *</Form.Label>
              <Form.Control
                placeholder="Camera *"
                onChange={onChange}
                type="number"
                value={input.camera}
                name="camera"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Display *</Form.Label>
              <Form.Control
                placeholder="Display *"
                onChange={onChange}
                type="number"
                value={input.display}
                name="display"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Brand *</Form.Label>
              <Form.Control
                placeholder="Brand *"
                onChange={onChange}
                type="text"
                value={input.brands}
                name="brands"
              />
            </Form.Group>

            <Form.Group>
              <div className="editOrCreate__mainContainer"></div>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Batery *</Form.Label>
              <Form.Control
                placeholder="Batery *"
                onChange={onChange}
                type="number"
                value={input.batery}
                name="batery"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Quantity *</Form.Label>
              <Form.Control
                placeholder="Quantity *"
                onChange={onChange}
                type="number"
                value={input.quantity}
                name="quantity"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Stock *</Form.Label>
              <Form.Control
                placeholder="stock *"
                onChange={onChange}
                type="boolean"
                value={input.stock}
                name="stock"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Description *</Form.Label>
              <Form.Control
                placeholder="Description *"
                onChange={onChange}
                type="text"
                value={input.description}
                name="description"
              />
            </Form.Group>

            <Form.Group>
              <div className="editOrCreate__mainContainer"></div>
            </Form.Group>
          </Row>

          <Button
            onClick={onSubmit}
            variant="primary"
            type="submit"
            disabled={isDisabledSubmit()}
          >
            Confirmar
          </Button>
        </Form>
      </div>
      <hr />
    </Container>
  );
}

export default AddProduct;
