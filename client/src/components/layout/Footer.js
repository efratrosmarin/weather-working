import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center"> <div className="push"></div>
    <div className="clearfix"></div>
      Copyright &copy; {new Date().getFullYear()} Community Connector
    </footer>
  );
};

export default Footer