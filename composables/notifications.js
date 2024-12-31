import { useToast } from 'vue-toastification';

export function useToastify() {
  const toast = useToast();

  const notify = (message, type = 'success') => {
    switch(type) {
      case 'error':
        toast.error(message);
        break;
      case 'info':
        toast.info(message);
        break;
      case 'warning':
        toast.warning(message);
        break;
      case 'success':
      default:
        toast.success(message);
    }
  }

  return { notify };
}