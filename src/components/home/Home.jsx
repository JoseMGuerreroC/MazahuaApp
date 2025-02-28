import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="hero">
        <Link to='' className="heroImgCont">
          <img src="/imgs/img_hero.jpg" alt="" />
          <h2 className="heroImgTitle">Mole</h2>
        </Link>
        <div className="heroControls">
            <div className="controlPosition active"></div>
            <div className="controlPosition"></div>
            <div className="controlPosition"></div>
            <div className="controlPosition"></div>
            <div className="controlPosition"></div>
        </div>
      </section>
      <section className="homeSection">
        <h2>Ofertas</h2>
        <div className="sectionItemCont">
            <Link to='' className="sectionItem">
                <img src="/imgs/imgs_dishes/img-1.jpg" alt="" />
                <div className="itemText">
                    <p className="itemTitle">Enchiladas</p>
                    <p className="itemPrice discount"><span>$150</span> $125</p>
                </div>
            </Link>
            <Link to='' className="sectionItem">
                <img src="/imgs/imgs_dishes/img-2.jpg" alt="" />
                <div className="itemText">
                    <p className="itemTitle">Mole</p>
                    <p className="itemPrice discount"><span>$160</span> $135</p>
                </div>
            </Link>
            <Link to='' className="sectionItem">
                <img src="/imgs/imgs_dishes/img-3.jpg" alt="" />
                <div className="itemText">
                    <p className="itemTitle">Guacamole</p>
                    <p className="itemPrice discount"><span>$150</span> $125</p>
                </div>
            </Link>
            <Link to='' className="sectionItem">
                <img src="/imgs/imgs_dishes/img-4.webp" alt="" />
                <div className="itemText">
                    <p className="itemTitle">Enchiladas</p>
                    <p className="itemPrice discount"><span>$150</span> $125</p>
                </div>
            </Link>
            <Link to='' className="sectionItem">
                <img src="/imgs/imgs_dishes/img-5.jpg" alt=""/>
                <div className="itemText">
                    <p className="itemTitle">Enchiladas</p>
                    <p className="itemPrice discount"><span>$150</span> $125</p>
                </div>
            </Link>
        </div>
      </section>
      <section className="homeSection">
        <h2>Los favoritos</h2>
        <div className="sectionItemCont">

            <Link to='' className="sectionItem">
                <img src="/imgs/imgs_dishes/img-4.webp" alt="" />
                <div className="itemText">
                    <p className="itemTitle">Hormigas</p>
                    <p className="itemPrice">$170</p>
                </div>
            </Link>
            <Link to='' className="sectionItem">
                <img src="/imgs/imgs_dishes/img-5.jpg" alt=""/>
                <div className="itemText">
                    <p className="itemTitle">Pechuga</p>
                    <p className="itemPrice">$125</p>
                </div>
            </Link>
        </div>
      </section>
      <section className="homeSection">
        <h2>No puedes perderte</h2>
        <div className="sectionItemCont">

            <Link to='' className="sectionItem">
                <img src="/imgs/imgs_dishes/img-4.webp" alt="" />
                <div className="itemText">
                    <p className="itemTitle">Hormigas</p>
                    <p className="itemPrice">$170</p>
                </div>
            </Link>
            <Link to='' className="sectionItem">
                <img src="/imgs/imgs_dishes/img-5.jpg" alt=""/>
                <div className="itemText">
                    <p className="itemTitle">Pechuga</p>
                    <p className="itemPrice">$125</p>
                </div>
            </Link>
        </div>
      </section>
      <Link to='/menu' className="homeMenu">Explora el menú completo</Link>
    </>
  );
}

export default Home;
