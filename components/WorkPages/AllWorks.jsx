import {RiArrowDropDownLine} from 'react-icons/ri'
import WorkItem from '../WorkItem/WorkItem'

import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'

import {useState} from 'react'

function AllWorks({savedAnchor, page}){
	let [techIsOpen, setTechIsOpen] = useState(false)
	let [priceIsOpen, setPriceIsOpen] = useState(false)
	let [activePrice, setActivePrice] = useState('not selected')
	let [activeTech, setActiveTech] = useState('not selected')
	let techSelect = [
			'Painting', 'Oil', 'Acryl', 'Watercolor', 'Gouache', 'Mixed techniques', 'Design', 'Photography', 'Drawing', 'Instalations', 'Sculpture', 'Graphics', 'Giclee', 'Ink', 'Screen printing'
		]
	let priceSelect = [
			'0 - 200 EURO', '200 - 500 EURO', '500 - 1000 EURO', '1000 - 3000 EURO', '3000 EURO + '
	]
	// const activeSelect = (select, setSelect) => {
	// 	select.active = true
	// 	setSelect(select)
	// }

	return (
		<>
			<aside className="work-filters">
				<div className="work-filters-list">
					<motion.div className="work-filter-list-item"
					initial="hidden"
					animate="visible"
					variants={animations.news}
					transition={{duration: .2}}>
						<span className="work-filter-list-item-selected" onClick={() => {
							setTechIsOpen(!techIsOpen)
							setPriceIsOpen(false)
							}}>
							<div className="selected-text">
								<div className="selected-text-name">Category/technics</div>
								<div className="selected-text-value">{activeTech}</div>
							</div>
							<RiArrowDropDownLine/>
						</span>
						<div className={"work-filter-list-item-choices " + (techIsOpen ? 'work-filter-list-item-choices-active' : '')}>
							{techSelect.map((item, index) => {
								return <span key={index} onClick={(event) => {
									setTechIsOpen(false)
									setActiveTech(event.target.textContent)
								}}>{item}</span>
							})}
						</div>
					</motion.div>
					<motion.div className="work-filter-list-item"
					initial="hidden"
					animate="visible"
					variants={animations.news}
					transition={{duration: .2, delay: .1}}>
						<span className="work-filter-list-item-selected" onClick={() => {
							setPriceIsOpen(!priceIsOpen)
							setTechIsOpen(false)
							}}>
							<div className="selected-text">
								<div className="selected-text-name">Price</div>
								<div className="selected-text-value">{activePrice}</div>
							</div>
							<RiArrowDropDownLine/>
						</span>
						<div className={"work-filter-list-item-choices " + (priceIsOpen ? 'work-filter-list-item-choices-active' : '')}>
							{priceSelect.map((item, index) => {
								return <span key={index} onClick={(event) => {
									setPriceIsOpen(false)
									setActivePrice(event.target.textContent)
								}}>{item}</span>
							})}
						</div>
					</motion.div>
				</div>
				<motion.div className="work-filter-clear"
				initial="hidden"
				animate="visible"
				variants={animations.news}
				transition={{duration: .2, delay: .2}}>
					Clear filters
				</motion.div>
			</aside>
			<motion.button className="work-load-more"
			initial="hidden"
			animate="visible"
			variants={animations.menuLink}
			transition={{duration: .2, delay: .2}}>There are new jobs. Click to see</motion.button>
			<section className="work-jobs-list">
				<WorkItem savedAnchor={savedAnchor} page={page}/>
			</section>
		</>
	)
}
export default AllWorks;