import { Header } from '@/shared/Header'
import { Outlet, useLocation } from 'react-router-dom'

import React from 'react'
import Footer from '@/shared/Footer'

const Common: React.FC = () => {
  const location = useLocation()
  console.log(location.pathname)

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 text-gray-900">
      <Header isShow>
        <Header.Title>안녕</Header.Title>
        <Header.BtnList>
          <Header.Btn url="/modal">모달 테스트</Header.Btn>
          <Header.Btn url="/">뒤로가기</Header.Btn>
        </Header.BtnList>
      </Header>

      <main className="container mx-auto flex-grow p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Common
