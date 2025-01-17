import Link from 'next/link'
import {useState} from 'react'

import {MdFavorite} from 'react-icons/md'
import {FaEye} from 'react-icons/fa'
import {TiPlus} from 'react-icons/ti'
function MoreNews({my}) {
	let [allText, setAllText] = useState(false)
	return (
		<React.Fragment>
			<div className="my-articles-content">
				<div className="my-article-content-item">
					<img src={require('../../public/img/arts/art1.png')} alt="" className="my-article-content-item-image"/>
					<div className="my-article-content-item-info">
						<Link href="/news/article?type=most">
							<h4 className="my-article-content-item-header">Getty Trust to Give $10 M. in Coronavirus Relief Funds to L.A. Arts Organizations, and More: Morning Links from April 3, 2020</h4>
						</Link>
						<div className={"my-article-content-item-text " + (allText ? 'my-article-content-item-text-all' : '')}> Here's what we're reading this morning.BY THE EDITORS OF ARTNEWS 4 HOURS AGO Here's what we're reading this morning.BY THE EDITORS OF ARTNEWS 4 HOURS AGO Here's what we're reading this morning.BY THE EDITORS OF ARTNEWS 4 HOURS AGO Here's what we're reading this morning.BY THE EDITORS OF ARTNEWS 4 HOURS AGO Here's what we're reading this morning.BY THE EDITORS OF ARTNEWS 4 HOURS AGO Here's what we're reading this morning.BY THE EDITORS OF ARTNEWS 4 HOURS AGO Here's what we're reading this morning.BY THE EDITORS OF ARTNEWS 4 HOURS AGO Here's what we're reading this morning.BY THE EDITORS OF ARTNEWS 4 HOURS AGO
						<span className="my-article-content-item-text-more" onClick={() => setAllText(true)}>More</span>
						</div>
					</div>
					<div className="my-article-estimation">
						<div className="likes">
							<span className="count">200</span>
							<MdFavorite/>
						</div>
						<div className="views">
							<span className="count">200</span>
							<FaEye/>
						</div>
					</div>
				</div>
				{my ? (
					<Link href="/articles/add">
						<div className="add-article">
							<TiPlus/>
						</div>
					</Link>
				) : ''}
			</div>
		</React.Fragment>
	)
}


export default MoreNews;