import Link from 'next/link'
import Nav from '../components/Nav/Nav'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'

import {motion} from 'framer-motion'
import {animations} from '../hooks/animations'

function Pay(){
	return (
		<Nav>
			<Breadcrumbs breadcrumbs={[{name: 'Back', link: '/news'}, {name: 'Basket', link: '/basket'}]}/>
			<div className="pay-content">
				<motion.div className="form-pay"
				initial="hidden"
				animate="visible"
				exit="exit"
				variants={animations.news}
				transition={{duration: 0.5}}>
					<span className="form-header">Please provide us your personal information</span>
					<input type="text" placeholder="Name and surname" className="full-input"/>
					<input type="text" placeholder="Email" className="middle-input"/>
					<input type="text" placeholder="Tel" className="middle-input"/>
					<input type="text" placeholder="Country" className="middle-input"/>
					<input type="text" placeholder="Postal code" className="middle-input"/>
					<input type="text" placeholder="City" className="middle-input"/>
					<input type="text" placeholder="Province" className="middle-input"/>
					<input type="text" placeholder="Address (street, house, apartment)" className="full-input"/>
					<span className="form-header" style={{marginTop: 20, marginBottom: 20}}>Card details</span>
					<input type="text" placeholder="0000 0000 0000 0000" className="full-input"/>
					<input type="text" placeholder="Name and surname of the card holder" className="full-input"/>
					<span className="form-title">Expiration date</span>
					<input type="text" placeholder="Month" className="small-input"/>
					<input type="text" placeholder="Year" className="small-input"/>
					<input type="text" placeholder="CVV code" className="smaller-input"/>
					<div className="accept-form">
						<span className="accept-checkbox"></span>
						<span className="accept-title">I accept all <span>terms of use</span></span>
					</div>
					<Link href='/thanks'>
						<button className="pay-btn">Pay</button>
					</Link>
				</motion.div>
				<motion.div className="total-pay"
				initial="hidden"
				animate="visible"
				exit="exit"
				variants={animations.avatar}
				transition={{duration: 0.5, delay: .2}}>
					<div className="total-title">Total</div>
					<div className="total-price">345,45$</div>
				</motion.div>
			</div>
		</Nav>
	)
}


export default Pay;