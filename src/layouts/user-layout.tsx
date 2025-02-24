import "../tailwind.css";
import { useEffect } from "react";
import { useStateContext } from "../context/context-provider";
import { FetchUsername } from "../services/api/fetch-username";
import { MainWrapper } from "../components/main-wrapper";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export const UserLayout: React.FC<Props> = ({ children }: Props) => {
  const { token, username, setUsername, loading, setLoading } =
    useStateContext();

  useEffect(() => {
    setLoading(true);
    FetchUsername({ setUsername }).then(() => setLoading(false));
  }, []);
  if (!token) return <Navigate to="/login" />;

  return (
    <>
      <Sidebar />
      <Header username={username} loading={loading} />
      <div className="sm:ml-64">
        <MainWrapper>{children}</MainWrapper>
      </div>
    </>
  );
};
