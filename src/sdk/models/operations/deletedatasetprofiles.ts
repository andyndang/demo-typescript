/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeleteDatasetProfilesSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=X-API-Key" })
    apiKeyAuth: string;
}

export class DeleteDatasetProfilesRequest extends SpeakeasyBase {
    /**
     * Optional, scope deleting profiles uploaded prior to the timestamp
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before_upload_timestamp" })
    beforeUploadTimestamp?: number;

    /**
     * The unique dataset ID in your company.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataset_id" })
    datasetId: string;

    /**
     * Your company's unique organization ID
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
    orgId: string;

    /**
     * Optional, scope deleting profiles older than the timestamp
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=profile_end_timestamp" })
    profileEndTimestamp?: number;

    /**
     * Optional, scope deleting profiles more recently than the timestamp
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=profile_start_timestamp" })
    profileStartTimestamp?: number;
}

export class DeleteDatasetProfilesResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The [DeleteDatasetProfilesResponse] if operation succeeds
     */
    @SpeakeasyMetadata()
    deleteDatasetProfilesResponse?: shared.DeleteDatasetProfilesResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
