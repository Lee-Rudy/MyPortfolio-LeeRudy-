"use client";

import classNames from "classnames";

import { Column } from "@once-ui-system/core";
import { hobbies } from "@/resources";
import styles from "./Hobbies.module.scss";

const DEFAULT_OPEN = "Chess";

export default function HobbiesView() {
  return (
    <Column fillWidth gap="16">
      <div className={styles.row}>
        {hobbies.items.map((hobby) => (
          <div
            key={hobby.name}
            className={classNames(styles.item, {
              [styles.default]: hobby.name === DEFAULT_OPEN,
            })}
            tabIndex={0}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.image} src={hobby.image} alt={hobby.alt} loading="lazy" />
            <div className={styles.overlay} />
            <div className={styles.content}>
              <span className={styles.name}>{hobby.name}</span>
              <div className={styles.why}>
                <p className={styles.whyText}>{hobby.why}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Column>
  );
}
