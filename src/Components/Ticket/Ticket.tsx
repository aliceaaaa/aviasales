import React, { Component } from "react";
import styles from "./styles.module.css";

export interface ITicketProps {
  price: number;
  carrier: string;
  segments: [
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    }
  ];
  onClick: () => void | Promise<void>;
}

export default class Ticket extends Component<ITicketProps> {
  render() {
    return <div className={styles["tiket"]}>kjhdkhfksjhdf</div>;
  }
}
