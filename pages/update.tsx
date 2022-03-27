import { VFC } from 'react'
import { InputForm } from '../components/InputForm'
import { useRouter } from 'next/router'


const Update: VFC = () => {
  const router = useRouter()
  const isEdit = true
  return <InputForm isEdit={isEdit} data={router.query} />
}

export default Update