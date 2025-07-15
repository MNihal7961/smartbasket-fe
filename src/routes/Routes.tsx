import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import type { RootState } from "../store";

const ProtectedRoute: React.FC<React.PropsWithChildren> = ({ children }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  return user ? <>{children}</> : <Navigate to="/signin" replace />;
};

const UnauthRoute: React.FC<React.PropsWithChildren> = ({ children }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  return !user ? <>{children}</> : <Navigate to="/" replace />;
};

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/signin" element={<UnauthRoute><SignIn /></UnauthRoute>} />
      <Route path="/signup" element={<UnauthRoute><SignUp /></UnauthRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
