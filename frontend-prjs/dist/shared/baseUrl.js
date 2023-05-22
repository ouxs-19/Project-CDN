const endpointIp = process.env.ENDPOINT_IP || 'localhost';
const endpointPort = process.env.ENDPOINT_PORT || 4000;
export const BASEURL = `http://${endpointIp}:${endpointPort}`;