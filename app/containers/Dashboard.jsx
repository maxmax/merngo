import React from 'react';
import { Grid, Panel } from 'react-bootstrap';

/*
 * Note: This is kept as a container-level component
 */
import dashboardImg from '../images/dashboard-ui.svg';


const title = (
 <h3>Dashboard</h3>
);

const panelsInstance = (
 <section>
   <Panel header={title}>
     This Dashboard Panel content
     <br />
     <strong>TODO:</strong>
     <br />
     <ol>
        <li>https://github.com/maxmax/merngo/blob/master/app/pages/Dashboard.jsx</li>
        <li>Create "four, three..." responsive blocks, use based bootstrap grid. (https://react-bootstrap.github.io/components.html#grid)</li>
        <li>Blocks must be of the same height, create "component FlexBox" and use this component.</li>
        <li>Create a new component with different values (Score or Telemetry - value="34234", value="25%") and make render in col.</li>
        <li>Score component - please use css or svg design (css pie chart or bootstrap Progress bars etc.)</li>
        <li>Created custom dashboard style (See example containers/About.js import styles, const cx, className)</li>
        <li>Add your new components to /ui-page for tests</li>
        <li>Create pull request 😎</li>
     </ol>
     <h4>Ui</h4>
     <p><img src={dashboardImg} alt="dashboardImg" className="img-responsive" /></p>
     <br />
     <br />
     <p>You components...</p>
     <br />
     <br />
   </Panel>
 </section>
);

const Dashboard = () => panelsInstance;

export default Dashboard;
