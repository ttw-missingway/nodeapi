import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Navigation from "../components/Navigation";

export default function Home() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated && (
      navigate("/profile")
    );
  },[navigate, isAuthenticated]);

  return (
    <div>
      <h1>
        This is the Home Page
      </h1>
      <Navigation />
    </div>
  );
}