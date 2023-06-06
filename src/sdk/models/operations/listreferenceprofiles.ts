/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListReferenceProfilesSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=X-API-Key" })
    apiKeyAuth: string;
}

export class ListReferenceProfilesRequest extends SpeakeasyBase {
    /**
     * Milli epoch time that represents the end of the time range to query.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from_epoch" })
    fromEpoch?: number;

    /**
     * The unique model ID in your company.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=model_id" })
    modelId: string;

    /**
     * Your company's unique organization ID
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
    orgId: string;

    /**
     * Milli epoch time that represents the end of the time range to query.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to_epoch" })
    toEpoch?: number;
}

export class ListReferenceProfilesResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The metadata for the summarized dataset profile including paths to JSON and protobuf data
     */
    @SpeakeasyMetadata({ elemType: shared.ReferenceProfileItemResponse })
    referenceProfileItemResponses?: shared.ReferenceProfileItemResponse[];

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}