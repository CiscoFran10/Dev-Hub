import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../Provider/Context/UserContext";

const ProtectedRoute = () => {
	const { user } = useContext(UserContext);

	return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
