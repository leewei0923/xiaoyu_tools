import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../src/components/Header/Header';
import Swatches from '../src/components/gradient_color_palette/Swatches';
import { gradientColors } from '../src/static_data/colorData';
import Pagination from '../src/components/Pagination';
import styles from '../styles/gradientColorPalette.module.scss';
import Footer from '../src/components/Footer/Footer';

const GradientColorPalette: NextPage = () => {
  /**
   * theme:
   * @param e
   */
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (e: number) => {
    setCurrentPage(e);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>gradient color palette</title>
        <meta name="description" content="gradient color palette" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />

      <main className={styles.swatchelist}>
        {gradientColors.slice(currentPage * 6 - 6, currentPage * 6).map((item) => {
          return <Swatches key={item.id + item.name} name={item.name} colors={item.colors} angle={item.angle} />;
        })}
      </main>

      {/* 分页 */}
      <Pagination onChange={(e: number) => onPageChange(e)} pageSize={6} total={gradientColors.length} />
      
      <Footer />
    </div>
  );
};

export default GradientColorPalette;
