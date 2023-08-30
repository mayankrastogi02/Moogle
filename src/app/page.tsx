import Image from 'next/image'
import Link from 'next/link'
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { id: string }
  searchParams: { q: string }
}

export async function generateMetadata({ params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: "Moogle",
    description: `Welcome to Moogle!`,
    icons: "/m_yellow.svg"
  };
}

export default function Page() {
  return (
    <main className="overflow-hidden">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="flex items-center justify-center mb-8">
              <Link href="/moogle" >
                <Image
                  src="/m.svg"
                  alt="Moogle"
                  width={200}
                  height={200}
                />
              </Link>
            </div>
            <h1 className="text-5xl font-bold">Hi there 👋</h1>
            <p className="py-6 text-2xl">Welcome to Moogle!</p>
            <Link href="/moogle" className="btn bg-[#F19C00] hover:bg-[#D58A00] text-black">Let&apos;s get started!</Link>
          </div>
        </div>
      </div>
    </main >
  )
}
