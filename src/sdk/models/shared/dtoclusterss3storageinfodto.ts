/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class DTOClustersS3StorageInfoDTO extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "cannedAcl" })
    cannedAcl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "destination" })
    destination?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "enableEncryption" })
    enableEncryption?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "encryptionType" })
    encryptionType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "endpoint" })
    endpoint?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "kmsKey" })
    kmsKey?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "region" })
    region?: string;
}
