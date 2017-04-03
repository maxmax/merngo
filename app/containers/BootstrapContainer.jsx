import React from 'react';
import { Grid, Jumbotron, ButtonToolbar, Button } from 'react-bootstrap';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

const jumbotronInstance = (
 <Jumbotron>
   <h1>Hello, world!</h1>
   <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
   <p><Button bsStyle="primary">Learn more</Button></p>
 </Jumbotron>
);

const buttonsInstance = (
 <ButtonToolbar>
   {/* Standard button */}
   <Button>Default</Button>

   {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
   <Button bsStyle="primary">Primary</Button>

   {/* Indicates a successful or positive action */}
   <Button bsStyle="success">Success</Button>

   {/* Contextual button for informational alert messages */}
   <Button bsStyle="info">Info</Button>

   {/* Indicates caution should be taken with this action */}
   <Button bsStyle="warning">Warning</Button>

   {/* Indicates a dangerous or potentially negative action */}
   <Button bsStyle="danger">Danger</Button>

   {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
   <Button bsStyle="link">Link</Button>
 </ButtonToolbar>
);

const BootstrapContainer = () => {
  console.log("containers/BootstrapContainer");
  return (
    <Grid fluid>
      <h1 className="header">Example Bootstrap Container</h1>
      <p>Bootstrap ui</p>
      {/* https://react-bootstrap.github.io/components.html#page-layout */}
      {jumbotronInstance}
      <br />
      {/* Standard button */}
      {buttonsInstance}
      <br />
    </Grid>
  );
};

export default BootstrapContainer;
