import React, { useState, useEffect, useRef } from "react";

import _throttle from "lodash.throttle";

import classnames from "classnames";
import { st, classes } from "./editPage.st.css";

import EditorLayout from "../EditorLayout/EditorLayout";
import { classes as layout } from "../../styles/puma/editorLayout.st.css";

import { Button, InputText, P, H2, Label } from "@actionishope/shelley";
import BlockEditor from "../BlockEditor/BlockEditor";
import MetaDataEditor from "../MetaDataEditor/MetaDataEditor";
import Preview from "../Preview/Preview";
import PageActions, { statusOptions } from "../PageActions/PageActions";
import ContentArea from "../ContentArea/ContentArea";
import ContentActions from "../ContentActions/ContentActions";
import PreviewActions from "../PreviewActions/PreviewActions";

const EditPreview = () => {
  /** Refs */
  const preview = useRef<HTMLDivElement>(null);
  const previewModes = useRef<HTMLDivElement>(null);
  const previewActions = useRef<HTMLDivElement>(null);
  const fullScreenModeButton = useRef<HTMLButtonElement>(null);
  const focusModeButton = useRef<HTMLButtonElement>(null);

  /** States */
  const [focusMode, setFocusMode] = useState<boolean>(false);
  const [previewMode, setPreviewMode] = useState<number>(1);
  const [fullScreenMode, setFullScreenMode] = useState<boolean>(false);
  const [reviewRequired, setReviewRequired] = useState(true);
  const [status, setStatus] = useState<statusOptions>("draft");
  const [sliderScrolled, setSliderScrolled] = useState(false);

  return (
    // change name... EditorLayout probably
    <EditorLayout
      gridMode={
        fullScreenMode ? "fullScreenMode" : focusMode ? "focusMode" : false
      }
    >
      <ContentArea
        className={layout.content}
        onScrolled={(status: boolean) => setSliderScrolled(status)}
        focusOnProps={{
          enabled: focusMode,
          onEscapeKey: () => setFocusMode(false),
          shards: [focusModeButton]
        }}
      >
        <MetaDataEditor
          data-testid="meta-data"
          titleProps={{
            id: "title",
            label: "Meta title",
            onChange: () => console.log("hi")
          }}
          descriptionProps={{ id: "metaDesc", label: "Meta Description" }}
          mini={sliderScrolled}
          mediaUploader={
            <img
              src="https://ucarecdn.com/68d4e740-b645-4273-bf86-5752a208a6ce/-/crop/3863x2172/0,396/-/preview/-/format/auto/"
              alt=""
            />
          }
        >
          <div>
            <InputText
              id="metaUrl"
              labelVisuallyHidden
              // placeholder="Select a URL"
              placeholder="Define the page URL"
              label={"Page URL"}
              type="text"
              vol={1}
              // startAdornment={
              //   <Icon alt="Select action">
              //     <path d="M8 12l-6.32-6.32 1.67-1.68 4.65 4.65 4.65-4.65 1.67 1.68-6.32 6.32z"></path>
              //   </Icon>
              // }
            />
            <InputText
              id="metaTags"
              labelVisuallyHidden
              placeholder="Select associated tags"
              label={"Tags"}
              type="text"
              vol={1}
            />
          </div>
        </MetaDataEditor>

        <BlockEditor
          settingsRender={() => (
            <P>Select taxonomies to display in this listing.</P>
          )}
          shards={[preview, previewModes]}
          data-testid="test"
        >
          <Label>Page Title</Label>
          <InputText
            id="ptitle2"
            labelVisuallyHidden
            placeholder="Title"
            label={"Page title"}
            type="text"
            vol={6}
          />
        </BlockEditor>

        <BlockEditor
          settingsRender={() => (
            <P>Select taxonomies to display in this listing.</P>
          )}
          shards={[preview, previewModes]}
          data-testid="test"
        >
          <Label>Page Title</Label>
          <InputText
            id="ptitle2"
            labelVisuallyHidden
            placeholder="Title"
            label={"Page title"}
            type="text"
            vol={6}
          />
        </BlockEditor>

        <BlockEditor
          settingsRender={() => (
            <P>Select taxonomies to display in this listing.</P>
          )}
          shards={[preview, previewModes]}
          data-testid="test"
        >
          <Label>Page Title</Label>
          <InputText
            id="ptitle2"
            labelVisuallyHidden
            placeholder="Title"
            label={"Page title"}
            type="text"
            vol={6}
          />
        </BlockEditor>

        <BlockEditor
          settingsRender={() => (
            <P>Select taxonomies to display in this listing.</P>
          )}
          shards={[preview, previewModes]}
          data-testid="test"
        >
          <Label>Page Title</Label>
          <InputText
            id="ptitle2"
            labelVisuallyHidden
            placeholder="Title"
            label={"Page title"}
            type="text"
            vol={6}
          />
        </BlockEditor>

        <BlockEditor
          settingsRender={() => (
            <P>Select taxonomies to display in this listing.</P>
          )}
          shards={[preview, previewModes]}
          data-testid="test"
        >
          <Label>Page Title</Label>
          <InputText
            id="ptitle2"
            labelVisuallyHidden
            placeholder="Title"
            label={"Page title"}
            type="text"
            vol={6}
          />
        </BlockEditor>

        <BlockEditor
          settingsRender={() => (
            <P>Select taxonomies to display in this listing.</P>
          )}
          shards={[preview, previewModes]}
          data-testid="test"
        >
          <Label>Page Title</Label>
          <InputText
            id="ptitle2"
            labelVisuallyHidden
            placeholder="Title"
            label={"Page title"}
            type="text"
            vol={6}
          />
        </BlockEditor>

        <BlockEditor
          settingsRender={() => (
            <P>Select taxonomies to display in this listing.</P>
          )}
          shards={[preview, previewModes]}
          data-testid="test"
        >
          <Label>Page Title</Label>
          <InputText
            id="ptitle2"
            labelVisuallyHidden
            placeholder="Title"
            label={"Page title"}
            type="text"
            vol={6}
          />
        </BlockEditor>

        <BlockEditor
          settingsRender={() => (
            <P>Select taxonomies to display in this listing.</P>
          )}
          shards={[preview, previewModes]}
          data-testid="test"
        >
          <Label>Page Title</Label>
          <InputText
            id="ptitle2"
            labelVisuallyHidden
            placeholder="Title"
            label={"Page title"}
            type="text"
            vol={6}
          />
        </BlockEditor>

        <ContentActions>
          <Button vol={4} variant={3} tone={3}>
            Add content block
          </Button>
        </ContentActions>
      </ContentArea>

      <PreviewActions
        className={layout.previewActions}
        ref={previewActions}
        focusMode={focusMode}
        refFocusButton={focusModeButton}
        onFocusClick={setFocusMode}
        fullScreenMode={fullScreenMode}
        refFullScreenButton={fullScreenModeButton}
        onFullScreenClick={setFullScreenMode}
      />

      <Preview
        className={layout.preview}
        previewMode={previewMode}
        ref={preview}
        onModeChange={setPreviewMode}
        previewModesRef={previewModes}
        focusOnProps={{
          enabled: fullScreenMode,
          onEscapeKey: () => setFullScreenMode(false),
          shards: [previewModes, fullScreenModeButton]
        }}
      >
        <div className={classnames(classes.appWrap, "iframe")}>
          <H2 vol={6}>Block1</H2>
          <P>Block2</P>
          <P>Block3</P>
          <P>Block3</P>
          <P>Block3</P>
          <H2 vol={6}>Block1</H2>
          <P>Block3</P>
          <P>Block3</P>
          <P>Block3</P>
          <H2 vol={6}>Block1</H2>
          <P>Block3</P>
          <P>Block3</P>
          <P>Block3</P>
        </div>
      </Preview>

      <PageActions
        className={layout.actions}
        status={status}
        lastSaved="5 mins ago"
        reviewRequired={reviewRequired}
        onDelete={() => console.log("delete")}
        onUnPublish={() => setStatus("unpublished")}
        onReview={() => {
          setReviewRequired(false);
          setStatus("updated");
        }}
        onPublish={() => setStatus("published")}
        // onArchive={() => console.log("archived")}
        // onUnArchive={() => {console.log("unarchived")}
      />
    </EditorLayout>
  );
};

export default EditPreview;
