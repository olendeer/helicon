import {useState} from 'react'

import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'

function AddQuestion({setIsOpenAddQuestion}){
	let [classicQuestions, setClassicQuestions] = useState([
		{
			quest: 'Do you have any questions about the job description?',
			active: false
		},
		{
			quest: 'Do you have suggestions to make this project successfully?',
			active: false,
		},
		{
			quest: 'What challenging part of this job are you most experienced in?',
			active: false
		},
		{
			quest: 'What part of this project most appeals to you?',
			active: false
		},
		{
			quest: 'What questions do you have about the project?',
			active: false
		}
	])
	const updateQuestions = id => {
		setClassicQuestions(
			classicQuestions.map((quest, index) => {
				if(index === id){
					quest.active = !quest.active
				}
				return quest
			})
		)
	}
	return (
		<div className="add-quest-wrapper">
			<motion.div className="add-quest-content"
			initial="hidden"
			animate="visible"
			variants={animations.news}
			transition={{duration: .4}}>
				<input type="text" className="input-question" placeholder="Add screening questions"/>
				<div className="add-quest-body">
					<div className="add-quest-title">
						Create your own question
					</div>
					<div className="add-quest-or">
						<span className="line"></span>
						<span className="or">OR</span>
						<span className="line"></span>
					</div>
					<div className="add-quest-select">
						<div className="add-quest-select-header">
						Select from our suggested questions:
						</div>
						{classicQuestions.map((quest, index) => {
							return (
								<div className="add-quest-select-item" key={index} onClick={() => {
									updateQuestions(index)
								}}>
									<div className={"add-quest-select-item-checkbox " + (quest.active ? 'add-quest-select-item-checkbox-active' : '')}></div>
									<div className="add-quest-select-item-title">{quest.quest}</div>
								</div>
							)
						})}
					</div>
					<div className="add-quest-btns">
						<button className="cancel-btn" onClick={() => setIsOpenAddQuestion(false)}>Cancel</button>
						<button className="add-btn" onClick={() => setIsOpenAddQuestion(false)}>Add these questions</button>
					</div>
				</div>

			</motion.div>
		</div>
	)
}

export default AddQuestion;