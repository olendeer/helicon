import Link from 'next/link'


import Nav from '../components/Nav/Nav'
import BreadCrumbs from '../components/Breadcrumbs/Breadcrumbs'

import {TiPlus} from 'react-icons/ti'

import {motion} from 'framer-motion'
import {animations} from '../hooks/animations'

function Basket ({backPage}) {
	return (
		<Nav>
			<BreadCrumbs breadcrumbs={[{name: 'Back', link: backPage}]}/>
			<div className="basket-content">
				<div className="basket-list">
					<motion.div className="basket-item"
					initial="hidden"
					animate="visible"
					exit="exit"
					variants={animations.feed}
					transition={{duration: 0.1, delay: .1}}>
						<div className="art-data">
							<img src={require('../public/img/arts/art2.png')} alt="" className="basket-item-art"/>
							<div className="art-info">
								<div className="art-name">Mona Liza</div>
								<div className="owner-info">
									<div className="art-owner-name">Julia Duo</div>
									<img src={require('../public/img/test_avatar.png')} alt="" className="art-owner-avatar"/>
								</div>
							</div>
						</div>
						<div className="price-data">
							<span className="art-price">345,45$</span>
							<span className="nameplate">+10% fee included</span>
							<span className="nameplate">300,43$ without fee</span>
						</div>
						<div className="art-delete">
							<TiPlus/>
						</div>
					</motion.div>
				</div>
				<motion.div className="basket-total"
				initial="hidden"
				animate="visible"
				exit="exit"
				variants={animations.avatar}
				transition={{duration: 0.1, delay: .2}}>
					<span className="total">Total</span>
					<div className="total-price">345,45$</div>
					<Link href='/pay'>
						<button className="pay-btn">Pay</button>
					</Link>
				</motion.div>
			</div>
		</Nav>
	)
}

export async function getServerSideProps(context){
	let pathname = context.req.headers.referer ? context.req.headers.referer.split(context.req.headers.host).pop() : '/'
	return {
		props: {
			backPage: pathname
		}
	}
}

export default Basket;