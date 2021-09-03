import React from "react"

function JobsFilter({ allData, handleChange }) {
	return (
		<div className="container">
			<div className="department-container">
				<p>Filter by Department</p>
				<div className="department-filter" onChange={handleChange}>
					<div className="radio" key="0">
						<input id="0" type="radio" name="department" value="0" defaultChecked />
						<label htmlFor="0">All Departments</label>
					</div>

					{allData.map((department, index) => {
						if (department.name != "No Department") {
							return (
								<div className="radio" key={index + 1}>
									<input id={department.id} type="radio" name="department" value={department.id} />
									<label htmlFor={department.id}>{department.name}</label>
								</div>
							)
						}
					})}
				</div>
			</div>
		</div>
	)
}

export default JobsFilter
