# internal

### Available Operations

* [createMembership](#createmembership) - Create a membership for a user, making them apart of an organization. Uses the user's current email address.
* [createOrganization](#createorganization) - Create an organization
* [createUser](#createuser) - Create a user.
* [deleteOrganization](#deleteorganization) - Delete an org
* [getAWSMarketplaceMetadata](#getawsmarketplacemetadata) - Get marketplace metadata for an org if any exists.
* [getApiKey](#getapikey) - Get an api key by its id
* [getConnection](#getconnection) - Get the connection metadata for a given org
* [getDefaultMembershipForEmail](#getdefaultmembershipforemail) - Get the default membership for a user.
* [getFeatureFlags](#getfeatureflags) - Get feature flags for the specified user/org
* [getMemberships](#getmemberships) - Get memberships for a user.
* [getMembershipsByEmail](#getmembershipsbyemail) - Get memberships for a user given that user's email address.
* [getMembershipsByOrg](#getmembershipsbyorg) - Get memberships for an org.
* [getMonitorConfigV3Version](#getmonitorconfigv3version) - Get the monitor config document version for a given dataset.
* [getNotificationSettings](#getnotificationsettings) - Get notification settings for an org
* [getOrganization](#getorganization) - Get the metadata about an organization.
* [getUser](#getuser) - Get a user by their id.
* [getUserByEmail](#getuserbyemail) - Get a user by their email.
* [listApiKeys](#listapikeys) - List API key metadata for a given organization and user
* [listJobs](#listjobs) - List all of the jobs in a workspace.
* [listMonitorConfigV3Versions](#listmonitorconfigv3versions) - List the monitor config document versions for a given dataset.
* [listOrganizations](#listorganizations) - Get a list of all of the organization ids.
* [listSegments](#listsegments) - Returns a list of segments
* [~~partiallyUpdateOrg~~](#partiallyupdateorg) - Update some fields of an organization to non-null values :warning: **Deprecated**
* [partiallyUpdateOrganization](#partiallyupdateorganization) - Update some fields of an organization to non-null values
* [postMonitorConfigValidationJob](#postmonitorconfigvalidationjob) - Create a monitor config validation job for all configs
* [provisionAWSMarketplaceNewUser](#provisionawsmarketplacenewuser) - Create resources for a new user coming from AWS Marketplace
* [provisionDatabricksConnection](#provisiondatabricksconnection) - Create resources for a new user coming from Databricks
* [provisionNewUser](#provisionnewuser) - Create the resources that a new user needs to use WhyLabs via the website.
* [putRequestMonitorRunConfig](#putrequestmonitorrunconfig) - Put the RequestMonitorRun config into S3.
* [refreshConnection](#refreshconnection) - Refresh metadata for a workspace connection.
* [registerDatabricksConnection](#registerdatabricksconnection) - Register databricks metadata, temporarily storing it against a UUID so that it can be used to provision a databricks connection after email authentication
* [removeMembershipByEmail](#removemembershipbyemail) - Removes membership in a given org from a user, using the user's email address.
* [runJob](#runjob) - Run an existing job in a given databricks workspace.
* [setDefaultMembership](#setdefaultmembership) - Sets the organization that should be used when logging a user in
* [stripePaymentEndpoint](#stripepaymentendpoint) - Endpoint for Stripe payment webhooks
* [updateConnection](#updateconnection) - Update the connection metadata for a given org
* [updateMembershipByEmail](#updatemembershipbyemail) - Updates the role in an membership
* [updateNotificationSettings](#updatenotificationsettings) - Update notification settings for an org
* [~~updateOrg~~](#updateorg) - Update an existing organization :warning: **Deprecated**
* [updateOrganization](#updateorganization) - Update an existing organization
* [updateUser](#updateuser) - Update a user.
* [whyLabsSearch](#whylabssearch) - WhyLabs Search
* [whyLabsSearchIndexing](#whylabssearchindexing) - WhyLabs Search Indexing

## createMembership

Create a membership for a user, making them apart of an organization. Uses the user's current email address.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { CreateMembershipResponse } from "Songbird/dist/sdk/models/operations";
import { Role } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.internal.createMembership({
  createdBy: "fugit",
  default: false,
  email: "Tyrel.Rosenbaum@yahoo.com",
  orgId: "commodi",
  role: Role.Member,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: CreateMembershipResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createOrganization

Create an organization

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { CreateOrganizationResponse } from "Songbird/dist/sdk/models/operations";
import { NotificationSettingsDay, NotificationSqsMessageCadence, SubscriptionTier } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.internal.createOrganization({
  domain: "acme.ai",
  emailDomains: "acme.ai,acme.com",
  name: "ACME, Inc",
  notificationEmailAddress: "notifications@acme.ai",
  observatoryUrl: "https://hub.whylabsapp.com",
  overrideId: "org-123",
  pagerDutyKey: "abc-def-ghi-jkl",
  slackWebhook: "https://hooks.slack.com/services/foo/bar",
  subscriptionTier: SubscriptionTier.Paid,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: CreateOrganizationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createUser

Create a user.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { CreateUserResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.internal.createUser({
  email: "Ona.Rippin@gmail.com",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: CreateUserResponse) => {
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

sdk.internal.deleteOrganization({
  orgId: "excepturi",
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

sdk.internal.getAWSMarketplaceMetadata({
  orgId: "aspernatur",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetAWSMarketplaceMetadataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getApiKey

Get an api key by its id

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetApiKeyResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.internal.getApiKey({
  keyId: "fh4dUNV3WQ",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetApiKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getConnection

Get the connection metadata for a given org

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetConnectionResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.internal.getConnection({
  orgId: "perferendis",
  workspaceId: "ad",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getDefaultMembershipForEmail

Get the default membership for a user.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetDefaultMembershipForEmailResponse } from "Songbird/dist/sdk/models/operations";
import { Role } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.internal.getDefaultMembershipForEmail({
  email: "Camden61@yahoo.com",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetDefaultMembershipForEmailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getFeatureFlags

Get feature flags for the specified user/org

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetFeatureFlagsResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.internal.getFeatureFlags({
  orgId: "laboriosam",
  userId: "hic",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetFeatureFlagsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getMemberships

Get memberships for a user.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetMembershipsResponse } from "Songbird/dist/sdk/models/operations";
import { Role } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.internal.getMemberships({
  userId: "saepe",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetMembershipsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getMembershipsByEmail

Get memberships for a user given that user's email address.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetMembershipsByEmailResponse } from "Songbird/dist/sdk/models/operations";
import { Role } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.internal.getMembershipsByEmail({
  email: "Issac.Hessel@hotmail.com",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetMembershipsByEmailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getMembershipsByOrg

Get memberships for an org.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetMembershipsByOrgResponse } from "Songbird/dist/sdk/models/operations";
import { Role } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.internal.getMembershipsByOrg({
  orgId: "saepe",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetMembershipsByOrgResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getMonitorConfigV3Version

Get the monitor config document version for a given dataset.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetMonitorConfigV3VersionResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.internal.getMonitorConfigV3Version({
  datasetId: "model-123",
  orgId: "org-123",
  versionId: "4920545486e2a4cdf0f770c09748e663",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetMonitorConfigV3VersionResponse) => {
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

sdk.internal.getNotificationSettings({
  orgId: "quidem",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetNotificationSettingsResponse) => {
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

sdk.internal.getOrganization({
  orgId: "architecto",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetOrganizationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getUser

Get a user by their id.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetUserResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.internal.getUser({
  userId: "ipsa",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getUserByEmail

Get a user by their email.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetUserByEmailResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.internal.getUserByEmail({
  email: "Manuela.OHara21@hotmail.com",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetUserByEmailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listApiKeys

Returns the API key metadata for a given organization and user

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { ListApiKeysResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.internal.listApiKeys({
  orgId: "org-123",
  userId: "user-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: ListApiKeysResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listJobs

List all of the jobs in a workspace.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { ListJobsResponse } from "Songbird/dist/sdk/models/operations";
import { DTOClustersAwsAvailabilityDTO, DTOEbsVolumeTypeDTO, DTOJobsDataSecurityModeDTO } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.internal.listJobs({
  orgId: "corporis",
  workspaceId: "explicabo",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: ListJobsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listMonitorConfigV3Versions

List the monitor config document versions for a given dataset.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { ListMonitorConfigV3VersionsResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.internal.listMonitorConfigV3Versions({
  datasetId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: ListMonitorConfigV3VersionsResponse) => {
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

sdk.internal.listOrganizations({
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: ListOrganizationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listSegments

Returns a list of segments for the dataset.

        

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { ListSegmentsResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.internal.listSegments({
  modelId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: ListSegmentsResponse) => {
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

sdk.internal.partiallyUpdateOrg({
  requestBody: {
    orgId: "nobis",
  },
  domain: "acme.ai",
  name: "ACME, Inc",
  notificationEmailAddress: "notifications@acme.ai",
  observatoryUrl: "https://hub.whylabsapp.com",
  slackWebhook: "https://hooks.slack.com/services/foo/bar",
  subscriptionTier: SubscriptionTier.Paid,
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

sdk.internal.partiallyUpdateOrganization({
  domain: "acme.ai",
  emailDomains: "acme.ai,acme.com",
  name: "ACME, Inc",
  notificationEmailAddress: "notifications@acme.ai",
  observatoryUrl: "https://hub.whylabsapp.com",
  orgId: "omnis",
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

## postMonitorConfigValidationJob

Create a monitor config validation job for all configs

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { PostMonitorConfigValidationJobResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.internal.postMonitorConfigValidationJob({
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: PostMonitorConfigValidationJobResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## provisionAWSMarketplaceNewUser

Create resources for a new user coming from AWS Marketplace

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { ProvisionAWSMarketplaceNewUserResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.internal.provisionAWSMarketplaceNewUser({
  customerIdToken: "minima",
  email: "Alisa_Kessler@yahoo.com",
  expectExisting: false,
  modelName: "sapiente",
  orgName: "architecto",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: ProvisionAWSMarketplaceNewUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## provisionDatabricksConnection

Create resources for a new user coming from Databricks

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { ProvisionDatabricksConnectionResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.internal.provisionDatabricksConnection({
  email: "Cordie99@yahoo.com",
  expectExistingUser: false,
  id: "a9467739-251a-4a52-83f5-ad019da1ffe7",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: ProvisionDatabricksConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## provisionNewUser

Create the resources that a new user needs to use WhyLabs via the website.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { ProvisionNewUserResponse } from "Songbird/dist/sdk/models/operations";
import { SubscriptionTier } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.internal.provisionNewUser({
  email: "Whitney.Bednar@yahoo.com",
  expectExisting: false,
  modelName: "cum",
  orgName: "perferendis",
  subscriptionTier: SubscriptionTier.Free,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: ProvisionNewUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putRequestMonitorRunConfig

Put the RequestMonitorRun config into S3.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { PutRequestMonitorRunConfigResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.internal.putRequestMonitorRunConfig({
  requestBody: {
    analyzerIds: [
      "ut",
      "maiores",
    ],
    endTimestamp: 1893456000000,
    overwrite: false,
    startTimestamp: 1577836800000,
  },
  datasetId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: PutRequestMonitorRunConfigResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## refreshConnection

Refresh metadata for a workspace connection.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { RefreshConnectionResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.internal.refreshConnection({
  orgId: "dicta",
  workspaceId: "corporis",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: RefreshConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## registerDatabricksConnection

Register databricks metadata, temporarily storing it against a UUID so that it can be used to provision a databricks connection after email authentication

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { RegisterDatabricksConnectionResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.internal.registerDatabricksConnection({
  accessToken: "dolore",
  cloudProvider: "iusto",
  connectionEstablished: false,
  connectionId: "dicta",
  demo: false,
  email: "Emilie_Thompson@hotmail.com",
  freeTrial: false,
  hostname: "beautiful-crab.net",
  port: 565189,
  workspaceId: "excepturi",
  workspaceUrl: "pariatur",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: RegisterDatabricksConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## removeMembershipByEmail

Removes membership in a given org from a user, using the user's email address.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { RemoveMembershipByEmailResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.internal.removeMembershipByEmail({
  email: "Johanna.Ledner92@gmail.com",
  orgId: "sint",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: RemoveMembershipByEmailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## runJob

Run an existing job in a given databricks workspace.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { RunJobResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.internal.runJob({
  jobId: 83112,
  orgId: "itaque",
  workspaceId: "incidunt",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: RunJobResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## setDefaultMembership

Sets the organization that should be used when logging a user in

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { SetDefaultMembershipResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.internal.setDefaultMembership({
  orgId: "enim",
  userId: "consequatur",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: SetDefaultMembershipResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## stripePaymentEndpoint

Endpoint for Stripe payment webhooks

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { StripePaymentEndpointResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.internal.stripePaymentEndpoint("est").then((res: StripePaymentEndpointResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateConnection

Update the connection metadata for a given org

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { UpdateConnectionResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.internal.updateConnection({
  changes: {
    connected: false,
    demo: false,
    orgId: "quibusdam",
  },
  orgId: "explicabo",
  workspaceId: "deserunt",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: UpdateConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateMembershipByEmail

Updates the role in an membership, given the organization and the user's email address.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { UpdateMembershipByEmailResponse } from "Songbird/dist/sdk/models/operations";
import { Role } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.internal.updateMembershipByEmail({
  email: "Ron18@hotmail.com",
  orgId: "aliquid",
  role: Role.Member,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: UpdateMembershipByEmailResponse) => {
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

sdk.internal.updateNotificationSettings({
  notificationSettings: {
    emailSettings: {
      cadence: NotificationSqsMessageCadence.Weekly,
      dayOfWeek: NotificationSettingsDay.Sunday,
      enabled: false,
      local24HourOfDay: 164940,
      localMinuteOfHour: 828940,
      localTimezone: "ipsam",
    },
    pagerDutySettings: {
      cadence: NotificationSqsMessageCadence.Hourly,
      dayOfWeek: NotificationSettingsDay.Monday,
      enabled: false,
      local24HourOfDay: 677817,
      localMinuteOfHour: 569618,
      localTimezone: "tempora",
    },
    slackSettings: {
      cadence: NotificationSqsMessageCadence.Weekly,
      dayOfWeek: NotificationSettingsDay.Friday,
      enabled: false,
      local24HourOfDay: 288476,
      localMinuteOfHour: 962189,
      localTimezone: "eum",
    },
  },
  orgId: "non",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: UpdateNotificationSettingsResponse) => {
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

sdk.internal.updateOrg({
  requestBody: {
    orgId: "eligendi",
  },
  domain: "acme.ai",
  emailDomains: "acme.ai,acme.com",
  name: "ACME, Inc",
  notificationEmailAddress: "notifications@acme.ai",
  observatoryUrl: "https://hub.whylabsapp.com",
  pagerDutyKey: "abc-def-ghi-jkl",
  slackWebhook: "https://hooks.slack.com/services/foo/bar",
  subscriptionTier: SubscriptionTier.AwsMarketplace,
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

sdk.internal.updateOrganization({
  domain: "acme.ai",
  emailDomains: "acme.ai,acme.com",
  name: "ACME, Inc",
  notificationEmailAddress: "notifications@acme.ai",
  observatoryUrl: "https://hub.whylabsapp.com",
  orgId: "aliquid",
  pagerDutyKey: "abc-def-ghi-jkl",
  slackWebhook: "https://hooks.slack.com/services/foo/bar",
  subscriptionTier: SubscriptionTier.AwsMarketplace,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: UpdateOrganizationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateUser

Update a user.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { UpdateUserResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.internal.updateUser({
  email: "Kianna89@hotmail.com",
  preferences: "a",
  userId: "dolorum",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: UpdateUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## whyLabsSearch

WhyLabs Search

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { WhyLabsSearchResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.internal.whyLabsSearch({
  query: "in",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: WhyLabsSearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## whyLabsSearchIndexing

WhyLabs Search Indexing

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { WhyLabsSearchIndexingResponse } from "Songbird/dist/sdk/models/operations";
import { SearchIndexType } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.internal.whyLabsSearchIndexing({
  orgId: "in",
  type: SearchIndexType.MonitorConfig,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: WhyLabsSearchIndexingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
