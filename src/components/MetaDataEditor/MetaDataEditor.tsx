import React from "react";
import classnames from "classnames";
import { st, classes } from "./metaDataEditor.st.css";

import {
  Grid,
  InputText,
  InputTextProps,
  Label,
  VisuallyHidden
} from "@actionishope/shelley";

interface MetaDataProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Minimise the meta editor. */
  mini: boolean;
  mediaUploader: React.ReactNode;
  titleProps: InputTextProps;
  descriptionProps: InputTextProps;
}
const MetaDataEditor = React.forwardRef(
  (
    {
      className: classNameProp,
      children,
      titleProps,
      descriptionProps,
      mediaUploader,
      mini = false,
      ...rest
    }: MetaDataProps,
    ref?: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        className={st(classnames(classes.root, classNameProp), { mini })}
        {...rest}
        ref={ref}
      >
        <div className={classes.inner}>
          <VisuallyHidden>
            <Label>Meta data</Label>
          </VisuallyHidden>
          <Grid variant={2}>
            <div className={classes.tdi}>
              {mediaUploader}
              <div>
                <InputText
                  id={titleProps.id}
                  labelVisuallyHidden
                  label={titleProps.label || "Meta title"}
                  placeholder={titleProps.placeholder || "Meta title"}
                  onChange={titleProps.onChange}
                  onBlur={titleProps.onBlur}
                  onFocus={titleProps.onFocus}
                  type="text"
                  vol={1}
                />
                <InputText
                  id={descriptionProps.id}
                  labelVisuallyHidden
                  label={descriptionProps.label || "Meta description"}
                  placeholder={
                    descriptionProps.placeholder || "Meta description"
                  }
                  onChange={descriptionProps.onChange}
                  onBlur={descriptionProps.onBlur}
                  onFocus={descriptionProps.onFocus}
                  type="textarea"
                  rows={1}
                  vol={1}
                />
              </div>
            </div>
            {children}
          </Grid>
        </div>
      </div>
    );
  }
);

MetaDataEditor.displayName = "MetaDataEditor";

export default MetaDataEditor;
