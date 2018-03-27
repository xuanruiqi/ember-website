/** Copyright(c) 2016 Xuanrui Qi
 *  This Source Code Form is subject to the terms of the Mozilla Public
 *  License, v. 2.0. If a copy of the MPL was not distributed with this
 *  file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

'use strict';

import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('more');
  this.route('quotes');
  this.route('credits');
  this.route('contact');
  this.route('research');
  this.route('code');
  this.route('personal');
  this.route('cv');
  this.route('cv-cn');
  this.route('cv-jp');
});

export default Router;
