import React from "react";
import classnames from "classnames";
import { st, classes } from "./header.st.css";
import { classes as selection } from "../../styles/puma/inputSelection.st.css";
import { Toolbar, InputSelection, Icon, Button } from "@actionishope/shelley";
import Menu from "../icons/Menu";
import Flags from "country-flag-icons/react/3x2";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  altThemeEnabled: boolean;
  toggleTheme: () => void;
}
const Header = React.forwardRef(
  (
    {
      altThemeEnabled,
      className: classNameProp,
      children,
      toggleTheme,
      ...rest
    }: LayoutProps,
    ref?: React.Ref<HTMLDivElement>
  ) => {
    return (
      <Toolbar
        as="header"
        className={st(classnames(classes.root, classNameProp))}
        {...rest}
        ref={ref}
      >
        {/* <Flags.US title="United States" className={classes.flag} /> */}
        <Button
          className={classes.siteSelectButton}
          variant={2}
          tone={10}
          vol={5}
          // icon={<ExpandIcon alt="Toggle full screen on" />}
          // icon={<Flags.US title="United States" className={classes.flag} />}
          icon={<Menu />}
          iconPos="start"
        >
          <span>Publisher -</span> <span>USA</span>{" "}
          <Flags.US title="United States" className={classes.flag} />
        </Button>

        {/* <h1 className={classes.title}>
          <a
            href="/"
            style={{
              textDecoration: "none"
            }}
          >
            Puma publisher
          </a>
        </h1> */}

        {children}
        <div className={classes.controls}>
          <InputSelection
            id="themeSelector"
            variant={false}
            hint="Toggle theme mode"
            label={
              <Icon alt="Toggle theme mode">
                <path d="M16 8l-2.2-1.6 1.1-2.4-2.7-0.2-0.2-2.7-2.4 1.1-1.6-2.2-1.6 2.2-2.4-1.1-0.2 2.7-2.7 0.2 1.1 2.4-2.2 1.6 2.2 1.6-1.1 2.4 2.7 0.2 0.2 2.7 2.4-1.1 1.6 2.2 1.6-2.2 2.4 1.1 0.2-2.7 2.7-0.2-1.1-2.4 2.2-1.6zM8 13c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"></path>
              </Icon>
            }
            className={classnames(selection.darkLightToggle, {
              [selection.on]: altThemeEnabled
            })}
            checked={altThemeEnabled}
            onKeyPress={event => {
              if (event.key === "Enter") {
                toggleTheme();
              }
            }}
            onChange={() => {
              toggleTheme();
            }}
            type="checkbox"
          />
        </div>
      </Toolbar>
    );
  }
);

Header.displayName = "Header";

export default Header;
