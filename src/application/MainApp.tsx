import React, { FC } from "react";
import "./MainApp.css";
import { AppProvider } from "./context/UserContext";
import { MainPage } from "./views/MainPage";

interface IGlobalStateProps {
  children: JSX.Element;
}
const GlobalState = ({ children }: IGlobalStateProps) => (
  <AppProvider>{children}</AppProvider>
);

const MainApp: FC = () => {
  return (
    <GlobalState>
      <MainPage />
    </GlobalState>
  );
};

export default MainApp;
