/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateApiKeySecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=X-API-Key" })
    apiKeyAuth: string;
}

export class CreateApiKeyRequest extends SpeakeasyBase {
    /**
     * A human-friendly name for the API Key
     *
     * @remarks
     *  An object with key ID and other metadata about the key
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alias" })
    alias?: string;

    /**
     * Expiration time in epoch milliseconds
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expiration_time" })
    expirationTime?: number;

    /**
     * Your company's unique organization ID
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
    orgId: string;

    /**
     * Scopes of the token
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scopes" })
    scopes?: string[];

    /**
     * The unique user ID in an organization.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
    userId: string;
}

export class CreateApiKeyResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * A object with key ID and other metadata about the key
     */
    @SpeakeasyMetadata()
    userApiKey?: shared.UserApiKey;
}