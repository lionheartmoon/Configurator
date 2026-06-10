import { useSnackbar } from "notistack";

export const useMessage = () => {
  const { enqueueSnackbar } = useSnackbar();

  const message = {
    success: (text: string) => enqueueSnackbar(text, { variant: "success" }),
    error: (text: string) => enqueueSnackbar(text, { variant: "error" }),
  };

  return { message };
};
