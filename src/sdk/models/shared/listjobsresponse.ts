/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DTOJobsJobDTO } from "./dtojobsjobdto";
import { Expose, Type } from "class-transformer";

/**
 * ListJobs default response
 */
export class ListJobsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: DTOJobsJobDTO })
    @Expose({ name: "jobs" })
    @Type(() => DTOJobsJobDTO)
    jobs: DTOJobsJobDTO[];
}
