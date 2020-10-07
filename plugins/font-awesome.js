import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPhone);
library.add(faEnvelope);
library.add(faExternalLinkAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);
