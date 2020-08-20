import Link from 'next/link'
import Nav from '../../components/Nav/Nav'
import Article from '../../components/Article/Article'
import BreadCrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import MoreNews from '../../components/MoreNews/MoreNews'

function Articles({articles, my}){
	return (
		<Nav>
			{my ? (
				<>
					<BreadCrumbs breadcrumbs={[{name: 'Back', link: '/profile'}]}/>
					<div className="my-articles">
						<MoreNews my={true}/>
					</div>
				</>
			) : (
				<>
					<BreadCrumbs breadcrumbs={[{name: 'Main', link: '/news'}]}/>
					<div className="all-articles">
						{articles.map((article, index) => {
							return (
								<Article article={article} key={index}/>
							)
						})}
					</div>
				</>
			)}
		</Nav>
	)
}

export async function getServerSideProps(context){
	if (context.query.type === 'my'){ //запрос на получение моих статей
		return {
			props: {
				my : true,
				news: [

				]
			}
		}
	}
	return {
		props: {
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

export default Articles;