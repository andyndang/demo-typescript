/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ProvisionDatabricksConnectionRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    @SpeakeasyMetadata()
    @Expose({ name: "expectExistingUser" })
    expectExistingUser: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;
}
