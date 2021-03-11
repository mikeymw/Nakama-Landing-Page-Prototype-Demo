import { APIUrl, APIVersion, TokenName, } from "@/config";
import localforage from "localforage";

export async function authToken (tokenToBeTested) {
    const token = tokenToBeTested || await localforage.getItem(TokenName);
    const response = await fetch(
        `${ APIUrl }/${ APIVersion }/authenticate`,
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${ token }`
            }
        }
    );

    if (response.ok) {
        return await response.json();
    }

    if (response.status >= 400) {
        throw await response.text();
    }

    throw false;
}

export default authToken;
