/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class ApiKey {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Generate an API key for a user.
     *
     * @remarks
     * Generates an API key for a given user. Must be called either by system administrator or by the user themselves
     */
    async createApiKey(
        req: operations.CreateApiKeyRequest,
        security: operations.CreateApiKeySecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateApiKeyResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateApiKeyRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/v0/organizations/{org_id}/api-key", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.CreateApiKeySecurity(security);
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
            method: "post",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.CreateApiKeyResponse = new operations.CreateApiKeyResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.userApiKey = utils.objectToClass(httpRes?.data, shared.UserApiKey);
                }
                break;
        }

        return res;
    }

    /**
     * Get an api key by its id
     *
     * @remarks
     * Get an api key by its id
     */
    async getApiKey(
        req: operations.GetApiKeyRequest,
        security: operations.GetApiKeySecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetApiKeyResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetApiKeyRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v0/organizations/{org_id}/api-key/{key_id}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetApiKeySecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetApiKeyResponse = new operations.GetApiKeyResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.userApiKeyResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.UserApiKeyResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List API key metadata for a given organization and user
     *
     * @remarks
     * Returns the API key metadata for a given organization and user
     */
    async listApiKeys(
        req: operations.ListApiKeysRequest,
        security: operations.ListApiKeysSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.ListApiKeysResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListApiKeysRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/v0/organizations/{org_id}/api-key", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.ListApiKeysSecurity(security);
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

        const res: operations.ListApiKeysResponse = new operations.ListApiKeysResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.listUserApiKeys = utils.objectToClass(
                        httpRes?.data,
                        shared.ListUserApiKeys
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Revoke the given API Key, removing its ability to access WhyLabs systems
     *
     * @remarks
     * Revokes the given API Key
     */
    async revokeApiKey(
        req: operations.RevokeApiKeyRequest,
        security: operations.RevokeApiKeySecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.RevokeApiKeyResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RevokeApiKeyRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/v0/organizations/{org_id}/api-key", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.RevokeApiKeySecurity(security);
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
            method: "delete",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.RevokeApiKeyResponse = new operations.RevokeApiKeyResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.userApiKey = utils.objectToClass(httpRes?.data, shared.UserApiKey);
                }
                break;
        }

        return res;
    }
}