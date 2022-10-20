import React, { Component } from "react";

import { Card } from "../card/card.component";

import "./card-list.styles.css";

// export const CardList = (props) => (
//   <div className="card-list">
//     {props.monsters.map((monster) => (
//       <Card key={monster.id} monster={monster} />
//     ))}
//   </div>
// );

export class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
    );
  }
}

export default CardList;