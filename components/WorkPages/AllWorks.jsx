import {RiArrowDropDownLine} from 'react-icons/ri'
import WorkItem from '../WorkItem/WorkItem'

import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'

function AllWorks(){
	return (
		<>
			<aside className="work-filters">
				<div className="work-filters-list">
					<motion.div className="work-filter-list-item"
					initial="hidden"
					animate="visible"
					variants={animations.news}
					transition={{duration: .2}}>
						<span className="work-filter-list-item-selected">
							<div className="selected-text">
								<div className="selected-text-name">Category/technics</div>
								<div className="selected-text-value">not selected</div>
							</div>
							<RiArrowDropDownLine/>
						</span>
						<div className="work-filter-list-item-choices"></div>
					</motion.div>
					<motion.div className="work-filter-list-item"
					initial="hidden"
					animate="visible"
					variants={animations.news}
					transition={{duration: .2, delay: .1}}>
						<span className="work-filter-list-item-selected">
							<div className="selected-text">
								<div className="selected-text-name">Category/technics</div>
								<div className="selected-text-value">not selected</div>
							</div>
							<RiArrowDropDownLine/>
						</span>
						<div className="work-filter-list-item-choices"></div>
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
				<WorkItem/>
			</section>
		</>
	)
}
export default AllWorks;