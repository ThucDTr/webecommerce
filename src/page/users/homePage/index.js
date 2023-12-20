import { AiOutlineMenu, AiOutlinePhone, AiOutlineSearch } from "react-icons/ai";
import "./style.scss"
import { Link } from "react-router-dom";
import { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive, products, featProduct } from "../../../datas";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import Card from "../../../component/users/Card";
function HomePage() {
    const [isShowCategories, setIsShowCategories] = useState(true);

    const product = products.map((item) => (
        <Card
            name={item.name}
            url = {item.img}
            price = {item.price}
            description = {item.description}
        />
    ))

    const renderFeatured = (data) =>{
        const tabList = [];
        const tabPannels = [];

        Object.keys(data).forEach((key, index) => {
            tabList.push(<Tab key={index}>{data[key].title}</Tab>)

            const tabPannel = [];
            data[key].products.forEach((item) => {
                tabPannel.push(<div key={item.id} className="card__list">
                    <Card  name={item.name}
                           url = {item.img}
                           price = {item.price}
                           description = {item.description}
                    />
                </div>)
            });
            tabPannels.push(tabPannel);
        })

        return(
            <Tabs>
                <TabList>
                    {tabList}
                </TabList>

                {tabPannels.map((item, key) => (
                    <TabPanel key={key}>
                        <div className="row">{item}</div>
                    </TabPanel>
                ))}
                
            </Tabs>
        )
    }
    return ( 
        <>
            <div className="home">
                <div className="container">
                    <div className="row hero__categories_container">
                        <div className="col-lg-3 hero__categories">
                            <div className="hero__categories_all" onClick={() => setIsShowCategories(!isShowCategories)}>
                                <AiOutlineMenu />
                                Danh sách sản phẩm
                            </div>
                            {isShowCategories &&
                            <ul className={isShowCategories ? "" : "hidden"}>
                                <li><Link to="">Áo</Link></li>
                                <li><Link to="">Quần</Link></li>
                                <li><Link to="">Giày</Link></li>
                                <li><Link to="">Túi sách</Link></li>
                            </ul>
                            }
                        </div>
                        <div className="col-lg-9 hero__search_container">
                            <div className="hero__search">
                                <div className="hero__search__form">                                 
                                        <input type="text" name="" value="" placeholder="Tìm kiếm" />
                                        <button type="submit">
                                            <AiOutlineSearch />
                                        </button>
                                </div>
                                <div className="hero__search__phone">
                                    <div className="hero__search__phone__icon">
                                        <AiOutlinePhone />
                                    </div>
                                    <div className="hero__search__phone__text">
                                        <p>0656.789.456</p>
                                        <span>Hỗ trợ 24/7</span>
                                    </div>
                                </div>         
                            </div>
                            <div className="hero_item">
                                    {/* <div className="hero__text">
                                        <span>Trái cây tươi</span>
                                        <h2>
                                            Rau quả<br />
                                            sạch 100%
                                        </h2>
                                        <p>Miễn phí gia hàng tận nơi</p>
                                        <Link to="" className="primary_btn">
                                            Mua ngay
                                        </Link>
                                    </div> */}
                                </div>
                        </div>
                    </div>
                    <div className="new__products">
                        <div className="section__title">
                            <h2>Sản phẩm mới</h2>
                        </div>
                        <Carousel responsive={responsive}>
                        {product}
                        </Carousel>
                    </div>

                    <div className="featured">
                        <div className="section__title">
                            <h2>Sản phẩm nổi bật</h2>
                        </div>
                        {renderFeatured(featProduct)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;