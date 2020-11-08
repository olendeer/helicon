
import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'

import {MdCreditCard} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import {FiHeart} from 'react-icons/fi'

import WorkDescribe from './WorkDescribe'
import WorkSubmit from './WorkSubmit'

import { useState, useRef } from 'react'
import { useEffect } from 'react'

function WorkItem({page, savedAnchor}){
	let [describeIsOpen, setDescribeIsOpen] = useState(false)
	let [submitIsOpen, setSubmitIsOpen] = useState(false)
	let [allText, setAllText] = useState(false)
	let [savedWork, setSavedWork] = useState(page === 'saved' ? true : false)
	let savedHeart = useRef(null)
	const openDescribe = event => {
		if(!event.target.classList.contains('work-jobs-list-item-description-more') && !event.target.classList.contains('work-jobs-list-item-elected') && !event.target.classList.contains('fiheart')  && !event.target.parentElement.classList.contains('fiheart')  && !event.target.parentElement.classList.contains('fiheart-air') && !event.target.classList.contains('heart-unmount') && !event.target.parentElement.classList.contains('heart-unmount') && !event.target.parentElement.parentElement.classList.contains('heart-unmount') && !event.target.parentElement.parentElement.parentElement.classList.contains('heart-unmount')){
			setDescribeIsOpen(true)
		}
	}

	useEffect(() => {
		if(savedHeart.current && page === 'all'){
			savedHeart.current.querySelector('.fiheart-air').style.position = 'fixed'
			savedHeart.current.querySelector('.fiheart-air').style.top = (savedHeart.current.getBoundingClientRect().y) + 'px'
			savedHeart.current.querySelector('.fiheart-air').style.left = (savedHeart.current.getBoundingClientRect().x) + 'px'
		}
	}, [])

	const saveAnimation = () => {
		const savedBtnX = savedAnchor.current.getBoundingClientRect().x
		const savedBtnY = savedAnchor.current.getBoundingClientRect().y
		savedHeart.current.querySelector('.fiheart-air').style.opacity = 1
		savedHeart.current.querySelector('.fiheart-air').style.position = 'fixed'
		savedHeart.current.querySelector('.fiheart-air').style.top = (savedBtnY + 5) + 'px'
		savedHeart.current.querySelector('.fiheart-air').style.left = (savedBtnX + 30) + 'px'
		setTimeout(() => {
			savedHeart.current.querySelector('.fiheart-air').style.opacity = 0
		}, 200)
	}

	const resetSaveAnimation = () => {
		const heartX = savedHeart.current.querySelector('.fiheart').getBoundingClientRect().x
		const heartY = savedHeart.current.querySelector('.fiheart').getBoundingClientRect().y
		savedHeart.current.querySelector('.fiheart-air').style.top = (heartY) + 'px'
		savedHeart.current.querySelector('.fiheart-air').style.left = (heartX) + 'px'
	}

	return (
		<>
		<motion.div className="work-jobs-list-item"
		initial="hidden"
		animate="visible"
		variants={animations.news}
		transition={{duration: .2}} onClick={(event) => openDescribe(event)}>
			<h3 className="work-jobs-list-item-name">Draw a portrait of my wife</h3>
			<div className={"work-jobs-list-item-description " + (allText ? 'work-jobs-list-item-description-all' : '')}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolorem distinctio aperiam deserunt praesentium culpa corrupti. Mollitia, vel? Enim similique repellendus exercitationem voluptates ducimus unde commodi voluptate facilis? Voluptates laboriosam, commodi quidem dolorem explicabo neque quibusdam placeat. Fugiat sit iusto architecto rerum inventore aliquid reiciendis perspiciatis velit! Laudantium laborum deleniti cupiditate illo illum odit eaque beatae quam saepe blanditiis repellat architecto deserunt eveniet, recusandae sapiente necessitatibus accusantium temporibus similique, tempora vero nemo. Libero voluptatum magni, aliquam sint quibusdam architecto sed id est enim quaerat illo veritatis harum, magnam voluptate sapiente nihil ipsa ad adipisci ex beatae assumenda iste voluptates. Culpa illo esse facilis quis, consequatur amet officia quidem rerum provident rem magni ex nihil laboriosam beatae et at voluptate illum in mollitia, eius, odit facere cupiditate sapiente non! Sequi facere illo explicabo nulla, harum quibusdam! Itaque, aspernatur, veritatis corrupti ad deleniti quidem delectus, et dolor officiis repudiandae odit natus. Expedita consequatur qui aut fugiat rerum tenetur quibusdam sunt sit, saepe aspernatur doloremque ex exercitationem veniam non minima nam laboriosam reiciendis, ad ducimus. Error velit odio ullam autem laborum, distinctio consequatur quod quasi earum reiciendis, mollitia quos, sint omnis adipisci alias soluta labore placeat. Tenetur culpa quis est iste quo sapiente consequuntur corrupti fuga, nam sed quos blanditiis voluptas vitae deleniti minus consectetur atque eligendi quaerat! Alias, earum est laborum et, accusantium voluptatem officia dolores dolorum, voluptatum soluta animi corrupti cupiditate iste minima saepe dolor velit? Aliquid reprehenderit necessitatibus at dicta quasi inventore voluptas placeat, debitis accusamus saepe sed distinctio vitae nihil recusandae tempora ea, tempore sit adipisci! Neque iusto, maxime officia delectus rerum atque molestiae, cumque eum laboriosam numquam error. Ad facere quibusdam veniam quas commodi 
				<span className="work-jobs-list-item-description-more" onClick={() => setAllText(true)}>More</span>
			</div>
			<div className="work-jobs-list-item-information">
				{(() => {
					if(page === 'posted'){
						return (
							<div className="work-jobs-list-item-information-proposals">
								Proposals: <span>13</span>
							</div>
						)
					} else {
						return (
							<React.Fragment>
								<div className="work-jobs-list-item-information-proposals">
									Proposals: less than 5
								</div>
								<div className="work-jobs-list-item-information-payments">
									Payments unverified
									<MdCreditCard/>
								</div>
								<div className="work-jobs-list-item-information-location">
									Ukraine
									<MdLocationOn/>
								</div>
							</React.Fragment>
						)
					}
				})()}
			</div>
			<div className="work-jobs-list-item-labels">
				<div className="work-jobs-list-item-labels-item">Painting</div>
				<div className="work-jobs-list-item-labels-item">Abstract</div>
				<div className="work-jobs-list-item-labels-item">Portrait</div>
			</div>
			<div className="work-jobs-list-item-price">
				<div className="work-jobs-list-item-price-label">Price:</div>
				<span className="work-jobs-list-item-price-value">negotiable</span>
			</div>
			{(() => {
				if(page === 'proposal'){
					return (
						<motion.div className="work-jobs-list-item-btns"
						initial="hidden"
						animate="visible"
						variants={animations.helloUser}
						transition={{duration: .2, delay: .4}}>
							<button className="work-jobs-list-item-btn work-jobs-list-item-blue-btn">Accept</button>
							<button className="work-jobs-list-item-btn">Text</button>
						</motion.div>
					)
				} else if ( page === 'posted'){
					return (
						<motion.div className="work-jobs-list-item-btns"
						initial="hidden"
						animate="visible"
						variants={animations.helloUser}
						transition={{duration: .2, delay: .4}}>
							<button className="work-jobs-list-item-btn work-jobs-list-item-blue-btn">View proposals</button>
							<button className="work-jobs-list-item-btn">Edit</button>
							<button className="work-jobs-list-item-btn work-jobs-list-item-red-btn">Close</button>
						</motion.div>
					)
				} else if( page === 'ongoing') {
					return (
						<motion.div className="work-jobs-list-item-btns"
						initial="hidden"
						animate="visible"
						variants={animations.helloUser}
						transition={{duration: .2, delay: .4}}>
							<button className="work-jobs-list-item-btn work-jobs-list-item-blue-btn">Check</button>
							<button className="work-jobs-list-item-btn">Submit</button>
						</motion.div>
					)
				} else {
					return (
						<motion.div className="work-jobs-list-item-elected"
						onClick={() => {
							if(page === 'all'){
								if(!savedWork){
									saveAnimation()
								} else {
									resetSaveAnimation()
								}
							}
							setSavedWork(!savedWork)
						}}
						ref={savedHeart}
						initial="hidden"
						animate="visible"
						variants={animations.helloUser}
						transition={{duration: .2, delay: .4}}>
							<FiHeart className="fiheart" style={savedWork ? {fill: '#001fff', stroke : '#001fff'} : {}}/>
							{page === 'all' ? <FiHeart className={"fiheart-air " + (savedWork ? "fiheart-air-active" : '')}/> : (
								<div className={"heart-unmount " + (!savedWork ? "heart-unmount-active" : '')}>
									<svg id="heart-left"  xmlns="http://www.w3.org/2000/svg" version="1.1" width="35" height="35" viewBox="0 0 100 100">
										<g >
											<path  id="left-half" d="m50.1 75.4c0 0 0.1 0.3 0.1 0.3-0.4 0-0.8-0.3-0.9-0.7-1.9-5.1-7-9-12.4-13-7.3-5.5-14.9-11.2-15.6-20.9-0.3-4.5 1.1-8.8 4.2-12 3-3.2 7.2-5.1 11.5-5.1 5.5 0 10.3 3.1 13.4 8.5-0.4 2.9 0.3 8.1 0.3 8.1l-1.7 4.6 5 4.5-6.2 5.8 6.4 2.4-4.2 3.8c0 7.4 0.4 7.4 0.3 13.7z" fill="#001fff" />
										</g>
									</svg>
									<svg id="heart-right" xmlns="http://www.w3.org/2000/svg" version="1.1" width="35" height="35" viewBox="0 0 100 100">
										<g>
											<path id="right-half"  d="M63.9 24C58.5 24 53.5 27 50.2 32.5 49.8 35.3 50.5 40.6 50.5 40.6L48.8 45.2 53.8 49.7 47.6 55.5 54 57.8 49.8 61.6C49.7 69.1 50.2 69 50.1 75.4 50.1 75.4 50.2 75.7 50.2 75.7 50.6 75.7 51 75.5 51.1 75.1 53 70.1 58 66.3 63.4 62.2 70.9 56.5 78.6 50.7 79.2 41.1 79.4 36.4 77.9 32 74.8 28.8 73.5 27.4 72 26.3 70.4 25.5 68.4 24.5 66.1 24 63.9 24z" fill="#001fff"/>
										</g>
									</svg>
								</div>
							)}
						</motion.div>
					)
				}
			})()}
		</motion.div>
		{describeIsOpen ? (
			<WorkDescribe setDescribeIsOpen={setDescribeIsOpen} setSubmitIsOpen={setSubmitIsOpen}/>
		) : ''}
		{submitIsOpen ? (
			<WorkSubmit setSubmitIsOpen={setSubmitIsOpen}/>
		) : ''}
		</>
	)
}

export default WorkItem;