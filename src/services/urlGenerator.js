export function getHostName() {
    return process?.env?.HOSTNAME || 'http://localhost:3000';
}