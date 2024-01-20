import logo from '../../images/logo.png';
import food from '../../images/food.png'
import foo1 from '../../images/foo1.png'
export const URLL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const RES_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId="
export const HOMEPAGE_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
const reslist = [
    { 
        id:'1',
        name:"xeros",
        cuisine:"North India, biryani",
        rating: "4.5",
        img: logo
    },
    { 
        id:'2',
        name:"kareems",
        cuisine:"South India, Idli, dosa",
        rating: "4",
        img: food
    },
    {
        id:'3',
        name:"orion",
        cuisine:"East-West prawns",
        rating:"3.5",
        img:foo1
    }
]



