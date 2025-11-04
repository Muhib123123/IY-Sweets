import { Link } from 'react-router'
import './header.css'
import pic2 from '../assets/logo.png'


function Header () {
    return (
  
        <div className="header">
            <Link className='logo' to="/"><img src={pic2} alt="" /></Link>
                    
            <Link to="/menu">عرض القائمة</Link>
        </div>

    )
}

export default Header