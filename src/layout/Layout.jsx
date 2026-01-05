import Header from '@/components/Header'
import PageTransition from '@/components/PageTransition'
import StairTransition from '@/components/StairTransition'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Toaster } from "@/components/ui/sonner"

const Layout = () => {
  return (
    <>
      <Header />
      <StairTransition />
      <PageTransition>
        <Outlet />
      </PageTransition>
      |<Toaster/>
    </>
  )
}

export default Layout