import '../styles/global.scss'
import '../styles/globalMedia.scss'
import '../styles/Header.scss'
import '../styles/HeaderMedia.scss'
import '../styles/Menu.scss'
import '../styles/MenuMedia.scss'
import '../styles/Footer.scss'
import '../styles/FooterMedia.scss'
import '../styles/Messages.scss'
import '../styles/MessagesMedia.scss'
import '../styles/News.scss'
import '../styles/NewsMedia.scss'
import '../styles/Article.scss'
import '../styles/ArticleMedia.scss'
import '../styles/Feed.scss'
import '../styles/FeedMedia.scss'
import '../styles/FeedItem.scss'
import '../styles/FeedItemMedia.scss'
import '../styles/Breadcrumbs.scss'
import '../styles/BreadcrumbsMedia.scss'
import '../styles/Comments.scss'
import '../styles/CommentsMedia.scss'
import '../styles/Comment.scss'
import '../styles/CommentMedia.scss'
import '../styles/Article.scss'
import '../styles/ArticleMedia.scss'
import '../styles/ArticleSection.scss'
import '../styles/ArticleSectionMedia.scss'
import '../styles/MoreNews.scss'
import '../styles/MoreNewsMedia.scss'
import '../styles/AllArticles.scss'
import '../styles/FineArt.scss'
import '../styles/FineArtMedia.scss'
import '../styles/Filter.scss'
import '../styles/FilterMedia.scss'
import '../styles/OpenedPicture.scss'
import '../styles/OpenedPictureMedia.scss'
import '../styles/Story.scss'
import '../styles/StoryMedia.scss'
import '../styles/WorkPage.scss'
import '../styles/WorkPageMedia.scss'
import '../styles/WorkItem.scss'
import '../styles/WorkItemMedia.scss'
import '../styles/SavedWorks.scss'
import '../styles/AllWorks.scss'
import '../styles/AllWorksMedia.scss'
import '../styles/PostAJob.scss'
import '../styles/PostAJobMedia.scss'
import '../styles/PostedWorks.scss'
import '../styles/ProposalWorks.scss'
import '../styles/OngoingWorks.scss'
import '../styles/Palette.scss'
import '../styles/PaletteMedia.scss'
import '../styles/Basket.scss'
import '../styles/BasketMedia.scss'
import '../styles/BasketItem.scss'
import '../styles/BasketItemMedia.scss'
import '../styles/Auctions.scss'
import '../styles/AuctionsMedia.scss'
import '../styles/AuctionsMedia.scss'
import '../styles/AuctionPage.scss'
import '../styles/AuctionPageMedia.scss'
import '../styles/Events.scss'
import '../styles/EventsMedia.scss'
import '../styles/EventPage.scss'
import '../styles/EventPageMedia.scss'
import '../styles/Profile.scss'
import '../styles/ProfileMedia.scss'
import '../styles/Portfolio.scss'
import '../styles/PortfolioMedia.scss'
import '../styles/PortfolioPage.scss'
import '../styles/MessagesPage.scss'
import '../styles/MessagesPageMedia.scss'
import '../styles/Friends.scss'
import '../styles/FriendsMedia.scss'
import '../styles/Pay.scss'
import '../styles/PayMedia.scss'
import '../styles/Thanks.scss'
import '../styles/ThanksMedia.scss'
import '../styles/Analitics.scss'
import '../styles/AnaliticsMedia.scss'
import '../styles/Verify.scss'
import '../styles/VerifyMedia.scss'
import '../styles/Offer.scss'
import '../styles/OfferMedia.scss'
import '../styles/AddQuestion.scss'
import '../styles/AddQuestionMedia.scss'
import '../styles/AddBasket.scss'
import '../styles/AddBasketMedia.scss'
import '../styles/WorkDescribe.scss'
import '../styles/WorkDescribeMedia.scss'
import '../styles/WorkSubmit.scss'
import '../styles/WorkSubmitMedia.scss'
import '../styles/AddArtWork.scss'
import '../styles/AddArtWorkMedia.scss'
import '../styles/SingIn.scss'
import '../styles/SingInMedia.scss'
import '../styles/AddArticle.scss'
import '../styles/AddArticleMedia.scss'
import '../styles/CreateEvent.scss'
import '../styles/CreateEventMedia.scss'
import '../styles/Hint.scss'

import NextNprogress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
 	return <>
		<NextNprogress
		color="#001fff"
		startPosition={0}
		stopDelayMs={200}
		height="2"
		options={{
			showSpinner: false
		}}
		/>
		<Component {...pageProps} />
	</> 
}