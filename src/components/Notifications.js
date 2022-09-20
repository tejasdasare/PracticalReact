import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Here we go ,Something went wrong!
      <button onClick={CustomToast}>Close</button>
    </div>
  );
};

const Notifications = () => {
  const notify = () => {
    toast("Wow so easy!", {
      position: toast.POSITION.TOP_LEFT,
    });
    toast.success("Wow so easy!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000,
    });
    toast.warning(<CustomToast />, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
    });
    toast.info("Wow so easy!", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    toast.error("Wow so easy!", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    toast("Wow so easy!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  return (
    <div>
      Notifications
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
};

export default Notifications;
