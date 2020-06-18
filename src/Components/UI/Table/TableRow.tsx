import React, { Component } from "react";
import styles from "./styles.module.css";

export interface ITableRowProps {
  properties: Array<string>;
}

export default class TableRow extends Component<ITableRowProps> {
  render() {
    const { properties } = this.props;

    return (
      <tr>
        {properties.map((data, index) => (
          <td className={styles["cell"]} key={index}>
            {data}
          </td>
        ))}
      </tr>
    );
  }
}
