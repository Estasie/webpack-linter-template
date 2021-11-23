import { Component, createElement } from 'react';
import { render } from 'react-dom';

class AppSidebar extends Component {
  render() {
    return 'Footer application';
  }
}

const mountItem = document.querySelector('#app_footer');

render(createElement(AppSidebar), mountItem);
