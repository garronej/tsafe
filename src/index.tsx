import ReactDOM from "react-dom";
import { HomepageTemplate } from "homepage-template";
import gifUrl from "assets/img/tsafe.gif";
import bannerBackgroundUrl from "assets/img/banner_background.jpg";

ReactDOM.render(
	<HomepageTemplate
		header={{
			"background": {
				"type": "image",
				"colorOrUrlDark": bannerBackgroundUrl,
				"colorOrUrlLight": bannerBackgroundUrl
			},
			"title": "tsafe",
			"subTitle": "A collection of utilities that makes your TS code cleaner and safer",
			"imageUrl": gifUrl,
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