import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate'
import id from 'vee-validate/dist/locale/id'

Vue.use(VeeValidate);
Validator.localize('id', id);