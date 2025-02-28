import React, { useCallback } from "react";
import {ToastNotification} from "../components";
import { removeToast, showToast } from "../features/toast/toastSlice";
import { useDispatch, useSelector } from "react-redux";

const useToastNotification = () => {
  const dispatch = useDispatch()
  const { toast } = useSelector((state) => state.toast);

  let timer;

  const triggerNotification = useCallback((notificationProps) => {
    clearTimeout(timer);
    dispatch(showToast(notificationProps))

    timer = setTimeout(() => {
      dispatch(removeToast())
    }, notificationProps.duration);
  }, []);


  const notificationComponent = toast ? (
    <ToastNotification {...toast} />
  ) : null;

  return { notificationComponent, triggerNotification };
};

export default useToastNotification;
