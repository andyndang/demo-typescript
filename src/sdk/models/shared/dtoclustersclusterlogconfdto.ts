/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DTOClustersDbfsStorageInfoDTO } from "./dtoclustersdbfsstorageinfodto";
import { DTOClustersS3StorageInfoDTO } from "./dtoclusterss3storageinfodto";
import { Expose, Type } from "class-transformer";

export class DTOClustersClusterLogConfDTO extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "dbfs" })
    @Type(() => DTOClustersDbfsStorageInfoDTO)
    dbfs?: DTOClustersDbfsStorageInfoDTO;

    @SpeakeasyMetadata()
    @Expose({ name: "s3" })
    @Type(() => DTOClustersS3StorageInfoDTO)
    s3?: DTOClustersS3StorageInfoDTO;
}
