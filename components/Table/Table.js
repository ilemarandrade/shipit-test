import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function AcccessibleTable({ data, valuesHead, title, classProps = "" }) {
  const classes = useStyles();
  const valueHead = valuesHead.map((e, i) => {
    return (
      <TableCell key={i} align="left" style={{ color: "white" }}>
        {e}
      </TableCell>
    );
  });
  return (
    <div className="px-14 pt-14">
      <section className="mb-2 text-indigo-900 font-semibold">{title}</section>
      <TableContainer component={Paper}>
        <Table className={`${classes.table} ${classProps}`} aria-label="caption table">
          <TableHead className="" style={{ background: "#00c5e2" }}>
            <TableRow>{valueHead}</TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.name}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="left">{item.days}</TableCell>
                <TableCell align="left">{item.volumetric_weight}</TableCell>
                <TableCell align="left">{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
