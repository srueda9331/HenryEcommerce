/* eslint-disable dot-notation */
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearState, getProductById } from '../../../../Redux/actions/actions';
import NotFound from '../../../NotFound/NotFound';
import Loading from '../../../Loading/Loading';
import CreateOrEdit from '../AddProductViews/CreateOrEdit/CreateOrEdit';

function EditProducts() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.productDetail);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getProductById(id, setLoading));
    return () => {
      dispatch(clearState());
    };
  }, [dispatch, id]);

  if (loading) {
    return <Loading />;
  }

  if (!product || product.deletedAt) {
    return <NotFound />;
  }

  return <div>{product && <CreateOrEdit data={product} />}</div>;
}

export default EditProducts;
