/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Role } from "./role";
import { Expose } from "class-transformer";

export class AddMembershipRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "createdBy" })
    createdBy?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "default" })
    default?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    @SpeakeasyMetadata()
    @Expose({ name: "orgId" })
    orgId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "role" })
    role: Role;
}