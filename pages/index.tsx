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

export default function Home() {
  return (
    <>
      <Container>
        <FormBody />
        <BasicTable/>
      </Container>
    </>
  )
}
