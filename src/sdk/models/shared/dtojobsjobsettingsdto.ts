/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DTOJobsCronScheduleDTO } from "./dtojobscronscheduledto";
import { DTOJobsJobEmailNotificationsDTO } from "./dtojobsjobemailnotificationsdto";
import { DTOJobsNewClusterDTO } from "./dtojobsnewclusterdto";
import { DTOJobsNotebookTaskDTO } from "./dtojobsnotebooktaskdto";
import { DTOJobsSparkJarTaskDTO } from "./dtojobssparkjartaskdto";
import { DTOJobsSparkPythonTaskDTO } from "./dtojobssparkpythontaskdto";
import { DTOJobsSparkSubmitTaskDTO } from "./dtojobssparksubmittaskdto";
import { Expose, Type } from "class-transformer";

export class DTOJobsJobSettingsDTO extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "emailNotifications" })
    @Type(() => DTOJobsJobEmailNotificationsDTO)
    emailNotifications?: DTOJobsJobEmailNotificationsDTO;

    @SpeakeasyMetadata()
    @Expose({ name: "existingClusterId" })
    existingClusterId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "libraries" })
    libraries?: Record<string, any>[];

    @SpeakeasyMetadata()
    @Expose({ name: "maxConcurrentRuns" })
    maxConcurrentRuns?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "maxRetries" })
    maxRetries?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "minRetryIntervalMillis" })
    minRetryIntervalMillis?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "newCluster" })
    @Type(() => DTOJobsNewClusterDTO)
    newCluster?: DTOJobsNewClusterDTO;

    @SpeakeasyMetadata()
    @Expose({ name: "notebookTask" })
    @Type(() => DTOJobsNotebookTaskDTO)
    notebookTask?: DTOJobsNotebookTaskDTO;

    @SpeakeasyMetadata()
    @Expose({ name: "retryOnTimeout" })
    retryOnTimeout?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "schedule" })
    @Type(() => DTOJobsCronScheduleDTO)
    schedule?: DTOJobsCronScheduleDTO;

    @SpeakeasyMetadata()
    @Expose({ name: "sparkJarTask" })
    @Type(() => DTOJobsSparkJarTaskDTO)
    sparkJarTask?: DTOJobsSparkJarTaskDTO;

    @SpeakeasyMetadata()
    @Expose({ name: "sparkPythonTask" })
    @Type(() => DTOJobsSparkPythonTaskDTO)
    sparkPythonTask?: DTOJobsSparkPythonTaskDTO;

    @SpeakeasyMetadata()
    @Expose({ name: "sparkSubmitTask" })
    @Type(() => DTOJobsSparkSubmitTaskDTO)
    sparkSubmitTask?: DTOJobsSparkSubmitTaskDTO;

    @SpeakeasyMetadata()
    @Expose({ name: "timeoutSeconds" })
    timeoutSeconds?: number;
}
