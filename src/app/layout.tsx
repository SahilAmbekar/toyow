import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from '../components/Provider'
import Nav from '../components/Nav'
// import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Toyow',
  description: 'Assignment for Toyow with next.js, typescript and tailwind css',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
        <Provider session={undefined}>
            <div className="main">
                <div className="gradient"></div>
            </div>
            <main className="app">
                <Nav />
                {children}
                {/* <Footer /> */}
            </main>
        </Provider>
    </body>
</html>

  )
}
