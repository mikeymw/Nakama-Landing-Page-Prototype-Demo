export default function hexString (buffer) {
    const byteArray = new Uint8Array(buffer);
    const hexCodes = [...byteArray].map(
        value => {
            const hexCode = value.toString(16);
            return hexCode.padStart(2, "0");
        }
    );
    return hexCodes.join("");
}
