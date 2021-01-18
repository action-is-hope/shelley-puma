import React, { useState } from "react";
import classnames from "classnames";

import Dialog from "../Dialog/Dialog";
import {
  Button,
  H2,
  P,
  Menu,
  MenuList,
  MenuButton,
  MenuItem
} from "@actionishope/shelley";
import { st, classes } from "./blockEditor.st.css";
import MoreHor from "../icons/MoreHor";
import Badge from "../Badge/Badge";

// TEMP
export type SetContentManager = (
  visibility: boolean,
  activeTab: number
) => void;

export type message = {
  id: string | number;
  content: string;
  settings?: boolean;
  type: "warning" | "error" | "info";
};

/** The allow list for types of content, add any more here in future; false is none. */
export type contentDisplay = "settings" | false;

export interface BlockEditorProps
  extends Omit<React.HTMLAttributes<HTMLBaseElement>, "onFocus"> {
  /** Set data-testid for use by end to end tests. */
  "data-testid": string;
  /** Function to invoke the content manager on a given tab index. */
  setContentManager?: SetContentManager;
  /** Disables the clickaway listener. */
  disableClickAwayListener?: boolean;
  /** Force open the dialog by providing the name of the content to display. */
  dislayContent?: contentDisplay;
  /** Callback fired on removing the block. */
  removeBlock?: (index?: number) => void;
  onFocus?: (index?: number) => void;
  /** Callback fired settings is closed. */
  onSettingsClose?: () => void;
  /** Provide setting UI render, state is available as an arg. */
  settingsRender?: (state: BlockEditorState) => void;
  /** TBC Define this */
  messages?: message[];

  shards?: Array<React.RefObject<any> | HTMLElement>;
}

/** The state of the editor shared on to settingsRender. */
export interface BlockEditorState {
  dislayContent: contentDisplay;
}

const BlockEditor = ({
  className: classNameProp,
  children,
  dislayContent: displayContentProp = false,
  removeBlock,
  settingsRender,
  onFocus,
  onSettingsClose,
  messages = [],
  setContentManager,
  disableClickAwayListener,
  shards = [],
  // "data-testid": dataTestId,
  ...rest
}: BlockEditorProps) => {
  // const slider = useRef<HTMLDivElement>(null);
  const strings = {
    settingsTitle: "Block settings",
    manageItems: "Manage items",
    manageTitle: "Manage blocks",
    removeTitle: "Delete block"
  };

  const [dislayContent, setDislayContent] = useState<contentDisplay>(
    displayContentProp
  );

  const displayMenu = settingsRender || setContentManager || removeBlock;

  const onContentSelect = (
    contentToDisplay: contentDisplay,
    onFocus: BlockEditorProps["onFocus"]
  ) => {
    onFocus && onFocus();
    setDislayContent(contentToDisplay);
  };

  const invokeContentManager = (
    setContentManager: SetContentManager,
    onFocus: BlockEditorProps["onFocus"]
  ) => {
    onFocus && onFocus();
    setContentManager(true, 1);
  };

  const closeOverlay = () => {
    setDislayContent(false);
  };

  // const mainMessages: message[] = messages.filter(item => !item.settings);
  const settingsMessages: message[] = messages.filter(item => item.settings);
  console.log(settingsMessages);
  return (
    <section className={st(classnames(classes.root, classNameProp))} {...rest}>
      <nav className={classes.menu}>
        {displayMenu && (
          <Menu>
            <MenuButton
              variant={4}
              tone={10}
              vol={1}
              icon={
                <Badge badgeContent={messages?.length}>
                  <MoreHor alt="Block menu" />
                </Badge>
              }
            />

            <MenuList>
              {messages.map(item => (
                <P key={item.id} vol={1} className={classes.message}>
                  {item.content} {item.settings && " (settings)"}
                </P>
              ))}
              {/* 'Manage blocks' is a consistant option thus always at the top. */}
              {setContentManager && (
                <MenuItem
                  data-testid="ManageBlocks"
                  onSelect={() =>
                    invokeContentManager(setContentManager, onFocus)
                  }
                >
                  {strings.manageTitle}
                </MenuItem>
              )}
              {/* 'Settings' is the second most likely thing. */}
              {settingsRender && (
                <MenuItem
                  data-testid="BlockSettings"
                  onSelect={() => onContentSelect("settings", onFocus)}
                >
                  {strings.settingsTitle}
                </MenuItem>
              )}
              {/* Insert any future options here. */}
              {/* 'Delete blocks' is a consistant and always at the bottom. */}
              {removeBlock && (
                <MenuItem
                  data-testid="RemoveBlock"
                  onSelect={() => removeBlock()}
                >
                  {strings.removeTitle}
                </MenuItem>
              )}
            </MenuList>
          </Menu>
        )}
      </nav>

      <Dialog
        isOpen={dislayContent !== false}
        onDismiss={() => !disableClickAwayListener && closeOverlay()}
        // initialFocusRef={inputRef}
        transition={3}
        variant={2}
        entryNode={false}
        focusOnProps={{ shards: shards }}
        // disableBackgroundClick
        // disableEscapeKey
        // disableFocusLock
        role="whatever"
        data-testid="modal-window"
        transitionProps={{
          className: classes.dialogTransition,
          timeout: 190,
          onEntering: () => document.body.classList.add("on"),
          onExiting: () => document.body.classList.remove("on")
        }}
      >
        {settingsRender && (
          <div
            className={classes.dialogContentWithActions}
            aria-hidden={!(dislayContent === "settings")}
            style={{
              transition: "transform 190ms",
              // We need this in the DOM for the Dialog transitions to work.
              transform: dislayContent === "settings" ? `scale(1)` : `scale(1)`
            }}
          >
            <H2 className={classes.settingsTitle} vol={2} uppercase>
              Block settings
            </H2>
            {settingsRender({
              dislayContent
            })}
            <Button
              onClick={() => {
                onSettingsClose && onSettingsClose();
                return closeOverlay();
              }}
            >
              Close
            </Button>
          </div>
        )}
      </Dialog>

      {/* Main content */}
      <div className={classes.mainContent}>{children}</div>
    </section>
  );
};

export default BlockEditor;
