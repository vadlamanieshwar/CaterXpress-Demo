import nm1 from '../Assets/img/nm1.png';
import nm2 from '../Assets/img/nm2.png';
import nm3 from '../Assets/img/nm3.png';
import nf1 from '../Assets/img/nf1.png';
import nf2 from '../Assets/img/nf2.png';
import nf3 from '../Assets/img/nf3.png';
import pny1 from '../Assets/img/pny1.png';
import pny2 from '../Assets/img/pny2.png';
import pny3 from '../Assets/img/pny3.png';
import he1 from '../Assets/img/he1.png';
import he2 from '../Assets/img/he2.png';
import he3 from '../Assets/img/he3.png';
import exBur from '../Assets/img/exBur.png';
import exMex from '../Assets/img/exMex.png';
import exCafe from '../Assets/img/exCafe.png';
import bur1 from '../Assets/img/bur1.png';
import exMex2 from '../Assets/img/exMex2.png';
import exCafe2 from '../Assets/img/exCafe2.png';

export const Mainmenu =
{
    data: [
        {
            category: "New on Cater Xpress",
            options: [
                {
                    img: nm1,
                    restaurant: "Express Chinese",
                    rate: "3.99",
                    time: 30
                },
                {
                    img: nm2,
                    restaurant: "Express Cafe",
                    rate: "2.99",
                    time: 20
                },
                {
                    img: nm3,
                    restaurant: "Any company Mongolian",
                    rate: "4.99",
                    time: 45
                }
            ]
        },
        {
            category: "National Favorites",
            options: [
                {
                    img: nf1,
                    restaurant: "Example Burger",
                    rate: "3.99",
                    time: 30
                },
                {
                    img: nf2,
                    restaurant: "EgRestaurant Spanish",
                    rate: "2.99",
                    time: 20
                },
                {
                    img: nf3,
                    restaurant: "EgRestaurant Indian",
                    rate: "4.99",
                    time: 45
                }
            ]
        }
    ]
}

export const Menu =
{ 
    data: [
    {
        category: "Near Me",
        options: [
            {
                img: nm1,
                restaurant: "Express Chinese",
                rate: "3.99",
                time: 30
            },
            {
                img: nm2,
                restaurant: "Express Cafe",
                rate: "2.99",
                time: 20
            },
            {
                img: nm3,
                restaurant: "Any company Mongolian",
                rate: "4.99",
                time: 45
            }
        ]
    },
    {
        category: "Popular Near You",
        options: [
            {
                img: pny1,
                restaurant: "Any company Asian",
                rate: "3.99",
                time: 30
            },
            {
                img: pny2,
                restaurant: "Example Steaks",
                rate: "2.99",
                time: 20
            },
            {
                img: pny3,
                restaurant: "EgRestaurant African",
                rate: "4.99",
                time: 45
            }
        ]
    },
    {
        category: "National Favorites",
        options: [
            {
                img: nf1,
                restaurant: "Example Burger",
                rate: "3.99",
                time: 30
            },
            {
                img: nf2,
                restaurant: "EgRestaurant Spanish",
                rate: "2.99",
                time: 20
            },
            {
                img: nf3,
                restaurant: "EgRestaurant Indian",
                rate: "4.99",
                time: 45
            }
        ]
    },
    {
        category: "Healthy Eating",
        options: [
            {
                img: he1,
                restaurant: "AnyCompany Steaks",
                rate: "3.99",
                time: 30
            },
            {
                img: he2,
                restaurant: "Express Burgers",
                rate: "2.99",
                time: 20
            },
            {
                img: he3,
                restaurant: "Express Japanese",
                rate: "4.99",
                time: 45
            }
        ]
    }
]
}

export const FilterMenu = {
    data: [
        {
            category: "Example Burger",
            available: "Fast Food, Burgers",
            time: 30,
            ratings: 4.5,
            reviews: 4572,
            delivery: 1.99,
            img: [exBur, bur1]
        },
        {
            category: "Example Mexican",
            available: "Fast Food, Chicken",
            time: 40,
            ratings: 4.8,
            reviews: 9772,
            delivery: 2.50,
            img: [exMex2, exMex]
        },
        {
            category: "Example Cafe",
            available: "Fast Food, Coffee",
            time: 15,
            ratings: 4.6,
            reviews: 1256,
            delivery: 3.99,
            img: [exCafe2, exCafe]
        }
    ]
}

export const viewAll = {
    data: [{
        "name": "Example Burger",
        "createdAt": "2021-02-10 11:19:40",
        "updatedAt": "2021-02-10 11:19:40",
        "type1": "Fast Food",
        "type2": "Burgers",
        "avgprice": 8,
        "address": "450 Talbot Street Princeton, NJ 08540",
        "orderinfo": [{
            "delivertime": 30,
            "rating": 4.5,
            "reviewno": 4572,
            "deliveryfee": 1.99
        }],
        "foodImages": [{
            "url": "https://master.d30yb4or234i1a.amplifyapp.com/static/media/nf1.53d5287f.png",
            "caption": "nf1"
        }, {
            "url": "https://master.d30yb4or234i1a.amplifyapp.com/static/media/exBur.d5eedaed.png",
            "caption": "exBur"
        }]
    }, {
        "name": "Example Mexican",
        "createdAt": "2021-02-10 11:19:40",
        "updatedAt": "2021-02-10 11:19:40",
        "type1": "Fast Food",
        "type2": "Chicken",
        "avgprice": 20,
        "address": {
            "street": "8773 E. New Saddle Lane Westford",
            "location": "Westford, MA",
            "zipcode": "01886"
        },
        "orderinfo": [{
            "delivertime": 40,
            "rating": 4.8,
            "reviewno": 9772,
            "deliveryfee": 2.5
        }],
        "foodImages": [{
            "url": "https://master.d30yb4or234i1a.amplifyapp.com/static/media/nf2.8b3a02cb.png",
            "caption": "nf2"
        }, {
            "url": "https://master.d30yb4or234i1a.amplifyapp.com/static/media/exMex.9d072dd6.png",
            "caption": "exMex"
        }]
    }, {
        "name": "Example Cafe",
        "createdAt": "2021-02-22 11:19:40",
        "updatedAt": "2021-02-22 11:19:40",
        "type1": "Fast Food",
        "type2": "Coffee",
        "avgprice": 10,
        "address": "23 La Sierra Drive Little Falls, NJ 07424",
        "orderinfo": [{
            "delivertime": 15,
            "rating": 4.6,
            "reviewno": 1256,
            "deliveryfee": 3.99
        }],
        "foodImages": [{
            "url": "https://master.d30yb4or234i1a.amplifyapp.com/static/media/exCafe2.2819e3b4.png",
            "caption": "exCafe2"
        }, {
            "url": "https://master.d30yb4or234i1a.amplifyapp.com/static/media/exCafe.0097b0d0.png",
            "caption": "exCafe"
        }]
    }]}