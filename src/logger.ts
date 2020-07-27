import tracer from 'dd-trace';
tracer.init({
    env: 'prod',
    service: 'excalidraw-room',
    clientToken: process.env.DATADOG_CLIENT_TOKEN,
    // @ts-ignore
    datacenter: "eu",
    forwardErrorsToLogs: true,
    sampleRate: 100,
});
export default tracer;