import React from "react";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

type propType = {
  children?: React.ReactNode;
};

const Layout: React.FC<propType> = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
