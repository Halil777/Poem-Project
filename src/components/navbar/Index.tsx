import { FC } from "react";
import Navbar from "./Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

const Index: FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Index;
