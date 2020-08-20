import {useState} from 'react'
import Link from 'next/link'

import Nav from '../../components/Nav/Nav'
import Filter from '../../components/Filter/Filter'

import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'
 
import {MdPhotoCamera} from 'react-icons/md'

function AddArtWork(){
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
						<div className="artwork-filters">
							{filters.map((data, index) => {
								return <Filter header={data.header} list={data.list} openFilter={openFilter}  id={index} key={index} open={data.active} close={closeFilter}  reset={resetFilters} setReset={setResetFilters}/>
							})}
						</div>
						<div className="artwork-org">
							<input type="text" className="artwork-name add-artwork-input" placeholder="Name"/>
							<input type="text" className="artwork-price add-artwork-input" placeholder="Price"/>
						</div>
						<textarea name="" id="" cols="30" rows="10" className="artwork-description" placeholder="Description"></textarea>
						<div className="artwork-btns">
							<Link href="/portfolio">
								<button className="artwork-cancel-btn">Cancel</button>
							</Link>
							<button className="artwork-save-btn">Save</button>
						</div>
					</motion.div>
					<input type="file" id="add-artwork"/>
					<motion.label htmlFor="add-artwork" className="add-artwork-image"
					initial="hidden"
					animate="visible"
					variants={animations.avatar}
					transition={{duration: .3}}>
						<div className="image-circle">
							<MdPhotoCamera/>
						</div>
					</motion.label>
				</div>
			</div>
		</Nav>
	)
}

export default AddArtWork;