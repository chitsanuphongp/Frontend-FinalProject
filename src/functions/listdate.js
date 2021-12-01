import axios from 'axios';

export const listDate = async () =>
await axios.get('https://lotto.api.rayriffy.com/list')