/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
import axios from 'axios';
let Api = axios.create({
    baseURL: 'http://https://1dd3b4ce6307.ngrok.io/beem_blog/api'
});
Api.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
Api.defaults.withCredentials = true;
export default Api;