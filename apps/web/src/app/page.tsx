import { auth } from '@/auth/auth'

export default async function Home() {
  const { user } = await auth()

  console.log(user)

  return <pre>{JSON.stringify(user)}</pre>
}
