import styles from "../styles/components/Settings.module.css";
import Element from "../types/object";

type SettingsProps = {
  setMaxX: (maxX: number) => void;
  setMaxY: (maxY: number) => void;
  setGravity: (gravity: number) => void;
  setResolution: (resolution: number) => void;
  setSpawnDelay: (spawnDelay: number) => void;
  maxX: number;
  maxY: number;
  gravity: number;
  resolution: number;
  spawnDelay: number;
  setDefaultXVelocity: (defaultXVelocity: number) => void;
  setDefaultYVelocity: (defaultYVelocity: number) => void;
  defaultXVelocity: number;
  defaultYVelocity: number;
  setObjects: React.Dispatch<React.SetStateAction<Element[]>>;
  setSpawnAmount: (spawnAmount: number) => void;
  spawnAmount: number;
};

export default function Settings({
  setMaxX,
  setMaxY,
  setGravity,
  setResolution,
  setSpawnDelay,
  maxX,
  maxY,
  gravity,
  resolution,
  spawnDelay,
  setDefaultXVelocity,
  setDefaultYVelocity,
  defaultXVelocity,
  defaultYVelocity,
  setObjects,
  setSpawnAmount,
  spawnAmount,
}: SettingsProps) {
  return (
    <div className={styles.settingsContainer}>
      <h1>Settings</h1>
      <div className={styles.settings}>
        <div className={styles.setting}>
          <label htmlFor="maxX">Max X : {maxX}</label>
          <input
            defaultValue={maxX}
            min={0}
            max={1920}
            type="range"
            id="maxX"
            onChange={(e) => setMaxX(parseInt(e.target.value))}
          />
        </div>
        <div className={styles.setting}>
          <label htmlFor="maxY">Max Y : {maxY}</label>
          <input
            defaultValue={maxY}
            min={0}
            max={1080}
            type="range"
            id="maxY"
            onChange={(e) => setMaxY(parseInt(e.target.value))}
          />
        </div>
        <div className={styles.setting}>
          <label htmlFor="gravity">Gravity : {gravity}</label>
          <input
            defaultValue={gravity}
            min={0}
            max={10}
            step={0.01}
            type="range"
            id="gravity"
            onChange={(e) => setGravity(parseFloat(e.target.value))}
          />
        </div>
        <div className={styles.setting}>
          <label htmlFor="resolution">Resolution : {resolution}</label>
          <input
            defaultValue={resolution}
            min={1}
            max={100}
            type="range"
            id="resolution"
            onChange={(e) => setResolution(parseInt(e.target.value))}
          />
        </div>
        <div className={styles.setting}>
          <label htmlFor="spawnDelay">Spawn delay : {spawnDelay}</label>
          <input
            defaultValue={spawnDelay}
            min={0}
            max={200}
            type="range"
            id="spawnDelay"
            onChange={(e) => setSpawnDelay(parseInt(e.target.value))}
          />
        </div>
        <div className={styles.setting}>
          <label htmlFor="defaultXVelocity">
            Default X velocity : {defaultXVelocity}
          </label>
          <input
            defaultValue={defaultXVelocity}
            min={0}
            max={100}
            type="range"
            id="defaultXVelocity"
            onChange={(e) => setDefaultXVelocity(parseInt(e.target.value))}
          />
        </div>
        <div className={styles.setting}>
          <label htmlFor="defaultYVelocity">
            Default Y velocity : {defaultYVelocity}
          </label>
          <input
            defaultValue={defaultYVelocity}
            min={0}
            max={100}
            type="range"
            id="defaultYVelocity"
            onChange={(e) => setDefaultYVelocity(parseInt(e.target.value))}
          />
        </div>
        <div className={styles.setting}>
          <label htmlFor="spawnAmount">Spawn amount : {spawnAmount}</label>
          <input
            defaultValue={spawnAmount}
            min={0}
            max={100}
            type="range"
            id="spawnAmount"
            onChange={(e) => setSpawnAmount(parseInt(e.target.value))}
          />
        </div>
        <button onClick={() => setObjects([])} className={styles.resetButton}>
          Reset objects
        </button>
      </div>
    </div>
  );
}
