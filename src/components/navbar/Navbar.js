/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react"
import Logo from "../Itens/imgs/logo1.jpeg"
import LogoWhats from "../Itens/imgs/Whatsapp-pedido.png"
import "./Navbar.css"

class Navbar extends Component {
  state = {
    clicked: false,
    categoriaSelecionada: 0,
  }
  handlerClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  categoriaSelecionada = (cat) => {
    this.setState({ categoriaSelecionada: cat })
  }
  render() {
    return (
      <>
        <nav>
          <a href="index.html" >
            <img src={Logo} className="logo-icon" alt="logo"></img>
          </a>
          <div>
            <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
              <li>
                <a onClick={() => { this.props.selecionarCategoria(0); this.categoriaSelecionada(0) }} className={this.state.categoriaSelecionada === 0 ? "active" : ""} >Todos</a>
              </li>
              <li>
                <a onClick={() => { this.props.selecionarCategoria(1); this.categoriaSelecionada(1) }} className={this.state.categoriaSelecionada === 1 ? "active" : ""} >Porções</a>
              </li>
              <li>
                <a onClick={() => { this.props.selecionarCategoria(2); this.categoriaSelecionada(2) }} className={this.state.categoriaSelecionada === 2 ? "active" : ""} >Hamburguers</a>
              </li>
              <li>
                <a onClick={() => { this.props.selecionarCategoria(3); this.categoriaSelecionada(3) }} className={this.state.categoriaSelecionada === 3 ? "active" : ""} >Combos</a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=554884218223" target="_blank" rel="noreferrer"><img height="50px"  src={LogoWhats}  alt="" /></a>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handlerClick}>
            <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>
            </i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
