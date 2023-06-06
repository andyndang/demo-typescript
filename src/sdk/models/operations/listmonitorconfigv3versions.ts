/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListMonitorConfigV3VersionsSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=X-API-Key" })
    apiKeyAuth: string;
}

export class ListMonitorConfigV3VersionsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataset_id" })
    datasetId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
    orgId: string;
}

export class ListMonitorConfigV3VersionsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * ListMonitorConfigV3Versions default response
     */
    @SpeakeasyMetadata({ elemType: shared.MonitorConfigVersion })
    monitorConfigVersions?: shared.MonitorConfigVersion[];

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}