import pic1 from '../assets/bg-pic.png'
import './Home.css'
import { Link } from 'react-router'
import Header from './header'


function Home() {
    return (
        
        <>
            <title>IY-Home</title>

            <div className="home">
                <img className="bg" src={pic1} alt="img" />

                <Header />
                <div className="content">
                    <div className="title">
                        <h1>IY Sweets</h1>
                    </div>
                    <div className="text">
                        <p>لمسة بيتية… مذاق لا يُنسى</p>
                        <p className="p2">Fresh Handmade</p>
                        <Link to="/menu">عرض المنتجات</Link>                           
                    </div>
                 
                </div>

            </div>
        </>
    )
}

export default Home