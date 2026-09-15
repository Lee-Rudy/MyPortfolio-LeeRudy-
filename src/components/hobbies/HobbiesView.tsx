"use client";

import Image from "next/image";
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
            <Image
              className={styles.image}
              src={hobby.image}
              alt={hobby.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={75}
              priority={hobby.name === DEFAULT_OPEN}
            />
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
