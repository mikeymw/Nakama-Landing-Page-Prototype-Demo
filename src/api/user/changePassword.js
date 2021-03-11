import { APIUrl, APIVersion, TokenName, } from "@/config";
import localforage from "localforage";
import digestMessage from "./utilities/digestMessage";
import hexString from "./utilities/hexString";

export async function changePassword (
    password,
) {
    const hashed = await digestMessage(password);
    const token = await localforage.getItem(TokenName);
    const response = await fetch(
        `${ APIUrl }/${ APIVersion }/password`,
        {
            "method": "PATCH",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${ token }`
            },
            "body": JSON.stringify(
                {
                    "oldPassword": hexString(hashed),
                    password
                }
            ),
        }
    );

    if (response.ok) {
        const user = await response.json();
        if (user) {
            return user;
        }
        throw "USER CHANGE PASSWORD error";
    }

    if (response.status >= 400) {
        throw await response.text();
    }

    throw "Internal server error";
}

export default changePassword;
