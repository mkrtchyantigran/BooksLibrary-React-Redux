 import { useEffect } from 'react';
 import { ToastContainer, toast } from 'react-toastify';
 import { useSelector, useDispatch } from 'react-redux';
 import { clearError, selectErrorMsg } from '../../../redux/slices/errorSlice';


 const Error = () => {
  const errorMessage = useSelector(selectErrorMsg);
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(clearError()); 
    } else {

    }
  }, [errorMessage, dispatch])
  return <ToastContainer position='top-right' autoClose={1000} />
  
};

export default Error