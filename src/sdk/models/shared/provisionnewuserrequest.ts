/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SubscriptionTier } from "./subscriptiontier";
import { Expose } from "class-transformer";

export class ProvisionNewUserRequest extends SpeakeasyBase {
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

    @SpeakeasyMetadata()
    @Expose({ name: "subscriptionTier" })
    subscriptionTier: SubscriptionTier;
}
