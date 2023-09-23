import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='text-3xl w-max bg-red-400'>
        Dashboard Page(Protected)
        <UserButton afterSignOutUrl='/'/>
    </div>
  )
}
