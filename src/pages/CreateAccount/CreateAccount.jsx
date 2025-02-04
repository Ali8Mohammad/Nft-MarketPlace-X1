import React from 'react'
import './CreateAccount.css'
import ConnectCreateAccount from '../../components/ConnectCreateAccount/ConnectCreateAccount'

export default function CreateAccount() {
  return (
    <>
      <ConnectCreateAccount
      img='/public/Images/createaccount.jpg'
      title='Create Account'
      text='Welcome! enter your details and start creating, collecting and selling NFTs.'
      creatYs='true'
      />
    </>
  )
}
