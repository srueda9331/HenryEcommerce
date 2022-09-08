import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLoginState } from '../../../Redux/actions/actions';
import { postAndUpdateImg, setImgUserErr } from '../../methods';
import { ArrowRightCircleFill, EmojiSunglasses } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './UserProfile.css';

function UserProfileDashboard() {
  const dispatch = useDispatch();
  const sesionInfo = useSelector((state) => state.loginState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setScrollToTop();
  }, []);

  function setScrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }

  async function uploadImage(e) {
    try {
      setLoading(true);
      const imgUri = await postAndUpdateImg(
        e,
        'users',
        sesionInfo.token,
        sesionInfo.id
      );

      if (imgUri) {
        const updateLocal = {
          ...JSON.parse(window.localStorage.getItem('user')),
          imgUri,
        };

        window.localStorage.setItem('user', JSON.stringify(updateLocal));
        dispatch(setLoginState({ ...sesionInfo, imgUri }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  console.log(sesionInfo.imgUri);
  return (
    <section>
      <Container>
        <div className="mainTitle__profile mt-5">
          <h1>Mi perfil</h1>
        </div>
        <hr />
        <Card className="card mb-3">
          <div className="row g-0">
            <Card.Header className="col-md-4">
              {sesionInfo.imgUri ? (
                <img
                  src={sesionInfo.imgUri}
                  onError={setImgUserErr}
                  alt="foto de perfil"
                  className="img-fluid "
                />
              ) : (
                <EmojiSunglasses className="profile__mainCard__userPicture" />
              )}

              <h2 className="card-tittle">
                {sesionInfo.firstName + ' ' + sesionInfo.lastName}
              </h2>
            </Card.Header>
          </div>
          <Card.Body className="card-body">
            {loading ? (
              <p className="profile__loader">Cargando...</p>
            ) : (
              <Form className="profile__form w-50">
                <Form.Group className="mb-3">
                  <Form.Label className="profile__form__label">
                    Personalizá tu imagen
                  </Form.Label>
                  <Form.Control
                    type="file"
                    name="file"
                    size="sm"
                    className="profile__form__input"
                    onChange={uploadImage}
                  ></Form.Control>
                </Form.Group>
              </Form>
            )}
          </Card.Body>
        </Card>
        <div className="container-cards">
          <div className="container-cards-card">
            <div className="card-width">
              <Card className="card-body">
                <div className="card">
                  <Card.Header className="card-tittle" as="h2">
                    Mis Compras
                  </Card.Header>
                </div>
                <Card.Body className="card-text">
                  <Card.Text>
                    Mirá tus compras realizadas, rastrea paquetes, devuelve
                    pedidos o compra algo de nuevo.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="card-footer">
                  <Link className="btn " to="/userbuyhistory">
                    <ArrowRightCircleFill className="profile__infoCard__arrow" />
                  </Link>
                </Card.Footer>
              </Card>
            </div>
            <div className="card-width">
              <Card className="card-body">
                <div className="card">
                  <Card.Header className="card-tittle" as="h2">
                    Mis Datos
                  </Card.Header>
                </div>
                <Card.Body className="card-text">
                  <Card.Text>
                    Mantené tus datos siempre actualizados para una mejor
                    experiencia.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="card-footer">
                  <Link className="btn" to="/userpersonalinfo">
                    <ArrowRightCircleFill className="profile__infoCard__arrow" />
                  </Link>
                </Card.Footer>
              </Card>
            </div>

            {/* <Card className="card-tittle">
              <div className="card">
                <Card.Header className="card-tittle" as="h2">
                  Ayuda
                </Card.Header>
              </div>
              <Card.Body className="">
                <Card.Text>Contactanos ante cualquier duda</Card.Text>
              </Card.Body>
              <Card.Footer className="card-footer">
                <Link className="btn" to="/contacto">
                  <ArrowRightCircleFill className="profile__infoCard__arrow" />
                </Link>
              </Card.Footer>
            </Card> */}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default UserProfileDashboard;

// async function uploadImage(e) {
//   try {
//     const files = e.target.files;
//     const data = new FormData();
//     data.append('file', files[0]);
//     data.append('upload_preset', 'henryspf');
//     setLoading(true);
//     const res = await fetch(
//       'https://api.cloudinary.com/v1_1/henrysburgers/image/upload',
//       {
//         method: 'POST',
//         body: data,
//       }
//     );
//     const userImage = await res.json();
//     console.log(userImage.secure_url);
//     const imgUri = userImage.secure_url;
//     console.log(imgUri);
//     setImage(
//       await axios.put(
//         `users/${id}`,
//         { imgUri: imgUri },
//         {
//           headers: {
//             'auth-token': token,
//           },
//         }
//       )
//     );
//     const updateSesion = {
//       ...sesionInfo,
//       imgUri: imgUri,
//     };
//     dispatch(setLoginState(updateSesion));
//   } catch (error) {
//     console.log(error);
//   } finally {
//     setLoading(false);
//   }
// }
