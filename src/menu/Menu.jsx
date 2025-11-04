import Header from '../home/header'
import './Menu.css'
import { Link } from 'react-router'
import cheeseCake from '../assets/cheeseCake.jpg'
import cupCake from '../assets/cup.jpg'
import cakeWithMilk from '../assets/cakeWithMilk.jpg'
import aklear from '../../src/assets/aklear.jpg'
import norCake from '../../src/assets/norCake.jpg'
import iceCake from '../../src/assets/iceCake.jpg'

function Menu() {

    const items = [
        {
            id: crypto.randomUUID(),
            src: cheeseCake,
            title: 'تشيز كيك',
            link: '/menu/cheeseCake',
        },
        {
            id: crypto.randomUUID(),
            src: cupCake,
            title: 'كاسة كيك',
            link: '/menu/cupCake', 
        },
        {
            id: crypto.randomUUID(),
            src: cakeWithMilk,
            title: "كيكة بالحليب",
            link: '/menu/cakeWithMilk',
        },
        {
            id: crypto.randomUUID(),
            src: aklear,
            title: "اكلير",
            link: '/menu/aklear',
        },
        {
            id: crypto.randomUUID(),
            src: iceCake,
            title: 'ايسكريم كيك',
            link: '/menu/iceCake',
        },
        {
            id: crypto.randomUUID(),
            src: norCake,
            title: 'كيك سادة',
            link: '/menu/norCake',
        }
    ]

    return (
        <>
            <title>IY-Menu</title>
            <div className="menu">
                <Header />

                <div className="container">
                    {items.map((item) => (
                        <Link className="item" key={item.id} to={item.link}>
                            <img src={item.src} alt="img"/>
                            <h2 className='title'>{item.title}</h2>
                        </Link>
                    ))}
                </div>             
            </div>

        </>
    )
}

export default Menu