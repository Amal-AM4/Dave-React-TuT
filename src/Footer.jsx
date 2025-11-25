import React from "react";

const Footer = ({ length }) => {
  const today = new Date();
  return (
    <footer>
      <p>
        Copyright &copy; {today.getFullYear()} | List{" "}
        {length === 1 ? "Item" : "Items"} : {length}
      </p>
    </footer>
  );
};

export default Footer;
