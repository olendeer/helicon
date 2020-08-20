import {useEffect} from 'react'
import Chart from 'chart.js'

import Nav from '../components/Nav/Nav'
import {TiArrowDownThick} from 'react-icons/ti'
import {FiDollarSign} from 'react-icons/fi'

import {motion} from 'framer-motion'
import {animations} from '../hooks/animations'

function Analitics(){
	useEffect(() => {
		let ctx = document.getElementById('myChart').getContext('2d');
		var grd1 = ctx.createLinearGradient(0, 0, 0, 500);
		grd1.addColorStop(.5, 'rgba(94, 206, 177, 0)');
		grd1.addColorStop(0.14, 'rgba(0, 31, 255, .14)');
		var grd2 = ctx.createLinearGradient(0, 0, 0, 500);
		grd2.addColorStop(.5, 'rgba(94, 206, 177, 0)');
		grd2.addColorStop(0.14, 'rgba(31, 144, 250, 0.7)');
		new Chart(ctx, {
			type: 'line',
			data: {
				labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
				datasets: [{
					label: '# of Votes',
					data: [200, 210, 200, 230, 190, 200, 190],
					borderColor : '#001fff',
					backgroundColor: grd1,
					pointBorderColor: 'transparent',
       				pointBackgroundColor: 'transparent'
				}, {
					borderColor: 'rgba(31, 144, 250, 0.31)',
					data: [105, 104, 106, 104, 103, 105, 90],
					backgroundColor: grd2,
					pointBorderWidth: 0,
					pointBorderColor: 'transparent',
       				pointBackgroundColor: 'transparent',
				}]
			},
			options: {
				legend : {
					display: false
				},
				scales: {
					yAxes: [{
						ticks: {
							max: 300,
							min: 0,
							stepSize: 100
						},
						gridLines: {
							borderDash : [2, 10],
							borderDashOffset: 0.5
						}
					}],
					xAxes: [
						{
							gridLines: {
								display: false,
							}
						}
					]
				}
			}
		});
	}, [])
	return (
		<Nav>
			<div className="analitics-content-wrapper">
			<div className="analitics-content-wrapper-header">
				<motion.div className="header-news"
				initial="hidden"
				animate="visible"
				variants={animations.breadcrumbs}
				transition={{duration: 0.3}}>Analitics</motion.div>
				<motion.div className="withdraw"
				initial="hidden"
				animate="visible"
				variants={animations.avatar}
				transition={{duration: 0.3}}>
					<div className="withdraw-price">
						987,23$
					</div>
					<div className="withdraw-label">
						Withdraw
					</div>
				</motion.div>
			</div>
			<div className="analitics-content">
				<motion.div className="analitics-chart"
				initial="hidden"
				animate="visible"
				variants={animations.news}
				transition={{duration: 0.3}}>
					<div className="chart">
						<canvas id="myChart" width="400" height="400">
						<p>Hello Fallback World</p>
						</canvas>
					</div>
					<div className="chart-data">
						<div className="chart-data-item">
							<div className="chart-data-item-name">Total Earnings</div>
							<div className="chart-data-item-value">
							987,23$
							</div>
							<div className="chart-data-item-arrow">
								<TiArrowDownThick/>
							</div>
						</div>
						<div className="chart-data-item">
							<div className="chart-data-item-name">Earned in April</div>
							<div className="chart-data-item-value">
							94,23$
							</div>
							<div className="chart-data-item-arrow">
								<TiArrowDownThick/>
							</div>
						</div>
						<div className="chart-data-item">
							<div className="chart-data-item-name">Written Articles</div>
							<div className="chart-data-item-value">
							34
							</div>
							<div className="chart-data-item-arrow">
								<TiArrowDownThick/>
							</div>
						</div>
						<div className="chart-data-item">
							<div className="chart-data-item-name">Likes</div>
							<div className="chart-data-item-value">
							54
							</div>
							<div className="chart-data-item-arrow">
								<TiArrowDownThick/>
							</div>
						</div>
						<div className="chart-data-item">
							<div className="chart-data-item-name">Followers</div>
							<div className="chart-data-item-value">
							568
							</div>
							<div className="chart-data-item-arrow">
								<TiArrowDownThick/>
							</div>
						</div>
					</div>
				</motion.div>
				<div className="analitics-up">
					<motion.div className="analitics-up-header"
					initial="hidden"
					animate="visible"
					variants={animations.avatar}
					transition={{duration: 0.3, delay: .1}}>
						Advertisument
					</motion.div>
					<motion.div className="analitics-up-item"
					initial="hidden"
					animate="visible"
					variants={animations.news}
					transition={{duration: 0.3, delay: .1}}>
						<div className="analitics-up-item-header">Start you campaign to increase your traffic from Helicon search</div>
						<div className="analitics-up-variables">
							<div className="analitics-up-variables-btns">
								<FiDollarSign/>&ensp;7
							</div>
							<div className="analitics-up-variables-btns">
								Days 7
							</div>
						</div>
						<div className="analitics-up-start">
							Start
						</div>
					</motion.div>
					<motion.div className="analitics-up-item"
					initial="hidden"
					animate="visible"
					variants={animations.news}
					transition={{duration: 0.3, delay: .2}}>
						<div className="analitics-up-item-header">Add yourself in our newsletter</div>
						<div className="analitics-up-variables">
							<div className="analitics-up-variables-btns">
								<FiDollarSign/>&ensp;5
							</div>
							<div className="analitics-up-variables-btns">
								Times 1
							</div>
						</div>
						<div className="analitics-up-start">
							Start
						</div>
					</motion.div>
					<motion.div className="analitics-up-item"
					initial="hidden"
					animate="visible"
					variants={animations.news}
					transition={{duration: 0.3, delay: .3}}>
						<div className="analitics-up-item-header">Stay in Top</div>
						<div className="analitics-up-variables">
							<div className="analitics-up-variables-btns">
								<FiDollarSign/>&ensp;2
							</div>
							<div className="analitics-up-variables-btns">
								Days 1
							</div>
						</div>
						<div className="analitics-up-start">
							Start
						</div>
					</motion.div>
					
				</div>
			</div>
		</div>
		</Nav>
	)
}

export default Analitics;