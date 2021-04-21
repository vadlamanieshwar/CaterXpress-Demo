let urlConfig = {
    backend: "https://f2w5o7vsrc.execute-api.us-east-2.amazonaws.com"
}

urlConfig.RatingGetAPI = urlConfig.backend + "/alpha/rating?entity=Example%20Burger";
urlConfig.RestaurantFoodGetAPI = urlConfig.backend + "/alpha/restaurant/food?restaurant_name=";
urlConfig.RestaurantByFilterGetAPI = urlConfig.backend + "/alpha/restaurant/";
urlConfig.RestaurantByPriceGetAPI = urlConfig.backend + "/alpha/restaurant/filter";
urlConfig.RestaurantByRatingGetAPI = urlConfig.backend + "/alpha/restaurant/rating";
urlConfig.OrderPostAPI = urlConfig.backend + "/alpha/order";
urlConfig.RatingPostAPI = urlConfig.backend + "/alpha/rating";
urlConfig.SearchPostAPI = urlConfig.backend + "/alpha/search";

export default urlConfig;