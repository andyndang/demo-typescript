/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { NotificationSettings } from "./notificationsettings";
import { SubscriptionTier } from "./subscriptiontier";
import { Expose, Type } from "class-transformer";

/**
 * Summary about an organization
 */
export class OrganizationSummary extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "domain" })
    domain?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "emailDomains" })
    emailDomains?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "notificationEmailAddress" })
    notificationEmailAddress?: string;

    /**
     * Settings that control how and when notifications are delivered.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "notificationSettings" })
    @Type(() => NotificationSettings)
    notificationSettings?: NotificationSettings;

    @SpeakeasyMetadata()
    @Expose({ name: "observatoryUrl" })
    observatoryUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "pagerDutyKey" })
    pagerDutyKey?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "slackWebhook" })
    slackWebhook?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "subscriptionTier" })
    subscriptionTier?: SubscriptionTier;
}