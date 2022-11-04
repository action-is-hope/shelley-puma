import React, { useState } from "react";
import classnames from "classnames";

import Dialog from "../Dialog/Dialog";
import { Button, H2, MenuButton } from "@actionishope/shelley";
import { Item } from "@react-stately/collections";
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

export interface BlockEditorProps
  extends Omit<React.HTMLAttributes<HTMLBaseElement>, "onFocus"> {
  /** Set data-testid for use by end to end tests. */
  "data-testid": string;
  /** Provide function to invoke content manager. */
  setContentManager?: SetContentManager;
  /** Disable the clickaway listener. */
  disableClickAwayListener?: boolean;
  /** Callback fired on removing the block. */
  removeBlock?: (index?: number) => void;
  /** Focus function to fire in order to focus the preview instance.  */
  onFocus?: (index?: number) => void;
  /** Callback fired when settings overlay is closed. */
  onSettingsClose?: () => void;
  /** The settings UI to render, overlay status available as arg. */
  settingsRender?: (state: BlockEditorState) => void;
  /** Error/Hint messages... TBC Define this */
  messages?: message[];

  shards?: Array<React.RefObject<any> | HTMLElement>;
}

type overlayStatus = boolean;

export interface BlockEditorState {
  overlayOpen: overlayStatus;
}

const BlockEditor = ({
  className: classNameProp,
  children,
  removeBlock,
  settingsRender,
  onFocus,
  onSettingsClose,
  messages = [],
  setContentManager,
  disableClickAwayListener,
  shards = [],
  ...rest
}: BlockEditorProps) => {
  const strings = {
    settingsTitle: "Block settings",
    manageItems: "Manage items",
    manageTitle: "Manage blocks",
    removeTitle: "Delete block",
  };

  const [overlayOpen, setOverlayOpen] = useState<overlayStatus>(false);

  const provideMenu = settingsRender || setContentManager || removeBlock;

  const invokeSettings = (onFocus: BlockEditorProps["onFocus"]) => {
    onFocus && onFocus();
    setOverlayOpen(true);
  };

  const invokeContentManager = (
    setContentManager: SetContentManager,
    onFocus: BlockEditorProps["onFocus"]
  ) => {
    onFocus && onFocus();
    setContentManager(true, 1);
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
  };

  // const mainMessages: message[] = messages.filter(item => !item.settings);
  const settingsMessages: message[] = messages.filter((item) => item.settings);
  console.log(settingsMessages);
  return (
    <section className={st(classnames(classes.root, classNameProp))} {...rest}>
      <nav className={classes.menu}>
        {provideMenu && (
          <MenuButton
            variant="fab"
            tone={10}
            vol={1}
            icon={
              <Badge badgeContent={messages?.length}>
                <MoreHor alt="Block menu" />
              </Badge>
            }
            label="Actions"
            onAction={(actionKey: string) => {
              switch (actionKey) {
                case "manage":
                  setContentManager &&
                    invokeContentManager(setContentManager, onFocus);
                  break;
                case "settings":
                  invokeSettings(onFocus);
                  break;
                case "remove":
                  removeBlock && removeBlock();
                  break;
              }
            }}
          >
            {setContentManager && (
              <Item key="manage">{strings.manageTitle}</Item>
            )}
            {settingsRender && (
              <Item key="settings">{strings.settingsTitle}</Item>
            )}
            {removeBlock && <Item key="remove">{strings.removeTitle}</Item>}
          </MenuButton>
        )}
      </nav>

      <Dialog
        isOpen={overlayOpen !== false}
        onDismiss={() => !disableClickAwayListener && closeOverlay()}
        // initialFocusRef={inputRef}
        transition={3}
        variant={2}
        entryNode={false}
        focusOnProps={{ shards: shards }}
        // disableBackgroundClick
        // disableEscapeKey
        // disableFocusLock
        data-testid="modal-window"
        transitionProps={{
          className: classes.dialogTransition,
          timeout: 190,
          onEntering: () => document.body.classList.add("on"),
          onExiting: () => document.body.classList.remove("on"),
        }}
      >
        {settingsRender && (
          <div
            className={classes.dialogContentWithActions}
            aria-hidden={!overlayOpen}
            style={{
              transition: "transform 190ms",
              // We need this in the DOM for the Dialog transitions to work.
              transform: overlayOpen ? `scale(1)` : `scale(1)`,
            }}
          >
            <H2 className={classes.settingsTitle} vol={2} uppercase>
              Block settings
            </H2>
            {settingsRender({
              // Provide overlay state to render.
              overlayOpen,
            })}
            <Button
              onPress={() => {
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
