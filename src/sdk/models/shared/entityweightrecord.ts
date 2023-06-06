/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EntityWeightRecordMetadata } from "./entityweightrecordmetadata";
import { SegmentWeight } from "./segmentweight";
import { Expose, Type } from "class-transformer";

/**
 * GetColumnWeights default response
 */
export class EntityWeightRecord extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => EntityWeightRecordMetadata)
    metadata?: EntityWeightRecordMetadata;

    /**
     * A list of entity weights for a segment
     */
    @SpeakeasyMetadata({ elemType: SegmentWeight })
    @Expose({ name: "segmentWeights" })
    @Type(() => SegmentWeight)
    segmentWeights?: SegmentWeight[];
}
