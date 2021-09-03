import React from "react"

function JobsResults({ filteredData }) {
	if (filteredData.length > 1) {
		return (
			<ul id="departments">
				{filteredData.map((department, i) => {
					if (department.name != "No Department" && department.jobs.length) {
						return (
							<li key={i}>
								<h2>{department.name}</h2>
								<ul>
									{department.jobs.map((job, i) => {
										return (
											<li key={i}>
												<a href={job.absolute_url}>{job.title}</a>
												<span>&nbsp;-&nbsp;{job.location.name}</span>
											</li>
										)
									})}
								</ul>
							</li>
						)
					}
				})}
			</ul>
		)
	} else if (filteredData.length === 1 && filteredData[0].jobs.length) {
		return (
			<ul id="departments">
				<li>
					<h2>{filteredData[0].name}</h2>
					<ul>
						{filteredData[0].jobs.map((job, i) => {
							return (
								<li key={i}>
									<a href={job.absolute_url}>{job.title}</a>
									<span>&nbsp;-&nbsp;{job.location.name}</span>
								</li>
							)
						})}
					</ul>
				</li>
			</ul>
		)
	} else {
		return (
			<ul id="departments">
				<li>
					<h2>{filteredData[0].name}</h2>
					<ul>
						<li>Sorry, there are no openings in this department at this time.</li>
					</ul>
				</li>
			</ul>
		)
	}
}

export default JobsResults
