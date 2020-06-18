import React, { Component } from "react";
import styles from "./styles.module.css";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export interface ITableProps {
  headers: Array<string>;
  properties: Array<string>;
}

export default class Table extends Component<ITableProps> {
  render() {
    const { properties = [], headers = [] } = this.props;

    return (
      <table className={styles["tableContainer"]}>
        <tbody>
          <TableHeader headers={headers} />
          <TableRow properties={properties} />
        </tbody>
      </table>
    );
  }
}
