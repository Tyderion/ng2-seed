// TODO: https://github.com/auth0/angular2-authentication-sample/tree/master/src

import {Component} from 'angular2/core';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'; //Router

import {Home} from './components/home/home';
import {Demo} from './components/demo/demo';
import Logger from './utils/logger.service';

import {AppConfig} from './app.config.ts';

@Component({
  selector: 'app',
  providers: [],
  template: require('./app.html'),
  styles: [require('./app.scss').toString()],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})

@RouteConfig([
  new Route({ path: '/home', component: Home, name: 'Home', useAsDefault: true }),
  new Route({ path: '/demo', component: Demo, name: 'Demo' })
])

export class AppComponent {

  private _log: Logger = new Logger('AppComponent');

  constructor() {
    this._log.info('log without args should work, especially with info'); // not working
    this._log.info('constructor')(AppConfig); // working
    this._log.info('curring has not stored my previouse things'); // not working

    this._log.debug('first debug withou args does not work at all'); // not working
    this._log.debug('first debug withou args does not work at all')('some config'); // working
    this._log.debug('change some config'); // not working

    this._log.debug('first debug withou args does not work at all', 'other config not passed along args'); // not working
    this._log.debug('first debug withou args does not work at all', 'other config not passed along args')('and args again'); // working
    this._log.debug('change args again'); // not working

    // curring sample
    let greetCurried = (greeting) => {
      return (name) => {
        console.log(greeting + ', ' + name);
      };
    };

    let greetHello = greetCurried('Hello');

    greetHello('Heidi');
    greetHello('Eddie');
    greetCurried('Hi there')('Howard');
  }

  public sayHello(): string {
    return 'hello';
  }

}
