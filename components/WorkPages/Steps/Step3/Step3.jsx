import { useState, useEffect } from "react";
import AddQuestion from '../../../AddQuestion/AddQuestion'

import {motion} from 'framer-motion'
import {animations} from '../../../../hooks/animations'

function Step3({completeStep, updateSteps}) {
	let [jobType, setJobType] = useState([
		{
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" width="25.967" height="38.524" viewBox="0 0 25.967 38.524">
					<g id="business" transform="translate(-83.447)">
						<g id="Сгруппировать_294" data-name="Сгруппировать 294" transform="translate(83.447)">
							<path id="Контур_57" fill="#848484" d="M108.849 31.214a.564.564 0 0 0-.564.564v5.306a.312.312 0 0 1-.312.312h-3.033V26.282a.564.564 0 1 0-1.129 0V37.4H97.7l1.771-1.949a1.012 1.012 0 0 0 .244-.812v-.017l-1.687-9.967.455-.684a1.28 1.28 0 0 0 .808.35.988.988 0 0 0 .884-.547l1.779-3.566 4.054 1.57a3.91 3.91 0 0 1 2.276 3.554v3.817a.564.564 0 1 0 1.129 0v-3.822a5.036 5.036 0 0 0-2.978-4.6h-.011l-6.747-2.613v-1.585a5.288 5.288 0 0 0 2-3.478 2.443 2.443 0 0 0 1.435-.585 2.4 2.4 0 0 0 .25-3.381V6.994a6.994 6.994 0 1 0-13.988 0v2.145a2.266 2.266 0 0 0-.582 1.51 2.391 2.391 0 0 0 .832 1.816 2.441 2.441 0 0 0 1.434.585 5.232 5.232 0 0 0 2.116 3.562v1.5l-6.74 2.613h-.011a5.036 5.036 0 0 0-2.978 4.6v11.759a1.442 1.442 0 0 0 1.44 1.44h5.377a.564.564 0 0 0 0-1.129H89.05V26.282a.564.564 0 1 0-1.129 0V37.4h-3.034a.312.312 0 0 1-.312-.312V25.327a3.91 3.91 0 0 1 2.276-3.554L90.9 20.2l1.78 3.567a.988.988 0 0 0 .885.547 1.279 1.279 0 0 0 .808-.35l.455.684-1.687 9.967v.017a1.012 1.012 0 0 0 .244.812l1.769 1.956H92.9a.564.564 0 0 0 0 1.129h15.076a1.442 1.442 0 0 0 1.44-1.44v-5.311a.565.565 0 0 0-.567-.564zm-7.949-11.42l-1.659 3.325-2-1.417 2.049-2.529zm-3.336 3.519l-.43.648h-1.409l-.43-.648 1.134-.805zm-3.264-5.02v-1.056a5.726 5.726 0 0 0 2.134.4 5.3 5.3 0 0 0 2.111-.44v1.1l-2.12 2.617zm8.513-7.643a1.264 1.264 0 0 1-.439.96 1.314 1.314 0 0 1-.652.3V9.39a1.277 1.277 0 0 1 1.095 1.26zm-11.8 1.26a1.275 1.275 0 0 1-1.091-1.26 1.34 1.34 0 0 1 1.091-1.231zm.03-3.64a2.79 2.79 0 0 0-.539.122v-1.4a5.865 5.865 0 1 1 11.73 0v1.36a2.509 2.509 0 0 0-.509-.1c0-.545 0-.439-1.777-2.355a1 1 0 0 0-1.282-.156 10.88 10.88 0 0 1-6.576 1.772 1 1 0 0 0-1.046.756zm1.1 4.085V8.647a12.059 12.059 0 0 0 7.053-1.9c.817.877 1.259 1.337 1.4 1.512v4.1a4.228 4.228 0 0 1-8.455 0zm1.476 10.765l-1.659-3.325 1.6-.621 2.05 2.53zm.647 11.621l1.634-9.652h1.059l1.633 9.651-2.163 2.379z" data-name="Контур 57" transform="translate(-83.447)"/>
						</g>
					</g>
				</svg>
			),
			header: 'One-time project',
			title: 'Find the right  skills for a short-term need',
			active: false
		},
		{
			icon : (
				<svg xmlns="http://www.w3.org/2000/svg" width="30.917" height="37.334" viewBox="0 0 30.917 37.334">
					<g id="interface" transform="translate(-44.001)">
						<g id="Сгруппировать_324" data-name="Сгруппировать 324" transform="translate(58.731 11.084)">
							<g id="Сгруппировать_323" data-name="Сгруппировать 323">
								<path fill="#848484" id="Контур_72" d="M257.231 152h-10.5a.729.729 0 1 0 0 1.458h10.5a.729.729 0 1 0 0-1.458z" className="cls-1" data-name="Контур 72" transform="translate(-246.001 -152)"/>
							</g>
						</g>
						<g id="Сгруппировать_326" data-name="Сгруппировать 326" transform="translate(66.164 14.584)">
							<g id="Сгруппировать_325" data-name="Сгруппировать 325">
								<path fill="#848484" id="Контур_73" d="M349.186 200.215a.729.729 0 1 0 .214.516.735.735 0 0 0-.214-.516z" className="cls-1" data-name="Контур 73" transform="translate(-347.941 -200.001)"/>
							</g>
						</g>
						<g id="Сгруппировать_328" data-name="Сгруппировать 328" transform="translate(58.73 3.136)">
							<g id="Сгруппировать_327" data-name="Сгруппировать 327">
								<path fill="#848484" id="Контур_74" d="M247.236 43.215a.729.729 0 1 0 .214.516.735.735 0 0 0-.214-.516z" className="cls-1" data-name="Контур 74" transform="translate(-245.991 -43.001)"/>
							</g>
						</g>
						<g id="Сгруппировать_330" data-name="Сгруппировать 330" transform="translate(58.731 14.584)">
							<g id="Сгруппировать_329" data-name="Сгруппировать 329">
								<path fill="#848484" id="Контур_75" d="M251.1 200h-4.37a.729.729 0 1 0 0 1.458h4.37a.729.729 0 1 0 0-1.458z" className="cls-1" data-name="Контур 75" transform="translate(-246.001 -200)"/>
							</g>
						</g>
						<g id="Сгруппировать_332" data-name="Сгруппировать 332" transform="translate(58.731 18.959)">
							<g id="Сгруппировать_331" data-name="Сгруппировать 331">
								<path fill="#848484" id="Контур_76" d="M257.231 260h-10.5a.729.729 0 1 0 0 1.458h10.5a.729.729 0 0 0 0-1.458z" className="cls-1" data-name="Контур 76" transform="translate(-246.001 -260)"/>
							</g>
						</g>
						<g id="Сгруппировать_334" data-name="Сгруппировать 334" transform="translate(66.164 22.459)">
							<g id="Сгруппировать_333" data-name="Сгруппировать 333">
								<path fill="#848484" id="Контур_77" d="M349.186 308.215a.729.729 0 1 0 .214.516.735.735 0 0 0-.214-.516z" className="cls-1" data-name="Контур 77" transform="translate(-347.941 -308.001)"/>
							</g>
						</g>
						<g id="Сгруппировать_336" data-name="Сгруппировать 336" transform="translate(58.731 22.459)">
							<g id="Сгруппировать_335" data-name="Сгруппировать 335">
								<path fill="#848484" id="Контур_78" d="M251.1 308h-4.37a.729.729 0 0 0 0 1.458h4.37a.729.729 0 1 0 0-1.458z" className="cls-1" data-name="Контур 78" transform="translate(-246.001 -308)"/>
							</g>
						</g>
						<g id="Сгруппировать_338" data-name="Сгруппировать 338" transform="translate(58.731 26.834)">
							<g id="Сгруппировать_337" data-name="Сгруппировать 337">
								<path fill="#848484" id="Контур_79" d="M257.231 368h-10.5a.729.729 0 0 0 0 1.458h10.5a.729.729 0 0 0 0-1.458z" className="cls-1" data-name="Контур 79" transform="translate(-246.001 -368)"/>
							</g>
						</g>
						<g id="Сгруппировать_340" data-name="Сгруппировать 340" transform="translate(66.164 30.334)">
							<g id="Сгруппировать_339" data-name="Сгруппировать 339">
								<path fill="#848484" id="Контур_80" d="M349.186 416.215a.729.729 0 1 0 .214.516.735.735 0 0 0-.214-.516z" className="cls-1" data-name="Контур 80" transform="translate(-347.941 -416.001)"/>
							</g>
						</g>
						<g id="Сгруппировать_342" data-name="Сгруппировать 342" transform="translate(58.731 30.334)">
							<g id="Сгруппировать_341" data-name="Сгруппировать 341">
								<path fill="#848484" id="Контур_81" d="M251.1 416h-4.37a.729.729 0 0 0 0 1.458h4.37a.729.729 0 1 0 0-1.458z" className="cls-1" data-name="Контур 81" transform="translate(-246.001 -416)"/>
							</g>
						</g>
						<g id="Сгруппировать_344" data-name="Сгруппировать 344" transform="translate(44.001)">
							<g id="Сгруппировать_343" data-name="Сгруппировать 343">
								<path fill="#848484" id="Контур_82" d="M71.363 2.844h-5.569A4.468 4.468 0 0 0 62.7 1.6h-.639a2.916 2.916 0 0 0-5.209 0h-.64a4.467 4.467 0 0 0-3.091 1.24h-5.565A3.559 3.559 0 0 0 44 6.4v27.38a3.559 3.559 0 0 0 3.555 3.555h23.808a3.559 3.559 0 0 0 3.555-3.555V6.4a3.559 3.559 0 0 0-3.555-3.556zm-15.148.219h1.137a.729.729 0 0 0 .7-.535 1.458 1.458 0 0 1 2.811 0 .729.729 0 0 0 .7.535H62.7a3.03 3.03 0 0 1 3.015 2.771H53.2a3.03 3.03 0 0 1 3.015-2.771zM73.46 33.779a2.1 2.1 0 0 1-2.1 2.1H47.556a2.1 2.1 0 0 1-2.1-2.1V6.4a2.1 2.1 0 0 1 2.1-2.1H52.1a4.458 4.458 0 0 0-.372 1.787v.474a.729.729 0 0 0 .729.729h14a.729.729 0 0 0 .729-.729v-.472a4.458 4.458 0 0 0-.371-1.789h4.548a2.1 2.1 0 0 1 2.1 2.1z" className="cls-1" data-name="Контур 82" transform="translate(-44.001)"/>
							</g>
						</g>
						<g id="Сгруппировать_346" data-name="Сгруппировать 346" transform="translate(48.468 10.695)">
							<g id="Сгруппировать_345" data-name="Сгруппировать 345">
								<path fill="#848484" id="Контур_83" d="M111.616 146.881a.729.729 0 0 0-1.031 0L107.467 150l-.961-.961a.729.729 0 0 0-1.031 1.031l1.476 1.476a.729.729 0 0 0 1.031 0l3.634-3.634a.729.729 0 0 0 0-1.031z" className="cls-1" data-name="Контур 83" transform="translate(-105.261 -146.667)"/>
							</g>
						</g>
						<g id="Сгруппировать_348" data-name="Сгруппировать 348" transform="translate(48.814 26.834)">
							<g id="Сгруппировать_347" data-name="Сгруппировать 347">
								<path fill="#848484" id="Контур_84" d="M114.23 368h-3.5a.729.729 0 0 0-.729.729v3.5a.729.729 0 0 0 .729.729h3.5a.729.729 0 0 0 .729-.729v-3.5a.729.729 0 0 0-.729-.729zm-.729 3.5h-2.042v-2.042h2.041z" className="cls-1" data-name="Контур 84" transform="translate(-110.001 -368)"/>
							</g>
						</g>
						<g id="Сгруппировать_350" data-name="Сгруппировать 350" transform="translate(48.814 18.959)">
							<g id="Сгруппировать_349" data-name="Сгруппировать 349">
								<path fill="#848484" id="Контур_85" d="M114.23 260h-3.5a.729.729 0 0 0-.729.729v3.5a.729.729 0 0 0 .729.729h3.5a.729.729 0 0 0 .729-.729v-3.5a.729.729 0 0 0-.729-.729zm-.729 3.5h-2.042v-2.042h2.041z" className="cls-1" data-name="Контур 85" transform="translate(-110.001 -260)"/>
							</g>
						</g>
					</g>
				</svg>
			),
			header: 'Ongoing project',
			title: 'Find a skilled resource for an extended engagement',
			active: false
		},
		{
			icon: (
				<div className="type-project-item-icon-wrapper">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			),
			header: 'Complex project',
			title: 'Find specialize experts and artists for large projects',
			active: false
		}
	])
	let [coverLetter, setCoverLetter] = useState('')
	let [isComplete, setIsComplete] = useState(false)
	let [isOpenAddQuestion, setIsOpenAddQuestion] = useState(false)
	useEffect(() => {
		let typeComplete = false;
		jobType.forEach(type => {
			if(type.active){
				typeComplete = true
			}
		})
		if(typeComplete && coverLetter != ''){
			setIsComplete(true)
		} else {
			setIsComplete(false)
		}
	},[jobType,coverLetter])
	const updateJobType = id => {
		setJobType(jobType.map((type, index) => {
			if(id === index){
				type.active = true
			} else {
				type.active = false
			}
			return type
		}))
	}
	return (
		<React.Fragment>
			<motion.div className="postajob-content-item"
			initial="hidden"
			animate="visible"
			variants={animations.news}
			transition={{duration: .2}}>
				<div className="postajob-content-item-header">
					<div className="postajob-content-item-step-name">Details</div>
					<div className="postajob-content-item-step-count">Step 3 of 6</div>
				</div>
				<div className="postajob-content-item-title">
					What type of project do you have?
				</div>
				<div className="postajob-content-item-type-project">
					{jobType.map((type, index) => {
						return (
							<motion.div className={"type-project-item " + (type.active ? 'type-project-item-active' : '')} key={index} onClick={() => {
								updateJobType(index)
							}}
							initial="hidden"
							animate="visible"
							variants={animations.menuLink}
							transition={{duration: .1, delay: index/10}}>
								{type.icon}
								<div className="type-project-item-header">
									{type.header}
								</div>
								<div className="type-project-item-text">
									{type.title}
								</div>
							</motion.div>
						)
					})}
				</div>
			</motion.div>
			<motion.div className="postajob-content-item step-3"
			initial="hidden"
			animate="visible"
			variants={animations.news}
			transition={{duration: .2, delay: .1}}>
				<div className="postajob-content-item-title ">
				Screening questions (optional)
				</div>
				<div className="postajob-content-item-title title-small">
				Add screening questions and/or require a cover letter
				</div>
				<div className="postajob-content-item-see-more margin-blue add-question-btn" onClick={() => setIsOpenAddQuestion(!isOpenAddQuestion)}>
					+  Add a question
				</div>
				<div className="postajob-content-item-title">
				Cover letter
				</div>
				<div className="postajob-content-item-title">
				If you don't add any screening questions, we'll require a cover letter to allow artists to introduce themselves
				</div>
				<textarea name="" id="" cols="30" rows="10" className="postajob-content-item-textarea" value={coverLetter} onChange={event => {
					setCoverLetter(event.target.value)
				}}></textarea>
				<div className="postajob-content-nav-btns">
					<button className="postajob-content-nav-btn exit-step" onClick={() => {
						updateSteps(1)
					}}>Exit</button>
					<button className="postajob-content-nav-btn next-step" disabled={!isComplete ? true : false} onClick={() => {
						completeStep(2)
						updateSteps(3)
					}}>Next</button>
				</div>
			</motion.div>
			{isOpenAddQuestion ? (
				<AddQuestion setIsOpenAddQuestion={setIsOpenAddQuestion}/>
			) : ''}
		</React.Fragment>
	)
}

export default Step3;