import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth/UseAuth";

const PrivateProvider = ({ children }) => {
  const location = useLocation();
  const { user, loading } = UseAuth();
  if (loading) {
    return (
      <div className="text-center">
        <span className="progress w-56"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateProvider;
