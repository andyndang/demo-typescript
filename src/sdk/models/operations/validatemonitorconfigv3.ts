/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ValidateMonitorConfigV3Security extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=X-API-Key" })
    apiKeyAuth: string;
}

export class ValidateMonitorConfigV3Request extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataset_id" })
    datasetId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
    orgId: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=verbose" })
    verbose?: boolean;
}

export class ValidateMonitorConfigV3Response extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * ValidateMonitorConfigV3 default response
     */
    @SpeakeasyMetadata()
    response?: shared.Response;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}