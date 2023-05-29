import React, { ReactNode } from 'react'
import LoginUrlSetLayout from '@/components/layouts/LoginUrlSetLayout';
import LoginInput from '@/components/pages/login/LoginInput';

export default function Login() {
  
  return (
    <main>
      <LoginInput />
    </main>
  )
}

Login.getLayout = function getLayout(page: ReactNode) {
  return (
    <LoginUrlSetLayout title='LOGIN'>
      {page}
    </LoginUrlSetLayout>
  )
}