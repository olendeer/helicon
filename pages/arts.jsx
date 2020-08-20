import Nav from '../components/Nav/Nav'
import Filter from '../components/Filter/Filter'
import OpenedPicture  from '../components/OpenedPicture/OpenedPicture'
import AddStory from '../components/Story/AddStory'
import Storys from '../components/Story/Storys'
import AddBasket from '../components/AddBasket/AddBasket'

import { useState, useEffect } from 'react';

import {motion} from 'framer-motion'
import {animations} from '../hooks/animations'
 
function FineArt({pictures}) {
	let [login, setLogin] = useState(false)
	let [isOpenPicture, setIsOpenPicture] = useState(false)
	let [activePicture, setActivePicture] = useState(null)
	let [isOpenAddStory, setIsOpenAddStory] = useState(false)
	let [isOpenStorys, setIsOpenStorys] = useState(false)
	let [isOpenAddBasket, setIsOpenAddBasket] = useState(false)
	let [resetFilters, setResetFilters] = useState(false)
	let [filters, setFilters] = useState([
		{
			header: 'Category/technics',
			list: [
				'Painting', 'Oil', 'Acryl', 'Watercolor', 'Gouache', 'Mixed techniques', 'Design', 'Photography', 'Drawing', 'Instalations', 'Sculpture', 'Graphics', 'Giclee', 'Ink', 'Screen printing'
			],
			active: false
		},
		{
			header : 'Thematics',
			list: [
				'Abstraction', 'Nude', 'Architecture', 'Erotics', 'Fantastic', 'Food', 'Women', 'People', 'Still-life', 'Love', 'Fashion', 'Motorization', 'Modern art', 'Landscape', 'Journeys', 'Animals', 'Industry', 'Adventure', 'Religion', 'Warming colors', 'World'
			],
			active: false
		},
		{
			header: 'Artworks for present',
			list: [
				'Abstractionism', 'Art déco', 'Expressionism', 'Illustration', 'Figurativism', 'Impressionism', 'Cubism', 'Modern art', 'Minimalism', 'Superrealism', 'Pop art', 'Portrait', 'Primitivism', 'Realism', 'Street art', 'Surrealism', 'Symbolism', 'Folk art', 'Searching art'
			],
			active: false
		},
		{
			header: 'Price',
			list: [
				'0 - 200 EURO', '200 - 500 EURO', '500 - 1000 EURO', '1000 - 3000 EURO', '3000 EURO + '
			],
			active: false
		},
		{
			header : 'Width',
			list:[
				'- 50 cm', '51 cm - 80 cm', '81 cm - 120 cm', '120 cm +'
			],
			active: false
		},
		{
			header: 'Height',
			list: [
				'- 50 cm', '51 cm - 80 cm', '81 cm - 120 cm', '120 cm +'
			],
			active: false
		},
		{
			header: 'Artistic movements',
			list: [
				'Abstractionism', 'Art déco', 'Expressionism', 'Illustration', 'Figurativism', 'Impressionism', 'Cubism', 'Modern art', 'Minimalism', 'Superrealism', 'Pop art', 'Portrait', 'Primitivism', 'Realism', 'Street art', 'Surrealism', 'Symbolism', 'Folk art', 'Searching art'
			],
			active: false
		}

	])
	const openFilter = index => {
		setResetFilters(false)
		setFilters(
			filters.map((data, i) => {
				if(index === i){
					data.active = true
				} else {
					data.active = false
				}
				return data
			})
		)
	}
	const closeFilter = (event) => {
		if(event.target.classList.contains('filter-name') || event.target.classList.contains('filter-item-check') || event.target.classList.contains('checkbox')){
			
		} else {
			setFilters(
				filters.map((data) => {
					data.active = false
					return data
				})
			)
		}
	}
	return (
		<Nav>
			<div className="wrapper-content">
				{!login ? (
					<div className="art-motiovation">
						Find things you'll love for yourself or for a gift. Become a member of artistic community only on Helicon
					</div>
				) : (
					''
				)}
				<div className="header-news">Our art</div>
				<motion.section className="filters"
				initial="hidden"
				animate="visible"
				variants={animations.news}
				transition={{duration: 0.3}}>
					{filters.map((data, index) => {
						return <Filter header={data.header} list={data.list} openFilter={openFilter}  id={index} key={index} open={data.active} close={closeFilter} reset={resetFilters} setReset={setResetFilters}/>
					})}
					<button className="clear-filter" onClick={(event) => {
						closeFilter(event)
						setResetFilters(true)
					}}>
						Clear filter
					</button>
				</motion.section>
				<section className="progress">
					<div className="progress-header">Today's Works in Progress</div>
					<div className="progress-items">
						<motion.div className="progress-item progress-add"
						initial="hidden"
						animate="visible"
						variants={animations.news}
						transition={{duration: 0.3, delay: .2}}
						onClick={() => setIsOpenAddStory(true)}>
							<span className="progress-name">add your</span>
							<div className="progress-circle"></div>
						</motion.div>
						<motion.div className="progress-item"
						initial="hidden"
						animate="visible"
						variants={animations.news}
						transition={{duration: 0.3, delay: .3}}
						onClick={() => setIsOpenStorys(true)}>
							<span className="progress-name">someone u follow</span>
							<div className="progress-circle"></div>
						</motion.div>
						<motion.div className="progress-item"
						initial="hidden"
						animate="visible"
						variants={animations.news}
						transition={{duration: 0.3, delay: .4}}
						onClick={() => setIsOpenStorys(true)}>
							<span className="progress-name">popular</span>
							<div className="progress-circle"></div>
						</motion.div>
					</div>
				</section>
				<section className="arts">
					{pictures.map((picture, index) => {
						return (
							<motion.img src={picture} key={index} alt="" onClick={() => {
								setIsOpenPicture(true)
								setActivePicture(picture)	
							}}
							initial="hidden"
							animate="visible"
							variants={animations.feed}
							transition={{duration: 0.3, delay: index/10}}
							/>
						)
					})}
				</section>
			</div>
			{isOpenPicture ? <OpenedPicture isOpen={isOpenPicture} setIsOpen={setIsOpenPicture} setIsOpenAddBasket={setIsOpenAddBasket} picture={activePicture}/> : ''}
			{isOpenAddStory ? <AddStory isOpen={isOpenAddStory} setIsOpen={setIsOpenAddStory}/> : ''}
			{isOpenStorys ? <Storys isOpen={isOpenStorys} setIsOpen={setIsOpenStorys}/> : ''}
			{isOpenAddBasket ? <AddBasket setIsOpenAddBasket={setIsOpenAddBasket}/> : ''}
		</Nav>
	)
}

export async function getServerSideProps(){
	return {
		props: {
			pictures: [
				'img/arts/art1.png',
				'img/arts/art8.png',
				'img/arts/art2.png',
				'img/arts/art3.png',
				'img/arts/art4.png',
				'img/arts/art5.png',
				'img/arts/art7.png',
				'img/arts/art6.png',
				'img/arts/art7.png',
				'img/arts/art5.png'
			]
		}
	}
}

export default FineArt;