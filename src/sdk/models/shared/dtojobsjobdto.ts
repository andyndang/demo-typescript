/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DTOJobsJobSettingsDTO } from "./dtojobsjobsettingsdto";
import { Expose, Transform, Type } from "class-transformer";

export class DTOJobsJobDTO extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "createdTime" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdTime?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "creatorUserName" })
    creatorUserName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "jobId" })
    jobId?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "settings" })
    @Type(() => DTOJobsJobSettingsDTO)
    settings?: DTOJobsJobSettingsDTO;
}
