// Libraries
import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import axios from "axios"
// Styles
import "./index.scss"
// Modules
import JobsFilter from "./scripts/JobsFilter"
import JobsResults from "./scripts/JobsResults"
import LoadingDots from "./scripts/LoadingDots"

//NEED TO FIGURE OUT HOW TO USE QUERY VARIABLES FROM URL TO PRE-FILTER RESULTS

function Main() {
	// const queryVars = padnosData.queryVars
	// const pathname = window.location.pathname
	// let defaultValue = queryVars ? queryVars : 0
	const [allData, setAllData] = useState()
	const [filteredData, setFilteredData] = useState()
	const [isLoading, setIsLoading] = useState(true)
	const [filteredValue, setFilteredValue] = useState(0)

	useEffect(() => {
		getResults()
	}, [])

	const getResults = async () => {
		const url = "https://api.greenhouse.io/v1/boards/padnos/embed/departments"
		try {
			const response = await axios.get(url)
			setAllData(response.data.departments)
			setFilteredData(response.data.departments)
			setIsLoading(false)
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		if (filteredValue == 0) {
			setFilteredData(allData)
			// window.history.pushState("object or string", "Title", `${pathname}`)
		} else {
			let result = []
			let found = allData.filter(data => {
				if (data.id == filteredValue) {
					return data
				}
			})
			result.push(found[0])
			setFilteredData(result)
			// window.history.pushState("object or string", "Title", `${pathname}?department=${result[0].id}`)
		}
	}, [filteredValue])

	const handleChange = e => {
		setFilteredValue(e.target.value)
	}

	if (!isLoading) {
		return (
			<>
				<JobsFilter allData={allData} handleChange={handleChange} />
				<JobsResults filteredData={filteredData} />
			</>
		)
	} else {
		return <LoadingDots />
	}
}

ReactDOM.render(<Main />, document.querySelector("#grnhse_app"))

export default Main
