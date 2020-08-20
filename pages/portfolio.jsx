
import Nav from '../components/Nav/Nav'
import Portfolio from '../components/Portfolio/Portfolio';

function PortfolioPage({portfolio}) {

	return (
		<Nav>
			<div className="portfolio-page-content">
				<div className="header-news">Portfolio</div>
				<Portfolio section={false} works={portfolio}/>
			</div>
		</Nav>
	)
}

export async function getServerSideProps(){
	return {
		props: {
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

export default PortfolioPage;