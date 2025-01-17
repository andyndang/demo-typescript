/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class RunJobRequest extends SpeakeasyBase {
    /**
     * The id of the job to run in the connected Databricks workspace.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "jobId" })
    jobId: number;

    /**
     * Look up a connection by the org that is connected to.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "orgId" })
    orgId?: string;

    /**
     * Look up a connection by the workspace that it originates from.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "workspaceId" })
    workspaceId?: string;
}
