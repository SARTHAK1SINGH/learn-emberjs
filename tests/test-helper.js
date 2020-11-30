import Application from 'learn-emberjs/app';
import config from 'learn-emberjs/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
