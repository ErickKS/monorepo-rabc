import Image from 'next/image'

import rocketseatIcon from '@/assets/rocketseat-icon.svg'

import { OrganizationSwitcher } from './organization-switcher'
import { ProfileButton } from './profile-button'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src={rocketseatIcon}
          alt="Rocketseat"
          className="size-6 dark:invert"
        />

        <Separator orientation="vertical" />

        <OrganizationSwitcher />
      </div>

      <div className="flex items-center gap-4">
        <ProfileButton />
      </div>
    </div>
  )
}
