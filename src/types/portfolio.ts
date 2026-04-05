/** Shape returned by the portfolio GraphQL query (tech + projects). */
export type TechCardDTO = {
	id: string
	title: string
	image: { url: string }
}

export type ProjectCardDTO = {
	title: string
	description: string
	exampleUrl: string
	githubUrl: string
	localizations?: Array<{ image?: { url: string } | null } | null> | null
}

export type PortfolioQueryResult = {
	techCards: TechCardDTO[]
	projectCards: ProjectCardDTO[]
}
