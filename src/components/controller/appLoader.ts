import Loader from "./loader";

class AppLoader extends Loader {
  constructor() {
    super("https://nodenews.up.railway.app/", {   //https://newsapi.org/v2/
      apiKey: "ce877a3f201441f092f3e0f41edc87e4", // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
