
import './EmailSection.css'
import EmailInput from '../EmailInput/EmailInput'

export default function EmailSection() {
  return (
    <section className='bh-email-section-father'>
      <div className='bh-email-section'>
        <img className='bh-email-section-img' src="./../../../public/Images/Photo.jpg" alt="astronautPhoto" />
        <div className='email-section-body'>
          <div className="af-email-section-text">
          <h3>Join Our Weekly Digest</h3>
          <p className='bh-email-section-p'>Get Exclusive Promotions & Updates Straight To Your Inbox.</p>
          </div>
          <EmailInput hnPlaceholder={"Enter your email here"} hnShowIcon={true} hnShowIconSmallScreen={true}/>
        </div>
      </div>

    </section>
  )
}
