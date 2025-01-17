/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Feature flag state
 */
export class FeatureFlags extends SpeakeasyBase {
    /**
     * The state of feature flags
     */
    @SpeakeasyMetadata()
    @Expose({ name: "flagValues" })
    flagValues: Record<string, boolean>;
}
