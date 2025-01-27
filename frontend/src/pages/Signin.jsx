import { useState } from "react";
import axios from "axios";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";

export const Signin = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://paytm-project-4r06.onrender.com/api/v1/user/signin",
        {
          username,
          password,
        }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token); // Store token
        setIsAuthenticated(true); // Update authentication state after successful signup
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setErrorMessage("Login failed! Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Login failed! Please check your email and password.");
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <span style={{ color: "red" }}>{errorMessage}</span>

          <Heading label={"Login"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Email address"
            label={"Email"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            label={"Password"}
          />
          <div className="pt-4">
            <Button onClick={handleSubmit} label={"Login"} />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
