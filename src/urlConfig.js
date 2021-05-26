let urlConfig = {
    backend: "https://8nmatnl44j.execute-api.us-east-1.amazonaws.com"
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
