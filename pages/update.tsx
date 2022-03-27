import { VFC } from 'react'
import { InputForm } from '../components/InputForm'


const Update: VFC = () => {
  const isEdit = true
  return <InputForm isEdit={isEdit} dateId="日付ID" />
}

export default Update