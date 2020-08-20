import {useState} from 'react'

import Nav from '../components/Nav/Nav'
import Offer from '../components/Offer/Offer'

import {motion} from 'framer-motion'
import {animations} from '../hooks/animations'

import {FaSearch} from 'react-icons/fa'
import {GrImage} from 'react-icons/gr'

function MessagesPage({messages}){
	let [isOpenOffer, setIsOpenOffer] = useState(false)
	return (
		<Nav>
			<div className="message-content-wrapper">
				<motion.div className="header-news"
				initial="hidden"
				animate="visible"
				variants={animations.breadcrumbs}
				transition={{duration: 0.3}}>
					Messages
				</motion.div>
				<motion.div className="messages-content"
				initial="hidden"
				animate="visible"
				variants={animations.news}
				transition={{duration: 0.3}}>
					<div className="message-chating">
						<div className="message-chating-header"
						initial="hidden"
						animate="visible"
						variants={animations.menuLink}
						transition={{duration: 0.3}}>
							<div className="message-chating-interlocutor">
								<img src={require('../public/img/test_avatar.png')} alt="" className="interlocutor-avatar"/>
								<div className="interlocutor-info">
									<div className="interlocutor-name">
										William Easterly
									</div>
									<div className="interlocutor-visited">
										last seen 13 min ago
									</div>
								</div>
							</div>
						</div>
						<div className="messages-area">

						</div>
						<div className="messages-send">
							<GrImage/>
							<input type="text" className="messages-send-input" placeholder="Type a message..."/>
							<div className="create-an-offer" onClick={() => setIsOpenOffer(true)}>
								Create an offer
							</div>
						</div>
					</div>
					<div className="message-all">
						<div className="message-all-header">Chats</div>
						<div className="message-all-search">
							<FaSearch/>
							<input type="text" placeholder="Search in chats"/>
						</div>
						<div className="message-all-list">
							{messages.map((message, index) => {
								return (
									<div className="messages-list-item" key={index}>
										<img src={message.avatar} alt="" className="message-owner-avatar"/>
										<div className="message-info">
											<div className="message-owner-name">{message.name}</div>
											<div className="message-owner-text">{message.text}</div>
										</div>
										<div className="message-time">
											&nbsp; &middot;	&nbsp; {message.time}
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</motion.div>
			</div>
			{isOpenOffer ? (
				<Offer setIsOpenOffer={setIsOpenOffer}/>
			) : ''}
		</Nav>
	)
}

export async function getServerSideProps(){
	return {
		props: {
			messages : [
				{
					avatar: require('../public/img/test_avatar.png'),
					name: 'Carlo Bruno',
					text: 'Sent you a picture',
					time: '12 min ago'
				},
				{
					avatar: require('../public/img/test_avatar.png'),
					name: 'Carlo Bruno',
					text: 'Sent you a picture',
					time: '12 min ago'
				},
				{
					avatar: require('../public/img/test_avatar.png'),
					name: 'Carlo Bruno',
					text: 'Sent you a picture',
					time: '12 min ago'
				},
				{
					avatar: require('../public/img/test_avatar.png'),
					name: 'Carlo Bruno',
					text: 'Sent you a picture',
					time: '12 min ago'
				},
				{
					avatar: require('../public/img/test_avatar.png'),
					name: 'Carlo Bruno',
					text: 'Sent you a picture',
					time: '12 min ago'
				}
			]
		}
	}
}

export default MessagesPage;