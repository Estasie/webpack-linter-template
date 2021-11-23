import React, { createElement } from 'react';
import { render } from 'react-dom';
import { Header } from '../components/header-comp';

const AppHeader = () => <Header />;

const mountItem = document.querySelector('#app_header');

render(createElement(AppHeader), mountItem);
