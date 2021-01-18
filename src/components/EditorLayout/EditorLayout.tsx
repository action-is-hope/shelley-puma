import React from "react";
import classnames from "classnames";
import { st, classes } from "./editorLayout.st.css";

export interface EditorLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  gridMode: "fullScreenMode" | "focusMode" | false;
}
const EditorLayout = ({
  className: classNameProp,
  children,
  gridMode = false,
  ...rest
}: EditorLayoutProps) => {
  return (
    <div
      className={st(classnames(classes.root, classNameProp), { gridMode })}
      {...rest}
    >
      {children}
    </div>
  );
};

export default EditorLayout;
