import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { BasicTable } from '../components/Table'
import { TextField, Typography, Button } from '@material-ui/core'

const Container = styled.div`
max-width: 1200px;
margin-left: auto;
margin-right: auto;
padding-left: 15px;
padding-right: 15px;
  @media (min-width: 960px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`

const FormBody = styled.div`
  background: #1e87f0;
  color: #fff;
  box-shadow: 0 5px 15px rgb(0 0 0 / 8%);
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

export default function Home() {
  return (
    <>
      <Container>
        <FormBody>
          <Typography>計算の基準となる日付を入力してください。</Typography>
          <div className='contents-margin'>
            <TextField 
              id="outlined-basic"
              className="base-date-input"
              placeholder="20220326"
              variant="outlined"
            />
          </div>
          <Button variant="outlined" className="button-margin">計算実行</Button>
          <Button variant="outlined">新規登録</Button>
        </FormBody>
      </Container>
      <Container>
        <BasicTable/>
      </Container>
    </>
  )
}
