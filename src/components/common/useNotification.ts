import { toast, ToastContainerProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastConfig: ToastContainerProps = {
  position: 'bottom-left',
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
};

const useNotification = () => {
  const errorNotification = (message = 'Fail') =>
    toast(message, { type: 'error' });
  const successNotification = (message = 'Success') =>
    toast(message, { type: 'success' });

  return {
    errorNotification,
    successNotification,
  };
};

export default useNotification;
