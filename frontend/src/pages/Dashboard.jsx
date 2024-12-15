import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { useNavigate } from "react-router-dom"; 

export const Dashboard = () => {
  const navigate = useNavigate();  

  const handleLogout = () => {
    
    localStorage.removeItem("token");

    
    navigate("/login");
  };

  return (
    <div className="relative">
      <Appbar />
      <div className="m-8">
        
        <Balance value={"10,000"} />
        <Users />
      </div>

      
      <div className="absolute top-8 right-8">
        <button 
          onClick={handleLogout} 
          className="px-4 my-6 -mx-4 py-2 bg-red-500 text-white rounded-md"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};
