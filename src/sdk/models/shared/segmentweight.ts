/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Segment } from "./segment";
import { Expose, Type } from "class-transformer";

export class SegmentWeight extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "segment" })
    @Type(() => Segment)
    segment?: Segment;

    /**
     * Entity weight value for each entity
     */
    @SpeakeasyMetadata()
    @Expose({ name: "weights" })
    weights?: Record<string, number>;
}