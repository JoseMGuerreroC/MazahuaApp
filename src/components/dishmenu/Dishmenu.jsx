import { Link } from "react-router-dom";
import "./Dishmenu.css";

function DishMenu() {
  return (
    <>
      <section className="menuCont">
        <h2>Nuestro menú</h2>
        <Link to='' className="menuSub"><img src="/imgs/img_hero.jpg" alt="" /><p>Paquetes</p></Link>
        <Link to='' className="menuSub"><img src="/imgs/img_hero.jpg" alt="" /><p>Ofertas</p></Link>
        <Link to='' className="menuSub"><img src="/imgs/img_hero.jpg" alt="" /><p>De temporada</p></Link>
        <Link to='' className="menuSub"><img src="/imgs/img_hero.jpg" alt="" /><p>Entradas</p></Link>
        <Link to='' className="menuSub"><img src="/imgs/img_hero.jpg" alt="" /><p>Desayunos</p></Link>
        <Link to='' className="menuSub"><img src="/imgs/img_hero.jpg" alt="" /><p>Comidas</p></Link>
        <Link to='' className="menuSub"><img src="/imgs/img_hero.jpg" alt="" /><p>Postres</p></Link>
        <Link to='' className="menuSub"><img src="/imgs/img_hero.jpg" alt="" /><p>Bebidas</p></Link>
      </section>
    </>
  );
}

export default DishMenu;
