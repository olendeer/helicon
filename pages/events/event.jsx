
import Nav from '../../components/Nav/Nav'
import BreadCrumbs from '../../components/Breadcrumbs/Breadcrumbs'

import {BsFillPeopleFill} from 'react-icons/bs'
import {AiFillClockCircle} from 'react-icons/ai'
import {MdFavorite} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import EmailIcon from '@material-ui/icons/Email';

import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'

function EventPage() {
	return (
		<Nav>
			<BreadCrumbs breadcrumbs={[{name: 'Events', link: '/events'}]}/>
			<div className="event-content">
		 		<motion.div className="event-preview"
				initial="hidden"
				animate="visible"
				variants={animations.feed}
				transition={{duration: 0.1}}>
					<div className="event-preview-header">
		 				<motion.img src={require('../../public/img/arts/art3.png')} alt="" className="event-preview-image"
						 initial="hidden"
						 animate="visible"
						 variants={animations.avatar}
						 transition={{duration: 0.2}}/>
		 				<motion.div className="event-calendar"
						 initial="hidden"
						 animate="visible"
						 variants={animations.menuLink}
						 transition={{duration: 0.2}}>
							<div className="event-calendar-header"></div>
							<div className="event-calendar-body">23</div>
						</motion.div>
	 				</div>
					<motion.div className="event-preview-info"
					initial="hidden"
					animate="visible"
					variants={animations.feed}
					transition={{duration: 0.2, delay: .3}}>
						<div className="event-preview-info-description">
							<div className="event-preview-info-date">Today from 23:00 til 23:55</div>
		 					<div className="event-preview-info-text">Warsaw night racing: illegal night</div>
		 					<div className="event-preview-info-location">Warsaw</div>
		 				</div>
		 				<div className="event-preview-btns">
		 					<div className="interested-btn">
		 						<MdFavorite/>
		 						Interested
		 					</div>
							<div className="invite-btn">
								<EmailIcon/>
		 						Invite
		 					</div>
		 				</div>
		 			</motion.div>
		 		</motion.div>
		 		<motion.div className="detailed-information"
				 initial="hidden"
				 animate="visible"
				 variants={animations.feed}
				 transition={{duration: 0.2, delay: .4}}>
		 			<div className="detailed-information-header">Detailed information</div>
		 			<div className="all-detailed-information">
		 				<div className="detailed-information-item">
		 					<BsFillPeopleFill/> Answered 6,6 thousands people
		 				</div>
		 				<div className="detailed-information-item">
		 					<AiFillClockCircle/> Today from 20:00 till 23:55
		 				</div>
		 				<div className="detailed-information-item">
		 					<MdLocationOn/> Warsaw
		 				</div>
		 			</div>
		 			<div className="detailed-description">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
		 			</div>
		 		</motion.div>
		 		<motion.div className="event-map"
				 initial="hidden"
				 animate="visible"
				 variants={animations.feed}
				 transition={{duration: 0.2, delay: .4}}>
		 			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19562.708509125056!2d20.99156010720338!3d52.20089467242804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecccdbb4a7f3b%3A0x176f19819a2fb9c6!2sCentralny%20Szpital%20Kliniczny%20MSWiA%20w%20Warszawie!5e0!3m2!1sru!2sua!4v1595003081216!5m2!1sru!2sua" width="100%" height="300" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
		 			<div className="event-map-description">
		 				<div className="event-city">Warsaw</div>
		 				<div className="event-organizer">
		 					<span>Organizer:</span>
							<div className="event-owner">
								<div className="event-owner-name">Yuliia Dzhumaieva</div>
								<img src={require('../../public/img/test_avatar.png')} alt="" className="event-owner-avatar"/>
		 					</div>
		 				</div>
		 			</div>
		 		</motion.div>
			</div>
		</Nav>
	)
}

export default EventPage;