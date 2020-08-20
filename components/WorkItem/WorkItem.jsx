
import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'

import {MdCreditCard} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import {FiHeart} from 'react-icons/fi'

import WorkDescribe from './WorkDescribe'
import WorkSubmit from './WorkSubmit'

import { useState } from 'react'

function WorkItem({page}){
	let [describeIsOpen, setDescribeIsOpen] = useState(false)
	let [submitIsOpen, setSubmitIsOpen] = useState(false)
	return (
		<>
		<motion.div className="work-jobs-list-item"
		initial="hidden"
		animate="visible"
		variants={animations.news}
		transition={{duration: .2}} onClick={() => setDescribeIsOpen(true)}>
			<h3 className="work-jobs-list-item-name">Draw a portrait of my wife</h3>
			<p className="work-jobs-list-item-description">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolorem distinctio aperiam deserunt praesentium culpa corrupti. Mollitia, vel? Enim similique repellendus exercitationem voluptates ducimus unde commodi voluptate facilis? Voluptates laboriosam, commodi quidem dolorem explicabo neque quibusdam placeat. Fugiat sit iusto architecto rerum inventore aliquid reiciendis perspiciatis velit! Laudantium laborum deleniti cupiditate illo illum odit eaque beatae quam saepe blanditiis repellat architecto deserunt eveniet, recusandae sapiente necessitatibus accusantium temporibus similique, tempora vero nemo. Libero voluptatum magni, aliquam sint quibusdam architecto sed id est enim quaerat illo veritatis harum, magnam voluptate sapiente nihil ipsa ad adipisci ex beatae assumenda iste voluptates. Culpa illo esse facilis quis, consequatur amet officia quidem rerum provident rem magni ex nihil laboriosam beatae et at voluptate illum in mollitia, eius, odit facere cupiditate sapiente non! Sequi facere illo explicabo nulla, harum quibusdam! Itaque, aspernatur, veritatis corrupti ad deleniti quidem delectus, et dolor officiis repudiandae odit natus. Expedita consequatur qui aut fugiat rerum tenetur quibusdam sunt sit, saepe aspernatur doloremque ex exercitationem veniam non minima nam laboriosam reiciendis, ad ducimus. Error velit odio ullam autem laborum, distinctio consequatur quod quasi earum reiciendis, mollitia quos, sint omnis adipisci alias soluta labore placeat. Tenetur culpa quis est iste quo sapiente consequuntur corrupti fuga, nam sed quos blanditiis voluptas vitae deleniti minus consectetur atque eligendi quaerat! Alias, earum est laborum et, accusantium voluptatem officia dolores dolorum, voluptatum soluta animi corrupti cupiditate iste minima saepe dolor velit? Aliquid reprehenderit necessitatibus at dicta quasi inventore voluptas placeat, debitis accusamus saepe sed distinctio vitae nihil recusandae tempora ea, tempore sit adipisci! Neque iusto, maxime officia delectus rerum atque molestiae, cumque eum laboriosam numquam error. Ad facere quibusdam veniam quas commodi 
			</p>
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
							<button className="work-jobs-list-item-btn">Text</button>
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
						initial="hidden"
						animate="visible"
						variants={animations.helloUser}
						transition={{duration: .2, delay: .4}}>
							<FiHeart style={page === 'saved' ? {fill: '#001fff', stroke : '#001fff'} : {}}/>
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