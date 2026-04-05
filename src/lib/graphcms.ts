import { GraphQLClient } from 'graphql-request'
import type { PortfolioQueryResult } from '@/types/portfolio'

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

export async function fetchPortfolioData(locale: string): Promise<PortfolioQueryResult> {
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

		const data = await graphcms.request<PortfolioQueryResult>(QUERY, { locale })
		return data
	} catch {
		return { techCards: [], projectCards: [] }
	}
}
