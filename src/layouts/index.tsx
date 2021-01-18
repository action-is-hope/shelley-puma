import React, { useEffect, useState } from "react";
import classnames from "classnames";
import Link from "gatsby-link";
import { Helmet } from "react-helmet";

import { Project as Default } from "@actionishope/shelley/styles/default";
import { Project as Shelley, Light, Dark } from "../styles/puma";

import Header from "../components/Header/Header";

const DefaultLayout = ({ children }: any) => {
  // Define the class names for out theme.
  const ShelleyDark = classnames(Default, Shelley, Dark);
  const ShelleyLight = classnames(Default, Shelley, Light);
  // Toggle 'alternative' theme state.
  const [altThemeEnabled, setAltTheme] = useState<boolean>(false);
  // The alternative here is the light theme.
  const currentTheme = altThemeEnabled ? ShelleyLight : ShelleyDark;

  const toggleTheme = () => {
    // Set local storage named key: value.
    localStorage.currentTheme = !altThemeEnabled ? "light" : "dark";
    // Toggle between alt theme on and off.
    setAltTheme(!altThemeEnabled);
  };

  useEffect(
    // Set the theme based on what is in local storage.

    () => setAltTheme(window.localStorage.getItem("currentTheme") === "light"),
    [altThemeEnabled]
  );

  // https://css-tricks.com/run-useeffect-only-once/
  React.useEffect(() => {
    // Run! Like go get some data from an API.

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    console.log("me", vh);
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // We listen to the resize event
    window.addEventListener("resize", () => {
      // We execute the same script as before
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }, []);

  return (
    <>
      <Helmet
        title="Edit Page :: Puma"
        meta={[
          {
            name: "description",
            content:
              "React UI lib: Create something beautiful from recycled body parts."
          },
          { name: "keywords", content: "sample, something" }
        ]}
        htmlAttributes={{
          lang: "en",
          class: currentTheme
        }}
      />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      ></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <link rel="manifest" href="./shelley.webmanifest"></link>
      {/* <link rel="stylesheet" href="https://use.typekit.net/bml4mzu.css"></link> */}

      <Header {...{ altThemeEnabled, toggleTheme }}>
        <nav>
          <Link
            to="/finder"
            style={{
              textDecoration: "none"
            }}
          >
            Content
          </Link>
          <Link
            to="/finder"
            style={{
              textDecoration: "none"
            }}
          >
            Media
          </Link>
          <Link
            to="/admin"
            style={{
              textDecoration: "none"
            }}
          >
            Settings
          </Link>
        </nav>
      </Header>

      {children}
    </>
  );
};

export default DefaultLayout;
