/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class EntitySearchResult extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "actionId" })
    actionId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "datasetId" })
    datasetId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "featureName" })
    featureName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "keywords" })
    keywords?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    metadata?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "monitorId" })
    monitorId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "orgId" })
    orgId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: string;
}