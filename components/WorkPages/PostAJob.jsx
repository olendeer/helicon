import React, { useState } from 'react'

import {FiEdit3} from 'react-icons/fi'
import {RiFileEditLine} from 'react-icons/ri'
import {MdDescription} from 'react-icons/md'
import {FaDollarSign} from 'react-icons/fa'
import {FaCheck} from 'react-icons/fa'

import Step1 from './Steps/Step1/Step1'
import Step2 from './Steps/Step2/Step2'
import Step3 from './Steps/Step3/Step3'
import Step4 from './Steps/Step4/Step4'
import Step5 from './Steps/Step5/Step5'
import Review from './Steps/Review/Review'

import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'


function PostAJob() {
	const completeStep = (index) => {
		setSteps(
			steps.map((item, id) => {
				if(index === id){
					item.complete = true
				}
				return item
			})
		)
	}
	const updateSteps = (index) => {
		setSteps(
			steps.map((item, id) => {
				if(index === id){
					item.active = true
				} else {
					item.active = false
				}
				return item
			})
		)
	}
	let [steps, setSteps] = useState([
		{
			icon: <FiEdit3/>,
			title: 'Title',
			complited: false,
			active: true,
			content: <Step1 completeStep={completeStep} updateSteps={updateSteps}/>,
			complete: false
		},
		{
			icon: <RiFileEditLine/>,
			title: 'Description',
			complited: false,
			active: false,
			content: <Step2 completeStep={completeStep} updateSteps={updateSteps}/>,
			complete: false
		},
		{
			icon: <MdDescription />,
			title: 'Details',
			complited: false,
			active: false,
			content: <Step3 completeStep={completeStep} updateSteps={updateSteps}/>,
			complete: false
		},
		{
			icon: (
				<svg className="need-fill" xmlns="http://www.w3.org/2000/svg" width="18.002" height="20.707" viewBox="0 0 18.002 20.707">
					<g id="surface1" transform="translate(-.5)">
						<path id="Контур_55" fill="#e1e1e1" d="M10.1 0a8.413 8.413 0 0 0-8.4 8.3l-1 2.918a2.192 2.192 0 0 0 .049 1.936.947.947 0 0 0 .777.4h.173v1.018a2.234 2.234 0 0 0 2.231 2.231 1.019 1.019 0 0 1 1.018 1.018v.65a2.234 2.234 0 0 0 2.231 2.231h4.549a2.234 2.234 0 0 0 2.231-2.231v-2.6A8.4 8.4 0 0 0 10.1 0zm4.97 7.817l-2.046 1.995.477 2.783a.607.607 0 0 1-.59.742.6.6 0 0 1-.282-.07l-2.529-1.33-2.531 1.33a.607.607 0 0 1-.88-.639l.483-2.816-2.046-1.995a.607.607 0 0 1 .336-1.035l2.827-.411L9.554 3.81a.607.607 0 0 1 1.088 0l1.264 2.562 2.827.411a.607.607 0 0 1 .336 1.035zm0 0" data-name="Контур 55"/>
					</g>
				</svg>
			),
			title: 'Expertise',
			complited: false,
			active: false,
			content: <Step4 completeStep={completeStep} updateSteps={updateSteps}/>,
			complete: false
		},
		{
			icon: <FaDollarSign/>,
			title: 'Budget 	',
			complited: false,
			active: false,
			content: <Step5 completeStep={completeStep} updateSteps={updateSteps}/>,
			complete: false
		},
		{
			icon: <FaCheck/>,
			title: 'Review',
			check: true,
			complited: false,
			active: false,
			content: <Review updateSteps={updateSteps}/>,
			complete: false
		}
	])
	return (
		<section className="postajob">
			<div className="postajob-stepper">
				{steps.map((item, i) => {
					return (
						<motion.div className={"postajob-stepper-item " + (item.active ? 'postajob-stepper-item-active ' : '') + (item.complete ? 'postajob-stepper-item-complete' : '')} 
							key={i}
							onClick={() => {
								if(steps[i - 1] ? steps[i - 1].complete : i === 0){
									updateSteps(i)
								}
							}}
							initial="hidden"
							animate="visible"
							variants={animations.menuLink}
							transition={{duration: .1, delay: i/10}}>
								{item.icon}
								<div className="postajob-stepper-item-title">
									{item.title}
								</div>
								{!item.check ? (
									<div className="postajob-stepper-item-check">
										<FaCheck/>
									</div>
								) : ('')}
						</motion.div>
					)
				})}
			</div>
			<div className="postajob-content">
				{steps.map(item => {
					//eslint-disable-next-line
					if(item.active){
						//eslint-disable-next-line
						return item.content
					}  
				})}
			</div>
		</section>
	)
}

export default PostAJob;