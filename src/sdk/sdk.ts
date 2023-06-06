/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Admin } from "./admin";
import { ApiKey } from "./apikey";
import { Databricks } from "./databricks";
import { DatasetMetadata } from "./datasetmetadata";
import { DatasetProfile } from "./datasetprofile";
import { FeatureFlags } from "./featureflags";
import { FeatureWeights } from "./featureweights";
import { Internal } from "./internal";
import { Log } from "./log";
import { Membership } from "./membership";
import { Models } from "./models";
import { Monitor } from "./monitor";
import { NotificationSettings } from "./notificationsettings";
import { Organizations } from "./organizations";
import { Payment } from "./payment";
import { Provision } from "./provision";
import { Schema } from "./schema";
import { Search } from "./search";
import { Sessions } from "./sessions";
import { User } from "./user";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://api.whylabsapp.com"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    sdkVersion = "1.0.0";
    genVersion = "2.35.9";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * WhyLabs Songbird: WhyLabs API that enables end-to-end AI observability
 */
export class Songbird {
    public admin: Admin;
    public apiKey: ApiKey;
    public databricks: Databricks;
    public datasetMetadata: DatasetMetadata;
    public datasetProfile: DatasetProfile;
    public featureWeights: FeatureWeights;
    public featureFlags: FeatureFlags;
    public internal: Internal;
    public log: Log;
    public membership: Membership;
    public models: Models;
    public monitor: Monitor;
    public notificationSettings: NotificationSettings;
    public organizations: Organizations;
    public payment: Payment;
    public provision: Provision;
    public schema: Schema;
    public search: Search;
    public sessions: Sessions;
    public user: User;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        const securityClient = defaultClient;

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.admin = new Admin(this.sdkConfiguration);
        this.apiKey = new ApiKey(this.sdkConfiguration);
        this.databricks = new Databricks(this.sdkConfiguration);
        this.datasetMetadata = new DatasetMetadata(this.sdkConfiguration);
        this.datasetProfile = new DatasetProfile(this.sdkConfiguration);
        this.featureWeights = new FeatureWeights(this.sdkConfiguration);
        this.featureFlags = new FeatureFlags(this.sdkConfiguration);
        this.internal = new Internal(this.sdkConfiguration);
        this.log = new Log(this.sdkConfiguration);
        this.membership = new Membership(this.sdkConfiguration);
        this.models = new Models(this.sdkConfiguration);
        this.monitor = new Monitor(this.sdkConfiguration);
        this.notificationSettings = new NotificationSettings(this.sdkConfiguration);
        this.organizations = new Organizations(this.sdkConfiguration);
        this.payment = new Payment(this.sdkConfiguration);
        this.provision = new Provision(this.sdkConfiguration);
        this.schema = new Schema(this.sdkConfiguration);
        this.search = new Search(this.sdkConfiguration);
        this.sessions = new Sessions(this.sdkConfiguration);
        this.user = new User(this.sdkConfiguration);
    }
}