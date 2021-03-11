import { APIUrl, APIVersion, TokenName, } from "@/config";
import localforage from "localforage";
import digestMessage from "./utilities/digestMessage";
import hexString from "./utilities/hexString";

export async function login (
    { username, password }
) {
    const hashed = await digestMessage(password);
    const response = await fetch(
        `${ APIUrl }/${ APIVersion }/login`,
        {
            "method": "POST",
            "mode": "cors",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            "body": JSON.stringify(
                {
                    username,
                    "password": hexString(hashed),
                }
            ),
        }
    );

    if (response.ok) {
        const token = await response.text();
        if (token) {
            await localforage.setItem(TokenName, token);
            return token;
        }
        throw await response.json();
    }

    if (response.status >= 400) {
        throw await response.text();
    }

    throw "Internal server error";
}

export default login;
