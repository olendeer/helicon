
import {motion} from 'framer-motion'
import {animations} from '../../../../hooks/animations'

import {FaPlus} from 'react-icons/fa'
import {FiEdit2} from 'react-icons/fi'

function Review({updateSteps}) {
	return (
		<React.Fragment>
			<motion.div className="postajob-content-item"
			initial="hidden"
			animate="visible"
			variants={animations.news}
			transition={{duration: .2}}>
				<div className="postajob-content-item-header">
					<div className="postajob-content-item-step-name">Review and post</div>
					<div className="postajob-content-item-step-count">Step 6 of 6</div>
				</div>
				<div className="review-header">Title</div>
				<div className="review-item">
					<div className="review-item-header">Title</div>
					<div className="review-item-value">INTERIOR</div>
				</div>
				<div className="review-item">
					<div className="review-item-header">Job category</div>
					<div className="review-item-value">Interior design</div>
				</div>
				<div className="review-edit" onClick={() => updateSteps(0)}>
					<FiEdit2 />
				</div>
			</motion.div>
			<motion.div className="postajob-content-item"
			initial="hidden"
			animate="visible"
			variants={animations.news}
			transition={{duration: .2, delay: .1}}>
				<div className="review-header">Description</div>
				<div className="review-item">
					<div className="review-item-header">Description</div>
					<div className="review-item-value">Make a design of a bath, kitchen and work in autocad</div>
				</div>
				<div className="review-edit" onClick={() => updateSteps(1)}>
					<FiEdit2 />
				</div>
			</motion.div>
			<motion.div className="postajob-content-item"
			initial="hidden"
			animate="visible"
			variants={animations.news}
			transition={{duration: .2, delay: .2}}>
				<div className="review-header">Details</div>
				<div className="review-item">
					<div className="review-item-header">Type of Project</div>
					<div className="review-item-value">Ona-time project</div>
				</div>
				<div className="review-item">
					<div className="review-item-header">Require cover letter</div>
					<div className="review-item-value">Yes</div>
				</div>
				<div className="review-edit" onClick={() => updateSteps(2)}>
					<FiEdit2/>
				</div>
			</motion.div>
			<motion.div className="postajob-content-item"
			initial="hidden"
			animate="visible"
			variants={animations.news}
			transition={{duration: .2, delay: .3}}>
				<div className="review-header">Expertise</div>
				<div className="review-item">
					<div className="review-item-header">Required Skills</div>
					<div className="review-item-marks">
						<div className="review-item-mark">
							<span>Sense of color</span>
							<FaPlus/>
						</div>
					</div>
				</div>
				<div className="review-edit" onClick={() => updateSteps(3)}>
					<FiEdit2 />
				</div>
			</motion.div>
			<div className="postajob-content-item">
				<div className="review-header">Budget</div>
				<div className="review-item-group">
					<div className="review-item">
						<div className="review-item-header">Hourly or Fixed-Price</div>
						<div className="review-item-value">Pay by the hour</div>
					</div>
					<div className="review-item">
						<div className="review-item-header">Hourly</div>
						<div className="review-item-value">$11.00 - $20.00</div>
					</div>
				</div>
				<div className="review-item">
					<div className="review-item-header">Project duration</div>
					<div className="review-item-value">More than 6 months</div>
				</div>
				<div className="review-edit" onClick={() => updateSteps(4)}>
					<FiEdit2/>
				</div>
			</div>
			<button className="postajob-btn">
				Post
			</button>
		</React.Fragment>
	)
}
export default Review;