import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import Page from '../pages/Page';

class Guide extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'Guide | mernGo';
  }

  pageMeta() {
    return [
      { name: 'description', content: 'A mernGo - Guide' }
    ];
  }

  pageLink() {
    return [];
  }

  render() {
    console.log("Guide:", this.props);
    return (
      <Page {...this.getMetaData()}>
        <Grid>
          <h3>Guide:</h3>
          <h4>Patterns</h4>
          <ul>
            <li>
              <a href="https://github.com/airbnb/javascript/tree/master/react" target="_blank">
                Airbnb React/JSX Style Guide
              </a>
            </li>
            <li>
              <a href="https://github.com/vasanthk/react-bits" target="_blank">
                A compilation of React Patterns, techniques, tips and tricks.
              </a>
            </li>
            <li>
              <a href="https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1" target="_blank">
                React Lifecycle Methods- how and when to use them
              </a>
            </li>
            <li>
              <a href="https://medium.com/dailyjs/react-is-slow-react-is-fast-optimizing-react-apps-in-practice-394176a11fba" target="_blank">
                React is Slow, React is Fast: Optimizing React Apps in Practice
              </a>
            </li>
            <li>
              <a href="https://blog.risingstack.com/10-best-practices-for-writing-node-js-rest-apis/" target="_blank">
                Лучшие практики по созданию REST API на node.js – подборка десяти советов от RisingStack
              </a>
            </li>
            <li>
              <a href="https://egghead.io/lessons/react-hello-world-first-component?course=react-fundamentals" target="_blank">
                Write a "Hello World" React Component and more...
              </a>
            </li>
            <li>
              <a href="https://medium.com/selleo/testing-react-components-best-practices-2f77ac302d12" target="_blank">
                Лучшие практики тестирования React компонентов в 2017 году
              </a>
            </li>
            <li>
              <a href="http://css-live.ru/articles-css/grid-fleksboks-moshhnejshee-kombo-v-veb-raskladke.html" target="_blank">
                Грид + флексбокс: мощнейшее комбо в веб-раскладке
              </a>
            </li>
            <li>
              <a href="https://medium.freecodecamp.com/functional-setstate-is-the-future-of-react-374f30401b6b" target="_blank">
                Functional setState is the future of React
              </a>
            </li>
            <li>
              <a href="https://auth0.com/blog/docker-dashboard-with-react-typescript-socketio/" target="_blank">
                Создаём дэшбоард для Docker с помощью TypeScript, React и socket.io
              </a>
            </li>
            <li>
              <a href="https://hackernoon.com/10-react-mini-patterns-c1da92f068c5" target="_blank">
                Десять мини-паттернов в реакт: разбор лучших практик при работе с компонентами
              </a>
            </li>
            <li>
              <a href="https://github.com/teesloane/Auth-Boss" target="_blank">
                Auth Boss – репозиторий с подробным разбором самых популярных механизмов аутентификации в вебе
              </a>
            </li>
            <li>
              <a href="https://habrahabr.ru/post/322550/" target="_blank">
                Сложно о простом: ESLint в команде
              </a>
            </li>
          </ul>
          <h4>Book</h4>
          <p>...</p>
          <br />
          <strong>TODO:</strong>
          <p>Create guide list, navigation, new...</p>
          <br />
        </Grid>
      </Page>
    );
  }
}

export default Guide;
