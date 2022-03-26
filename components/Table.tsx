import { ReactNode, VFC } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    marginTop: '30px'
  },
  table: {
    minWidth: 650,
  },
});

function createData(
  no: number,
  dateId: string,
  dateName: string,
  result: string,
  formula: string,
) {
  return { no, dateId, dateName, result, formula };
}

const rows = [
  createData(1, "あいでぃー", "翌月末", "20181231", "0/1/99"),
];

export const BasicTable: VFC = () => {
  const classes = useStyles();
  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell align="center">日付ID</TableCell>
            <TableCell align="center">日付名</TableCell>
            <TableCell align="center">計算結果</TableCell>
            <TableCell align="center">計算式（年月費）</TableCell>
            <TableCell align="center">編集</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.no}>
              <TableCell component="th" scope="row">
                {row.no}
              </TableCell>
              <TableCell align="center">{row.dateId}</TableCell>
              <TableCell align="center">{row.dateName}</TableCell>
              <TableCell align="center">{row.result}</TableCell>
              <TableCell align="center">{row.formula}</TableCell>
              <TableCell align="center">
                <Button variant="outlined">更新</Button>
                <Button variant="outlined">削除</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}