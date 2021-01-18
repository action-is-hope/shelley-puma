import React, { useState, useEffect, useRef } from "react";

import _throttle from "lodash.throttle";

import classnames from "classnames";
import { st, classes } from "./finder.st.css";

import PreviewIcon from "../icons/Preview";
import PreviewOffIcon from "../icons/PreviewOff";

import ExpandIcon from "../icons/ExpandScreen";
import CompressIcon from "../icons/CompressScreen";
import Dialog from "../Dialog/Dialog";
import { FocusOn } from "react-focus-on";

import FinderLayout from "../FinderLayout/FinderLayout";
import { classes as layout } from "../../styles/puma/layoutFinder.st.css";

import {
  Button,
  InputSelection,
  Icon,
  InputText,
  P,
  H2,
  Label,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination
} from "@actionishope/shelley";

const Finder = ({ className: classNameProp, ...rest }: any) => {
  /** Refs */
  const slider = useRef<HTMLDivElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const previewModes = useRef<HTMLDivElement>(null);
  const previewActions = useRef<HTMLDivElement>(null);
  const fullScreenButton = useRef<HTMLButtonElement>(null);
  const previewButton = useRef<HTMLButtonElement>(null);

  /** States */
  const [focusMode, setPreviewHidden] = useState<boolean>(false);
  const [previewMode, setPreviewMode] = useState<number>(1);
  const [fullScreenMode, setFullScreenMode] = useState<boolean>(false);
  const [reviewRequired, setReviewRequired] = useState(true);
  const [sliderScrolled, setSliderScrolled] = useState(false);

  const createData = (
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) => {
    return { name, calories, fat, carbs, protein };
  };

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9)
  ];

  return (
    // <DefaultLayout>
    <div className={st(classnames(classes.root, classNameProp))}>
      <FinderLayout>
        <div>Side col</div>
        <div>
          <TableContainer>
            <Table className={"hello"} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell header>Dessert (100g serving)</TableCell>
                  <TableCell header align="end">
                    Calories
                  </TableCell>
                  <TableCell header align="end">
                    Fat&nbsp;(g)
                  </TableCell>
                  <TableCell header align="end">
                    Carbs&nbsp;(g)
                  </TableCell>
                  <TableCell header align="end">
                    Protein&nbsp;(g)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.name} className={classes.row}>
                    <TableCell header scope="row">
                      <InputSelection
                        id={row.name}
                        label={`Select ${row.name}`}
                        type="checkbox"
                        variant={1}
                        vol={3}
                        inputPos="start"
                        error="Form item error message"
                        labelVisuallyHidden
                      />
                      {row.name}
                    </TableCell>
                    <TableCell
                      align="end"
                      onClick={() => console.log("hello")}
                      tabIndex={0}
                      role="link"
                    >
                      {row.calories}
                    </TableCell>
                    <TableCell align="end">{row.fat}</TableCell>
                    <TableCell align="end">{row.carbs}</TableCell>
                    <TableCell align="end">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TablePagination
              id="myTable"
              data-testid="basicExample"
              count={48}
              currentPage={0}
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              rowsPerPage={10}
              // SelectProps={{
              //   inputProps: { "aria-label": "rows per page" },
              //   native: true
              // }}
              onPageChange={(e, num) => console.log(e, num, "yaya")}
              onRowsPerPageChange={e => console.log(e)}
              // ActionsComponent={TablePaginationActions}
            />
          </TableContainer>
        </div>
      </FinderLayout>
    </div>
    // </DefaultLayout>
  );
};

export default Finder;
