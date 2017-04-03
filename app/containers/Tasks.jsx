import React from 'react';
import { Panel } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from 'css/components/tasks';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const Tasks = () => {
  return (
    <div className={cx('tasks')}>
      <Panel header={'Tasks'}>
        <ol>
          <li>Dashboard</li>
          <li>About</li>
          <li>Ui tests</li>
          <li>Tasks (Create todo list)</li>
          <li>Replace Navigation on Bootstrap</li>
          <li>Bootstrap variable (styled)</li>
          <li>Create Guide page and container tab...</li>
          <li>Create layout full page</li>
          <li>Create layout aside page and Aside (Related posts etc.)</li>
          <li>Create layout aside page and Aside Navigation component (Dashboard layout sticky nav)</li>
          <li>Create Loading component</li>
          <li>Login - Logout form styled, use react-bootstrap</li>
        </ol>
      </Panel>
    </div>
  );
};

export default Tasks;
