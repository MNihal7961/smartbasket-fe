import React from "react";
import MainLayout from "./layouts/MainLayout";
import AppRouter from "./routes/Routes";
import "./index.css";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-max-width bg-gray-100">
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </div>
  );
};

export default App;
