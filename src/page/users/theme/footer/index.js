import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineTwitter
} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./style.scss";
function Footer() {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-xs-12">
                        <div className="footer__about">
                            <h1 className="footer__about__logo">SHOP CART</h1>
                            <ul>
                                <li>Địa chỉ: 354/7 Trần Cao vân</li>
                                <li>Phone: 0563923570</li>
                                <li>Email: nguyenhongthuctk@gmail.com</li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className="footer__contact">
                            <h3>Cửa hàng</h3>
                            <div className="footer__contact__row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li>Liên hệ</li>
                                        <li>Thông tin về chúng tôi</li>
                                        <li>Sản phẩm doanh nghiệp</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li>Thông tin tài khoản</li>
                                        <li>Giỏ hàng</li>
                                        <li>Danh sách ưa thích</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-xs-12">
                        <div className="footer__widget">
                            <h3>Khuyến mãi & ưu đãi</h3>
                            <p>Đăng ký nhận thông tin tại đây</p>
                            <form action="#">
                                <div className="footer__widget__form">
                                    <input type="text" placeholder="Nhập email" />
                                    <button type="submit" className="button__submit">
                                        Đăng Ký
                                    </button>
                                </div>
                                <div className="footer__widget__social">
                                    <div>
                                        <Link to="">
                                        <AiOutlineFacebook />
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="">
                                            <AiOutlineInstagram />
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="">
                                            <AiOutlineLinkedin />
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="">
                                            <AiOutlineTwitter />
                                        </Link>    
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>     
                </div>
            </div>
        </footer>
    );
}

export default Footer;