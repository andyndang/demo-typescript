/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class EnableNotificationActionSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=X-API-Key" })
    apiKeyAuth: string;
}

export class EnableNotificationActionRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=action_id" })
    actionId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
    orgId: string;
}

export class EnableNotificationActionResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * EnableNotificationAction default response
     */
    @SpeakeasyMetadata()
    void?: Record<string, any>;
}
