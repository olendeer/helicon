import Link from 'next/link'


import {FaDollarSign} from 'react-icons/fa'
import {FaRegCalendar} from 'react-icons/fa'
import {MdCreditCard} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import {TiPlus} from 'react-icons/ti'

import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'

function WorkDescribe({setDescribeIsOpen, setSubmitIsOpen}){
	return (
		<div className="work-describe-wrapper" >
			<motion.div className="work-describe-content"
			initial="hidden"
			animate="visible"
			variants={animations.news}
			transition={{duration: .3}}>
				<div className="close-describe" onClick={() => setDescribeIsOpen(false)}>
					<TiPlus/>
				</div>
				<div className="work-describe-content-body">
					<div className="work-describe-content-body-header">
						Draw a portrait of my wife
					</div>
					<div className="work-describe-content-body-description">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore	
					</div>
					<div className="work-describe-org">
						<div className="work-describe-org-item">
							<FaDollarSign/> Price: negotiable
						</div>
						<div className="work-describe-org-item">
							<FaRegCalendar/> Less than a month
						</div>
					</div>
					<div className="work-describe-project-type">
						Project Type: <span>One-time project</span>
					</div>
					<div className="work-describe-project-questions">
						<div className="work-describe-project-questions-header">You will be asked to answer the following questions when submitting a proposal:</div>
						<div className="work-describe-project-questions-list">
							<div className="work-describe-project-questions-list-item">Approximately how many hours will it take for you to complete the project?</div>
						</div>
					</div>
					<div className="work-describe-skills">
						<div className="work-describe-skills-header">Skills and expertise</div>
						<div className="work-describe-skills-list">
							<div className="work-describe-skills-list-item">
							Painting
							</div>
							<div className="work-describe-skills-list-item">
							Abstract
							</div>
							<div className="work-describe-skills-list-item">
							Portrait
							</div>
						</div>
					</div>
					<div className="work-describe-proposals">
						<div className="work-describe-proposal-item">
							Proposals: less than 5
						</div>
						<div className="work-describe-proposal-item">
							Payments unverified
							<MdCreditCard/>
						</div>
						<div className="work-describe-proposal-item">
							Ukraine
							<MdLocationOn/>
						</div>
					</div>
					<div className="work-describe-recent">
						<div className="work-describe-recent-header">Client's recent history (21)</div>
						<div className="work-describe-recent-list">
							<div className="work-describe-recent-list-item">
								<div className="recent-info">
									<div className="recent-name">To draw an abstract artwork for my living room</div>
									<div className="recent-rating">
										<div className="recent-rating-stars">
											<AiFillStar/>
											<AiFillStar/>
											<AiFillStar/>
											<AiFillStar/>
											<AiFillStar/>
										</div>
										<div className="recent-rating-title">Good work</div>
									</div>
									<div className="recent-artist">
										<div className="recent-artist-title">To artist: Yuliia Dzhumaieva</div>
										<div className="recent-artist-rating">
											<AiFillStar/>
											<AiFillStar/>
											<AiFillStar/>
											<AiFillStar/>
											<AiFillStar/>
										</div>
									</div>
								</div>
								<div className="recent-info-org">
									<div className="recent-info-org-time">Sep 2019 - Nov 2019</div>
									<div className="recent-info-org-price">Fixed-price $205.00</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="work-describe-content-nav">
					<button className="submit-proposal-btn" onClick={() => {
						setDescribeIsOpen(false)
						setSubmitIsOpen(true)	
					}}>SUBMIT A PROPOSAL</button>
					<button className="save-job-btn">SAVE A JOB</button>
					<div className="work-describe-about-client">
						<div className="work-describe-about-client-header">About the client</div>
						<div className="work-describe-about-client-payments">
							Payments unverified
							<MdCreditCard/>
						</div>
						<div className="work-describe-about-client-rating">
							<div className="work-describe-about-client-rating-stars">
								<AiFillStar/>
								<AiFillStar/>
								<AiFillStar/>
								<AiFillStar/>
								<AiFillStar/>
							</div>
							<div className="work-describe-about-client-rating-title">
							4.91 of 10 reviews
							</div>
						</div>
						<div className="work-describe-about-client-chars">
						Israel <br/>
						Haifa 04:33 pm
						</div>
						<div className="work-describe-about-client-chars">
						57 jobs posted  <br/>
						23% hire rate
						</div>
						<div className="work-describe-about-client-chars">
						Member since Mar 4, 2017
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	)
}

export default WorkDescribe;