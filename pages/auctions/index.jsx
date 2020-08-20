import {useState} from 'react'
import Nav from '../../components/Nav/Nav'
import Filter from '../../components/Filter/Filter'
import Link from 'next/link'

import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'

import {MdFavorite} from 'react-icons/md'
import {FaRegHeart} from 'react-icons/fa'

function Auctions({auctions}){
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
	return (
		<Nav>
			<div className="auction-content">
				<div className="auction-headers">
					<motion.span className="header-news"
					initial="hidden"
					animate="visible"
					variants={animations.breadcrumbs}
					transition={{duration: 0.2}}>Auctions</motion.span>
					<div className="auction-header-wrap">
						<Link href="/auctions/add">
							<motion.button className="header-news header-news-add-artwork"
							initial="hidden"
							animate="visible"
							variants={animations.breadcrumbs}
							transition={{duration: 0.2}}>Add your artwork</motion.button>
						</Link>
						<motion.span className="header-news"
						initial="hidden"
						animate="visible"
						variants={animations.breadcrumbs}
						transition={{duration: 0.2}}>3 Saved</motion.span>
					</div>
				</div>
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
				<section className="auctions-list">
					{auctions.map((auction, index) => {
						return (
							<Link href='/auctions/auction'>
								<motion.div className="auction-item" key={index}
								initial="hidden"
								animate="visible"
								variants={animations.feed}
								transition={{duration: 0.3, delay: index/10}}>
									<div className="auction-item-info">
										<div className="auction-wrapper-image">
											<motion.div
											initial="hidden"
											animate="visible"
											variants={animations.menuLink}
											transition={{duration: 0.3, delay: index/10}} className="auction-label">NEW</motion.div>
											<motion.img src={require('../../public/img/arts/art1.png')} alt="" className="auction-image"
											initial="hidden"
											animate="visible"
											variants={animations.avatar}
											transition={{duration: 0.3, delay: index/10}}/>
										</div>
										<motion.div className="auction-item-description"
										initial="hidden"
										animate="visible"
										variants={animations.avatar}
										transition={{duration: 0.3, delay: index/10 + .1}}>
											<div className="auction-name">
												{auction.name}
											</div>
											<div className="auction-astimations">
												<div className="likes">
													<span className="count">{auction.likes}</span>
													<MdFavorite/>
												</div>
												<div className="rating">
													30 product ratings
												</div>
											</div>
											<div className="auction-post">
												{auction.postDate}
											</div>
											<div className="watch">
												<span> {auction.watch} bid </span><FaRegHeart/> Watch
											</div>
										</motion.div>
									</div>
									<div className="auction-item-price">
										<div className="current-price">$189.00</div>
										<div className="plus-price">+30$ for shipping</div>
									</div>
								</motion.div>
							</Link>
						)
					})}				
				</section>
			</div>
		</Nav>
	)
}

export async function getServerSideProps(){
	return {
		props: {
			auctions: [
				{
					art: '../public/img/arts/art1.png',
					name: '"Mona Lisa" Yuliia Dzhumaieva',
					likes: 200,
					postDate: '6d 21h left (Thu, 09:32 PM) <br/> From United States',
					watch: 1,
					price: '$189.00',
					shipping: '+30$'
				},
				{
					art: '../public/img/arts/art1.png',
					name: '"Mona Lisa" Yuliia Dzhumaieva',
					likes: 200,
					postDate: '6d 21h left (Thu, 09:32 PM) <br/> From United States',
					watch: 1,
					price: '$189.00',
					shipping: '+30$'
				},
				{
					art: '../public/img/arts/art1.png',
					name: '"Mona Lisa" Yuliia Dzhumaieva',
					likes: 200,
					postDate: '6d 21h left (Thu, 09:32 PM) <br/> From United States',
					watch: 1,
					price: '$189.00',
					shipping: '+30$'
				}		
			]
		}
	}
}


export default Auctions;