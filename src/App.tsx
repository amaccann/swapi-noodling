import {Routes, Route, Navigate, Link } from 'react-router';

import styles from './App.module.css';

import { useCache } from './api/CacheProvider';
import {PeoplesPage} from './peoples';
import {PlanetsPage} from './planets';
import { StarshipsPage } from './starships';

function App() {
  const {clearAll} = useCache();
  return (
    <div className={styles.app}>
      <nav className={styles.appNav}>
        <Link data-testid="planets" to="/planets">Planets</Link>
        <Link data-testid="people" to="/people">People</Link>
        <Link data-testid="starships" to="/starships">Starships</Link>
        <button onClick={() => clearAll()}>Clear cache</button>
      </nav>

      <div className={styles.appRoutes}>
        <Routes>
          <Route path="/planets/:id?"  element={<PlanetsPage />} />

          <Route path="/people/:id?"  element={<PeoplesPage />} />

          <Route path="/starships/:id?"  element={<StarshipsPage />} />

          <Route path="/health" element={<p>Healthy</p>} />
          <Route
            path="*"
            element={<Navigate to="/planets" replace />}
          />
        </Routes> 
      </div>
    </div>
  );
}

export default App;
