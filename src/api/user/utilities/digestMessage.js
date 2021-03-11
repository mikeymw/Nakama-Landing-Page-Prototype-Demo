export default function digestMessage (message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    return window.crypto.subtle.digest("SHA-512", data);
}
