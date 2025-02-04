
import './ConnectCreateAccount.css'
export default function ConnectCreateAccount({img,title,text,creatYs}) {
  return (
    <div className= 'sec-connect-creat-ys' >
      <img className='img-connect-creat-ys' src={img} ></img>
      <div className='right-div-connect-creat-ys'>
        <div className='text-sec-connect-creat-ys'>
          <h2 className='text-h2-sec-connect-creat-ys'>{title}</h2>
          <p className='text-p-sec-connect-creat-ys'>{text}</p>
        </div>
        <div className= { creatYs ? 'my-div2-connect-creat-ys' : 'my-div2-connect-creat-ys-none'}>
          <div className='div2-connect-creat-ys'>
           <div className='my-div-icon-input-connect-creat-ys'> 
             <img className='my-icon-input-connect-creat-ys' src='../../../public/Images/icons2/User.svg'></img>
             <input className='div-input-connect-creat-ys' placeholder='Username'></input>
            </div>
           <div className='my-div-icon-input-connect-creat-ys'> 
            <img className='my-icon-input-connect-creat-ys' src='../../../public/Images/icons2/EnvelopeSimple.svg'></img>
            <input className='div-input-connect-creat-ys' placeholder='Email Address'></input></div>
           <div className='my-div-icon-input-connect-creat-ys'>
            <img className='my-icon-input-connect-creat-ys' src='../../../public/Images/icons2/myLockKey.svg'></img>
            <input className='div-input-connect-creat-ys' placeholder='Password'></input></div>
           <div className='my-div-icon-input-connect-creat-ys'>
            <img className='my-icon-input-connect-creat-ys' src='../../../public/Images/icons2/LockKey.svg'></img>
            <input className='div-input-connect-creat-ys' placeholder='Confirm Password'></input></div>
          </div >
          <button className='my-btn-connect-creat-ys'>Create account</button>
        </div>
        <div className={ creatYs ? 'my-div2-connect-creat-ys-none' : 'my-div2-creat-ys'}>
           <div className='my-creat-img-des-ys'>
            <img className='my-creat-img-des-ys-img' src='./../../../public/Images/myicones/Metamask.svg'></img>
            <h5 className='my-creat-img-des-ys-h5'>Metamask</h5>
           </div>
           <div className='my-creat-img-des-ys'>
             <img  className='my-creat-img-des-ys-img' src='./../../../public/Images/myicones/WalletConnect.svg'></img>
             <h5 className='my-creat-img-des-ys-h5'>Wallet Connect</h5>
           </div> 
           <div className='my-creat-img-des-ys'>
             <img  className='my-creat-img-des-ys-img' src='./../../../public/Images/myicones/Coinbase.svg'></img>
             <h5 className='my-creat-img-des-ys-h5'>Coinbase</h5>
          </div>         
        </div>
      </div>
    </div>
  )
}
