/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeleteAnalyzerResultsSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=X-API-Key" })
    apiKeyAuth: string;
}

export class DeleteAnalyzerResultsRequest extends SpeakeasyBase {
    /**
     * The unique dataset ID in your company.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataset_id" })
    datasetId: string;

    /**
     * Optional, scope deleting analyzer results older than the timestamp
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_timestamp" })
    endTimestamp?: number;

    /**
     * Your company's unique organization ID
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
    orgId: string;

    /**
     * Optional, scope deleting analyzer results more recent than the timestamp
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_timestamp" })
    startTimestamp?: number;
}

export class DeleteAnalyzerResultsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The [DeleteAnalyzerResultsResponse] if operation succeeds
     */
    @SpeakeasyMetadata()
    deleteAnalyzerResultsResponse?: shared.DeleteAnalyzerResultsResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
