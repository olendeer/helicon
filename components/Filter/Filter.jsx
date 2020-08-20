import React, { useState , useEffect} from 'react'

import {IoIosArrowBack} from 'react-icons/io'
import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'

function Filter ({header, list, openFilter, id, open, close, setReset, reset}) {
	//eslint-disable-naxt-line
	let [filters, setFilters] = useState(list.map(item => {
		return {
			item,
			active: false
		}
	}))
	const setCheckbox = (id) => {
		setReset(false)
		setFilters(
			filters.map((item, index) => {
				if(id === index){
					item.active = !item.active
				}
				return item
			})
		)
	}
	useEffect(() => {
		if(reset){
			setFilters(filters.map(item => {
				item.active = false
				return item
			}))
		}
	}, [reset])
	return (
		<motion.div className="filter-item"
		onClick={() => {
			setReset(false)
			if(open){
				close(event)
			} else {
				openFilter(id)
			}
		}}
		initial="hidden"
		animate="visible"
		variants={animations.menuLink}
		transition={{duration: 0.2}}>
			<span className="filter-name">{header}</span>
			<IoIosArrowBack className={"arrow " + (open ? 'arrow-active' : '')}/>
			<div className={"filter-item-list " + (open ? 'filter-item-list-active' : '')}>
				{filters.map((item, index) => {
					//eslint-disable-next-line
					return (
						<div className="filter-item-check" key={index} onClick={() => {
							setCheckbox(index)
						}}>
							<span className={"checkbox " + ((item.active && !reset) ? 'checkbox-active' : '')}></span>
							<span className="filter-name">{item.item}</span>
						</div>
					)
				})}
			</div>
		</motion.div>
	)
}

export default Filter;