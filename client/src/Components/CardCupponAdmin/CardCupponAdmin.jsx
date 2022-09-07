import React from 'react';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import './CardCupponAdmin.css';

function CardCupponAdmin({
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
        className={expired ? 'couponsHome__disabled' : 'sectionCupponsHome1'}
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
    </div>
  );
}

export default CardCupponAdmin;
