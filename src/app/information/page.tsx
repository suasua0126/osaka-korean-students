export default function Information() {
  return (
    <div className="max-w-xl mx-auto py-16 px-4">
      <h1 className="text-2xl font-bold mb-8">Information</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <a href="https://www.instagram.com/your_unistudents" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 border rounded-xl shadow hover:bg-blue-50 transition">
          <img src="/instagram-icon.png" alt="Instagram" className="w-16 h-16 mb-4" />
          <div className="font-semibold text-lg mb-2">수험생/신입생을 위한 정보</div>
          <div className="text-gray-600 text-sm">인스타그램에서 최신 입학, 생활 정보 확인</div>
        </a>
        <a href="https://your-blog.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 border rounded-xl shadow hover:bg-blue-50 transition">
          <img src="/blog-icon.png" alt="Blog" className="w-16 h-16 mb-4" />
          <div className="font-semibold text-lg mb-2">재학생을 위한 정보</div>
          <div className="text-gray-600 text-sm">블로그에서 재학생 대상 정보 확인</div>
        </a>
      </div>
    </div>
  )
}
