import React from 'react'
import Header from '../../components/header/header';
import UserForm from '../../components/firebase/userForm';
import Footer from '../../components/footer/footer';
import './ContactUs.css';


export const Firebase = () => {
  return (
    <>
    <Header />
    <div className='space'></div>
    <UserForm />
    <div className='space'></div>
    <Footer />
    </>
  )
}

export default Firebase;