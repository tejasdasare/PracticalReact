import React, { useRef } from "react";
import { useIdleTimer } from "react-idle-timer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IdleTimePractice = () => {
  const idleTimerRef = useRef(null);
  const onIdle = () => {
    console.log("user is idle");
    toast.error("User is idle!", {
      position: toast.POSITION.TOP_CENTER,
    });
    <ToastContainer />;
  };
  return (
    <div>
      Idle Timer Practice
      <useIdleTimer
        ref={idleTimerRef}
        timeout={5 * 1000}
        onIdle={onIdle}
      ></useIdleTimer>
    </div>
  );
};

export default IdleTimePractice;
