/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class DTOJobsSparkJarTaskDTO extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "jarUri" })
    jarUri?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "mainClassName" })
    mainClassName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "parameters" })
    parameters?: Record<string, any>[];
}