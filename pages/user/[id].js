import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function user () {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      <p>
        id: {id}
      </p>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </div>
  )
}
