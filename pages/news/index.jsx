import {isLogin} from '../../utilities/islogin'


import Link from 'next/link'
import Nav from '../../components/Nav/Nav'
import Article from '../../components/Article/Article'


import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'




function News({news, followNews, topArticle, login}){
	let months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'June',
		'July',
		'Aug',
		'Sept',
		'Oct',
		'Nov',
		'Dec'
	]
	let date = new Date()
	return (
		<Nav isLogin={login}>
			<div className="follows-news">
				{login ? (
					<motion.article className="followers-news"
						initial="hidden"
						animate="visible"
						variants={animations.news}
						transition={{duration: .5, delay: .1}}>
						<header className='header-news'>News from your Follows</header>
						<div className="article-content">
							<img src={followNews.img} alt="" className="article-bg"/>
							<div className="article-info">
								{followNews.todos.map((todo, index) => {
									return (
										<div className="owner-article" key={index}>
											<img src={followNews.owner.avatar} alt="" className="owner-avatar"/>
											<div className="article-post">
												<span className="owner-name">{followNews.owner.name}</span>
												<span className="article-date">{followNews.date}</span>
											</div>
											<span className="post-description">
												{todo}
											</span>
										</div>
									)
								})}
							</div>
						</div>
						<Link href="/news/follows">
							<motion.button 
								className="more-news"
								initial="hidden"
								animate="visible"
								variants={animations.moreBtn}
								transition={{duration: .3, delay: .3}}
							>More</motion.button>
						</Link>
					</motion.article>
				) : 'Зарегистрируся'}
				<Link href="/news/articles?type=top">
					<motion.article className="top-news"
						initial="hidden"
						animate="visible"
						variants={animations.news}
						transition={{duration: .5, delay: .3}}>
						<header className="header-news">Top articles</header>
						<Article article={topArticle}/>
					</motion.article>
				</Link>	
			</div>
			<div className="all-news">
				<motion.div className="news"
					initial="hidden"
					animate="visible"
					variants={animations.news}
					transition={{duration: .5, delay: .2}}>
					<div className="header-all-news">
						<header className='header-news'>News</header>
						<span className="news-date">{`${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`}</span>
					</div>
					<div className="news-content">
						<div className="last-news">
							<img src={news[0].img} alt="" className="last-news-image"/>
							<header className="last-news-header">
								{news[0].name}
							</header>
						</div>
						<div className="news-item">
							<img src={news[1].img} alt="" className="news-item-image"/>
							<div className="news-item-info">
								<header className="header-news-item">{news[1].name}</header>
								<div className="description-news-item">{news[1].title}</div>
							</div>
						</div>
						<div className="news-item">
							<img src={news[2].img} alt="" className="news-item-image"/>
							<div className="news-item-info">
								<header className="header-news-item">{news[2].name}</header>
								<div className="description-news-item">{news[2].title}</div>
							</div>
						</div>
						<Link href='/news/article?type=news'>
							<motion.div className="more-news"
								className="more-news"
								initial="hidden"
								animate="visible"
								variants={animations.moreBtn}
								transition={{duration: .3, delay: .3}}
							>More</motion.div>
						</Link>
					</div>
				</motion.div>
				<motion.div className="most-read"
					initial="hidden"
					animate="visible"
					variants={animations.news}
					transition={{duration: .5, delay: .4}}>
					<header className='header-news'>Most read</header>
					<div className="most-read-content">
						<div className="news-item">
							<img src={news[3].img} alt="" className="news-item-image"/>
							<div className="news-item-info">
								<header className="header-news-item">{news[3].name}</header>
								<div className="description-news-item">{news[3].title}</div>
							</div>
						</div>
						<div className="news-item">
							<img src={news[4].img} alt="" className="news-item-image"/>
							<div className="news-item-info">
								<header className="header-news-item">{news[4].name}</header>
								<div className="description-news-item">{news[4].title}</div>
							</div>
						</div>
						<Link href='/news/article?type=most'>
							<motion.div className="more-news"
								className="more-news"
								initial="hidden"
								animate="visible"
								variants={animations.moreBtn}
								transition={{duration: .3, delay: .3}}>More</motion.div>
						</Link>
					</div>
				</motion.div>
			</div>
		</Nav>
	)
}

export async function getServerSideProps(context){
	const login = isLogin(context.req, context.res)
	const userID = context.query.userID //поиск инфы для юзера по его id
	//один запрос в монго для получения 5ти топ новостей
	const news = [
		{
			name: 'Op-Ed: This Art Museum Was Founded in Response to a...',
			title: "Here's what we're reading this morning.Here's what we're reading this morning.Here's what we're reading this morning.",
			img: 'img/news/test-article3.png'
		},
		{
			name: 'Op-Ed: This Art Museum Was Founded in Response to a...',
			title: "Here's what we're reading this morning.Here's what we're reading this morning.Here's what we're reading this morning.",
			img: 'img/news/test-article3.png'
		},
		{
			name: 'Op-Ed: This Art Museum Was Founded in Response to a...',
			title: "Here's what we're reading this morning.Here's what we're reading this morning.Here's what we're reading this morning.",
			img: 'img/news/test-article3.png'
		},
		{
			name: 'Op-Ed: This Art Museum Was Founded in Response to a...',
			title: "Here's what we're reading this morning.Here's what we're reading this morning.Here's what we're reading this morning.",
			img: 'img/news/test-article3.png'
		},
		{
			name: 'Op-Ed: This Art Museum Was Founded in Response to a...',
			title: "Here's what we're reading this morning.Here's what we're reading this morning.Here's what we're reading this morning.",
			img: 'img/news/test-article3.png'
		}
	]

	//запрос для получения одной новости подписчика
	const followNews = {
		owner : {
			avatar: "img/test_avatar.png",
			name: 'Yulia Dzhumaieva'
		},
		todos: [
			'Posted new picture',
			'Posted new article'
		],
		date: '16 May 2019 y.',
		img: 'img/news/test-article.png'
	}

	//зфапрос на получение топ статьии
	const topArticle = {
		img: require("../../public/img/news/test-article2.png"),
		name : 'Lorem ipsum dolor sit amet, consetetur',
		title: 'Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet, consetetur',
		owner : {
			avatar: require("../../public/img/test_avatar.png"),
			name: 'Yulia Dzhumaieva'
		},
		date: '2 day ago'
	}

	return {
		props: {
			login,
			news,
			followNews,
			topArticle
		}
	}
}


export default News;