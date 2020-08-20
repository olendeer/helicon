
import Nav from '../../components/Nav/Nav'
import BreadCrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import Feed from '../../components/Feed/Feed'
import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'
import { useState, useEffect } from 'react'

function Follows({feedsData}){
	// let [feeds, setFeeds] = useState(null)
	return (
		<Nav>
			<BreadCrumbs breadcrumbs={[{name: 'Main', link: '/news'}]}/>
			<motion.section className="tape"
			initial="hidden"
			animate="visible"
			variants={animations.feed}
			transition={{duration: 0.5}}>
				{feedsData.map((feed, index) => {
					return (
						<Feed feed={feed} key={index}/>
					)
				})}
			</motion.section>
		</Nav>
	)
}

export async function getServerSideProps(){
	return {
		props: {
			feedsData: [
				{
					owner: {
						avatar: require('../../public/img/test_avatar.png'),
						name: 'Yuliia Dzhumaieva',
					},
					date: '16 May 2019 y.',
					image: require('../../public/img/posts/test_post1.png'),
					likes: 200,
					views: 123,
					comments: [
						{
							img: require('../../public/img/test_avatar.png'),
							name: 'Julia Duo',
							text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna a',
							likes: 41
						},
						{
							img: require('../../public/img/test_avatar.png'),
							name: 'Julia Duo',
							text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna a',
							likes: 41
						},
						{
							img: require('../../public/img/test_avatar.png'),
							name: 'Julia Duo',
							text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna a',
							likes: 41
						}
					]
				},
				{
					owner: {
						avatar: require('../../public/img/test_avatar.png'),
						name: 'Yuliia Dzhumaieva',
					},
					date: '16 May 2019 y.',
					image: require('../../public/img/posts/test_post1.png'),
					likes: 200,
					views: 123,
					comments: [
						{
							img: require('../../public/img/test_avatar.png'),
							name: 'Julia Duo',
							text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna a',
							likes: 41
						},
						{
							img: require('../../public/img/test_avatar.png'),
							name: 'Julia Duo',
							text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna a',
							likes: 41
						},
						{
							img: require('../../public/img/test_avatar.png'),
							name: 'Julia Duo',
							text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna a',
							likes: 41
						}
					]
				}
			]
		}
	}
}

export default Follows;