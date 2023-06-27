import { useEffect } from "react";
import { useStorage } from "../hooks/useLocalStorage";
import { UserLocal, userLocalDefault } from "./UserContext";
import { useLocation, useNavigate } from "react-router-dom";

interface AuthorizationsProps {
  children: React.ReactNode;
}

export const Authorizations: React.FC<AuthorizationsProps> = ({ children }) => {

  const [user, setUser] = useStorage<UserLocal>("USER", userLocalDefault);

  const navigate = useNavigate();
  const url = useLocation();
  console.log(user?.profileToken);
  
  useEffect(() => {
    if (!user?.profileToken||!user) {
      navigate("/signIn");// Gọi nextPage() khi isUserSet là true
    }
  },[user,url?.pathname]);

  return <>{children}</>;
};
