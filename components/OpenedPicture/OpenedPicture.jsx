import Comments from '../Comments/Comments'

import {TiPlus} from 'react-icons/ti'
import {MdFavorite} from 'react-icons/md'
import {FaEye} from 'react-icons/fa'

import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'



function OpenedPicture({isOpen, setIsOpen, picture, setIsOpenAddBasket, login, setSingInIsOpen}){

	let comments = [
		{
			img: require('../../public/img/test_avatar.png'),
			name: 'Julia Duo',
			text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna a',
			likes: 41
		},
		{
			img: require('../../public/img/test_avatar.png'),
			name: 'Julia Duo',
			text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna a',
			likes: 41
		},
		{
			img: require('../../public/img/test_avatar.png'),
			name: 'Julia Duo',
			text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna a',
			likes: 41
		}
	]
	return (
		<div className={"opened-picture " + (isOpen ? 'opened-picture-active' : '')}>
			<span className="close-btn" onClick={() => setIsOpen(false)}>
				<TiPlus/>
			</span>
			<div className="picture">
				<motion.img src={picture} alt="" className="picture-image"
				initial="hidden"
				animate="visible"
				variants={animations.menuLink}
				transition={{duration: 0.2}}/>
			</div>
			<motion.div className="opened-picture-information"
			initial="hidden"
			animate="visible"
			variants={animations.feed}
			transition={{duration: 0.2}}>
				<div className="opened-picture-information-header">
					<div className="opened-picture-information-header-top">
						<motion.div className="estimations"
						initial="hidden"
						animate="visible"
						variants={animations.moreBtn}
						transition={{duration: 0.2, delay: .3}}>
							<div className="likes">
								<span className="count">200</span>
								<MdFavorite/>
							</div>
							<div className="views">
								<span className="count">200</span>
								<FaEye/>
							</div>
						</motion.div>
						<motion.div className="owner-picture"
						initial="hidden"
						animate="visible"
						variants={animations.feed}
						transition={{duration: 0.2}}>
							<div className="owner-picture-name">Julia Duo</div>
							<img src={require('../../public/img/test_avatar.png')} alt="" className="owner-picture-avatar"/>
						</motion.div>
					</div>
					<motion.div className="pay-section"
					initial="hidden"
					animate="visible"
					variants={animations.feed}
					transition={{duration: 0.2}}>
						<span className="pay-price">560$</span>
						<button className="buy-btn" onClick={() => {
							if(login){
								setIsOpenAddBasket(true)
							} else {
								setSingInIsOpen(true)
							}
							setIsOpen(false)	
						}}>Buy</button>
					</motion.div>
				</div>
				<motion.div className="opened-picture-description"
				initial="hidden"
				animate="visible"
				variants={animations.feed}
				transition={{duration: 0.2}}>
					<span className="description-header">Lorem, ipsum.</span>
					<p className="description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo blanditiis exercitationem vero non error! Reprehenderit saepe consequatur dicta laboriosam.</p>
				</motion.div>
				<Comments comments={comments} login={login}/>
				{login ? (
					<motion.div className="send-comment"
					initial="hidden"
					animate="visible"
					variants={animations.moreBtn}
					transition={{duration: 0.2, delay: .3}}>
						<img src={require('../../public/img/test_avatar.png')} alt="" className="comment-user-avatar"/>
						<input type="text" className="your-comment" placeholder="Leave a comment..."/>
					</motion.div>
				) : ''}
			</motion.div>
		</div>
	)
}

export default OpenedPicture;