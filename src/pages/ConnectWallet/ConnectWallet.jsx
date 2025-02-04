import React from 'react'
import './ConnectWallet.css'
import ConnectCreateAccount from '../../components/ConnectCreateAccount/ConnectCreateAccount'


export default function ConnectWallet() {
  return (
    <>
        <ConnectCreateAccount
        img='/public/Images/Wallet.jpg'
        title='Connect Wallet'
        text='Choose a wallet you want to connect. There are several wallet providers.'
        creatYs='false'
        />
    </>
  )
}
