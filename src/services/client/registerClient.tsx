import { api } from "./axiosClient";
import { useNavigate } from "react-router-dom";
import { ErrorType } from "../../lib/types";

type RegisterClientProps = {
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
  setErrors: (errors: Object) => void;
  setNetworkError: (error: { message: string }) => void;
};

export const RegisterClient: (
  props: RegisterClientProps
) => Promise<void> = async ({
  username,
  email,
  password,
  confirmpassword,
  setErrors,
  setNetworkError,
}: RegisterClientProps) => {
  const success = () => {
    const navigate = useNavigate();
    navigate("/login");
  };

  const formData = new FormData();
  formData.append("username", username || "");
  formData.append("email", email || "");
  formData.append("password", password || "");
  formData.append("confirmpassword", confirmpassword || "");
  formData.append("process", "register");

  try {
    const response = await api.post("/auth.php", formData);
    if (response.status === 200) {
      success();
    }
  } catch (err: unknown) {
    const error = err as ErrorType;
    if (error.response) {
      // Server responded with an error status code
      console.error("Server Error:", error.response.data.message);
      setErrors(error.response.data.error);
      console.log(error.response.data.error);
    } else if (error.request) {
      // Request was made, but no response was received (network error)
      console.error("Network Error:", error.request);
      setNetworkError({ message: "A network error occurred." });
    } else {
      // Something else happened while setting up the request
      console.error("Request Setup Error:", error.message);
      setNetworkError({
        message: "An error occurred while setting up the request.",
      });
    }
  }
};
