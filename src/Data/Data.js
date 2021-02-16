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
            img: [nf1, exBur]
        },
        {
            category: "Example Mexican",
            available: "Fast Food, Chicken",
            time: 40,
            ratings: 4.8,
            reviews: 9772,
            delivery: 2.50,
            img: [nf2, exMex]
        },
        {
            category: "Example Cafe",
            available: "Fast Food, Coffee",
            time: 15,
            ratings: 4.6,
            reviews: 1256,
            delivery: 3.99,
            img: [nm2, exCafe]
        }
    ]
}