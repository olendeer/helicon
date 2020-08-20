import {IoMdPricetags} from 'react-icons/io'
import {MdCreditCard} from 'react-icons/md'
import { useState } from 'react';
import {IoIosArrowBack} from 'react-icons/io'
import {TiPlus} from 'react-icons/ti'

import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'

function WorkSubmit({setSubmitIsOpen}) {
	let [workType, setWorkType] = useState(0)
	return (
		<div className="work-submit-wrapper">
			<motion.div className="work-submit-content"
			initial="hidden"
			animate="visible"
			variants={animations.news}
			transition={{duration: .3}}>
				<div className="work-submit-close" onClick={() => setSubmitIsOpen(false)}>
					<TiPlus/>
				</div>
				<div className="work-submit-header">
				Job details
				</div>
				<div className="work-submit-body">
					<div className="work-submit-body-block">
						<div className="work-submit-info-block">
							<div className="work-submit-description">
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
							</div>
							<div className="work-submit-org">
								<div className="work-submit-org-item">
									<IoMdPricetags/> Fixed price
								</div>
								<div className="work-submit-org-item">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 25.967 38.524">
										<g id="business" transform="translate(-83.447)">
											<g id="Сгруппировать_294" data-name="Сгруппировать 294" transform="translate(83.447)">
												<path id="Контур_57" fill="#848484" d="M108.849 31.214a.564.564 0 0 0-.564.564v5.306a.312.312 0 0 1-.312.312h-3.033V26.282a.564.564 0 1 0-1.129 0V37.4H97.7l1.771-1.949a1.012 1.012 0 0 0 .244-.812v-.017l-1.687-9.967.455-.684a1.28 1.28 0 0 0 .808.35.988.988 0 0 0 .884-.547l1.779-3.566 4.054 1.57a3.91 3.91 0 0 1 2.276 3.554v3.817a.564.564 0 1 0 1.129 0v-3.822a5.036 5.036 0 0 0-2.978-4.6h-.011l-6.747-2.613v-1.585a5.288 5.288 0 0 0 2-3.478 2.443 2.443 0 0 0 1.435-.585 2.4 2.4 0 0 0 .25-3.381V6.994a6.994 6.994 0 1 0-13.988 0v2.145a2.266 2.266 0 0 0-.582 1.51 2.391 2.391 0 0 0 .832 1.816 2.441 2.441 0 0 0 1.434.585 5.232 5.232 0 0 0 2.116 3.562v1.5l-6.74 2.613h-.011a5.036 5.036 0 0 0-2.978 4.6v11.759a1.442 1.442 0 0 0 1.44 1.44h5.377a.564.564 0 0 0 0-1.129H89.05V26.282a.564.564 0 1 0-1.129 0V37.4h-3.034a.312.312 0 0 1-.312-.312V25.327a3.91 3.91 0 0 1 2.276-3.554L90.9 20.2l1.78 3.567a.988.988 0 0 0 .885.547 1.279 1.279 0 0 0 .808-.35l.455.684-1.687 9.967v.017a1.012 1.012 0 0 0 .244.812l1.769 1.956H92.9a.564.564 0 0 0 0 1.129h15.076a1.442 1.442 0 0 0 1.44-1.44v-5.311a.565.565 0 0 0-.567-.564zm-7.949-11.42l-1.659 3.325-2-1.417 2.049-2.529zm-3.336 3.519l-.43.648h-1.409l-.43-.648 1.134-.805zm-3.264-5.02v-1.056a5.726 5.726 0 0 0 2.134.4 5.3 5.3 0 0 0 2.111-.44v1.1l-2.12 2.617zm8.513-7.643a1.264 1.264 0 0 1-.439.96 1.314 1.314 0 0 1-.652.3V9.39a1.277 1.277 0 0 1 1.095 1.26zm-11.8 1.26a1.275 1.275 0 0 1-1.091-1.26 1.34 1.34 0 0 1 1.091-1.231zm.03-3.64a2.79 2.79 0 0 0-.539.122v-1.4a5.865 5.865 0 1 1 11.73 0v1.36a2.509 2.509 0 0 0-.509-.1c0-.545 0-.439-1.777-2.355a1 1 0 0 0-1.282-.156 10.88 10.88 0 0 1-6.576 1.772 1 1 0 0 0-1.046.756zm1.1 4.085V8.647a12.059 12.059 0 0 0 7.053-1.9c.817.877 1.259 1.337 1.4 1.512v4.1a4.228 4.228 0 0 1-8.455 0zm1.476 10.765l-1.659-3.325 1.6-.621 2.05 2.53zm.647 11.621l1.634-9.652h1.059l1.633 9.651-2.163 2.379z" data-name="Контур 57" transform="translate(-83.447)"/>
											</g>
										</g>
									</svg> One-time project
								</div>
								<div className="work-submit-org-item">
									<MdCreditCard/> Payment unverified
								</div>
							</div>
						</div>
					</div>
					<div className="work-submit-body-terms">
						<div className="work-submit-body-terms-header">
							<div className="work-submit-body-terms-header-item">Terms</div>
							<div className="work-submit-body-terms-header-item">Client's budget: $60.00 USD</div>
						</div>
					</div>
					<div className="work-submit-body-block">
						<div className="work-submit-body-type">
							<div className="work-submit-body-type-header">
								How do you want to be paid?
							</div>
							<div className={ "work-submit-body-type-item " + (workType === 0 ? 'work-submit-body-type-item-active' : '') }onClick={() => setWorkType(0)}>
								<div className="work-submit-body-type-checkbox"></div>
								<div className="work-submit-body-type-item-name">By milestone</div>
							</div>
							<div className={"work-submit-body-type-item " + (workType === 1 ? 'work-submit-body-type-item-active' : '')} onClick={() => setWorkType(1)}>
								<div className="work-submit-body-type-checkbox"></div>
								<div className="work-submit-body-type-item-name">By project</div>
							</div>
						</div>
						<div className="work-submit-type-content">
							{workType === 0 ? (
								<>
									<div className="submit-type-content-item">
										<div className="submit-type-content-title">1st Milestone</div>
										<div className="submit-type-content-item-group">
											<div className="submit-type-content-select">
												<span className="submit-type-content-select-active">1 day <IoIosArrowBack/></span>
												<div className={"submit-type-content-select-list " }>
													<div className="submit-type-content-select-list-item">1 day</div>
													<div className="submit-type-content-select-list-item">5 day</div>
													<div className="submit-type-content-select-list-item">30 day</div>
												</div>
											</div>
											<input type="text" className="submit-type-content-input" placeholder="$ 500"/>
										</div>
									</div>
									<div className="submit-type-content-item">
										<div className="submit-type-content-title">Final delivery</div>
										<div className="submit-type-content-item-group">
											<div className="submit-type-content-select">
												<span className="submit-type-content-select-active">1 day <IoIosArrowBack/></span>
												<div className={"submit-type-content-select-list " }>
													<div className="submit-type-content-select-list-item">1 day</div>
													<div className="submit-type-content-select-list-item">5 day</div>
													<div className="submit-type-content-select-list-item">30 day</div>
												</div>
											</div>
											<input type="text" className="submit-type-content-input" placeholder="$ 500"/>
										</div>
									</div> 
								</>
							) : (
								<div className="submit-type-content-item">
									<div className="submit-type-content-title">Total offer amount</div>
									<div className="submit-type-content-item-group">
										<input type="text" className="submit-type-content-input" placeholder="$ 500"/>
									</div>
								</div>
							)}
						</div>
						{workType === 0 ? (
							<div className="add-milestone">
								<TiPlus/> Add milestone
							</div>
						) : ''}
					</div>
					<div className="work-submit-how-long">
							<div className="work-submit-how-long-header"></div>
							<div className="work-submit-how-long-select">
								<div className="work-submit-how-long-select-active"></div>
								<div className="work-submit-how-long-select-list">
									<div className="select-list-item">

									</div>
								</div>
							</div>
						</div>
					<div className="additional-details">
						<div className="additional-details-header">
							Additional details
						</div>
						<div className="work-submit-body-block">
							<div className="additional-details-content">
								<textarea name="" id="" cols="30" rows="10" className="cover-letter" placeholder="Cover letter"></textarea>
								<input type="file" className="additional-image" id="additional-image"/>
								<label htmlFor="" for="additional-image">drag or upload project images</label>
								<div className="additional-image-info">You may attach up to 5 files under 100 MB each</div>
							</div>
						</div>
					</div>
					<div className="work-submit-btns">
						<button className="submit-cancel" onClick={() => setSubmitIsOpen(false)}>Cancel</button>
						<button className="submit-proposal" onClick={() => setSubmitIsOpen(false)}>Submit a proposal</button>
					</div>
				</div>
			</motion.div>
		</div>
	)
}

export default WorkSubmit;