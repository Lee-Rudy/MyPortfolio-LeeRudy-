"use client";

import React from "react";
import { Column, Flex, Text } from "@once-ui-system/core";
import { slugify as transliterate } from "transliteration";
import styles from "../about/about.module.scss";

interface TableOfContentsProps {
  sections: string[];
}

function slugify(str: string): string {
  const strWithAnd = str.replace(/&/g, " and ");
  return transliterate(strWithAnd, {
    lowercase: true,
    separator: "-",
  }).replace(/\-\-+/g, "-");
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  const scrollTo = (title: string, offset: number) => {
    const slug = slugify(title);
    const element = document.getElementById(slug);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (sections.length === 0) return null;

  return (
    <Column
      left="0"
      style={{
        top: "50%",
        transform: "translateY(-50%)",
        whiteSpace: "nowrap",
      }}
      position="fixed"
      paddingLeft="24"
      gap="32"
      m={{ hide: true }}
    >
      {sections.map((section, index) => (
        <Flex
          key={index}
          cursor="interactive"
          className={styles.hover}
          gap="8"
          vertical="center"
          onClick={() => scrollTo(section, 80)}
        >
          <Flex height="1" minWidth="16" background="neutral-strong"></Flex>
          <Text variant="body-default-s">{section}</Text>
        </Flex>
      ))}
    </Column>
  );
};

export default TableOfContents;
