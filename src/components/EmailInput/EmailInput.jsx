
import './EmailInput.css'
import ButtonBh from '../ButtonBh/ButtonBh'


export default function EmailInput({ hnPlaceholder, hnShowIcon, hnShowIconSmallScreen }) {
  return (
      <div className={`hn-email-input ${hnShowIcon ? 'hn-email-input-block' : 'hn-email-input-flex'}`}>
        <input type='email' placeholder={hnPlaceholder} className={`hn-input ${hnShowIcon ? 'hn-input-block' : 'hn-input-flex'} `} />
        {hnShowIcon && <ButtonBh buttonText={"Subscribe"} buttonClass={"bh-button-one hn-none-button-smallscreen"} showIcon={true} buttonIcon={"../../../public/Images/icons/EnvelopeSimple.svg"} />}
        {!hnShowIcon && <ButtonBh buttonText={"Subscribe"} buttonClass={"bh-button-one hn-none-button-smallscreen"} showIcon={false} />}
        {hnShowIconSmallScreen && <ButtonBh buttonText={"Subscribe"} buttonClass={"bh-button-one hn-block-button-smallscreen"} showIcon={true} buttonIcon={"../../../public/Images/icons/EnvelopeSimple.svg"} />}
        </div>
  
  )
}
