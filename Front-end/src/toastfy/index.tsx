import { toast } from "react-toastify";

export const notifySucess = (msg: string) => {
  toast.success(msg, {
    position: "bottom-right",
    toastId: "YES",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
export const notifyError = (msg: string) => {
  toast.error(msg, {
    position: "bottom-right",
    toastId: "YES",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
