import {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import {animations} from '../../../../hooks/animations'

import {IoIosTime} from 'react-icons/io'
import {IoMdPricetags} from 'react-icons/io'
import {FaDollarSign} from 'react-icons/fa'
import {FaRegCalendar} from 'react-icons/fa'

function Step5({completeStep, updateSteps}) {
	let [isComplete, setIsComplete] = useState(false)
	let [jobPriceType, setJobPriceType] = useState([
		{
			icon: <IoIosTime/>,
			header : 'Pay by the hour',
			title: 'Popular for ongoing projects',
			active: false
		},
		{
			icon: <IoMdPricetags/>,
			header: 'Pay a fixed price',
			title: 'Popular for one-time projects',
			active: false
		}
	])
	let [jobTime, setJobTime] = useState([
		{
			header: 'Less than a month',
			active: false
		},
		{
			header: '1 to 3 months',
			active: false
		},
		{
			header: '3 to 6 months',
			active: false
		},
		{
			header: 'More than 6 months',
			active: false
		}
	])
	let [jobPriceFrom, setJobPriceFrom] = useState('')
	let [jobPriceTo, setJobPriceTo] = useState('')
	const updateJobTypePrice = id => {
		setJobPriceType(jobPriceType.map((price, index) => {
			if(index === id){
				price.active = true
			} else {
				price.active = false
			}
			return price
		}))
	}
	const updateJobTime = id => {
		setJobTime(jobTime.map((time, index) => {
			if(index === id){
				time.active = true
			} else {
				time.active = false
			}
			return time
		}))
	}
	useEffect(() => {
		let priceTypeComplete = false;
		let timeComplete = false;
		jobPriceType.forEach(price => {
			if(price.active){
				priceTypeComplete = true
			}
		})
		jobTime.forEach(time => {
			if(time.active){
				timeComplete = true
			}
		})
		if(priceTypeComplete && timeComplete && jobPriceFrom != '' & jobPriceTo != ''){
			setIsComplete(true)
		} else {
			setIsComplete(false)
		}
	},[jobPriceType, jobTime, jobPriceFrom, jobPriceTo])

	return (
		<React.Fragment>
			<motion.div className="postajob-content-item"
			initial="hidden"
			animate="visible"
			variants={animations.news}
			transition={{duration: .2}}>
				<div className="postajob-content-item-header">
					<div className="postajob-content-item-step-name">Budget</div>
					<div className="postajob-content-item-step-count">Step 5 of 6</div>
				</div>
				<div className="postajob-content-item-title">
				How would you like to pay  your artist or freelancer?
				</div>
				<div className="postajob-content-item-select-price">
					{jobPriceType.map((price, index) => {
						return (
							<motion.div className={"postajob-content-item-select-price-item " + (price.active ? 'postajob-content-item-select-price-item-active' : '')} key={index} onClick={() => {
								updateJobTypePrice(index)
							}}
							initial="hidden"
							animate="visible"
							variants={animations.menuLink}
							transition={{duration: .1, delay: index/10}}>
								{price.icon}
								<div className="postajob-content-item-select-price-item-header">
									{price.header}
								</div>
								<div className="postajob-content-item-select-price-item-text">
									{price.title}
								</div>
							</motion.div>
						)
					})}
				</div>
				<div className="postajob-content-item-input-price">
					<div className="postajob-content-item-input-price-item-wrapper">
						<FaDollarSign/>
						<input type="text" value={jobPriceFrom} onChange={event => {
							setJobPriceFrom(event.target.value)
						}}/>
					</div>
					<span>/hr</span>
					<div className="label-to">to</div>
					<div className="postajob-content-item-input-price-item-wrapper">
						<FaDollarSign/>
						<input type="text" value={jobPriceTo} onChange={event => {
							setJobPriceTo(event.target.value)
						}}/>
					</div>
					<span>/hr</span>
				</div>
			</motion.div>
			<div className="postajob-content-item">
				<div className="postajob-content-item-title">
				How long this project will last?
				</div>
				<div className="project-content-item-time-project">
					{jobTime.map((time, index) => {
						return (
							<div className={"project-content-item-time-project-time " + (time.active ? 'project-content-item-time-project-time-active' : '')} key={index} onClick={() => {
								updateJobTime(index)
							}}>
								<FaRegCalendar/>
								<div className="project-content-item-time-project-time-header">
									{time.header}
								</div>
							</div>
						)
					})}
				</div>
				<div className="postajob-content-nav-btns">
					<button className="postajob-content-nav-btn" onClick={() => {
						updateSteps(3)
					}}>Exit</button>
					<button className="postajob-content-nav-btn next-step" disabled={!isComplete ? true : false} onClick={() => {
						completeStep(4)
						updateSteps(5)
					}}>Next</button>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Step5;