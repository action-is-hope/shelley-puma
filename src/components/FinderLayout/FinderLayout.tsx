import React from "react";
import classnames from "classnames";
import { st, classes } from "./finderLayout.st.css";

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  gridMode?: string | false;
}
const Layout = ({
  className: classNameProp,
  children,
  gridMode = false,
  ...rest
}: LayoutProps) => {
  return (
    <div
      className={st(classnames(classes.root, classNameProp), { gridMode })}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Layout;
