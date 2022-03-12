import ioClient from 'socket.io-client';

const ENDPOINT = 'https://letsblurt.duckdns.org:3005/';

const socket = ioClient(ENDPOINT);

export const io = socket;
