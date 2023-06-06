/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { NotificationSettings } from "./notificationsettings";
import { Expose, Type } from "class-transformer";

/**
 * Response for getting notification settings
 */
export class GetNotificationSettingsResponse extends SpeakeasyBase {
    /**
     * Settings that control how and when notifications are delivered.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "notificationSettings" })
    @Type(() => NotificationSettings)
    notificationSettings?: NotificationSettings;
}
