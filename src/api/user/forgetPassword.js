import {
    APIUrl,
    APIVersion
} from "@/config";

export async function forgetPassword (
    userIdentifiers
) {
    const response = await fetch(
        `${ APIUrl }/${ APIVersion }/user/reset`,
        {
            "method": "PUT",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            "body": JSON.stringify(
                userIdentifiers
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

export default forgetPassword;
