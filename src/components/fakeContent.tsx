// import BlockEditor from "./BlockEditor/BlockEditor";
// import {
//   Button,
//   InputSelection,
//   Icon,
//   InputText,
//   P,
//   H2,
//   Label
// } from "@actionishope/shelley";

// export const DummyBlocks = (
//   <>
//     <BlockEditor
//       messages={[
//         {
//           id: "1",
//           content: "Title is required",
//           type: "error"
//         },
//         {
//           id: "2",
//           content: "Link field required",
//           settings: true,
//           type: "error"
//         }
//       ]}
//       settingsRender={() => (
//         <P className={classes.helpText}>
//           Select taxonomies to display in this listing.
//         </P>
//       )}
//       shards={[preview, previewModes]}
//       data-testId="test"
//     >
//       <Label>Page Title</Label>
//       <InputText
//         id="ptitle"
//         labelVisuallyHidden
//         placeholder="Title"
//         label={"Page title"}
//         type="text"
//         vol={6}
//       />
//     </BlockEditor>
//     <BlockEditor
//       settingsRender={() => (
//         <P className={classes.helpText}>
//           Select taxonomies to display in this listing.
//         </P>
//       )}
//       shards={[preview, previewModes]}
//       data-testId="test"
//     >
//       <Label>Page Title</Label>
//       <InputText
//         id="ptitle2"
//         labelVisuallyHidden
//         placeholder="Title"
//         label={"Page title"}
//         type="text"
//         vol={6}
//       />
//     </BlockEditor>
//     <BlockEditor
//       settingsRender={() => (
//         <P className={classes.helpText}>
//           Select taxonomies to display in this listing.
//         </P>
//       )}
//       shards={[preview, previewModes]}
//       data-testId="test"
//     >
//       <Label>Banner</Label>
//       <InputText
//         id="btitle"
//         labelVisuallyHidden
//         placeholder="Title"
//         label={"Page title"}
//         type="text"
//         vol={6}
//       />
//       <InputText
//         id="bdesc"
//         labelVisuallyHidden
//         placeholder="Description"
//         label={"Page title"}
//         type="textarea"
//         rows={1}
//         vol={4}
//       />
//     </BlockEditor>

//     <BlockEditor
//       settingsRender={() => (
//         <P className={classes.helpText}>
//           Select taxonomies to display in this listing.
//         </P>
//       )}
//       shards={[preview, previewModes]}
//       data-testId="test"
//     >
//       <Label>Body copy</Label>
//       <InputText
//         id="body1"
//         labelVisuallyHidden
//         placeholder="Content"
//         label={"Page title"}
//         type="textarea"
//         rows={3}
//         vol={3}
//       />
//       {/* <textarea></textarea> */}
//     </BlockEditor>
//     <BlockEditor
//       settingsRender={() => (
//         <P className={classes.helpText}>
//           Select taxonomies to display in this listing.
//         </P>
//       )}
//       shards={[preview, previewModes]}
//       data-testId="test"
//     >
//       <Label>Reference list</Label>
//       <InputText
//         id="reftitle"
//         labelVisuallyHidden
//         placeholder="Title"
//         label={"Page title"}
//         type="text"
//         vol={5}
//       />
//       <InputText
//         id="refdecs"
//         labelVisuallyHidden
//         placeholder="Description"
//         label={"Page title"}
//         type="textarea"
//         // rows={}
//         vol={3}
//       />
//     </BlockEditor>
//     <Button fullWidth>Add block</Button>
//   </>
// );
