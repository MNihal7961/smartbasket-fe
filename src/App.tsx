import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainLayout from "./layouts/MainLayout";
import AppRouter from "./routes/Routes";
import "./index.css";
import "./App.css";
import { logout } from "./store/auth/authSlice";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleLogout = () => {
      dispatch(logout());
    };
    window.addEventListener("app-logout", handleLogout);
    return () => {
      window.removeEventListener("app-logout", handleLogout);
    };
  }, [dispatch]);

  return (
    <div className="app-max-width bg-gray-100">
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </div>
  );
};

export default App;
