import  { useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav'

import {motion} from 'framer-motion'
import {animations} from '../hooks/animations'

function Palette() {
	let [color, setColor] = useState(null)
	let [userColors, setUserColor] = useState([])
	useEffect(() => {
		if(document){
			let iro = require('@jaames/iro');
			let palette = new iro.default.ColorPicker("#palette", {
				width: 200,
				color: "rgb(255, 0, 0)",
				borderWidth: 1,
				borderColor: "#fff",
				colors: [
					'rgb(100%, 0, 0)',
					'rgb(0, 100%, 0)',
					'rgb(0, 0, 100%)',
				],
				layout: [
					{ 
						component: iro.default.ui.Wheel,
					},
					{
						component: iro.default.ui.Box,
					},
					{
						component: iro.default.ui.Slider,
						options: {
							sliderType: 'hue'
						}
					},
					{
						component: iro.default.ui.Slider,
						options: {
							sliderType: 'saturation'
						}
					},
					{
						component: iro.default.ui.Slider,
						options: {
							sliderType: 'value'
						}
					}
				]
			});
			palette.on(['color:init', 'color:change'], (color) => {
				setColor(color.hexString)
			});
		}
	}, [])
	return (
		<Nav>
			<motion.span className="header-news"
			initial="hidden"
			animate="visible"
			variants={animations.breadcrumbs}
			transition={{duration: 0.2}}>Pallete</motion.span>
			<motion.section className="palette" id="palette"
			initial="hidden"
			animate="visible"
			variants={animations.menuLink}
			transition={{duration: 0.2}}
			>
			</motion.section>
			<section className="palette-navigation">
				<motion.div className="favorite-palette"
				initial="hidden"
				animate="visible"
				variants={animations.avatar}
				transition={{duration: 0.2, delay: .2}}>
					<div className="favorite-header">Your library</div>
					<div className="favorite-colors">
						{userColors.map((color, index) => {
							return (
								<div className="color-item"
									style={{backgroundColor: color}}
									key={index}
								>
									{color}
								</div>
							)
						})}
					</div>
				</motion.div>
				<div className="save-data">
					<motion.div className="current-color-box" style={{backgroundColor: color}}
					initial="hidden"
					animate="visible"
					variants={animations.avatar}
					transition={{duration: 0.2, delay: .3}}></motion.div>
					<motion.div className="current-color" style={{color: color}}
					initial="hidden"
					animate="visible"
					variants={animations.avatar}
					transition={{duration: 0.2, delay: .4}}>{color}</motion.div>
					<motion.div className="save-color" onClick={() => {
						if(userColors.length < 5){
							setUserColor(userColors.concat(color))
						}	
					}}
					initial="hidden"
					animate="visible"
					variants={animations.avatar}
					transition={{duration: 0.2, delay: .5}}>Save</motion.div>
				</div>
			</section>
		</Nav>
	)
}

export default Palette;