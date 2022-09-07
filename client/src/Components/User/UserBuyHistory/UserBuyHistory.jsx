import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrder } from '../../../Redux/actions/actions';
import OrderCard from './OrderCard/OrderCard';

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
      <div>Mis compras </div>
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
        <h2>Aún no tienes compras realizadas</h2>
      )}
    </div>
  );
}

export default UserBuyHistory;
