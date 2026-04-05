import { GraphQLClient } from 'graphql-request'

const QUERY = `
	query dataFetching($locale: Locale!){
		techCards{
			id
			title
			image{
				url
			}
		}
		projectCards(locales: [$locale], orderBy: display_order_ASC) {
			title
			description
			exampleUrl
			githubUrl
			localizations(includeCurrent: true){
				image {
					url
				} 
			}
		}
	}
`

export async function fetchPortfolioData(locale) {
	const url = process.env.URL_GRAPHCMS
	const token = process.env.TOKEN_GRAPHCMS

	if (!url || !token) {
		return { techCards: [], projectCards: [] }
	}

	try {
		const graphcms = new GraphQLClient(url, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		})

		const { techCards, projectCards } = await graphcms.request(QUERY, { locale })
		return { techCards, projectCards }
	} catch {
		return { techCards: [], projectCards: [] }
	}
}
