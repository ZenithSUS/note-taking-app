import { api } from "./axiosClient";

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
  } catch (err: any) {
    if (err.response) {
      // Server responded with an error status code
      console.error("Server Error:", err.response.data.message);
    } else if (err.request) {
      // Request was made, but no response was received (network error)
      console.error("Network Error:", err.request);
    } else {
      // Something else happened while setting up the request
      console.error("Request Setup Error:", err.message);
    }
  }
};
