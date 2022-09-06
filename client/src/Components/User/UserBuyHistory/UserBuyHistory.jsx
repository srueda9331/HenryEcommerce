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
      {userorders.map((order) => {
        console.log(order.data.additional_info.items[0].title);
        return (
          <div className="parentContainer">
            <OrderCard
              id={order.purchaseId}
              status={order.status}
              date={order.createdAt}
              title={order.data.additional_info.items[0].title}
              price={order.data.additional_info.items[0].unit_price}
              quantity={order.data.additional_info.items[0].quantity}
              image={order.data.additional_info.items[0].picture_url}
              productid={order.data.additional_info.items[0].id}
            />
          </div>
        );
      })}
    </div>
  );
}

export default UserBuyHistory;
