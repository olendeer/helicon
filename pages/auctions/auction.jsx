import Nav from '../../components/Nav/Nav'

import BreadCrumbs from '../../components/Breadcrumbs/Breadcrumbs'

import {MdFavorite} from 'react-icons/md'
import { useState } from 'react'

import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'

function AuctionPage({auction}){
	let [auctionDescription, setAuctionDescription] = useState([
		{
			header: 'Item specifics',
			section: (
				<motion.div className="auction-detailed-information-text"
				initial="hidden"
				animate="visible"
				variants={animations.avatar}
				transition={{duration: 0.3}}>
					<div className="auction-detailed-information-text-categories">
						<div className="categories-line">
							<div className="categorie-name">Category:</div>
							<div className="categorie-value">Graphics</div>
						</div>
						<div className="categories-line">
							<div className="categorie-name">Height:</div>
							<div className="categorie-value">100cm</div>
						</div>
						<div className="categories-line">
							<div className="categorie-name">Width:</div>
							<div className="categorie-value">100cm</div>
						</div>
					</div>
					<div className="auction-detailed-information-text-header-bold">About this product</div>
					<div className="auction-detailed-information-text-header">
						Product Information
					</div>
					<p className="auction-detailed-information-text-paragraph">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare hendrerit eleifend. Donec ornare sagittis est sit amet ullamcorper. Vestibulum lacinia ante pulvinar pellentesque pharetra. Aliquam quis justo arcu. Aenean porttitor vehicula odio sit amet tincidunt. Sed posuere vestibulum vestibulum. Nam volutpat pharetra est nec egestas. Fusce dignissim libero eu vulputate ultricies. Nullam sagittis ante turpis, eu consequat justo blandit et. Proin aliquet elit et augue ullamcorper porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
					</p>
				</motion.div>
			),
			active: true
		},
		{
			header: 'Shipping and payments',
			section: (
				<>
					<motion.div className="auction-detailed-information-text"
					initial="hidden"
					animate="visible"
					variants={animations.avatar}
					transition={{duration: 0.3}}>
						<div className="auction-detailed-information-text-header">
							Shipping and handling
						</div>
						<p className="auction-detailed-information-text-paragraph">
							Item location: Shoreham, New York, United States <br/>
							Shipping to: United States, Canada, United Kingdom, Denmark, Romania, Slovakia, Bulgaria, Czech Republic, Finland, Hungary, Latvia, Lithuania, Malta, Estonia, Australia, Greece, Portugal, Cyprus, Slovenia, Japan, China, Sweden, Korea, South, Taiwan, South Africa, Belgium, France, Ireland, Netherlands, Poland, Spain, Italy, Germany, Austria, Bahamas, Israel, Mexico, New Zealand, Singapore, Switzerland, Norway, United Arab Emirates, Qatar, Kuwait, Bahrain, Croatia, Republic of, Costa Rica, Dominican Republic, Antigua and Barbuda, Aruba, Belize, Dominica, Grenada, Saint Kitts-Nevis, Saint Lucia, Montserrat, Turks and Caicos Islands, Barbados, Bermuda, Brunei Darussalam, Bolivia, French Guiana, Guernsey, Gibraltar, Guadeloupe, Iceland, Jersey, Jordan, Cambodia, Cayman Islands, Liechtenstein, Sri Lanka, Luxembourg, Monaco, Macau, Martinique, Maldives, Oman, Pakistan, Paraguay, Reunion, Urugua
						</p>
					</motion.div>
					<motion.div className="auction-detailed-returns"
					initial="hidden"
					animate="visible"
					variants={animations.avatar}
					transition={{duration: 0.3}}>
						<div className="auction-detailed-returns-header">
							Return policy
						</div>
						<div className="auction-detailed-returns-text">
							Seller does not offer returns.
						</div>
					</motion.div>
				</>
			),
			active: false
		}
	])
	const updateDescription = id => {
		setAuctionDescription(
			auctionDescription.map((description,index) => {
				if(index === id){
					description.active = true
				} else {
					description.active = false
				}
				return description
			})
		)
	}
	return (
		<Nav>
			<BreadCrumbs breadcrumbs={[{name: 'Auctions', link: '/auctions'}]}/>
			<div className="auction-content">
				<div className="opened-auction">
					<motion.img src={require('../../public/img/arts/art2.png')} alt="" className="opened-auction-image"
					initial="hidden"
					animate="visible"
					exit="exit"
					variants={animations.menuLink}
					transition={{duration: 0.2}}/>
					<div className="opened-auction-description">
						<div className="opened-auction-description-header">
							<motion.div className="opened-auction-description-name"
							initial="hidden"
							animate="visible"
							exit="exit"
							variants={animations.news}
							transition={{duration: 0.2}}>
								{auction.name}
							</motion.div>
							<motion.div className="opened-auction-description-estimations"
							initial="hidden"
							animate="visible"
							exit="exit"
							variants={animations.feed}
							transition={{duration: 0.2, delay: .1}}>
								<div className="likes">
									<span className="count">{auction.likes}</span>
									<MdFavorite/>
								</div>
								<div className="rating">
									30 product ratings
								</div>
								<div className="views-hours">
									{auction.views} viewed per hour
									<img src={require('../../public/img/fire.png')} alt=""/>
								</div>
							</motion.div>
						</div>
						<motion.div className="opened-auction-description-text"
						initial="hidden"
						animate="visible"
						exit="exit"
						variants={animations.feed}
						transition={{duration: 0.2, delay: .2}}>
							<span className="opened-auction-description-text-header">
								Description
							</span>
							<p className="opened-auction-description-text-paragraph">
								{auction.description}
							</p>
							<div className="auction-data">
								<div className="watchers-count">{auction.watchers} watchers</div>
								<div className="bid-count">{auction.bid} bid</div>
							</div>
							<div className="item-location">
								Item location: Shoreham, New York, United States
							</div>
							<div className="returns">
								<span>Returns:</span>
								Seller does not accept returns
							</div>
						</motion.div>
					</div>
					<motion.div className="opened-auction-price-data"
					initial="hidden"
					animate="visible"
					exit="exit"
					variants={animations.helloUser}
					transition={{duration: 0.2, delay: .3}}>
						<div className="current-price-data">
							<div className="wrap-price">
								<span className="opened-auction-price-label">Price:</span>
								<span className="opened-auction-price">{auction.price}</span>
							</div>
							<div className="wrap-price-btns">
								<div className="price-btn">
									Add to saved
								</div>
								<div className="price-btn">
									Buy it now
								</div>
								<div className="price-btn">
									Add to cart
								</div>
							</div>
						</div>
						<div className="current-price-data">
							<div className="wrap-price">
								<span className="opened-auction-price-label">Current bid:</span>
								<span className="opened-auction-price">{auction.currentBid}</span>
							</div>
							<div className="wrap-price-btns">
								<div className="bid-blue-btn">
									PLACE A BID
								</div>
								<input type="text" className="add-bid"/>
								<div className="other-information">Enter US $146.00 or more</div>
								<div className="other-information">6d 21h left (Thu, 09:32 PM) <br/>
								From United States</div>
							</div>
						</div>
					</motion.div>
				</div>
				<motion.div className="auction-detailed-information"
				initial="hidden"
				animate="visible"
				exit="exit"
				variants={animations.feed}
				transition={{duration: 0.2, delay: .3}}>
					<div className="auction-detailed-information-header">
						{auctionDescription.map((description, index) => {
							return (
								<div className={"auction-detailed-information-header-item " + (description.active ? 'auction-detailed-information-header-item-active' : '')}
								onClick={() => updateDescription(index)}
								key={index}>
									{description.header}
								</div>
							)
						})}
					</div>
					{auctionDescription.map((description, index) => {
						if(description.active){
							return description.section
						}
					})}
				</motion.div>
				<motion.div className="auction-bids-chat"
				initial="hidden"
				animate="visible"
				exit="exit"
				variants={animations.feed}
				transition={{duration: 0.2, delay: .3}}>
					<div className="auction-bids-chat-header">
						Bids chat
					</div>
					<div className="auction-bids-chat-list">
						{auction.bidsChat.map((bid, index) => {
							return (
								<div className="bids-chat-item">
									<div className="bid-owner">
										<img src={require('../../public/img/test_avatar.png')} alt="" className="bid-owner-avatar"/>
										<div className="bid-owner-info">
											<div className="bid-event">
												{bid.name}
											</div>
											<span className="bid-price">{bid.price}</span>
										</div>
									</div>
									<div className="bid-time">{bid.price}</div>
								</div>
							)
						})}
					</div>
				</motion.div>
		 	</div>
		</Nav>
	)
}

export async function getServerSideProps(){
	return {
		props: {
			auction: {
				art: '../../public/img/arts/art2.png',
				name: '"Mona Lisa" Yuliia Dzhumaieva',
				likes: 200,
				views: 167,
				description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, mollitia',
				wathers: 11,
				bid: 4,
				price: '$185.00',
				currentBid: '$1125.00',
				bidsChat: [
					{
						avatar: '../../public/img/test_avatar.png',
						name: 'Julia Di',
						price: '23$',
						time: '1 min ago'
					}
				]
			}
		}
	}
}

export default AuctionPage;