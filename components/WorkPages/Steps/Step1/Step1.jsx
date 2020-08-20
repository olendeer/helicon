import {useState, useEffect} from 'react'

import {motion} from 'framer-motion'
import {animations} from '../../../../hooks/animations'

function Step1({completeStep, updateSteps}) {
	let [isComplete, setIsComplete] = useState(false)
	let [jobName, setJobName] = useState('')

	useEffect(() => {
		if(jobName != ''){
			setIsComplete(true)
		} else {
			setIsComplete(false)
		}
	}, [jobName])

	return (
		<React.Fragment>
			<motion.div className="postajob-content-item" 
			initial="hidden"
			animate="visible"
			variants={animations.news}
			transition={{duration: .2}}>
				<div className="postajob-content-item-header">
					<div className="postajob-content-item-step-name">Get Started</div>
					<div className="postajob-content-item-step-count">Step 1 of 6</div>
				</div>
				<div className="postajob-content-item-title">
					Enter the name of your job post
				</div>
				<input type="text" className="postajob-content-item-input" value={jobName} onChange={event => {
					setJobName(event.target.value)
				}}/>
				<div className="postajob-content-item-list">
					<div className="postajob-content-item-list-header">
						Here are some good examples:
					</div>
					<div className="postajob-content-item-list-item">&bull; &emsp;Developer needed for creating   a responsive Wordpess Theme</div>
					<div className="postajob-content-item-list-item">&bull;	&emsp;CAD designer to create a 3D model of a residential building</div>
				</div>
			</motion.div>
			<motion.div className="postajob-content-item"
			initial="hidden"
			animate="visible"
			variants={animations.news}
			transition={{duration: .2, delay: .1}}>
				<div className="postajob-content-item-title">
					Job category
				</div>
				<div className="postajob-content-item-paragraph">
					Let's categorize your job, which helps us personalize your job details and matchyour job to relevant freelancers and artists. Here are some suggestions based on your job titile:
				</div>
				<div className="postajob-content-item-radio-select-list">
					<div className="postajob-content-item-radio-select">
						<span className="radio-select"></span>
						<div className="radio-select-text">Interior design</div>
					</div>
					<div className="postajob-content-item-radio-select">
						<span className="radio-select"></span>
						<div className="radio-select-text">Nature art</div>
					</div>
					<div className="postajob-content-item-radio-select">
						<span className="radio-select"></span>
						<div className="radio-select-text">Architecture</div>
					</div>
				</div>
				<div className="postajob-content-item-see-more">
					See more options
				</div>
				<div className="postajob-content-nav-btns">
					{/* <button className="postajob-content-nav-btn exit-step">Exit</button> */}
					<button className="postajob-content-nav-btn next-step" disabled={!isComplete ? true : false} onClick={() => {
						completeStep(0)
						updateSteps(1)
					}}>Next</button>
				</div>
			</motion.div>
		</React.Fragment>
	)
}

export default Step1;