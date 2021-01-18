import React from "react";
import classnames from "classnames";
import { st, classes } from "./footer.st.css";

import { Grid, GridProps } from "@actionishope/shelley";
import { classes as grid } from "@actionishope/shelley/styles/default/grid.st.css";

const Footer = ({ className: classNameProp, children, ...rest }: GridProps) => {
  return (
    <Grid
      tag="footer"
      className={st(classnames(classes.root, classNameProp))}
      {...rest}
    >
      <nav className={grid.goal}>
        <ul className={classes.navList}>{children}</ul>
      </nav>
      {children}
    </Grid>
  );
};

export default Footer;
