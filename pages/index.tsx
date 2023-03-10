import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Canvas from '../components/Canvas'
import Settings from '../components/Settings'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [maxX, setMaxX] = useState(1280)
  const [maxY, setMaxY] = useState(720)
  const [gravity, setGravity] = useState(0.05)
  const [resolution, setResolution] = useState(4)
  const [spawnDelay, setSpawnDelay] = useState(10) // In Ticks
  const [defaultXVelocity, setDefaultXVelocity] = useState(20)
  const [defaultYVelocity, setDefaultYVelocity] = useState(1)
  return (
    <>
      <Head>
        <title>Physics engine</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Canvas maxX={maxX} maxY={maxY} gravity={gravity} resolution={resolution} spawnDelay={spawnDelay} defaultXVelocity={defaultXVelocity} defaultYVelocity={defaultYVelocity} className={styles.canvas} />
        <Settings setMaxX={setMaxX} setMaxY={setMaxY} setGravity={setGravity} setResolution={setResolution} setSpawnDelay={setSpawnDelay} maxX={maxX} maxY={maxY} gravity={gravity} resolution={resolution} spawnDelay={spawnDelay} setDefaultXVelocity={setDefaultXVelocity} setDefaultYVelocity={setDefaultYVelocity} defaultXVelocity={defaultXVelocity} defaultYVelocity={defaultYVelocity} />
      </main>
    </>
  )
}
