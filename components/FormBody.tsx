import { VFC, useState } from "react"
import Link from 'next/link'
import styled from 'styled-components'
import { TextField, Typography, Button } from '@material-ui/core'

const Container = styled.div`
  background: #1e87f0;
  color: #fff;
  box-shadow: 0 5px 15px rgb(0 0 0 / 8%);
  border-radius: 6px;
  @media (min-width: 1200px) {
    padding: 40px 40px;
  }
  & .contents-margin {
    margin-top: 20px;
    margin-bottom: 20px;
    & .base-date-input {
      max-width: 100%;
      width: 100%;
      border: 1px solid #e5e5e5;
      background: #fff;
    }
  }
  & .button-margin {
    margin-right: 3px;
  }
`
type Props = {
  changeState: any
}

export const FormBody: VFC<Props> = ( { changeState } ) => {
  const [calculateDate, setCalculateDate] = useState('')
  const getNowYMDStr = () => {
    const date = new Date()
    const Y = date.getFullYear()
    const M = ("00" + (date.getMonth()+1)).slice(-2)
    const D = ("00" + date.getDate()).slice(-2)
    return Y + M + D
  }

  const onSubmit = () => {
    changeState(calculateDate)
  }

  return (
    <Container>
      <Typography>計算の基準となる日付を入力してください。</Typography>
      <div className='contents-margin'>
        <TextField 
          id="outlined-basic"
          className="base-date-input"
          placeholder={getNowYMDStr()}
          variant="outlined"
          value={calculateDate}
          onChangeCapture={(e) => 
            setCalculateDate((e.target as HTMLTextAreaElement).value)}
        />
      </div>
      <Button variant="outlined" className="button-margin" onClick={() => {onSubmit()}}>計算実行</Button>
      <Link href="/register" passHref>
        <Button variant="outlined">新規登録</Button>
      </Link>
    </Container>
  )
}