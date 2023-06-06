/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Segment } from "./segment";
import { Expose, Type } from "class-transformer";

/**
 * Response payload for LogAsync.
 */
export class AsyncLogResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "modelId" })
    modelId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "tags" })
    @Type(() => Segment)
    tags?: Segment;

    @SpeakeasyMetadata()
    @Expose({ name: "uploadTimestamp" })
    uploadTimestamp?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "uploadUrl" })
    uploadUrl?: string;
}
