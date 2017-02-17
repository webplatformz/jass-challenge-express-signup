/**
 * mock api
 */
const user = {
    email: 'asdf@asdf.asdf',
    school: 'ZHAW',
};

const TIMEOUT = 100;

export default {
    getTestUser: (cb, timeout) => setTimeout(() => cb(user), timeout || TIMEOUT)
};
