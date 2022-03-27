import { VFC, useState, FormEvent } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { TextField, Typography, Button } from '@material-ui/core'
import { GetDateFormulasQuery } from '../types/generated/graphql'

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

const Form = styled.div`
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
  isEdit?: boolean
  data?: {
    dateId?: string | null;
    dateName?: string | null;
    adjustmentDay?: number | null;
    adjustmentMonth?: number | null;
    adjustmentYear?: number | null;
  }
}

export const InputForm: VFC<Props> = ({isEdit, data}) => {
  return (
    <Container>
      <Form>
        {isEdit ? (
          <>
            <div className='contents-margin'>
              <Typography>日付ID</Typography>
              <TextField 
                id="outlined-basic"
                className="base-date-input"
                value={data.dateId}
                variant="outlined"
                disabled
              />
            </div>
            <div className='contents-margin'>
            <Typography>日付名</Typography>
            <TextField 
              id="outlined-basic"
              className="base-date-input"
              value={data.dateName}
              variant="outlined"
            />
            </div>
            <div className='contents-margin'>
              <Typography>加減値（年）</Typography>
              <TextField 
                id="outlined-basic"
                className="base-date-input"
                value={data.adjustmentYear}
                variant="outlined"
              />
            </div>
            <div className='contents-margin'>
              <Typography>加減値（月）</Typography>
              <TextField 
                id="outlined-basic"
                className="base-date-input"
                value={data.adjustmentMonth}
                variant="outlined"
              />
            </div>
            <div className='contents-margin'>
              <Typography>加減値（日）</Typography>
              <TextField 
                id="outlined-basic"
                className="base-date-input"
                value={data.adjustmentDay}
                variant="outlined"
              />
            </div>
            <Button variant="outlined" className="button-margin">更新</Button>
          </>
        ) : (
          <>
            <div className='contents-margin'>
              <Typography>日付ID</Typography>
              <TextField 
                id="outlined-basic"
                className="base-date-input"
                variant="outlined"
              />
            </div>
            <div className='contents-margin'>
            <Typography>日付名</Typography>
            <TextField 
              id="outlined-basic"
              className="base-date-input"
              variant="outlined"
            />
            </div>
            <div className='contents-margin'>
              <Typography>加減値（年）</Typography>
              <TextField 
                id="outlined-basic"
                className="base-date-input"
                type="number"
                variant="outlined"
              />
            </div>
            <div className='contents-margin'>
              <Typography>加減値（月）</Typography>
              <TextField 
                id="outlined-basic"
                type="number"
                className="base-date-input"
                variant="outlined"
              />
            </div>
            <div className='contents-margin'>
              <Typography>加減値（日）</Typography>
              <TextField 
                id="outlined-basic"
                type="number"
                className="base-date-input"
                variant="outlined"
              />
            </div>
            <Button variant="outlined" className="button-margin">登録</Button>
          </>
        )}
        <Link href="/" passHref>
          <Button variant="outlined">戻る</Button>
        </Link>
      </Form>
    </Container>
  )
}