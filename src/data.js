import tour1Img from './images/tour-1.jpeg'
import tour2Img from './images/tour-2.jpeg'
import tour3Img from './images/tour-3.jpeg'
import tour4Img from './images/tour-4.jpeg'


export const pageLinks = [
    { id: 1, href:'#home', text: 'home' },
    { id: 2, href:'#about', text: 'about' },
    { id: 3, href:'#services', text: 'services' },
    { id: 4, href:'#tours', text: 'tours' }
]

export const socialLinks = [
    { id: 1, href: "https://www.facebook.com", icon: "facebook" },
    { id: 2, href: "https://www.twitter.com", icon: "twitter" },
    { id: 3, href: "https://www.squarespace.com", icon: "squarespace" }
]

export const footerLinks = [
    { id:1, href:'#home', text: 'home' },
    { id:2, href:'#about', text: 'about' },
    { id:3, href:'#services', text: 'services' },
    { id:4, href:'#featured', text: 'featured' }
]

export const services = [
    { id: 1, title: "saving money", icon: "wallet", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." },
    { id: 2, title: "endless hiking", icon: "tree", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." },
    { id: 3, title: "amazing comfort", icon: "socks", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." }
]

export const tours = [
    { id: 1, image: tour1Img, date: "august 26th, 2020", title: "Tibet Adventure", info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", place: "china", days: "6", price: "$2100" },
    { id: 2, image: tour2Img, date: "october 1th, 2020", title: "best of java", info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", place: "indonesia", days: "11", price: "$1400" },
    { id: 3, image: tour3Img, date: "september 15th, 2020", title: "explore hong kong", info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", place: "hong kong", days: "8", price: "$5000" },
    { id: 4, image: tour4Img, date: "december 5th, 2019", title: "kenya highlights", info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", place: "kenya", days: "20", price: "$3300" }
]