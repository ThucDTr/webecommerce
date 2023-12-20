import { Link } from "react-router-dom";
import "./style.scss"
import { AiOutlineFacebook, 
         AiOutlineLinkedin,
         AiOutlineInstagram,
         AiOutlineTwitter,
         AiOutlineUser,
         AiOutlineMail,
         AiOutlineShoppingCart
        } from "react-icons/ai";
import { formater } from "../../../../utils/formater";
import { useState } from "react"; 
import { ROUTERS }  from  "../../../../utils/router"

function Header() {
    const [menus, setMenus] = useState([
        {
            name: "Trang Chủ",
            path: ROUTERS.USER.HOME
        },
        {
            name: "Cửa Hàng",
            path: ROUTERS.USER.PRODUCTS
        }, 
        {
            name: "Sản Phẩm",
            path: "",
            chil: [
                {
                    name: "Áo",
                    path: ""
                },
                {
                    name: "Quần",
                    path: ""
                },
                {
                    name: "Giày",
                    path: ""
                },
                {
                    name: "Túi xách",
                    path: ""
                },
            ]     
        },
        {
            name: "Bài Viết",
            path: ""
        },
        {
            name: "Liên Hệ",
            path: ""
        },
    ])
    return ( 
        <>
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-6 header__top_left"> 
                        <ul>
                            <li>
                                <AiOutlineMail />
                                nguyenhongthuctk@gmail.com
                            </li>
                            <li>miễn phí ship đơn từ {formater(200000)}</li>
                        </ul>
                    </div>
                    <div className="col-6 header__top_right"> 
                        <ul>
                            <Link to="">
                                <li><AiOutlineFacebook /></li>
                            </Link>
                            <Link to="">
                                <li><AiOutlineInstagram /></li>
                            </Link>
                            <Link to="">
                                <li><AiOutlineLinkedin /></li>
                            </Link>
                            <Link to="">
                                <li><AiOutlineTwitter /></li>
                            </Link>                     
                            <li>
                                <Link to="">
                                    <li><AiOutlineUser /></li>
                                </Link>     
                                <span>Đăng nhập</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            </div>
        <div className="header__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3">
                            <div className="header__logo">
                                <h1>SHOP CART</h1>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <nav className="header__menu">
                                <ul>
                                    {menus?.map((item, key) => (
                                        <li key={key} className={key === 0 ? "active" : ""}>
                                            <Link to={item.path}>{item.name}</Link>
                                            {item.chil && (
                                                <ul className="header__menu__dropdown">
                                                    {item.chil.map((childItem, childkey) => (
                                                        <li key={`${key}-${childkey}`}>
                                                            <Link to={childItem.path}>{childItem.name}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}                                
                                        </li>
                                    ))}
                                </ul>

                            </nav>
                        </div>
                        <div className="col-xl-3">
                            <div className="header__cart">
                                <div className="header__cart_price">
                                <span> {formater(1001230)}</span>
                                </div>
                                <ul>
                                    <li>
                                        <Link to={"#"}><AiOutlineShoppingCart /></Link>
                                        <span>5</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                            
                    </div>
                </div>
        </div>
            
        </>
     );
}

export default Header;