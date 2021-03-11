import { APIUrl, APIVersion, TokenName, } from "@/config";

import localforage from "localforage";

export async function update (
    updatedUser
) {
    const token = await localforage.getItem(TokenName);
    const response = await fetch(
        `${ APIUrl }/${ APIVersion }/user`,
        {
            "method": "PATCH",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${ token }`
            },
            "body": JSON.stringify(
                updatedUser
            ),
        }
    );

    if (response.ok) {
        const user = await response.json();
        if (user) {
            return user;
        }
        throw "USER Update error";
    }

    if (response.status >= 400) {
        throw await response.text();
    }

    throw "Internal server error";
}

export default update;
