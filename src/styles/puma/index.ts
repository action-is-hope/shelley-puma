import { RuntimeStylesheet } from "@stylable/runtime";
import classnames from "classnames";
import { classes as light } from "./themes/light.st.css";
import { classes as dark } from "./themes/dark.st.css";

// = Foundation Components
import Button from "./button.st.css";
import Blockquote from "./blockquote.st.css";
import Grid from "./grid.st.css";
import InputBase from "./inputBase.st.css";
import InputSelection from "./inputSelection.st.css";
import Label from "./label.st.css";
import Menu from "./menu.st.css";
import Text from "./text.st.css";

import Dialog from "./dialog.st.css";

// = Application Components
import Header from "./header.st.css";
import Footer from "./footer.st.css";
import ContentActions from "./contentActions.st.css";
import Card from "./card.st.css";
import EditorLayout from "./editorLayout.st.css";
import FinderLayout from "./finderLayout.st.css";
import PageActions from "./pageActions.st.css";
import PreviewModes from "./previewModes.st.css";
import Preview from "./preview.st.css";
import BlockEditor from "./blockEditor.st.css";
import MetaDataEditor from "./metaDataEditor.st.css";

// = Project
import Puma from "./project.st.css";

// = Helper to extract the class names.
const getStylableClassNames = (
  values: [],
  stylesheet: RuntimeStylesheet,
  rootcls: string
) => {
  const clsArray = values.map((cls: string) => stylesheet.classes[cls] || null);
  return classnames(stylesheet.classes[rootcls], clsArray);
};

export const dialog = (...values: []) =>
  getStylableClassNames(values, Dialog, "dialog");

// = Foundation component exports
export const button = (...values: []) =>
  getStylableClassNames(values, Button, "button");

export const blockquote = (...values: []) =>
  getStylableClassNames(values, Blockquote, "blockquote");

export const grid = (...values: []) =>
  getStylableClassNames(values, Grid, "grid");

export const inputBase = (...values: []) =>
  getStylableClassNames(values, InputBase, "inputBase");

export const inputSelection = (...values: []) =>
  getStylableClassNames(values, InputSelection, "inputSelection");

export const label = (...values: []) =>
  getStylableClassNames(values, Label, "label");

export const menu = (...values: []) =>
  getStylableClassNames(values, Menu, "menu");

export const text = (...values: []) =>
  getStylableClassNames(values, Text, "text");

// Application component exports

export const header = (...values: []) =>
  getStylableClassNames(values, Header, "header");

export const footer = (...values: []) =>
  getStylableClassNames(values, Footer, "footer");

export const card = (...values: []) =>
  getStylableClassNames(values, Card, "card");

export const editorLayout = (...values: []) =>
  getStylableClassNames(values, EditorLayout, "editorLayout");

export const finderLayout = (...values: []) =>
  getStylableClassNames(values, FinderLayout, "finderLayout");

export const pageActions = (...values: []) =>
  getStylableClassNames(values, PageActions, "pageActions");

export const previewModes = (...values: []) =>
  getStylableClassNames(values, PreviewModes, "previewModes");

export const preview = (...values: []) =>
  getStylableClassNames(values, Preview, "preview");

export const blockEditor = (...values: []) =>
  getStylableClassNames(values, BlockEditor, "blockEditor");

export const metaDataEditor = (...values: []) =>
  getStylableClassNames(values, MetaDataEditor, "metaDataEditor");

export const contentActions = (...values: []) =>
  getStylableClassNames(values, ContentActions, "contentActions");

// = Main classname export
export const Project = Puma.classes.root;

// = Theme exports
export const Light = light.root;
export const Dark = dark.root;
