import {BsThreeDots} from 'react-icons/bs'
import { useState } from 'react';
import {TiPlus} from 'react-icons/ti'

import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'

function Storys({isOpen, setIsOpen}){
	let [storyMenu, setStoryMenu] = useState(false)
	return (
		<section className={"story " + (isOpen ? 'story-active' : '')}>
			<div className="story-close" onClick={() => setIsOpen(false)}>
				<TiPlus/>
			</div>
			<motion.div className="story-content"
			initial="hidden"
			animate="visible"
			variants={animations.feed}
			transition={{duration: 0.3, delay: .2}}>
				<div className="story-content-user">

				</div>
				<motion.div className="story-content-header"
				initial="hidden"
				animate="visible"
				variants={animations.menuLink}
				transition={{duration: 0.3, delay: .2}}>
					<img src="" alt="" className="story-content-header-avatar"/>
					<span className="story-content-header-owner">Uuliia</span>
					<span className="story-content-header-time">19h</span>
				</motion.div>
				<motion.div className="story-content-send-message"
				initial="hidden"
				animate="visible"
				variants={animations.feed}
				transition={{duration: 0.3, delay: .4}}>
					<input type="text" className="story-content-send-message-input" placeholder="send a message"/>
					<button className="story-content-send-message-menu-btn" onClick={() => setStoryMenu(true)}>
						<BsThreeDots/>
					</button>
				</motion.div>
				<div className={"story-content-menu " + (storyMenu ? 'story-content-menu-active' : '')}>
					<div className="story-content-menu-buttons">
						<button>Complain</button>
						<button>Copy the link</button>
					</div>
					<button className="story-content-menu-button-cancel" onClick={() => setStoryMenu(false)}>Cancel</button>
				</div>
			</motion.div>
		</section>
	)
}

export default Storys;
