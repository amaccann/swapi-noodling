import {Routes, Route, Navigate } from 'react-router';

import { useCache } from './api/CacheProvider';
import {PeoplesPage} from './peoples';
import {PlanetsPage} from './planets';
import { StarshipsPage } from './starships';
import { AppWrapper, ContentWrapper, Sidebar } from './styled';
import {Button, Logo, NavItem} from './components';

import PlanetIcon from './icons/PlanetIcon';
import WaveIcon from './icons/WaveIcon';
import RocketIcon from './icons/RocketIcon';
import { lightBlue } from './colors';


function App() {
  const {clearAll} = useCache();

  return (
    <AppWrapper>
      <Sidebar>
        <div style={{textAlign: 'center'}}>
          <Logo color={lightBlue} size={150} />
        </div>

        <nav>
          <NavItem icon={PlanetIcon} testId="planets" to="/planets">Planets</NavItem>
          <NavItem icon={WaveIcon} testId="people" to="/people">People</NavItem>
          <NavItem icon={RocketIcon} testId="starships" to="/starships">Starships</NavItem>
        </nav>

        <Button onClick={() => clearAll()} variant="danger">Clear cache?</Button>
      </Sidebar>

      <ContentWrapper>
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
      </ContentWrapper>
    </AppWrapper>
  );
}

export default App;
