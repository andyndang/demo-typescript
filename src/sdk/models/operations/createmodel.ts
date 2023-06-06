/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateModelSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=X-API-Key" })
    apiKeyAuth: string;
}

export class CreateModelRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model_id" })
    modelId?: string;

    /**
     * The name of a model
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model_name" })
    modelName: string;

    /**
     * The [ModelType] of the dataset
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model_type" })
    modelType?: shared.ModelType;

    /**
     * The organization ID
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
    orgId: string;

    /**
     * The [TimePeriod] for data aggregation/alerting for a model
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_period" })
    timePeriod: shared.TimePeriod;
}

export class CreateModelResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The [ModelMetadataResponse] if operation succeeds
     */
    @SpeakeasyMetadata()
    modelMetadataResponse?: shared.ModelMetadataResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
