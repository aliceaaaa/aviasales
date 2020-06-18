import React, { Component } from "react";
import styles from "./styles.module.css";

export interface ITicketProps {
  classes: typeof styles;
  onClick: () => void | Promise<void>;
}

export default class Ticket extends Component<ITicketProps> {
  render() {
    return <div className={styles["tiket"]}>kjhdkhfksjhdf</div>;
  }
}
