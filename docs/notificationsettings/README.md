# notificationSettings

### Available Operations

* [addNotificationAction](#addnotificationaction) - Add new notification action
* [deleteNotificationAction](#deletenotificationaction) - Delete notification action
* [disableNotificationAction](#disablenotificationaction) - Disable notification action
* [enableNotificationAction](#enablenotificationaction) - Enable notification action
* [getNotificationAction](#getnotificationaction) - Get notification action for id
* [getNotificationSettings](#getnotificationsettings) - Get notification settings for an org
* [listNotificationActions](#listnotificationactions) - List notification actions for an org
* [putNotificationAction](#putnotificationaction) - Add new notification action
* [testNotificationAction](#testnotificationaction) - Test a notification action
* [updateNotificationAction](#updatenotificationaction) - Update notification action
* [updateNotificationSettings](#updatenotificationsettings) - Update notification settings for an org
* [getEmailNotificationActionPayload](#getemailnotificationactionpayload) - Get dummy notification action payload
* [getPagerDutyNotificationActionPayload](#getpagerdutynotificationactionpayload) - Get dummy notification action payload
* [getSlackNotificationActionPayload](#getslacknotificationactionpayload) - Get dummy notification action payload

## addNotificationAction

Add new notification action

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { AddNotificationActionResponse } from "Songbird/dist/sdk/models/operations";
import { ActionType } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.notificationSettings.addNotificationAction({
  requestBody: "in",
  actionId: "user-action",
  orgId: "org-123",
  type: ActionType.Email,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: AddNotificationActionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteNotificationAction

Delete notification action

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { DeleteNotificationActionResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.notificationSettings.deleteNotificationAction({
  actionId: "user-action",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: DeleteNotificationActionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## disableNotificationAction

Disable notification action

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { DisableNotificationActionResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.notificationSettings.disableNotificationAction({
  actionId: "user-action",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: DisableNotificationActionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## enableNotificationAction

Enable notification action

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { EnableNotificationActionResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.notificationSettings.enableNotificationAction({
  actionId: "user-action",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: EnableNotificationActionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getNotificationAction

Get notification action for id

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetNotificationActionResponse } from "Songbird/dist/sdk/models/operations";
import { ActionType } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.notificationSettings.getNotificationAction({
  actionId: "user-action",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetNotificationActionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getNotificationSettings

Get notification settings for an org

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetNotificationSettingsResponse } from "Songbird/dist/sdk/models/operations";
import { NotificationSettingsDay, NotificationSqsMessageCadence } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.notificationSettings.getNotificationSettings({
  orgId: "architecto",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetNotificationSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listNotificationActions

Get notification actions for an org

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { ListNotificationActionsResponse } from "Songbird/dist/sdk/models/operations";
import { ActionType } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.notificationSettings.listNotificationActions({
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: ListNotificationActionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putNotificationAction

Add new notification action

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { PutNotificationActionResponse } from "Songbird/dist/sdk/models/operations";
import { ActionType } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.notificationSettings.putNotificationAction({
  requestBody: "repudiandae",
  actionId: "user-action",
  orgId: "org-123",
  type: ActionType.Slack,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: PutNotificationActionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## testNotificationAction

Test a notification action

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { TestNotificationActionResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.notificationSettings.testNotificationAction({
  actionId: "user-action",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: TestNotificationActionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateNotificationAction

Update notification action

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { UpdateNotificationActionResponse } from "Songbird/dist/sdk/models/operations";
import { ActionType } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.notificationSettings.updateNotificationAction({
  requestBody: "expedita",
  actionId: "user-action",
  orgId: "org-123",
  type: ActionType.Slack,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: UpdateNotificationActionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateNotificationSettings

Update notification settings for an org

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { UpdateNotificationSettingsResponse } from "Songbird/dist/sdk/models/operations";
import { NotificationSettingsDay, NotificationSqsMessageCadence } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.notificationSettings.updateNotificationSettings({
  notificationSettings: {
    emailSettings: {
      cadence: NotificationSqsMessageCadence.Individual,
      dayOfWeek: NotificationSettingsDay.Friday,
      enabled: false,
      local24HourOfDay: 149448,
      localMinuteOfHour: 904648,
      localTimezone: "pariatur",
    },
    pagerDutySettings: {
      cadence: NotificationSqsMessageCadence.Hourly,
      dayOfWeek: NotificationSettingsDay.Monday,
      enabled: false,
      local24HourOfDay: 508315,
      localMinuteOfHour: 615560,
      localTimezone: "magni",
    },
    slackSettings: {
      cadence: NotificationSqsMessageCadence.Hourly,
      dayOfWeek: NotificationSettingsDay.Friday,
      enabled: false,
      local24HourOfDay: 848009,
      localMinuteOfHour: 864934,
      localTimezone: "maxime",
    },
  },
  orgId: "ea",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: UpdateNotificationSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getEmailNotificationActionPayload

Get dummy notification action payload

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetEmailNotificationActionPayloadResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.notificationSettings.getEmailNotificationActionPayload({
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetEmailNotificationActionPayloadResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getPagerDutyNotificationActionPayload

Get dummy notification action payload

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetPagerDutyNotificationActionPayloadResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.notificationSettings.getPagerDutyNotificationActionPayload({
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetPagerDutyNotificationActionPayloadResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getSlackNotificationActionPayload

Get dummy notification action payload

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetSlackNotificationActionPayloadResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.notificationSettings.getSlackNotificationActionPayload({
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetSlackNotificationActionPayloadResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
