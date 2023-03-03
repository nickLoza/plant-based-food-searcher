import { SearchResultsTypes } from "../modules/types"



interface ContentPropTypes{
	searchResults: Array<SearchResultsTypes>
}

const Content = ({searchResults}: ContentPropTypes)=>{

	function renderDishes(){
		return (
			<>
			{searchResults.map((dish)=>{
				return (
					<div key={dish.id} className="content__box" onClick={()=>{
						window.open("//" + "google.com/search?q=" + dish.title+" recipe", '_blank')
					}}>
						<img 
							src={`${dish.image}`} 
							alt="dish image" 
							className="content__box-img"/>
						<h2 className="content__box-title">{dish.title}</h2>
					</div>
				)
			})}
			</>
		)
	}


	return(
		<div className="content">
			{searchResults.length > 0 ?
				renderDishes() :
				<h4 className="content__error">No recipes found</h4>}
		</div>
	)
}


export default Content;