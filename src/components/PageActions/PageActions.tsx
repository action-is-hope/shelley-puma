import React from "react";
import classnames from "classnames";
import { st, classes } from "./pageActions.st.css";

import {
  Text,
  Button,
  Icon,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  ButtonGroup
} from "@actionishope/shelley";

import { classes as spacing } from "@actionishope/shelley/styles/default/spacing.st.css";

export type statusOptions =
  | "published"
  | "draft"
  | "updated"
  | "archived"
  | "unpublished";

const noop = () => false;
interface ActionProps extends React.HTMLAttributes<HTMLDivElement> {
  status: statusOptions;
  lastSaved?: string;
  onArchive?: () => void;
  onUnArchive?: () => void;
  onDelete?: () => void;
  onPublish: () => void;
  onUnPublish?: () => void;
  onReview: () => void;
  reviewRequired?: boolean;
}
const PageActions = React.forwardRef(
  (
    {
      className: classNameProp,
      children,
      status = "draft",
      onArchive,
      onUnArchive,
      onDelete,
      onPublish,
      onUnPublish,
      onReview,
      lastSaved,
      reviewRequired,
      ...rest
    }: ActionProps,
    ref?: React.Ref<HTMLDivElement>
  ) => {
    const strings = {
      status: "Status:",
      publish: "Publish",
      unPublish: "Unpublish",
      draft: "Draft",
      Archive: "Archive",
      unArchive: "Unarchive",
      publishChanges: "Publish Changes",
      publishOptions: "Publish Options",
      published: "Published",
      updated: "Updated",
      archived: "Archived",
      unpublished: "Unpublished",
      reviewRequired: "Review Required",
      delete: "Delete",
      changeStatus: "Change status",
      changesSaved: "Changes saved:"
    };

    const lookUp = {
      updated: { text: strings.publishChanges, onClick: onPublish },
      published: {
        text: strings.publish,
        onClick: () => noop
      },
      unpublished: { text: strings.publish, onClick: onPublish },
      draft: { text: strings.publish, onClick: onPublish },
      archived: { text: strings.unArchive, onClick: onUnArchive || noop }
    };

    const PageActionsMenuButton = (
      <MenuButton
        disabled={reviewRequired}
        icon={
          <Icon alt={strings.publishOptions}>
            <path d="M13 4v2l-5 5-5-5v-2l5 5z"></path>
          </Icon>
        }
      />
    );

    return (
      <div
        className={st(classnames(classes.root, classNameProp))}
        {...rest}
        ref={ref}
      >
        <div>
          <Text as="div" vol={1} className={spacing.mb1}>
            {lastSaved && `${strings.changesSaved} ${lastSaved}`}
          </Text>
          {children}
        </div>

        <div>
          <Text as="div" vol={1} className={spacing.mb1}>
            <span className={classnames(classes.led, classes[status])}></span>
            <strong>{strings.status}</strong> {strings[status]}
          </Text>
          <Menu>
            <ButtonGroup vol={4} tone={1} variant={3} fullWidth>
              <Button
                tone={reviewRequired ? 2 : 1}
                fullWidth
                onClick={() =>
                  reviewRequired ? onReview() : lookUp[status].onClick()
                }
                disabled={status === "published" && !reviewRequired}
              >
                {reviewRequired ? strings.reviewRequired : lookUp[status].text}
              </Button>
              {PageActionsMenuButton}
              {/* {reviewRequired ? (
                <VisuallyHidden>{PageActionsMenuButton}</VisuallyHidden>
              ) : (
                PageActionsMenuButton
              )} */}
            </ButtonGroup>
            <MenuList>
              <Text as="label" uppercase vol={1}>
                {strings.changeStatus}
              </Text>
              {onArchive && (
                <MenuItem
                  disabled={status === "archived" && true}
                  onSelect={() => onArchive()}
                >
                  {strings.Archive}
                </MenuItem>
              )}
              {onUnPublish && (
                <MenuItem
                  disabled={status === "unpublished" && true}
                  onSelect={() => onUnPublish()}
                >
                  {strings.unPublish}
                </MenuItem>
              )}
              {onDelete && (
                <MenuItem onSelect={() => onDelete()}>
                  {strings.delete}
                </MenuItem>
              )}
            </MenuList>
          </Menu>
        </div>
      </div>
    );
  }
);

PageActions.displayName = "PageActions";

export default PageActions;
