import Navbar from '../components/Navbar'
import './globals.css'


export const metadata = {
  title: "오사카공립대학 한국인유학생회",  
  description: "오사카공립대학 한국인유학생회 홈페이지입니다",};

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

