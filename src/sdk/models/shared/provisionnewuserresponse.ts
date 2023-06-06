/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * ProvisionNewUser default response
 */
export class ProvisionNewUserResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "modelId" })
    modelId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "orgId" })
    orgId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "userId" })
    userId: string;
}