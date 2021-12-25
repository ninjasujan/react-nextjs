import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

type propType = {
  children?: any;
};

function Layout(props: propType) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;