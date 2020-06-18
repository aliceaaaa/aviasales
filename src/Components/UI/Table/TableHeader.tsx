import React, { Component } from "react";
import styles from "./styles.module.css";

export interface ITableHeaderProps {
  headers: Array<string>;
}

export default class TableHeader extends Component<ITableHeaderProps> {
  render() {
    const { headers } = this.props;

    return (
      <tr>
        {headers.map((title, index) => (
          <th className={styles["headCell"]} key={index}>
            {title}
          </th>
        ))}
      </tr>
    );
  }
}
