
import Nav from '../components/Nav/Nav'

import {motion} from 'framer-motion'
import {animations} from '../hooks/animations'

function Thanks({payData}){
	return (
		<Nav>
			<div className="thanks-content">
				<motion.div className="thanks-info"
				initial="hidden"
				animate="visible"
				variants={animations.news}
				transition={{duration: 0.3}}>
					<img src={require('../public/img/other/thanks.svg')} className="thanks-image"/>
					<div className="thanks-text">
						<h2 className="thanks-ordering">Thank you for ordering in Helicon ! :)</h2>
						<p className="thanks-all-text">Order details were sent to your email address <span>dzhumaievayuliia@gmail.com</span></p>
						<span className="change-email">Change the email</span>
						<p className="informated">
							After <span>Julia Duo</span> send the parcel you will be informed
						</p>
						<p className="informated">
							If the the seller doesn't confirm, money will be refunded
						</p>
					</div>
				</motion.div>
				<motion.div className="purchased"
				initial="hidden"
				animate="visible"
				variants={animations.avatar}
				transition={{duration: 0.2}}>
					{payData.map((item, index) => {
						return (
							<div className="purchased-item" index={index}>
								<img src={item.art} alt=""/>
								<div className="purchased-art-info">
									<span className="purchased-art-info-name">{item.artName}</span>
									<div className="owner-info">
										<div className="art-owner-name">{item.ownerName}</div>
										<img src={item.ownerAvatar} alt="" className="art-owner-avatar"/>
									</div>
								</div>
							</div>
						)
					})}
				</motion.div>
			</div>
		</Nav>
	)
}

export async function getServerSideProps(){
	return {
		props: {
			payData:[
				{
					art: require('../public/img/arts/art1.png'),
					artName: 'Mona Liza',
					ownerName: 'Julia Duo',
					ownerAvatar: require('../public/img/test_avatar.png')
				}
			]
		}
	}
}

export default Thanks;