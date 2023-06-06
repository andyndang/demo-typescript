# organizations

### Available Operations

* [createOrganization](#createorganization) - Create an organization
* [deleteOrganization](#deleteorganization) - Delete an org
* [getAWSMarketplaceMetadata](#getawsmarketplacemetadata) - Get marketplace metadata for an org if any exists.
* [getOrganization](#getorganization) - Get the metadata about an organization.
* [listOrganizations](#listorganizations) - Get a list of all of the organization ids.
* [~~partiallyUpdateOrg~~](#partiallyupdateorg) - Update some fields of an organization to non-null values :warning: **Deprecated**
* [partiallyUpdateOrganization](#partiallyupdateorganization) - Update some fields of an organization to non-null values
* [~~updateOrg~~](#updateorg) - Update an existing organization :warning: **Deprecated**
* [updateOrganization](#updateorganization) - Update an existing organization

## createOrganization

Create an organization

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { CreateOrganizationResponse } from "Songbird/dist/sdk/models/operations";
import { NotificationSettingsDay, NotificationSqsMessageCadence, SubscriptionTier } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.organizations.createOrganization({
  domain: "acme.ai",
  emailDomains: "acme.ai,acme.com",
  name: "ACME, Inc",
  notificationEmailAddress: "notifications@acme.ai",
  observatoryUrl: "https://hub.whylabsapp.com",
  overrideId: "org-123",
  pagerDutyKey: "abc-def-ghi-jkl",
  slackWebhook: "https://hooks.slack.com/services/foo/bar",
  subscriptionTier: SubscriptionTier.AwsMarketplace,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: CreateOrganizationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteOrganization

Delete an org

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { DeleteOrganizationResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.organizations.deleteOrganization({
  orgId: "odit",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: DeleteOrganizationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getAWSMarketplaceMetadata

Get marketplace metadata for an org if any exists.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetAWSMarketplaceMetadataResponse } from "Songbird/dist/sdk/models/operations";
import { MarketplaceDimensions } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.organizations.getAWSMarketplaceMetadata({
  orgId: "ea",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetAWSMarketplaceMetadataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrganization

Returns various metadata about an organization

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetOrganizationResponse } from "Songbird/dist/sdk/models/operations";
import { NotificationSettingsDay, NotificationSqsMessageCadence, SubscriptionTier } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.organizations.getOrganization({
  orgId: "accusantium",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetOrganizationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listOrganizations

Get a list of all of the organization ids.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { ListOrganizationsResponse } from "Songbird/dist/sdk/models/operations";
import { NotificationSettingsDay, NotificationSqsMessageCadence, SubscriptionTier } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.organizations.listOrganizations({
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: ListOrganizationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## ~~partiallyUpdateOrg~~

Update some fields of an organization to non-null values, leaving all other existing values the same

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { PartiallyUpdateOrgResponse } from "Songbird/dist/sdk/models/operations";
import { NotificationSettingsDay, NotificationSqsMessageCadence, SubscriptionTier } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.organizations.partiallyUpdateOrg({
  requestBody: {
    orgId: "ab",
  },
  domain: "acme.ai",
  name: "ACME, Inc",
  notificationEmailAddress: "notifications@acme.ai",
  observatoryUrl: "https://hub.whylabsapp.com",
  slackWebhook: "https://hooks.slack.com/services/foo/bar",
  subscriptionTier: SubscriptionTier.Subscription,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: PartiallyUpdateOrgResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## partiallyUpdateOrganization

Update some fields of an organization to non-null values, leaving all other existing values the same

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { PartiallyUpdateOrganizationResponse } from "Songbird/dist/sdk/models/operations";
import { NotificationSettingsDay, NotificationSqsMessageCadence, SubscriptionTier } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.organizations.partiallyUpdateOrganization({
  domain: "acme.ai",
  emailDomains: "acme.ai,acme.com",
  name: "ACME, Inc",
  notificationEmailAddress: "notifications@acme.ai",
  observatoryUrl: "https://hub.whylabsapp.com",
  orgId: "quidem",
  pagerDutyKey: "abc-def-ghi-jkl",
  slackWebhook: "https://hooks.slack.com/services/foo/bar",
  subscriptionTier: SubscriptionTier.Paid,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: PartiallyUpdateOrganizationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## ~~updateOrg~~

Update all fields of an existing organization

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { UpdateOrgResponse } from "Songbird/dist/sdk/models/operations";
import { NotificationSettingsDay, NotificationSqsMessageCadence, SubscriptionTier } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.organizations.updateOrg({
  requestBody: {
    orgId: "voluptate",
  },
  domain: "acme.ai",
  emailDomains: "acme.ai,acme.com",
  name: "ACME, Inc",
  notificationEmailAddress: "notifications@acme.ai",
  observatoryUrl: "https://hub.whylabsapp.com",
  pagerDutyKey: "abc-def-ghi-jkl",
  slackWebhook: "https://hooks.slack.com/services/foo/bar",
  subscriptionTier: SubscriptionTier.Paid,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: UpdateOrgResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateOrganization

Update all fields of an existing organization

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { UpdateOrganizationResponse } from "Songbird/dist/sdk/models/operations";
import { NotificationSettingsDay, NotificationSqsMessageCadence, SubscriptionTier } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.organizations.updateOrganization({
  domain: "acme.ai",
  emailDomains: "acme.ai,acme.com",
  name: "ACME, Inc",
  notificationEmailAddress: "notifications@acme.ai",
  observatoryUrl: "https://hub.whylabsapp.com",
  orgId: "nam",
  pagerDutyKey: "abc-def-ghi-jkl",
  slackWebhook: "https://hooks.slack.com/services/foo/bar",
  subscriptionTier: SubscriptionTier.Free,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: UpdateOrganizationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
