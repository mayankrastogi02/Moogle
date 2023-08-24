import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="overflow-hidden">
      <div className="flex min-h-screen items-center justify-center">
        <Link href="/moogle" className='rounded-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          <Image
            src="/m.svg"
            alt="Moogle"
            width={200}
            height={200}
          />
        </Link>
      </div>
    </main >
  )
}
