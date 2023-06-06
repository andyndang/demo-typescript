/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Monitor {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Delete the analyzer config for a given dataset.
     *
     * @remarks
     * Delete the analyzer config for a given dataset.
     */
    async deleteAnalyzer(
        req: operations.DeleteAnalyzerRequest,
        security: operations.DeleteAnalyzerSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteAnalyzerResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteAnalyzerRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v0/organizations/{org_id}/models/{dataset_id}/monitor-config/analyzer/{analyzer_id}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DeleteAnalyzerSecurity(security);
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
            method: "delete",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteAnalyzerResponse = new operations.DeleteAnalyzerResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.response = utils.objectToClass(httpRes?.data, shared.Response);
                }
                break;
        }

        return res;
    }

    /**
     * Delete the monitor for a given dataset.
     *
     * @remarks
     * Delete the monitor for a given dataset.
     */
    async deleteMonitor(
        req: operations.DeleteMonitorRequest,
        security: operations.DeleteMonitorSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteMonitorResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteMonitorRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v0/organizations/{org_id}/models/{dataset_id}/monitor-config/monitor/{monitor_id}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DeleteMonitorSecurity(security);
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
            method: "delete",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteMonitorResponse = new operations.DeleteMonitorResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.response = utils.objectToClass(httpRes?.data, shared.Response);
                }
                break;
        }

        return res;
    }

    /**
     * Get the analyzer config for a given dataset.
     *
     * @remarks
     * Get the analyzer config for a given dataset.
     */
    async getAnalyzer(
        req: operations.GetAnalyzerRequest,
        security: operations.GetAnalyzerSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetAnalyzerResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAnalyzerRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v0/organizations/{org_id}/models/{dataset_id}/monitor-config/analyzer/{analyzer_id}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetAnalyzerSecurity(security);
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

        const res: operations.GetAnalyzerResponse = new operations.GetAnalyzerResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getAnalyzerDefaultApplicationJSONString = JSON.stringify(httpRes?.data);
                }
                break;
        }

        return res;
    }

    /**
     * Get the monitor config for a given dataset.
     *
     * @remarks
     * Get the monitor config for a given dataset.
     */
    async getMonitor(
        req: operations.GetMonitorRequest,
        security: operations.GetMonitorSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetMonitorResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMonitorRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v0/organizations/{org_id}/models/{dataset_id}/monitor-config/monitor/{monitor_id}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetMonitorSecurity(security);
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

        const res: operations.GetMonitorResponse = new operations.GetMonitorResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getMonitorDefaultApplicationJSONString = JSON.stringify(httpRes?.data);
                }
                break;
        }

        return res;
    }

    /**
     * Get the monitor config document for a given dataset.
     *
     * @remarks
     * Get the monitor config document for a given dataset.
     */
    async getMonitorConfigV3(
        req: operations.GetMonitorConfigV3Request,
        security: operations.GetMonitorConfigV3Security,
        config?: AxiosRequestConfig
    ): Promise<operations.GetMonitorConfigV3Response> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMonitorConfigV3Request(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v0/organizations/{org_id}/models/{dataset_id}/monitor-config/v3",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetMonitorConfigV3Security(security);
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

        const res: operations.GetMonitorConfigV3Response =
            new operations.GetMonitorConfigV3Response({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getMonitorConfigV3DefaultApplicationJSONString = JSON.stringify(
                        httpRes?.data
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get the monitor config document version for a given dataset.
     *
     * @remarks
     * Get the monitor config document version for a given dataset.
     */
    async getMonitorConfigV3Version(
        req: operations.GetMonitorConfigV3VersionRequest,
        security: operations.GetMonitorConfigV3VersionSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetMonitorConfigV3VersionResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMonitorConfigV3VersionRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v0/organizations/{org_id}/models/{dataset_id}/monitor-config/v3/versions/{version_id}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetMonitorConfigV3VersionSecurity(security);
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

        const res: operations.GetMonitorConfigV3VersionResponse =
            new operations.GetMonitorConfigV3VersionResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getMonitorConfigV3VersionDefaultApplicationJSONString = JSON.stringify(
                        httpRes?.data
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List the monitor config document versions for a given dataset.
     *
     * @remarks
     * List the monitor config document versions for a given dataset.
     */
    async listMonitorConfigV3Versions(
        req: operations.ListMonitorConfigV3VersionsRequest,
        security: operations.ListMonitorConfigV3VersionsSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.ListMonitorConfigV3VersionsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListMonitorConfigV3VersionsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v0/organizations/{org_id}/models/{dataset_id}/monitor-config/v3/versions",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.ListMonitorConfigV3VersionsSecurity(security);
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

        const res: operations.ListMonitorConfigV3VersionsResponse =
            new operations.ListMonitorConfigV3VersionsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.monitorConfigVersions = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.monitorConfigVersions = utils.objectToClass(
                        httpRes?.data,
                        shared.MonitorConfigVersion,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Patch an updated monitor config document for a given dataset.
     *
     * @remarks
     * Save an updated monitor config document for a given dataset.  Monitors and analyzers matching an existing ID are replaced.
     */
    async patchMonitorConfigV3(
        req: operations.PatchMonitorConfigV3Request,
        security: operations.PatchMonitorConfigV3Security,
        config?: AxiosRequestConfig
    ): Promise<operations.PatchMonitorConfigV3Response> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PatchMonitorConfigV3Request(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v0/organizations/{org_id}/models/{dataset_id}/monitor-config/v3",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "string");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.PatchMonitorConfigV3Security(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "patch",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PatchMonitorConfigV3Response =
            new operations.PatchMonitorConfigV3Response({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.response = utils.objectToClass(httpRes?.data, shared.Response);
                }
                break;
        }

        return res;
    }

    /**
     * Save the analyzer config for a given dataset.
     *
     * @remarks
     * Save the analyzer config for a given dataset.
     */
    async putAnalyzer(
        req: operations.PutAnalyzerRequest,
        security: operations.PutAnalyzerSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.PutAnalyzerResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutAnalyzerRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v0/organizations/{org_id}/models/{dataset_id}/monitor-config/analyzer/{analyzer_id}",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "string");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.PutAnalyzerSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "put",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PutAnalyzerResponse = new operations.PutAnalyzerResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.response = utils.objectToClass(httpRes?.data, shared.Response);
                }
                break;
        }

        return res;
    }

    /**
     * Save the monitor for a given dataset.
     *
     * @remarks
     * Save the monitor for a given dataset.
     */
    async putMonitor(
        req: operations.PutMonitorRequest,
        security: operations.PutMonitorSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.PutMonitorResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutMonitorRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v0/organizations/{org_id}/models/{dataset_id}/monitor-config/monitor/{monitor_id}",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "string");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.PutMonitorSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "put",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PutMonitorResponse = new operations.PutMonitorResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.response = utils.objectToClass(httpRes?.data, shared.Response);
                }
                break;
        }

        return res;
    }

    /**
     * Save the monitor config document for a given dataset.
     *
     * @remarks
     * Save the monitor config document for a given dataset.
     */
    async putMonitorConfigV3(
        req: operations.PutMonitorConfigV3Request,
        security: operations.PutMonitorConfigV3Security,
        config?: AxiosRequestConfig
    ): Promise<operations.PutMonitorConfigV3Response> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutMonitorConfigV3Request(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v0/organizations/{org_id}/models/{dataset_id}/monitor-config/v3",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "string");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.PutMonitorConfigV3Security(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "put",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PutMonitorConfigV3Response =
            new operations.PutMonitorConfigV3Response({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.response = utils.objectToClass(httpRes?.data, shared.Response);
                }
                break;
        }

        return res;
    }

    /**
     * Put the RequestMonitorRun config into S3.
     *
     * @remarks
     * Put the RequestMonitorRun config into S3.
     */
    async putRequestMonitorRunConfig(
        req: operations.PutRequestMonitorRunConfigRequest,
        security: operations.PutRequestMonitorRunConfigSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.PutRequestMonitorRunConfigResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutRequestMonitorRunConfigRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v0/organizations/{org_id}/models/{dataset_id}/request-monitor-run",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.PutRequestMonitorRunConfigSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "put",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PutRequestMonitorRunConfigResponse =
            new operations.PutRequestMonitorRunConfigResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.putRequestMonitorRunConfigDefaultApplicationJSONString = JSON.stringify(
                        httpRes?.data
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Validate the monitor config document for a given dataset.
     *
     * @remarks
     * Validate the monitor config document for a given dataset.
     */
    async validateMonitorConfigV3(
        req: operations.ValidateMonitorConfigV3Request,
        security: operations.ValidateMonitorConfigV3Security,
        config?: AxiosRequestConfig
    ): Promise<operations.ValidateMonitorConfigV3Response> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ValidateMonitorConfigV3Request(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v0/organizations/{org_id}/models/{dataset_id}/monitor-config/v3/validate",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "string");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.ValidateMonitorConfigV3Security(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...reqBodyHeaders, ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "put",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.ValidateMonitorConfigV3Response =
            new operations.ValidateMonitorConfigV3Response({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.response = utils.objectToClass(httpRes?.data, shared.Response);
                }
                break;
        }

        return res;
    }
}
