import { useState } from "react";

import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'

import {animations} from '../../hooks/animations'
import { motion } from 'framer-motion';

function SingIn({setSingInIsOpen}){
	let [activeBtn, setActiveBtn] = useState(1)
	let [stay, setStay] = useState(false)
	let [send, setSend] = useState(false)

	const closeSingIn = (event) => {
		if(event.target.classList.contains('sing-in-wrapper')){
			setSingInIsOpen(false)
		}
	}
	return ( 
		<div className="sing-in-wrapper" onClick={event => closeSingIn(event)}>
			<motion.div className="sing-in-content"
			initial="hidden"
			animate="visible"
			variants={animations.news}
			transition={{duration: 0.3}}>
				<div className="sing-in-content-header">
					<button className={"sing-in-btn " + (activeBtn === 0 ? 'sing-in-btn-active' : '')} onClick={() => setActiveBtn(0)}>Sing in</button>
					<button className={"sing-in-btn " + (activeBtn === 1 ? 'sing-in-btn-active' : '')} onClick={() => setActiveBtn(1)}>Registration</button>
					<div className={"sing-in-active-line " + (activeBtn === 1 ? 'sing-in-active-line-registration' : '')}></div>
				</div>
				<div className="sing-in-inputs">
					<motion.input type="text" name="email" className="sing-in-input" placeholder="Email address"
					initial="hidden"
					animate="visible"
					variants={animations.avatar}
					transition={{duration: 0.1}}/>
					<motion.input type="text" name="password" className="sing-in-input" placeholder="Password"
					initial="hidden"
					animate="visible"
					variants={animations.avatar}
					transition={{duration: 0.1, delay: .1}}/>
					{activeBtn === 1 ? (
						<>
							<motion.input type="text" name="name" className="sing-in-input" placeholder="Your name"
							initial="hidden"
							animate="visible"
							variants={animations.avatar}
							transition={{duration: 0.1, delay: .3}}/>
							<motion.div className="sing-check-box-wrap"
							initial="hidden"
							animate="visible"
							variants={animations.avatar}
							transition={{duration: 0.1, delay: .1}}>
								<div className="sing-in-checkbox" onClick={() => setSend(!send)}>
									<span className={"checkbox " + (send ? 'checkbox-active' : '')}></span>
									<span className="checkbox-title">Yes! send me exclusive offers and cool ideas for gifts!</span>
								</div>
							</motion.div>
						</>
					) : (
						<motion.div className="sing-check-box-wrap"
						initial="hidden"
						animate="visible"
						variants={animations.avatar}
						transition={{duration: 0.1, delay: .1}}>
							<div className="sing-in-checkbox" onClick={() => setStay(!stay)}>
								<span className={"checkbox " + (stay ? 'checkbox-active' : '') }></span>
								<span className="checkbox-title">Stay signed in</span>
							</div>
							<span className="forgot">Forgot your password?</span>
						</motion.div>
					)}
				</div>
				<motion.button className="sing-in-send-btn"
				initial="hidden"
				animate="visible"
				variants={animations.news}
				transition={{duration: 0.1, delay: .1}}>Sing in</motion.button>
				<span className="or">OR</span>
				<motion.button className="continue-social-btn"
				initial="hidden"
				animate="visible"
				variants={animations.news}
				transition={{duration: 0.2, delay: .2}}><FcGoogle/> Continue with Google</motion.button>
				<motion.button className="continue-social-btn facebook-login"
				initial="hidden"
				animate="visible"
				variants={animations.news}
				transition={{duration: 0.3, delay: .3}}><AiFillFacebook/> Continue with Facebook</motion.button>
			</motion.div>
		</div>
	)
}

export default SingIn;