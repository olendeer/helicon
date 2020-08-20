import Nav from '../components/Nav/Nav'
import {FaCheck} from 'react-icons/fa'
function Verify() {
	return (
		<Nav>	
			<div className="verify-content">
				<div className="verify-content-info">
					<div className="verify-content-info-header">
					Verify your email to proceed
					</div>
					<p className="verify-content-info-text">
						We just sent an email to the address <br/> <span>ui@gmail.com</span>
						<br/>
						<br/>
						Please check our email and click on the link provided to verify your address.
					</p>
					<div className="check-email">
						<div className="checkbox-email">
							<FaCheck/>
						</div>
						<div className="check-email-label">
							Change your email
						</div>
					</div>
					<button className="resend-email">Resend</button>
				</div>
				<img src="img/other/verify.svg" alt="" className="verify-content-image"/>
			</div>
		</Nav>
	)
}

export default Verify;