import React, { useState, createContext } from 'react';
import styled from 'styled-components'
import { BasicTable } from '../components/Table'
import { FormBody } from '../components/FormBody'

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

const currentUserContext = React.createContext<string | undefined>(undefined);

export const DateStringContext = createContext(currentUserContext);

export default function Home() {
  const [calculateDate, setCalculateDate] = useState<any>('')
  const changeState = (dateString) => {
    setCalculateDate(dateString)
  }
  return (
    <>
      <Container>
        <DateStringContext.Provider value={calculateDate}>
          <FormBody changeState={changeState}/>
          <BasicTable/>
        </DateStringContext.Provider>
      </Container>
    </>
  )
}
