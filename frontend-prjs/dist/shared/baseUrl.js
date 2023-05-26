const endpointIp = process.env.ENDPOINT_IP || '172.16.0.1';
const endpointPort = process.env.ENDPOINT_PORT || 4000;
export const BASEURL = `http://${endpointIp}:${endpointPort}`;