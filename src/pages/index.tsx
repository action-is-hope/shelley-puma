import React, { useState, useRef } from "react";

import DefaultLayout from "../layouts";
import classnames from "classnames";
import {
  Text,
  H1,
  H2,
  H3,
  P,
  Grid,
  InputText,
  Button
} from "@actionishope/shelley";

import { classes as text } from "@actionishope/shelley/styles/default/text.st.css";
import { classes as grid } from "@actionishope/shelley/styles/default/grid.st.css";
import { classes as spacing } from "@actionishope/shelley/styles/default/spacing.st.css";

import Dialog from "../components/Dialog/Dialog";

// import { usePopper } from "react-popper";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema.
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const IndexPage = ({ data }: IndexPageProps) => {
  const [
    referenceElement,
    setReferenceElement
  ] = useState<HTMLButtonElement | null>(null);

  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  // const { styles, attributes } = usePopper(referenceElement, popperElement, {
  //   modifiers: [{ name: "arrow", options: { element: arrowElement } }],
  //   placement: "auto-end"
  // });

  const [backlogModalOpen, setBacklogModalOpen] = useState(false);
  const [modelClickAway, setModelClickAway] = useState(true);
  const toggleBacklogModal = () => {
    setBacklogModalOpen(prevState => !prevState);
  };

  const [open, setOpen] = useState(false);

  const divRef = useRef<HTMLBaseElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggle = () => {
    setOpen(o => !o);
  };

  return (
    <DefaultLayout>
      <Button variant={2} onClick={() => setBacklogModalOpen(true)}>
        Open
      </Button>
      <Dialog
        isOpen={backlogModalOpen}
        onDismiss={() => modelClickAway && toggleBacklogModal()}
        initialFocusRef={inputRef}
        transition={2}
        // disableBackgroundClick
        // disableEscapeKey
        // disableFocusLock
        // ref={divRef}
        role="whatever"
        onMouseDown={() => console.log("hi")}
        data-testid="modal-window"
        transitionProps={{
          timeout: 200,
          onEnter: item => console.log(item, "Blah")
          // unmountOnExit: false
        }}
        // entryNode={false}
        // theme={defaultTheme}
      >
        <div
          ref={setPopperElement}
          // style={styles.popper}
          // {...attributes.popper}
        >
          <Button variant={2} onClick={() => toggleBacklogModal()}>
            Close
          </Button>
          <button onClick={() => toggleBacklogModal()}>Not me</button>

          <Button ref={buttonRef} onClick={() => toggleBacklogModal()}>
            Got me!
          </Button>
          <input ref={inputRef} />
          {/* <div ref={setArrowElement} style={styles.arrow} /> */}
        </div>
      </Dialog>

      <Grid tag="main" role="main" variant={1} formatted ref={divRef}>
        <P vol={4} className={text.intro}>
          Welcome to your new Gatsby &amp; Shelley website.
        </P>
        <P>
          {" "}
          <Button
            type="button"
            ref={setReferenceElement}
            onClick={() => setOpen(o => !o)}
          >
            Reference element
          </Button>
        </P>
        <P>
          Shelley as a core ships with no styles or very limited styles so that
          we / you always have the ability to provide and own all of the CSS
          100% with no systems style to override or code style to conform to. We
          grew up with CSS Zen Garden so that's why this was important to us.
        </P>

        <P>
          Having said that... We wanted a default theme that we could use when
          spinning up new sites and whilst we are hesitate to say that we
          'support' it, we will be using it and you can too.
        </P>

        <P>Or just copy it from styles/default and essentially 'fork' it.</P>

        <P>
          Our default comes with only 2 colours set (overridable) so you are
          able to define whatever colours you want and assign them how and where
          you want.
        </P>

        <P>
          You may want to play around with this theme we have set up here first,
          see what's what, get used to Stylable and take it from there.
        </P>

        <H2 vol={5} uppercase>
          Default theme
        </H2>

        <P>
          You will notice that our components take number indexes as props. Why?
          Naming conventions suck and usually we don't give a rats ass what the
          design system calls things plus your design system can include
          mappings to Shelley indexes anyways.
        </P>

        <P>
          A number index also removes naming semantics so we don't end up
          paragraph content with a variant set to "subtitle1" because the size
          is better for the usecase. Nothing pisses of Shelley more. Numbers are
          also easy to remember and are also easy changed in the DOM exployer.
        </P>

        <P>
          Anyways, here is an image and some notes in the comments explain the
          grid usage.
        </P>

        {/* We could do the following by closing our main grid and then opening
        another one, but we don't want to break our main and we don't want more
        wrappers.
        
        Instead we nest a grid, which we'll make a figure seeing as it houses an 
        image. By using grid.edge we essesntially are able to go full width and 
        visually close the grid. 

        The internally we have the same grid to work with so we can position the 
        image on our penalty lines (pen) and the figcaption we can position in the
        midfield. :-) Sorry if you don't care that much for sport, me neither really.

        Anyways, that's an example of the grid. You can add your own custom grid lines,
        we might add some more for pull out quotes/glossary items.

        */}
        <Grid
          tag="figure"
          className={classnames(grid.edge, spacing.mt4, spacing.mb4)}
          variant={1}
        >
          <img
            src="https://climatevisuals.org/sites/default/files/styles/clvi_hero_xxlarge/public/2019-09/44707910262_dc5cfb5f87_o.jpg?itok=x4VEEUbc"
            alt="She looks happy, perhaps thankful for the scrapes of water that remain in her barren landscape. She is sitting in the water raising her hands out to her sides as droplets rain off her hands back into the spring. She looks as mother nature might, stunning."
            className={grid.pen}
            style={{ width: "100%" }}
          />
          <Text
            as="figcaption"
            vol={2}
            className={classnames(grid.mid, spacing.mt1)}
          >
            A Maasai woman is sprinkling her feet with hot spring water,
            believed to be medicinal. Lake Magadi is among the salt lakes that
            will vanish in approximately 15 years due to human encroachment and
            climate change. The photo was captured during &apos;Photography for
            Conservation Project&apos; in 2017.{" "}
            <a href="https://climatevisuals.org/images?id=1367">
              Photo by David Macharia
            </a>
          </Text>
        </Grid>

        <P>
          Nice image isn&apos;t it? This is one of many from the fantastic{" "}
          <a href="https://climatevisuals.org/">Climate Visuals project</a>{" "}
          coming from the wonderful people at{" "}
          <a href="https://climateoutreach.org/">Climate outreach</a>.
        </P>

        <P>
          We'll add more examples later, this is really just a very simple
          start. We hope that in conjuntion with{" "}
          <a href="https://shelley.earth">shelley.earth</a> this will be a
          useful resource for Shelley or stylable.
        </P>

        <form className={classnames(grid.mid, spacing.mt2)}>
          <Text as="legand" vol={3} className={spacing.mb2}>
            My form
          </Text>
          <InputText
            id="text1"
            label="Form item label"
            placeholder="Placeholder text"
            variant={2}
            vol={2}
          />
          <InputText
            id="text1"
            label="Form item label"
            placeholder="Placeholder text"
            variant={2}
            vol={2}
          />
        </form>
      </Grid>
    </DefaultLayout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
