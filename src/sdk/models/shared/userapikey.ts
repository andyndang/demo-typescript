/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Response when creating an API key successfully
 */
export class UserApiKey extends SpeakeasyBase {
    /**
     * Human-readable alias for the key
     */
    @SpeakeasyMetadata()
    @Expose({ name: "alias" })
    alias?: string;

    /**
     * Creation time in human readable format
     */
    @SpeakeasyMetadata()
    @Expose({ name: "creationTime" })
    creationTime: string;

    /**
     * Expiration time in human readable format
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expirationTime" })
    expirationTime?: string;

    /**
     * The full value of the key. This is not persisted in the system
     */
    @SpeakeasyMetadata()
    @Expose({ name: "key" })
    key?: string;

    /**
     * The key id. Can be used to identify keys for a given user
     */
    @SpeakeasyMetadata()
    @Expose({ name: "keyId" })
    keyId: string;

    /**
     * The organization that the key belongs to
     */
    @SpeakeasyMetadata()
    @Expose({ name: "orgId" })
    orgId: string;

    /**
     * Whether the key has been revoked
     */
    @SpeakeasyMetadata()
    @Expose({ name: "revoked" })
    revoked?: boolean;

    /**
     * Scope of the key
     */
    @SpeakeasyMetadata()
    @Expose({ name: "scopes" })
    scopes?: string[];

    /**
     * The user that the key represents
     */
    @SpeakeasyMetadata()
    @Expose({ name: "userId" })
    userId: string;
}