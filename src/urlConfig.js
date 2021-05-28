// Replace the https://f2w5o7vsrc.execute-api.us-east-2.amazonaws.com with your APIGateway Invoke URL except /alpha"
let urlConfig = {
    backend: "https://mopu3o2xt5.execute-api.us-east-1.amazonaws.com"
}

urlConfig.RatingGetAPI = urlConfig.backend + "/alpha/rating?entity=Example%20Burger";
urlConfig.RestaurantFoodGetAPI = urlConfig.backend + "/alpha/restaurant/food?restaurant_name=";
urlConfig.RestaurantByFilterGetAPI = urlConfig.backend + "/alpha/restaurant/";
urlConfig.RestaurantByPriceGetAPI = urlConfig.backend + "/alpha/restaurant/by_price"
urlConfig.RestaurantByRatingGetAPI = urlConfig.backend + "/alpha/restaurant/by_rating"
urlConfig.OrderPostAPI = urlConfig.backend + "/alpha/order";
urlConfig.RatingPostAPI = urlConfig.backend + "/alpha/rating";
urlConfig.SearchPostAPI = urlConfig.backend + "/alpha/restaurant/search?prefix=";

export default urlConfig;
