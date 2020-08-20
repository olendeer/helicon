import Nav from '../../components/Nav/Nav'
import BreadCrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import HeadArticle from '../../components/HeadArticle/HeadArticle'
import Comments from '../../components/Comments/Comments'
import MoreNews from '../../components/MoreNews/MoreNews'
import Article from '../../components/Article/Article'

function ArticlePage(props){
	let articles = props.articles ? props.articles : []
	return (
		<Nav>
			<div className="wrapper-content">
				<BreadCrumbs breadcrumbs={[{name: 'Main', link: '/news'}]}/>
				<HeadArticle/>
				<Comments comments={props.mostReadOneNews ? props.mostReadOneNews.comments : []}/>
				<section className="read-also">
					<header className="header-news">Read also</header>
					<div className="read-also-articles">
						{props.articles ? (
							<div className="all-articles">
								{articles.map((article, index) => {
									return (
										<Article article={article} key={index}/>
									)
								})}
							</div>
						) : <MoreNews/>}
					</div>
				</section>
			</div>
		</Nav>
	)
}

export async function getServerSideProps(context){
	if(context.query.type === 'news'){
		//запрос на получаение новостей, одна наиболее просматриваемая,остальные по дате добавления
		return {
			props: {
				mostReadOneNews: {
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
				news: []
			}
		}
	} else if(context.query.type === 'most'){//запрос на получаение новостей, все наиболее просматриваемые
		return {
			props: {
				mostReadOneNews: {
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
				news: []
			}
		}
	} else if(context.query.type === 'articles') { //запрос на получаение статей, все наиболее просматриваемые
		return {
			props: {
				mostReadOneNews: {
					
				},
				articles: [
					{
						img: require("../../public/img/news/test-article2.png"),
						name : 'Lorem ipsum dolor sit amet, consetetur',
						title: 'Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet, consetetur',
						owner : {
							avatar: require("../../public/img/test_avatar.png"),
							name: 'Yulia Dzhumaieva'
						},
						date: '2 day ago'
					},
					{
						img: require("../../public/img/news/test-article2.png"),
						name : 'Lorem ipsum dolor sit amet, consetetur',
						title: 'Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet, consetetur',
						owner : {
							avatar: require("../../public/img/test_avatar.png"),
							name: 'Yulia Dzhumaieva'
						},
						date: '2 day ago'
					},
					{
						img: require("../../public/img/news/test-article2.png"),
						name : 'Lorem ipsum dolor sit amet, consetetur',
						title: 'Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet, consetetur',
						owner : {
							avatar: require("../../public/img/test_avatar.png"),
							name: 'Yulia Dzhumaieva'
						},
						date: '2 day ago'
					},
					{
						img: require("../../public/img/news/test-article2.png"),
						name : 'Lorem ipsum dolor sit amet, consetetur',
						title: 'Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet, consetetur',
						owner : {
							avatar: require("../../public/img/test_avatar.png"),
							name: 'Yulia Dzhumaieva'
						},
						date: '2 day ago'
					}
				]
			}
		}
	}
}

export default ArticlePage;