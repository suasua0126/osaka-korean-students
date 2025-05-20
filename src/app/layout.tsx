import Navbar from '../components/Navbar'
import '../globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-white">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  )
}
