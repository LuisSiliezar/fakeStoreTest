import axios from 'axios';

const fakeStoreApi = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export { fakeStoreApi };
