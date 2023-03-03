import { useState } from 'react'
import { SearchResultsTypes } from "./modules/types"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import Content from "./components/Content"
import Footer from './components/Footer';
import "./sass/index.scss";


function App() {
  const [ searchResults, setSearchResults] = useState<Array<SearchResultsTypes>>([])

  const apiKey = import.meta.env.VITE__API__KEY;

  async function requestFetch(ingredientName: string){
     // check to avoid refetching
     const check = localStorage.getItem(ingredientName)  

     if(check){
      setSearchResults(JSON.parse(check))
    }else{
      await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&includeIngredients=${ingredientName}&sort=popularity&diet=vegan`)
        .then(res=>res.json())
        .then(data=>{
          setSearchResults(data.results)
          localStorage.setItem(ingredientName, JSON.stringify(data.results))
        })
        .catch(e=>setSearchResults([]))
    }
  }


  return (
    <div className="app">
        <Header/>
        <SearchBar requestFetch={requestFetch}/>
        <Content searchResults={searchResults}/>
        <Footer/>
    </div>
  )
}

export default App
