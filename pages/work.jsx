import Nav from '../components/Nav/Nav'
import  { useState, useRef } from 'react'

import AllWorks from '../components/WorkPages/AllWorks'
import SavedWorks from '../components/WorkPages/SavedWorks'
import ProposalWorks from '../components/WorkPages/ProposalWorks'
import PostedWorks from '../components/WorkPages/PostedWorks'
import OngoingWorks from '../components/WorkPages/OngoingWorks'
import PostAJob from '../components/WorkPages/PostAJob'

import {FaSearch} from 'react-icons/fa'

import {motion} from 'framer-motion'
import {animations} from '../hooks/animations'
 
function Work(){
	let savedAnchor = useRef(null)
	let [workNav, setWorkNav] = useState([
		{
			section : 'all',
			component: <AllWorks savedAnchor={savedAnchor} page={'all'}/>,
			active: true,
			push: 0,
			mainName: 'All works'
		},
		{
			section : 'saved',
			component: <SavedWorks page={'saved'}/>,
			active: false,
			push: 0,
			mainName: 'Saved works'
		},
		{
			section : 'proposal',
			component: <ProposalWorks page={'proposal'}/>,
			active: false,
			push: 0,
			mainName: 'Proposals'
		},
		{
			section : 'postajob',
			component: <PostAJob page={'postajob'}/>,
			active: false,
			push: 0,
			mainName: 'Post a job'
		},
		{
			section : 'posted',
			component: <PostedWorks page={'posted'}/>,
			active: false,
			push: 0,
			mainName: 'Posted jobs'
		},
		{
			section : 'ongoing',
			component: <OngoingWorks page={'ongoing'}/>,
			active: false,
			push: 0,
			mainName: 'Ongoing work'
		}
	])

	const setActiveSection = (id) => {
		setWorkNav(
			workNav.map((item, index) => {
				if(index === id){
					item.active = true
				} else {
					item.active = false
				}
				return item
			})
		)
	}

	return (
		<Nav>
			<div className="wrapper-work-content">
				<div className="header-news">Work</div>
				<section className="work-content">
					<nav className={"work-top-nav " + (workNav[0].active ? 'work-top-nav-start' : '')}>
						<ul className="work-nav-list">
							{workNav.map((item, index) => {
								if(item.section === 'all' && item.active === true){
									return (
										<motion.li className="work-search-bar" key={index}
										initial="hidden"
										animate="visible"
										variants={animations.menuLink}
										transition={{duration: .2}}>
											<input type="text" placeholder="Search..." className="work-search-input"/>
											<FaSearch/>
										</motion.li>
									)
								} else {
									return (
										<li className={"work-nav-list-item " + (item.active ? "work-nav-list-item-active" : '')} ref={item.section === 'saved' ? savedAnchor : null} onClick={() => setActiveSection(index)} key={index}>{item.mainName}</li>
									)
								}
							})}
						</ul>
					</nav>
					{workNav.map((item, index) => {
						if(item.active){
							//eslint-disable-next-line
							return item.component
						}
					})}
				</section>
			</div>
		</Nav>
	)
}

export default Work;