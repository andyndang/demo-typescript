/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DTOClustersAutoScaleDTO } from "./dtoclustersautoscaledto";
import { DTOClustersAwsAttributesDTO } from "./dtoclustersawsattributesdto";
import { DTOClustersClusterLogConfDTO } from "./dtoclustersclusterlogconfdto";
import { DTOJobsDataSecurityModeDTO } from "./dtojobsdatasecuritymodedto";
import { Expose, Type } from "class-transformer";

export class DTOJobsNewClusterDTO extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "artifactPaths" })
    artifactPaths?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "autoScale" })
    @Type(() => DTOClustersAutoScaleDTO)
    autoScale?: DTOClustersAutoScaleDTO;

    @SpeakeasyMetadata()
    @Expose({ name: "autoTerminationMinutes" })
    autoTerminationMinutes?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "awsAttributes" })
    @Type(() => DTOClustersAwsAttributesDTO)
    awsAttributes?: DTOClustersAwsAttributesDTO;

    @SpeakeasyMetadata()
    @Expose({ name: "clusterLogConf" })
    @Type(() => DTOClustersClusterLogConfDTO)
    clusterLogConf?: DTOClustersClusterLogConfDTO;

    @SpeakeasyMetadata()
    @Expose({ name: "clusterName" })
    clusterName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "customTags" })
    customTags?: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "dataSecurityMode" })
    dataSecurityMode?: DTOJobsDataSecurityModeDTO;

    @SpeakeasyMetadata()
    @Expose({ name: "driverNodeTypeId" })
    driverNodeTypeId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "enableElasticDisk" })
    enableElasticDisk?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "initScripts" })
    initScripts?: Record<string, any>[];

    @SpeakeasyMetadata()
    @Expose({ name: "instancePoolId" })
    instancePoolId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "nodeTypeId" })
    nodeTypeId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "numWorkers" })
    numWorkers?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "policyId" })
    policyId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "runtimeEngine" })
    runtimeEngine?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sparkConf" })
    sparkConf?: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "sparkEnvVars" })
    sparkEnvVars?: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "sparkVersion" })
    sparkVersion?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sshPublicKeys" })
    sshPublicKeys?: Record<string, any>[];
}
