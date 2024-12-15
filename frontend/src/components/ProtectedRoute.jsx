import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    console.log("ProtectedRoute - isAuthenticated:", isAuthenticated);
    // Agar user authenticated nahi hai to /login par redirect karega
    return <Navigate to="/login" />;
  }
  // Agar user authenticated hai to children render karega
  return children;
};
