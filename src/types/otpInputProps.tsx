export type OtpInputProps = {
  code?: string;
  setCode?: (code: string | any) => void | any;
  maxLength?: number;
  ScreenName?: any;
  errorMessage?: string;
  checkError?: boolean;
};
