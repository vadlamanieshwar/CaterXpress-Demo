let urlConfig = {
    backend: "https://f2w5o7vsrc.execute-api.us-east-2.amazonaws.com"
}

urlConfig.RatingGetAPI = "https://f2w5o7vsrc.execute-api.us-east-2.amazonaws.com/alpha/rating?entity=Example%20Burger";
urlConfig.RestaurantFoodGetAPI = "https://f2w5o7vsrc.execute-api.us-east-2.amazonaws.com/alpha/restaurant/food?restaurant_name=";
urlConfig.RestaurantByFilterGetAPI = "https://f2w5o7vsrc.execute-api.us-east-2.amazonaws.com/alpha/restaurant/";
urlConfig.OrderPostAPI = "https://f2w5o7vsrc.execute-api.us-east-2.amazonaws.com/alpha/order";
urlConfig.RatingPostAPI = "https://f2w5o7vsrc.execute-api.us-east-2.amazonaws.com/alpha/rating";

export default urlConfig;