import * as React from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { Switch, Route } from 'react-router-dom';
import LoadingComponent from 'shared/components/LoadingComponent';
import MonsterInfoModal from 'shared/components/MonsterInfoModal';
import { ModalWatcher } from 'shared/components/Modal';
import EncounterBuilderPage from 'pages/EncounterBuilder';
import EncounterBattlePage from 'pages/EncounterBattle';

const App: React.FC = () => (
  <div>
    <ModalWatcher />
    <Grid fluid>
      <Row>
        <Col xs={12}>
          <React.Suspense fallback={<LoadingComponent />}>
            <Switch>
              <Route exact path='/' component={EncounterBuilderPage} />
              <Route path='/encounter-battle' component={EncounterBattlePage} />
            </Switch>
          </React.Suspense>
          <MonsterInfoModal />
        </Col>
      </Row>
    </Grid>
  </div>
);

export default App;
