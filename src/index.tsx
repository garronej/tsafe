import ReactDOM from "react-dom";
import { HomepageTemplate } from "homepage-template";
import heroImgUrl from "assets/img/hero.png";

ReactDOM.render(
	<HomepageTemplate
		header={{
			"title": "tsafe",
			"subTitle": "Leverage the more advanced features of TypeScript",
			"imageUrl": heroImgUrl,
			"topBarProps": {
				"githubRepoUrl": "https://github.com/garronej/tsafe",
				"documentationUrl": "https://docs.tsafe.dev",
			},
			"buttons": [
				{
					"name": "Documentation",
					"url": "https://docs.tsafe.dev"
				}
			]
		}}
	/>,
	document.getElementById("root")
);