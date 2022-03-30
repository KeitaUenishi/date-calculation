import { useContext, VFC } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core'
import { useQuery, useMutation } from '@apollo/client'
import { GET_DATEFORMULAS } from '../queries/queries'
import { GetDateFormulasQuery } from '../types/generated/graphql'

import { DateStringContext } from "../pages";

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
  const { data, error } = useQuery<GetDateFormulasQuery>(GET_DATEFORMULAS, {
    fetchPolicy: 'cache-and-network',
  })
  const dateString = useContext(DateStringContext)
  console.log(dateString)

  // TODO: 文字列→日付型、計算と表示
  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell align="center">日付ID</TableCell>
            <TableCell align="center">日付名</TableCell>
            <TableCell align="center">計算結果</TableCell>
            <TableCell align="center">計算式（年月日）</TableCell>
            <TableCell align="center">編集</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.date_calculation_dateformula.map((row, index) => (
            <TableRow key={index + 1}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="center">{row.dateId}</TableCell>
              <TableCell align="center">{row.dateName}</TableCell>
              <TableCell align="center">計算結果</TableCell>
              <TableCell align="center">{row.adjustmentYear} / {row.adjustmentMonth} / {row.adjustmentDay}</TableCell>
              <TableCell align="center">
              <Link href={{ pathname: "/update", query: row }} passHref>
                <Button variant="outlined">更新</Button>
              </Link>
                <Button variant="outlined">削除</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}