import React from 'react';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import './CardCuponHome.css';

function CardCupponHome({
  code,
  title,
  imgUri,
  discountPorcentage,
  expired,
  expirationDate,
}) {
  function copyCode() {
    navigator.clipboard.writeText(code);
  }

  function openSwal() {
    Swal.fire({
      customClass: {
        confirmButton: 'confirmBtnSwal',
      },
      title: 'Cupón de descuento',
      text: 'Copiado al portapapeles con éxito!',
      imageUrl:
        'https://res.cloudinary.com/dc8w6pspj/image/upload/v1662498810/sucess_otelvh.png',
      imageWidth: 150,
      imageHeight: 150,
      imageAlt: 'Logo',
    });
  }

  function handle() {
    if (expired) return;
    copyCode();
    openSwal();
  }

  return (
    <div>
      <section
        className={expired ? 'couponsHome__disabled' : 'sectionCupponsHome'}
      >
        <div className="cardCuponHome__cupon">
          <div className="cardCuponHome__containerImg">
            <img
              className="cardCuponHome__img img-fluid"
              src={imgUri}
              alt="cupon "
            />
          </div>
          <div className="cardCuponHome__text">
            <h2>{title}</h2>
            <p>{discountPorcentage + '% OFF'}</p>
            <Button
              onClick={handle}
              variant="primary"
              className={
                expired
                  ? 'cupponCardHome__cupponButton disCursor'
                  : 'cupponCardHome__cupponButton'
              }
            >
              {code}
            </Button>
          </div>
        </div>
      </section>

      <section className={expired ? 'couponsHome__disabled' : 'card-section'}>
        <div className="cardfront">
          <div className="flip-card">
            <div className="flip-card__container">
              <div className="card-front">
                <div className="card-front__tp card-front__tp--city">
                  <h2 className="card-front__heading">{title}</h2>
                  <p className="card-front__text-price">
                    {discountPorcentage + '% OFF'}
                  </p>
                </div>

                <div className="card-front__bt">
                  <p className="card-front__text-view card-front__text-view--city">
                    Chekea esta oferta!
                  </p>
                </div>
              </div>
              <div className="card-back">
                <img
                  className="video__container img-fluid"
                  src={imgUri}
                  alt="not img"
                ></img>
              </div>
            </div>
          </div>

          <div className="inside-page">
            <div className="inside-page__container">
              <h3 className="inside-page__heading inside-page__heading--city">
                Para amantes del ahorro!
              </h3>
              <p className="inside-page__text">
                Esta oferta esta vigente hasta el dia: {expirationDate}
              </p>

              <Button
                onClick={handle}
                variant="primary"
                className={
                  expired
                    ? 'cupponCardHome__cupponButton disCursor'
                    : 'cupponCardHome__cupponButton inside-page__btn inside-page__btn--city'
                }
              >
                {code}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CardCupponHome;
