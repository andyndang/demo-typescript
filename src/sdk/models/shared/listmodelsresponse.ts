/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ModelMetadataResponse } from "./modelmetadataresponse";
import { Expose, Type } from "class-transformer";

/**
 * Response for the ListModels API
 */
export class ListModelsResponse extends SpeakeasyBase {
    /**
     * A list of all known model ids for an organization.
     */
    @SpeakeasyMetadata({ elemType: ModelMetadataResponse })
    @Expose({ name: "items" })
    @Type(() => ModelMetadataResponse)
    items: ModelMetadataResponse[];
}
