import {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import {animations} from '../../../../hooks/animations'
function Step3({completeStep, updateSteps}) {
	let [isComplete, setIsComplete] = useState(false)
	let [jobSkills, setJobSkills] = useState('')
	useEffect(() => {
		if(jobSkills != ''){
			setIsComplete(true)
		} else {
			setIsComplete(false)
		}
	}, [jobSkills])
	return (
		<React.Fragment>
			<motion.div className="postajob-content-item step-4" 
			initial="hidden"
			animate="visible"
			variants={animations.news}
			transition={{duration: .2}}>
				<div className="postajob-content-item-header">
					<div className="postajob-content-item-step-name">Expertise</div>
					<div className="postajob-content-item-step-count">Step 4 of 6</div>
				</div>
				<div className="postajob-content-item-title">
					What skills and expertise are most important to you in Interior Design?
				</div>
				<textarea name="" id="" cols="30" rows="10" className="postajob-content-item-textarea" value={jobSkills} onChange={event => {
					setJobSkills(event.target.value)
				}}></textarea>
				<div className="postajob-content-nav-btns">
					<button className="postajob-content-nav-btn exit-step" onClick={() => {
						updateSteps(2)
					}}>Exit</button>
					<button className="postajob-content-nav-btn next-step" disabled={!isComplete ? true : false} onClick={() => {
						completeStep(3)
						updateSteps(4)
					}}>Next</button>
				</div>
			</motion.div>
		</React.Fragment>
	)
}

export default Step3;