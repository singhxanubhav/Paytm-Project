import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if token exists in localStorage and set authentication state
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Signin setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/login" element={<Signin setIsAuthenticated={setIsAuthenticated} />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/send"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <SendMoney />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
