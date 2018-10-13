import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./periculogo.png";



class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: ['red','brown', 'grey','blue','pink','cream', 'purple'],
      activeColor: 'grey'
    }
  }

  changeBackgroundColor = () => {
    let { colors } = this.state;
    this.setState({ activeColor: colors[Math.floor(Math.random()*colors.length)]});
  }

  render() {
    return (
        <div className={`landing ${this.state.activeColor}`} onClick={this.changeBackgroundColor}>
          <Link to='/home'><img src={logo} alt="logo" className={"logo"}/></Link>
        </div>
    )
  }
}

export default Landing;