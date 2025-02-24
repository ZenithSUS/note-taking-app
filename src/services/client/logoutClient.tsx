import { api } from "./axiosClient";
import { ErrorType } from "../../lib/types";

type LogoutClientProps = {
  token?: string;
  setToken: (token: string) => void;
};

export const LogoutClient: (
  props: LogoutClientProps
) => Promise<void> = async ({ token, setToken }: LogoutClientProps) => {
  const formData = new FormData();
  formData.append("token", token || "");
  formData.append("process", "logout");

  try {
    const response = await api.post("/auth.php", formData);
    if (response && response.status === 200) {
      return setToken("");
    }
  } catch (err: unknown) {
    const error = err as ErrorType;
    if (error.response) {
      // Server responded with an error status code
      console.error("Server Error:", error.response.data.message);
    } else if (error.request) {
      // Request was made, but no response was received (network error)
      console.error("Network Error:", error.request);
    } else {
      // Something else happened while setting up the request
      console.error("Request Setup Error:", error.message);
    }
  }
};
