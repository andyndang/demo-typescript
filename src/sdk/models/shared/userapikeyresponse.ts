/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UserApiKey } from "./userapikey";
import { Expose, Type } from "class-transformer";

/**
 * An key metadata object but no secret values
 */
export class UserApiKeyResponse extends SpeakeasyBase {
    /**
     * Response when creating an API key successfully
     */
    @SpeakeasyMetadata()
    @Expose({ name: "key" })
    @Type(() => UserApiKey)
    key?: UserApiKey;
}
