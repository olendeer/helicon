import {useState} from 'react'
import Link from 'next/link'

import Nav from '../../components/Nav/Nav'

import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'
import {IoIosArrowDown} from 'react-icons/io'
import {MdPhotoCamera} from 'react-icons/md'

import Portfolio from '../../components/Portfolio/Portfolio'

function AddArtWork({portfolio}){
	console.log(portfolio)
	let [portfolioIsOpen, setPortfolioIsOpen] = useState(false)
	return (
		<Nav>
			<div className="add-artwork-content-wrapper">
				<motion.div className="header-news"
				initial="hidden"
				animate="visible"
				variants={animations.breadcrumbs}
				transition={{duration: .3}}>Add your artwork</motion.div>
				<div className="add-artwork-content">
					<motion.div className="artwork-information"
					initial="hidden"
					animate="visible"
					variants={animations.news}
					transition={{duration: .3}}>
						<div className="artwork-org">
							<input type="text" className="artwork-name add-artwork-input" placeholder="Name"/>
							<input type="text" className="artwork-price add-artwork-input" placeholder="Price"/>
						</div>
						<textarea name="" id="" cols="30" rows="10" className="artwork-description" placeholder="Description"></textarea>
						<div className="art-work-header">Shipping and payments</div>
						<div className="art-work-select-wrap">
							<div className="art-work-select">
								<div className="art-work-select-active"><span>Item location</span><IoIosArrowDown/></div>
								<div className="art-work-select-list">
									<div className="art-work-select-list-item"></div>
									<div className="art-work-select-list-item"></div>
									<div className="art-work-select-list-item"></div>
								</div>
							</div>
							<div className="art-work-select">
								<div className="art-work-select-active"><span>Shipping to</span><IoIosArrowDown/></div>
								<div className="art-work-select-list">
									<div className="art-work-select-list-item"></div>
									<div className="art-work-select-list-item"></div>
									<div className="art-work-select-list-item"></div>
								</div>
							</div>
						</div>
						<div className="art-work-header">Return policy</div>
						<div className="art-work-select">
							<div className="art-work-select-active"><span>Yes</span><IoIosArrowDown/></div>
							<div className="art-work-select-list">
								<div className="art-work-select-list-item"></div>
								<div className="art-work-select-list-item"></div>
								<div className="art-work-select-list-item"></div>
							</div>
						</div>
						<div className="artwork-btns">
							<Link href="/portfolio">
								<button className="artwork-cancel-btn">Cancel</button>
							</Link>
							<button className="artwork-save-btn">Save</button>
						</div>
					</motion.div>
					<motion.label className="add-artwork-image"
					initial="hidden"
					animate="visible"
					variants={animations.avatar}
					transition={{duration: .3}} onClick={() => setPortfolioIsOpen(true)}>
						<div className="image-circle">
							<MdPhotoCamera/>
						</div>
					</motion.label>
				</div>
				{portfolioIsOpen ? <Portfolio section={true} works={portfolio} modal={true} setPortfolioIsOpen={setPortfolioIsOpen}/> : ''}
			</div>
		</Nav>
	)
}

export async function getServerSideProps(){
	return {
		props: {
			portfolio: [
				{
					img: require('../../public/img/arts/art3.png'),
					price: '$132.00',
					views: 231
				},
				{
					img: require('../../public/img/arts/art3.png'),
					price: '$132.00',
					views: 231
				},
				{
					img: require('../../public/img/arts/art3.png'),
					price: '$132.00',
					views: 231
				},
				{
					img: require('../../public/img/arts/art3.png'),
					price: '$132.00',
					views: 231
				},
				{
					img: require('../../public/img/arts/art3.png'),
					price: '$132.00',
					views: 231
				},
				{
					img: require('../../public/img/arts/art3.png'),
					price: '$132.00',
					views: 231
				},
				{
					img: require('../../public/img/arts/art3.png'),
					price: '$132.00',
					views: 231
				},
				{
					img: require('../../public/img/arts/art3.png'),
					price: '$132.00',
					views: 231
				},
				{
					img: require('../../public/img/arts/art3.png'),
					price: '$132.00',
					views: 231
				}
			]
		}
	}
}

export default AddArtWork;