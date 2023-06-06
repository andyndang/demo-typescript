/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class FeatureFlags {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Get feature flags for the specified user/org
     *
     * @remarks
     * Get feature flags for the specified user/org
     */
    async getFeatureFlags(
        req: operations.GetFeatureFlagsRequest,
        security: operations.GetFeatureFlagsSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetFeatureFlagsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetFeatureFlagsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/v0/feature-flags";

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetFeatureFlagsSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetFeatureFlagsResponse = new operations.GetFeatureFlagsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.featureFlags = utils.objectToClass(httpRes?.data, shared.FeatureFlags);
                }
                break;
        }

        return res;
    }
}