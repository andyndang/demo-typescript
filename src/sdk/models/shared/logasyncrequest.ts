/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SegmentTag } from "./segmenttag";
import { Expose, Type } from "class-transformer";

/**
 * Request payload for LogAsync.
 */
export class LogAsyncRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "datasetTimestamp" })
    datasetTimestamp?: number;

    @SpeakeasyMetadata({ elemType: SegmentTag })
    @Expose({ name: "segmentTags" })
    @Type(() => SegmentTag)
    segmentTags?: SegmentTag[];
}