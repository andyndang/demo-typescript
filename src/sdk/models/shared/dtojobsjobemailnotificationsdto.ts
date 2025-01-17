/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class DTOJobsJobEmailNotificationsDTO extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "noAlertForSkippedRuns" })
    noAlertForSkippedRuns?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "onFailure" })
    onFailure?: Record<string, any>[];

    @SpeakeasyMetadata()
    @Expose({ name: "onStart" })
    onStart?: Record<string, any>[];

    @SpeakeasyMetadata()
    @Expose({ name: "onSuccess" })
    onSuccess?: Record<string, any>[];
}
