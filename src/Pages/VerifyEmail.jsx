
import EmailIcon from "../assets/email-pic.png"


function VerifyEmail() {
  return (
    <div className="email-div">
      <img src={EmailIcon} className="email-pic" alt="envelope illustration" />
      <h3 className="email-header">Verify your email address</h3>
      <p className="email-subheader">To confirm your email address, <span className="email-stress">please click on the link</span> in the email we&apos;ve sent you</p>
    </div>
  )
}

export default VerifyEmail