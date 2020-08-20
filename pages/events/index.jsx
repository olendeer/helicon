import {useState} from 'react'

import Nav from '../../components/Nav/Nav'
import Link from 'next/link'
import CreateEvent from '../../components/CreateEvent/CreateEvent'

import {MdFavorite} from 'react-icons/md'
import {GoPlus} from 'react-icons/go'

import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'

function Events({events}) {
	let [createEventIsOpen, setCreateEventIsOpen] = useState(false)
	return (
		<Nav>
			<div className="events-content">
				<motion.span className="header-news"
				initial="hidden"
				animate="visible"
				variants={animations.breadcrumbs}
				transition={{duration: 0.2}}>Events</motion.span>
				<div className="events-body">
					<div className="look-events">
						<div className="look-events-header">
							<motion.div className="look-events-header-title"
							initial="hidden"
							animate="visible"
							variants={animations.breadcrumbs}
							transition={{duration: 0.3}}>Look for events</motion.div>
							<div className="look-event-header-filters">
								<motion.div className="look-event-header-filters-item"
								initial="hidden"
								animate="visible"
								variants={animations.headerLink}
								transition={{duration: 0.2, delay: .1}}>Today</motion.div>
								<motion.div className="look-event-header-filters-item"
								initial="hidden"
								animate="visible"
								variants={animations.headerLink}
								transition={{duration: 0.2, delay: .2}}>Tomorrow</motion.div>
								<motion.div className="look-event-header-filters-item"
								initial="hidden"
								animate="visible"
								variants={animations.headerLink}
								transition={{duration: 0.2, delay: .3}}>This week</motion.div>
								<motion.div className="look-event-header-filters-item"
								initial="hidden"
								animate="visible"
								variants={animations.headerLink}
								transition={{duration: 0.2, delay: .4}}>This weekend</motion.div>
								<motion.div className="look-event-header-filters-item"
								initial="hidden"
								animate="visible"
								variants={animations.headerLink}
								transition={{duration: 0.2, delay: .5}}>Next week</motion.div>
							</div>
						</div>
						<div className="look-events-list-header">Events on this week</div>
						<div className="look-events-list">
							{events.map((event, index) => {
								return (
									<Link href='/events/event' key={index}>
										<motion.div className="look-events-list-item"
										initial="hidden"
										animate="visible"
										variants={animations.feed}
										transition={{duration: 0.2, delay: index/10}}>
											<img src={require('../../public/img/arts/art1.png')} alt="" className="events-list-item-image"/>
											<div className="events-list-item-date">{event.date}</div>
											<div className="events-list-item-data">
											<div className="events-list-item-name">{event.name}</div>
												<MdFavorite/>
											</div>
											<span className="events-list-item-location">{event.location}</span>
										</motion.div>
									</Link>
								)
							})}
						</div>
					</div>
					<motion.div className="create-events"
					initial="hidden"
					animate="visible"
					variants={animations.avatar}
					transition={{duration: 0.2, delay: .3}}>
						<div className="create-events-header">
							<div className="create-event-btn" onClick={() => setCreateEventIsOpen(true)}>
								<GoPlus/>
								Create an event
							</div>
						</div>
						<div className="coming-events">
							<div className="coming-events-header">
								Coming events
							</div>
							<div className="coming-events-list">
								<Link href='/events/event'>
									<div className="coming-events-item">
										<img src={require('../../public/img/arts/art2.png')} alt="" className="coming-events-item-image"/>
										<div className="coming-events-item-info">
											<div className="coming-events-item-date">Today at 23:00</div>
											<div className="coming-events-item-description">Warsaw night racing: illegal night</div>
										</div>
									</div>
								</Link>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
			{createEventIsOpen ? (
				<CreateEvent setCreateEventIsOpen={setCreateEventIsOpen}/>
			) : ''}
		</Nav>
	)
}

export async function getServerSideProps(){
	return {
		props: {
			events:[
				{
					art: '',
					date: 'Today at 23:00',
					name: 'Warsaw night racing:',
					location: 'Warsaw'
				},
				{
					art: '',
					date: 'Today at 23:00',
					name: 'Warsaw night racing:',
					location: 'Warsaw'
				},
				{
					art: '',
					date: 'Today at 23:00',
					name: 'Warsaw night racing:',
					location: 'Warsaw'
				},
				{
					art: '',
					date: 'Today at 23:00',
					name: 'Warsaw night racing:',
					location: 'Warsaw'
				},
				{
					art: '',
					date: 'Today at 23:00',
					name: 'Warsaw night racing:',
					location: 'Warsaw'
				},
				{
					art: '',
					date: 'Today at 23:00',
					name: 'Warsaw night racing:',
					location: 'Warsaw'
				}
			]
		}
	}
}


export default Events