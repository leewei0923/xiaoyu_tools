import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../src/components/Header/Header';
import Swatches from '../src/components/gradient_color_palette/Swatches';
import { gradientColors } from '../src/static_data/colorData';
import styles from '../styles/gradientColorPalette.module.scss';

const GradientColorPalette: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>gradient color palette</title>
        <meta name="description" content="gradient color palette" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />

      <main className={styles.swatchelist}>
        {gradientColors.map((item) => {
          return <Swatches key={item.id + item.name} name={item.name} colors={item.colors} angle={item.angle} />;
        })}
      </main>

      <footer></footer>
    </div>
  );
};

export default GradientColorPalette;
