/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UberNotificationSchedule } from "./ubernotificationschedule";
import { Expose, Type } from "class-transformer";

/**
 * Settings that control how and when notifications are delivered.
 */
export class NotificationSettings extends SpeakeasyBase {
    /**
     *
     * @remarks
     * Combination of all possible schedule types, a hacky workaround for bugs in generated clients that use polymorphic types.
     * There are three types of schedules. Weekly, Daily, and Individual. You need to set the right fields for each one.
     *
     * Weekly:
     *     enabled, cadence=WEEKLY, dayOfWeek, local24HourOfDay, localMinuteOfHour, localTimezone
     *
     * Daily:
     *     enabled, cadence=DAILY, local24HourOfDay, localMinuteOfHour, localTimezone
     *
     * Individual:
     *     enabled, cadence=INDIVIDUAL
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "emailSettings" })
    @Type(() => UberNotificationSchedule)
    emailSettings?: UberNotificationSchedule;

    /**
     *
     * @remarks
     * Combination of all possible schedule types, a hacky workaround for bugs in generated clients that use polymorphic types.
     * There are three types of schedules. Weekly, Daily, and Individual. You need to set the right fields for each one.
     *
     * Weekly:
     *     enabled, cadence=WEEKLY, dayOfWeek, local24HourOfDay, localMinuteOfHour, localTimezone
     *
     * Daily:
     *     enabled, cadence=DAILY, local24HourOfDay, localMinuteOfHour, localTimezone
     *
     * Individual:
     *     enabled, cadence=INDIVIDUAL
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pagerDutySettings" })
    @Type(() => UberNotificationSchedule)
    pagerDutySettings?: UberNotificationSchedule;

    /**
     *
     * @remarks
     * Combination of all possible schedule types, a hacky workaround for bugs in generated clients that use polymorphic types.
     * There are three types of schedules. Weekly, Daily, and Individual. You need to set the right fields for each one.
     *
     * Weekly:
     *     enabled, cadence=WEEKLY, dayOfWeek, local24HourOfDay, localMinuteOfHour, localTimezone
     *
     * Daily:
     *     enabled, cadence=DAILY, local24HourOfDay, localMinuteOfHour, localTimezone
     *
     * Individual:
     *     enabled, cadence=INDIVIDUAL
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "slackSettings" })
    @Type(() => UberNotificationSchedule)
    slackSettings?: UberNotificationSchedule;
}