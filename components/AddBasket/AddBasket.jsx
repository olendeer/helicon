import Link from 'next/link'

function AddBasket ({setIsOpenAddBasket}) {
	return (
		<div className="add-basket-wrapper">
			<div className="add-basket-content">
				<div className="add-basket-content-header">
				Item was added to your basket !
				</div>
				<img src={require('../../public/img/other/basket.svg')} alt="" className="add-basket-img"/>
				<button className="add-basket-continue-btn" onClick={() => setIsOpenAddBasket(false)}>Continue shopping</button>
				<Link href='/basket'>
					<button className="add-basket-buy-btn">Buy now</button>
				</Link>
			</div>
		</div>
	)
}

export default AddBasket;