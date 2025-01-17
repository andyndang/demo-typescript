/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ProvisionNewMarketplaceUserRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "customerIdToken" })
    customerIdToken: string;

    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    @SpeakeasyMetadata()
    @Expose({ name: "expectExisting" })
    expectExisting?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "modelName" })
    modelName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "orgName" })
    orgName: string;
}
