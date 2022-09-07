import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrder } from '../../../Redux/actions/actions';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import OrderCard from './OrderCard/OrderCard';
import './UserBuyHistory.css';

function UserBuyHistory() {
  const dispatch = useDispatch();
  const { token } = JSON.parse(window.localStorage.getItem('user'));
  const { userorders } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUserOrder(token));
  }, [dispatch, token]);

  console.log(userorders);

  return (
    <div>
      <h1 className="order_tittlecard">Mis compras </h1>
      {userorders && userorders?.length > 0 ? (
        userorders.map((order) => {
          return (
            <div className="parentContainer">
              <OrderCard
                order={order}
                id={order.purchaseId}
                status={order.status}
                date={order.createdAt}
              />
            </div>
          );
        })
      ) : (
        <div className="nobuy-container">
          <h2>Aún no tienes compras realizadas</h2>
          <div className="noboy-button">
            <Link to="/menu">
              <Button>Realizar una compra</Button>
            </Link>
          </div>
        </div>
      )}

      <div className="ordercard__button">
        <Link to="/userprofiledashboard">
          <Button>Volver</Button>
        </Link>
      </div>
    </div>
  );
}

export default UserBuyHistory;
