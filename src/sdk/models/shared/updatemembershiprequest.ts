/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Role } from "./role";
import { Expose } from "class-transformer";

export class UpdateMembershipRequest extends SpeakeasyBase {
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