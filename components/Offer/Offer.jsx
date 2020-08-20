import { useState } from "react";

import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'

import {IoIosArrowBack} from 'react-icons/io'
import {TiPlus} from 'react-icons/ti'
function Offer({setIsOpenOffer}){
	let [describe, setDescribe] = useState('')
	let [isOpenDeliveryDays, setIsOpenDeliveryDays] = useState(false)
	let [isOpenMilstoneDays, setIsOpenMilstoneDays] = useState(false)
	let [isOpenFinalDays, setIsOpenFinalDays] = useState(false)
	let [typeOffer, setTypeOffer] = useState(1)
	return (
		<div className="offer-wrap">
			<motion.div className="offer-content"
			initial="hidden"
			animate="visible"
			variants={animations.news}
			transition={{duration: 0.4}}>
				<div className="offer-header">
					Create a custom offer
				</div>
				<div className="offer-body">
					<div className="describe-offer">
						<textarea className="describe-offer-input" name="" id="" cols="30" rows="10" placeholder="Describe your offer" value={describe} onChange={event => setDescribe(event.target.value)}></textarea>
						<div className="describe-offer-count-symb">
							{describe.length} / 1500 characters max
						</div>
					</div>
					<div className="offer-type">
						<div className={ "offer-type-item " + (typeOffer === 0 ? 'offer-type-item-active' : '')} onClick={() => setTypeOffer(0)}>
							<div className="offer-type-checkbox"></div>
							<div className="offer-type-item-name">One Delivery: Deliver a finished project</div>
						</div>
						<div className={"offer-type-item " + (typeOffer === 1 ? 'offer-type-item-active' : '')}  onClick={() => setTypeOffer(1)}>
							<div className="offer-type-checkbox"></div>
							<div className="offer-type-item-name">Milestones: Deliver gradually in steps</div>
						</div>
					</div>
					{typeOffer === 0 ? (
						<div className="offer-type-content">
							<div className="offer-type-content-item">
								<div className="offer-type-content-title">Total offer amount</div>
								<input type="text" className="offer-type-content-input" placeholder="$ 500"/>
							</div>
							<div className="offer-type-content-item">
								<div className="offer-type-content-title">Delivery time</div>
								<div className="offer-type-content-select">
									<span className="offer-type-content-select-active" onClick={() => setIsOpenDeliveryDays(!isOpenDeliveryDays)}>1 day <IoIosArrowBack/></span>
									<div className={"offer-type-content-select-list " + (isOpenDeliveryDays ? 'offer-type-content-select-list-active' : '')}>
										<div className="offer-type-content-select-list-item">1 day</div>
										<div className="offer-type-content-select-list-item">5 day</div>
										<div className="offer-type-content-select-list-item">30 day</div>
									</div>
								</div>
							</div>
						</div>
					) : (
						<>
							<div className="offer-type-content">
								<div className="offer-type-content-item">
									<div className="offer-type-content-title">1st Milestone</div>
									<div className="offer-type-content-item-group">
										<div className="offer-type-content-select">
											<span className="offer-type-content-select-active" onClick={() => setIsOpenMilstoneDays(!isOpenMilstoneDays)}>1 day <IoIosArrowBack/></span>
											<div className={"offer-type-content-select-list " + (isOpenMilstoneDays ? 'offer-type-content-select-list-active' : '')}>
												<div className="offer-type-content-select-list-item">1 day</div>
												<div className="offer-type-content-select-list-item">5 day</div>
												<div className="offer-type-content-select-list-item">30 day</div>
											</div>
										</div>
										<input type="text" className="offer-type-content-input" placeholder="$ 500"/>
									</div>
								</div>
								<div className="offer-type-content-item">
									<div className="offer-type-content-title">Final delivery</div>
									<div className="offer-type-content-item-group">
										<div className="offer-type-content-select">
											<span className="offer-type-content-select-active" onClick={() => setIsOpenFinalDays(!isOpenFinalDays)}>1 day <IoIosArrowBack/></span>
											<div className={"offer-type-content-select-list " + (isOpenFinalDays ? 'offer-type-content-select-list-active' : '')}>
												<div className="offer-type-content-select-list-item">1 day</div>
												<div className="offer-type-content-select-list-item">5 day</div>
												<div className="offer-type-content-select-list-item">30 day</div>
											</div>
										</div>
										<input type="text" className="offer-type-content-input" placeholder="$ 500"/>
									</div>
								</div>
							</div>
							<div className="add-milestone">
								<TiPlus/> Add milestone
							</div>
						</>
					)}
					<button className="send-an-offer" onClick={() => setIsOpenOffer(false)}>Send an offer</button>
				</div>
				<div className="close-offer" onClick={() => setIsOpenOffer(false)}>
					<TiPlus/>
				</div>
			</motion.div>
		</div>
	)
}

export default Offer;