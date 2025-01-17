/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Schema for user-defined metrics
 */
export class MetricSchema extends SpeakeasyBase {
    /**
     * Entity column to extract the metric from
     */
    @SpeakeasyMetadata()
    @Expose({ name: "column" })
    column: string;

    /**
     * whylogs metric to extract. Note that other metrics may be available for this column as well, this is the one to be used by default. Should match the values of the SimpleColumnMetric enum within the monitor config schema.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "defaultMetric" })
    defaultMetric: string;

    /**
     * User-friendly label for the metric. This should be a unique for the entity.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "label" })
    label: string;
}
