import {Routes, Route, Navigate } from 'react-router';

import {PeoplesPage} from './peoples';
import {PlanetsPage} from './planets';
import { StarshipsPage } from './starships';
import { AppWrapper, ContentWrapper } from './styled';
import {MainMenu } from './components';

function App() {
  return (
    <AppWrapper>
      <MainMenu />

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
