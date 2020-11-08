import Link from 'next/link'

import Nav from '../components/Nav/Nav'
import Feed from '../components/Feed/Feed'
import Portfolio from '../components/Portfolio/Portfolio'

import {motion} from 'framer-motion'
import {animations} from '../hooks/animations'


function Profile({articles, friends, news, portfolio, feeds, username}){
	return(
		<Nav>
			<div className="small-column">
				{username ? (
					<motion.div className="user-data"
					initial="hidden"
					animate="visible"
					variants={animations.news}
					transition={{duration: .4}}>
						<div className="user-data-block">
							<div className="user-info">
								<motion.img src="img/test_avatar.png" alt="" className="user-avatar"
								initial="hidden"
								animate="visible"
								variants={animations.menuLink}
								transition={{duration: .3}}/>
								<span className="user-name">Julia Duo</span>
							</div>
							<div className="user-btns">
								<motion.button className="user-message-btn user-btn"
								initial="hidden"
								animate="visible"
								variants={animations.feed}
								transition={{duration: .2, delay: .1}}>Message</motion.button>
								<motion.button className="user-proposal-btn user-btn"
								initial="hidden"
								animate="visible"
								variants={animations.feed}
								transition={{duration: .2, delay: .2}}>Make a proposal</motion.button>
							</div>
						</div>
						<motion.div className="user-status"
						initial="hidden"
						animate="visible"
						variants={animations.avatar}
						transition={{duration: .3}}>Wfewef oiwehfn weif h wefh n oiwef nf woeif weiofn f wef hf 
						wuefbb u hfwf ie fhw if iwe fihf iwofi  wfj uh </motion.div>
					</motion.div>
				) : ''}
				<motion.div className="small-column-item"
				initial="hidden"
				animate="visible"
				variants={animations.news}
				transition={{duration: .5, delay: .1}}>
					<div className="header-news">My articles</div>
					<div className="small-column-item-content small-column-item-content-my-articles">
						{articles.map((article, index) => {
							return (
								<Link href='/news/article?type=articles' key={index}>
									<div className="my-article-item">
										<div className="my-article-item-image-wrap">
											<img src={article.img} alt="" className="my-article-item-image"/>
										</div>
										<div className="my-article-item-info">
											<h3 className="my-article-item-header">{article.header}</h3>
											<p className="my-article-item-text">{article.text}</p>
										</div>
									</div>
								</Link>
							)
						})}
					</div>
					<Link href='/news/articles?type=my'>
						<motion.div className="small-column-item-more"
						initial="hidden"
						animate="visible"
						variants={animations.moreBtn}
						transition={{duration: .3, delay: .3}}>More</motion.div>
					</Link>
				</motion.div>
				<motion.div className="small-column-item"
				initial="hidden"
				animate="visible"
				variants={animations.news}
				transition={{duration: .5, delay: .3}}>
					<div className="header-news">Friends</div>
					<div className="small-column-item-content small-column-item-content-friends">
						{friends.map((friend, index) => {
							return (
								<Link href='/profile' key={index}>
									<div className="friends-item">
										<img src={friend.img} alt="" className="friends-item-image"/>
										<div className="friends-item-name">{friend.name}</div>
									</div>
								</Link>
							)
						})}
					</div>
					<Link href='/friends'>
						<motion.div className="small-column-item-more"
						initial="hidden"
						animate="visible"
						variants={animations.moreBtn}
						transition={{duration: .3, delay: .3}}>More</motion.div>
					</Link>
				</motion.div>
				{!username ? (
					<motion.div className="small-column-item"
					initial="hidden"
					animate="visible"
					variants={animations.news}
					transition={{duration: .5, delay: .3}}>
						<div className="header-news">News</div>
						<div className="small-column-item-content small-column-item-content-news">
							{news.map((item, index) => {
								return (
									<Link href='/news/article?type=news' key={index}>
										<div className="small-column-item-content-news-item">
											<img src={item.img} alt="" className="news-item-image"/>
											<div className="news-item-info">
												<div className="news-item-info-header">{item.header}</div>
												<span className="news-item-info-date">{item.date}</span>
											</div>
										</div>
									</Link>
								)
							})}
						</div>
						<Link href='/news/article?type=news'>
							<motion.div className="small-column-item-more"
							initial="hidden"
							animate="visible"
							variants={animations.moreBtn}
							transition={{duration: .3, delay: .3}}>More</motion.div>
						</Link>
					</motion.div>
				) : ''}
			</div>
			<motion.div className="big-column"
			initial="hidden"
			animate="visible"
			variants={animations.news}
			transition={{duration: .3, delay: .3}}>
				<div className="big-column-item"
				initial="hidden"
				animate="visible"
				variants={animations.news}
				transition={{duration: .5, delay: .2}}>
					<div className="header-news">Portfolio</div>
					<Portfolio section={true} works={portfolio}/>
					<Link href='/portfolio'>
						<motion.div className="big-column-item-more"
						initial="hidden"
						animate="visible"
						variants={animations.moreBtn}
						transition={{duration: .3, delay: .3}}>More</motion.div>
					</Link>

				</div>
				<div className="big-column-item">
					<div className="header-news">
						My posts
					</div>
					<div className="feed-line">
						{feeds.map((feed, index) => {
							return (
								<Feed feed={feed} key={index}/>
							)
						})}
					</div>
				</div>
			</motion.div>
		</Nav>
	)
}

export async function getServerSideProps(context){
	if(context.query.username){
		return {
			props: {
				username: 'test_user',
				feeds: [
					{
						owner: {
							avatar: require('../public/img/test_avatar.png'),
							name: 'Yuliia Dzhumaieva',
						},
						date: '16 May 2019 y.',
						image: require('../public/img/posts/test_post1.png'),
						likes: 200,
						views: 123,
						comments: [
							{
								img: require('../public/img/test_avatar.png'),
								name: 'Julia Duo',
								text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna a',
								likes: 41
							},
							{
								img: require('../public/img/test_avatar.png'),
								name: 'Julia Duo',
								text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna a',
								likes: 41
							},
							{
								img: require('../public/img/test_avatar.png'),
								name: 'Julia Duo',
								text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna a',
								likes: 41
							}
						]
					},
					{
						owner: {
							avatar: require('../public/img/test_avatar.png'),
							name: 'Yuliia Dzhumaieva',
						},
						date: '16 May 2019 y.',
						image: require('../public/img/posts/test_post1.png'),
						likes: 200,
						views: 123,
						comments: [
							{
								img: require('../public/img/test_avatar.png'),
								name: 'Julia Duo',
								text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna a',
								likes: 41
							},
							{
								img: require('../public/img/test_avatar.png'),
								name: 'Julia Duo',
								text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna a',
								likes: 41
							},
							{
								img: require('../public/img/test_avatar.png'),
								name: 'Julia Duo',
								text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna a',
								likes: 41
							}
						]
					}
				],
				articles: [
					{
						img: require('../public/img/arts/art1.png'),
						header: 'J. Paul Getty Trust to Give $10 M. in Coronavirus Relief Funds to Los Angeles Arts Organizations',
						text: 'Many had called on the trust...'
					},
					{
						img: require('../public/img/arts/art2.png'),
						header: 'J. Paul Getty Trust to Give $10 M. in Coronavirus Relief Funds to Los Angeles Arts Organizations',
						text: 'Many had called on the trust...'
					},
					{
						img: require('../public/img/arts/art3.png'),
						header: 'J. Paul Getty Trust to Give $10 M. in Coronavirus Relief Funds to Los Angeles Arts Organizations',
						text: 'Many had called on the trust...'
					}
				],
				friends: [
					{
						img: require('../public/img/arts/art1.png'),
						name: 'Julia Dung'
					},
					{
						img: require('../public/img/arts/art1.png'),
						name: 'Julia Dung'
					},
					{
						img: require('../public/img/arts/art1.png'),
						name: 'Julia Dung'
					},
					{
						img: require('../public/img/arts/art1.png'),
						name: 'Julia Dung'
					},
					{
						img: require('../public/img/arts/art1.png'),
						name: 'Julia Dung'
					},
					{
						img: require('../public/img/arts/art1.png'),
						name: 'Julia Dung'
					},
					{
						img: require('../public/img/arts/art1.png'),
						name: 'Julia Dung'
					},
					{
						img: require('../public/img/arts/art1.png'),
						name: 'Julia Dung'
					}
				],
				portfolio: [
					{
						img: require('../public/img/arts/art3.png'),
						price: '$132.00',
						views: 231
					},
					{
						img: require('../public/img/arts/art3.png'),
						price: '$132.00',
						views: 231
					},
					{
						img: require('../public/img/arts/art3.png'),
						price: '$132.00',
						views: 231
					},
					{
						img: require('../public/img/arts/art3.png'),
						price: '$132.00',
						views: 231
					},
					{
						img: require('../public/img/arts/art3.png'),
						price: '$132.00',
						views: 231
					},
					{
						img: require('../public/img/arts/art3.png'),
						price: '$132.00',
						views: 231
					},
					{
						img: require('../public/img/arts/art3.png'),
						price: '$132.00',
						views: 231
					},
					{
						img: require('../public/img/arts/art3.png'),
						price: '$132.00',
						views: 231
					},
					{
						img: require('../public/img/arts/art3.png'),
						price: '$132.00',
						views: 231
					}
				]
			}
		}
	}
	return {
		props: {
			feeds: [
				{
					owner: {
						avatar: require('../public/img/test_avatar.png'),
						name: 'Yuliia Dzhumaieva',
					},
					date: '16 May 2019 y.',
					image: require('../public/img/posts/test_post1.png'),
					likes: 200,
					views: 123,
					comments: [
						{
							img: require('../public/img/test_avatar.png'),
							name: 'Julia Duo',
							text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna a',
							likes: 41
						},
						{
							img: require('../public/img/test_avatar.png'),
							name: 'Julia Duo',
							text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna a',
							likes: 41
						},
						{
							img: require('../public/img/test_avatar.png'),
							name: 'Julia Duo',
							text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna a',
							likes: 41
						}
					]
				},
				{
					owner: {
						avatar: require('../public/img/test_avatar.png'),
						name: 'Yuliia Dzhumaieva',
					},
					date: '16 May 2019 y.',
					image: require('../public/img/posts/test_post1.png'),
					likes: 200,
					views: 123,
					comments: [
						{
							img: require('../public/img/test_avatar.png'),
							name: 'Julia Duo',
							text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna a',
							likes: 41
						},
						{
							img: require('../public/img/test_avatar.png'),
							name: 'Julia Duo',
							text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna a',
							likes: 41
						},
						{
							img: require('../public/img/test_avatar.png'),
							name: 'Julia Duo',
							text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna a',
							likes: 41
						}
					]
				}
			],
			articles: [
				{
					img: require('../public/img/arts/art1.png'),
					header: 'J. Paul Getty Trust to Give $10 M. in Coronavirus Relief Funds to Los Angeles Arts Organizations',
					text: 'Many had called on the trust...'
				},
				{
					img: require('../public/img/arts/art2.png'),
					header: 'J. Paul Getty Trust to Give $10 M. in Coronavirus Relief Funds to Los Angeles Arts Organizations',
					text: 'Many had called on the trust...'
				},
				{
					img: require('../public/img/arts/art3.png'),
					header: 'J. Paul Getty Trust to Give $10 M. in Coronavirus Relief Funds to Los Angeles Arts Organizations',
					text: 'Many had called on the trust...'
				}
			],
			friends: [
				{
					img: require('../public/img/arts/art1.png'),
					name: 'Julia Dung'
				},
				{
					img: require('../public/img/arts/art1.png'),
					name: 'Julia Dung'
				},
				{
					img: require('../public/img/arts/art1.png'),
					name: 'Julia Dung'
				},
				{
					img: require('../public/img/arts/art1.png'),
					name: 'Julia Dung'
				},
				{
					img: require('../public/img/arts/art1.png'),
					name: 'Julia Dung'
				},
				{
					img: require('../public/img/arts/art1.png'),
					name: 'Julia Dung'
				},
				{
					img: require('../public/img/arts/art1.png'),
					name: 'Julia Dung'
				},
				{
					img: require('../public/img/arts/art1.png'),
					name: 'Julia Dung'
				}
			],
			news: [
				{
					img: require('../public/img/arts/art5.png'),
					header: 'Lorem ipsum dolor sit amet consectetur.',
					date: '24.06.2020'
				},
				{
					img: require('../public/img/arts/art5.png'),
					header: 'Lorem ipsum dolor sit amet consectetur.',
					date: '24.06.2020'
				},
				{
					img: require('../public/img/arts/art5.png'),
					header: 'Lorem ipsum dolor sit amet consectetur.',
					date: '24.06.2020'
				},
				{
					img: require('../public/img/arts/art5.png'),
					header: 'Lorem ipsum dolor sit amet consectetur.',
					date: '24.06.2020'
				}
			],
			portfolio: [
				{
					img: require('../public/img/arts/art3.png'),
					price: '$132.00',
					views: 231
				},
				{
					img: require('../public/img/arts/art3.png'),
					price: '$132.00',
					views: 231
				},
				{
					img: require('../public/img/arts/art3.png'),
					price: '$132.00',
					views: 231
				},
				{
					img: require('../public/img/arts/art3.png'),
					price: '$132.00',
					views: 231
				},
				{
					img: require('../public/img/arts/art3.png'),
					price: '$132.00',
					views: 231
				},
				{
					img: require('../public/img/arts/art3.png'),
					price: '$132.00',
					views: 231
				},
				{
					img: require('../public/img/arts/art3.png'),
					price: '$132.00',
					views: 231
				},
				{
					img: require('../public/img/arts/art3.png'),
					price: '$132.00',
					views: 231
				},
				{
					img: require('../public/img/arts/art3.png'),
					price: '$132.00',
					views: 231
				}
			]
		}
	}
}

export default Profile;