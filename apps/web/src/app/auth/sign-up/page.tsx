import Image from 'next/image'
import Link from 'next/link'

import GithubIcon from '@/assets/github-icon.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export default function SignUpPage() {
  return (
    <form className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" name="email" type="email" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password_confirmation">Confirm your password</Label>
        <Input
          id="password_confirmation"
          name="password"
          type="password_confirmation"
        />
      </div>

      <Button type="submit" className="w-full">
        Create account
      </Button>

      <Button variant={'link'} className="w-full" size={'sm'} asChild>
        <Link href="/auth/sign-in">Already registered? Sign in</Link>
      </Button>

      <Separator />

      <Button type="submit" className="w-full" variant={'outline'}>
        <Image src={GithubIcon} alt="" className="mr-2 size-4 dark:invert" />
        Sign up with GitHub?
      </Button>
    </form>
  )
}
