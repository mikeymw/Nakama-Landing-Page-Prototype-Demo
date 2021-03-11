import { APIUrl, APIVersion } from "@/config";
import digestMessage from "./utilities/digestMessage";
import hexString from "./utilities/hexString";

export async function resetPassword (
    token,
    password
) {
    const hashed = await digestMessage(password);
    const response = await fetch(
        `${ APIUrl }/${ APIVersion }/user/reset`,
        {
            "method": "POST",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${ token }`
            },
            "body": JSON.stringify(
                {
                    "password": hexString(hashed),
                }
            ),
        }
    );

    if (response.ok) {
        return;
    }

    if (response.status >= 400) {
        throw await response.text();
    }

    throw "Internal server error";
}

export default resetPassword;
