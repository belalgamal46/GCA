import Toast from "react-native-toast-message";

type ToastProps = {
  text?: string;
  type?: string | 'success' | 'error' | 'info';
  position?: "top" | "bottom";
};

export const showToast = ({ text = "", type, position = "top" }: ToastProps) =>
  Toast.show({
    type,
    text1: text,
    position,
  });
