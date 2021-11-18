import { getSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Login from '../../components/Login/Login'

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace('/admin/')
      } else {
        setIsLoading(false)
      }
    })
  }, [router])

  if (isLoading) return <p>Loading...</p>
  return (
    <div>
      <Login />
    </div>
  )
}

export default LoginPage
