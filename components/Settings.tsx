import styles from '../styles/components/Settings.module.css'

export default function Settings({ setMaxX, setMaxY, setGravity, setResolution, setSpawnDelay, setReset, maxX, maxY, gravity, resolution, spawnDelay }) {
    return (
        <div className={styles.settingsContainer}>
            <h1>Settings</h1>
            <div className={styles.settings}>
                <div className={styles.setting}>
                    <label htmlFor="maxX">Max X : {maxX}</label>
                    <input defaultValue={maxX} min={0} max={1920} type="range" id="maxX" onChange={(e) => setMaxX(parseInt(e.target.value))} />
                </div>
                <div className={styles.setting}>
                    <label htmlFor="maxY">Max Y : {maxY}</label>
                    <input defaultValue={maxY} min={0} max={1080} type="range" id="maxY" onChange={(e) => setMaxY(parseInt(e.target.value))} />
                </div>
                <div className={styles.setting}>
                    <label htmlFor="gravity">Gravity : {gravity}</label>
                    <input defaultValue={gravity} min={0} max={10} step={0.01} type="range" id="gravity" onChange={(e) => setGravity(parseFloat(e.target.value))} />
                </div>
                <div className={styles.setting}>
                    <label htmlFor="resolution">Resolution : {resolution}</label>
                    <input defaultValue={resolution} min={1} max={100} type="range" id="resolution" onChange={(e) => setResolution(parseInt(e.target.value))} />
                </div>
                <div className={styles.setting}>
                    <label htmlFor="spawnDelay">Spawn delay : {spawnDelay}</label>
                    <input defaultValue={spawnDelay} min={0} max={200} type="range" id="spawnDelay" onChange={(e) => setSpawnDelay(parseInt(e.target.value))} />
                </div>
            </div>
        </div>
    )
}