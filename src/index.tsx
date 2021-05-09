import ReactDOM from "react-dom";
import { HomepageTemplate } from "homepage-template";
import type { Data } from "homepage-template";

const data: Data = {
  "header": {
    "title": "tsafe",
    "subTitle": "Leverage the more advanced features of TypeScript",
    "imageUrl": "https://user-images.githubusercontent.com/6702424/117558675-ab86b780-b07f-11eb-8b7e-e7ed1555a388.png"
  }
};

ReactDOM.render(
  <HomepageTemplate {...data} />,
  document.getElementById("root")
);