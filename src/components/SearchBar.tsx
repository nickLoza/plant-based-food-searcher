import React, { useEffect } from "react"
import { useState } from "react"
import { BsSearch } from "react-icons/bs";

interface RequestFetchTypes{
	requestFetch: Function
}

const regex = new RegExp("^(?! )[A-Za-z\s]*$");

const SearchBar = ({requestFetch}: RequestFetchTypes)=>{
	const [ inputValue, setInputValue ] = useState<string>("")
	const [ lastValue, setLastValue ] = useState<string>("")

	useEffect(()=>{
    	requestFetch("chickpea")
    	setLastValue("chickpea")
  	},[])

	function handleOnChange(e: React.ChangeEvent<HTMLInputElement>){
		if(regex.test(e.target.value)) setInputValue(e.target.value)
	}
	function handleOnClick(){
		if(inputValue != "") {
			requestFetch(inputValue)
			setLastValue(inputValue)
		}
	}
	function handleOnKeyUp(e: React.KeyboardEvent<HTMLInputElement>){
		if(e.key === 'Enter' && inputValue != "") {
			requestFetch(inputValue)
			setLastValue(inputValue)
		}
	}
	return (
		<div className="search-bar">
			<div className="search-bar__field field">
				<input 
					type="text" 
					name="search" 
					className="field__input"
					placeholder="Search an ingredient..."
					onChange={handleOnChange} 
					onKeyUp={handleOnKeyUp}
					value={inputValue} 
					autoComplete="off"/>
			<BsSearch 
				className="field__btn"
				onClick={handleOnClick}/>
			</div>
		<h2 className="search-bar__title">Recipes with {lastValue}:</h2>
		</div>
	)
}

export default SearchBar;