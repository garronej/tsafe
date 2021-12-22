import ReactDOM from "react-dom";
import {memo} from "react";
import { GlTemplate } from "gitlanding/GlTemplate";
import {ThemeProvider} from "./theme";
import {GlHeader} from "gitlanding/GlHeader";
import logoPng from "./assets/img/logo.png";
import {GlLogo} from "gitlanding/utils/GlLogo";
import { GlHero } from "gitlanding/GlHero";
import { makeStyles } from "gitlanding/theme";
import { GlFooter } from "gitlanding/GlFooter";
import heroMp4 from "./assets/videos/hero.mp4"
import { GlArticle } from "gitlanding/GlArticle";
import { GlIllustration } from "gitlanding/GlIllustration";
import assertMp4 from "./assets/videos/tsafeAssert.mp4";
import {breakpointsValues} from "gitlanding/theme";
import equalsMp4 from "./assets/videos/equals.mp4";
import { GlSectionDivider } from "gitlanding/GlSectionDivider";


const useStyles = makeStyles()(
	theme => ({
		"header": {
			"display": "flex"
		},

		"headerTitle": {
			"paddingLeft": theme.spacing(3),
		},
		"sectionIllustration": {
			"maxWidth": theme.windowInnerWidth >= breakpointsValues.sm ? 500 : undefined,
		},
		"articleContent": {
			...(theme.windowInnerWidth < breakpointsValues.md &&
				theme.windowInnerWidth >= breakpointsValues.sm
				? {
				"alignItems": "center"
			} : {})
		},
		"articlesTitle": {
			"textAlign": "center",
			...theme.typography.variants["page heading"].style

		},
		"sectionDivider": {
			"width": 300

		}

	}))

const App = memo(() => {

	const { classes } = useStyles();

	return <GlTemplate
		headerOptions={
			{
				"position": "fixed",
				"isRetracted": "smart"
			}
		}
		footer={<GlFooter
			bottomDivContent="M I T Licence"
			links={[
				{
					"title": "Github",
					"href": "https://github.com/garronej/tsafe"
				},
				{
					"title": "Documentation",
					"href": "https://docs.tsafe.dev/"

				}

			]}
		/>}
		header={<GlHeader
			title={<div className={classes.header}><GlLogo height={60} width={50} logoUrl={logoPng} /><h3 className={classes.headerTitle}>Tsafe</h3></div>}
			links={[
				{
					"label": "GITHUB",
					"link": {
						"href": "https://github.com/garronej/tsafe",
					}
				},
				{
					"label": "DOCUMENTATION",
					"link": {
						"href": "https://docs.tsafe.dev/"
					}
				}
			]}
			enableDarkModeSwitch={true}
			githubRepoUrl="https://github.com/garronej/tsafe"
			githubButtonSize="large"
			showGithubStarCount
		/>}
	>
		<GlHero
			title="Take full advantage of what TypeScript can offer"
			subTitle="A collection of utilities that makes your TS code cleaner and safer"
			imageSrc={heroMp4}
			hasImageShadow={true}
			linkToSectionBelowId="firstSection"
		/>

		<h3 id="firstSection" className={classes.articlesTitle}>
			A few examples to convince you of Tsafe's usefulness
		</h3>

		<GlSectionDivider 
			className={classes.sectionDivider}
		/>

		<GlArticle
			classes={{
				"contentWrapper": classes.articleContent
			}}
			body="Assert things you know to be true, and get runtime errors when you are wrong about those assertions."
			buttonLabel="Learn More"
			buttonLink={
				{
					"href": "https://docs.tsafe.dev/main/assert"
				}
			}
			illustrationPosition="left"
			illustration={<GlIllustration
				type="image"
				url={assertMp4}
				className={classes.sectionIllustration}
				hasShadow={true}
			/>}
			hasAnimation={true}

		/>

		<GlSectionDivider />

		<GlArticle
			classes={{
				"contentWrapper": classes.articleContent
			}}
			body="Test the type definitions of your API's"
			buttonLabel="Learn More"
			buttonLink={
				{
					"href": "https://docs.tsafe.dev/main/equals"
				}
			}
			illustration={<GlIllustration
				type="image"
				url={equalsMp4}
				hasShadow={true}
				className={classes.sectionIllustration}
			/>}
			hasAnimation={true}
		/>

		<GlSectionDivider />

		<GlArticle
			classes={{
				"contentWrapper": classes.articleContent
			}}
			body="Make typescript believe what ever you say"
			buttonLabel="Learn More"
			buttonLink={
				{
					"href": "https://docs.tsafe.dev/main/equals"
				}
			}
			illustrationPosition="left"
			illustration={<GlIllustration
				type="image"
				url={heroMp4}
				hasShadow={true}
				className={classes.sectionIllustration}
			/>}
			hasAnimation={true}
		/>

	</GlTemplate>


})


ReactDOM.render(
	<ThemeProvider>
		<App />
	</ThemeProvider>,
	document.getElementById("root")
);