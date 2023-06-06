/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class SchemaMetadata extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "author" })
    author?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedTimestamp" })
    updatedTimestamp?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: number;
}
