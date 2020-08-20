import {useState, useEffect} from 'react'

import {motion} from 'framer-motion'
import {animations} from '../../../../hooks/animations'

function Step2({completeStep, updateSteps}) {
	let [isComplete, setIsComplete] = useState(false)

	let [jobDescription, setJobDescription] = useState('')

	useEffect(() => {
		if(jobDescription != ''){
			setIsComplete(true)
		} else {
			setIsComplete(false)
		}
	}, [jobDescription])


	return (
		<React.Fragment>
			<motion.div className="postajob-content-item"
			initial="hidden"
			animate="visible"
			variants={animations.news}
			transition={{duration: .2}}>
				<div className="postajob-content-item-header">
					<div className="postajob-content-item-step-name">Description</div>
					<div className="postajob-content-item-step-count">Step 2 of 6</div>
				</div>
				<div className="postajob-content-item-list">
					<div className="postajob-content-item-list-header">
						A good description includes:
					</div>
					<div className="postajob-content-item-list-item">&bull; &emsp;What the deliverable is </div>
					<div className="postajob-content-item-list-item">&bull;	&emsp;Type of artist you're looking for </div>
					<div className="postajob-content-item-list-item">&bull;	&emsp;Anything unique about the project, team or your company</div>
				</div>
				<textarea name="" id="" cols="30" rows="10" className="postajob-content-item-textarea" value={jobDescription} onChange={event => {
					setJobDescription(event.target.value)
				}}></textarea>
				<div className="postajob-content-item-title">
					Additional project files (optional)
				</div>
				<div className="postajob-content-item-input-file-wrapper">
					<input type="file" id="postajob-content-item-input-file" className="postajob-content-item-input-file" />
					<label htmlFor="postajob-content-item-input-file" className="postajob-content-item-input-label">
						drag or upload project images
					</label>
				</div>
				<div className="postajob-content-nav-btns">
					<button className="postajob-content-nav-btn exit-step" onClick={() => {
						updateSteps(0)
					}}>Exit</button>
					<button className="postajob-content-nav-btn next-step" disabled={!isComplete ? true : false} onClick={() => {
						completeStep(1)
						updateSteps(2)
					}}>Next</button>
				</div>
			</motion.div>
		</React.Fragment>
	)
}

export default Step2;