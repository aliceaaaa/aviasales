import React, { Component } from "react";
import noop from "lodash/noop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import colors from "../../tools/colors";
import styles from "./styles.module.css";

export interface ICheckboxProps {
  isChecked: boolean;
  isDisabled: boolean;
  onClick: () => void | Promise<void>;
}

export default class Checkbox extends Component<ICheckboxProps> {
  render() {
    const { isChecked, isDisabled = false, onClick } = this.props;
    return (
      <label className={styles["checkbox"]}>
        <input
          checked={isChecked}
          type="checkbox"
          className={styles["control"]}
          onChange={isDisabled ? noop : onClick}
        />
        <span className={styles["checkIcon"]}>
          <FontAwesomeIcon
            icon={faCheck}
            size="xs"
            color={isChecked ? colors.blue : colors.light}
          />
        </span>
      </label>
    );
  }
}
