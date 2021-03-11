import { APIUrl, APIVersion, TokenName, } from "@/config";
import localforage from "localforage";

export async function logout () {
    await localforage.setItem(TokenName, "");
}

export default logout;
