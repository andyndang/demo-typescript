# provision

### Available Operations

* [provisionAWSMarketplaceNewUser](#provisionawsmarketplacenewuser) - Create resources for a new user coming from AWS Marketplace
* [provisionDatabricksConnection](#provisiondatabricksconnection) - Create resources for a new user coming from Databricks
* [provisionNewUser](#provisionnewuser) - Create the resources that a new user needs to use WhyLabs via the website.
* [registerDatabricksConnection](#registerdatabricksconnection) - Register databricks metadata, temporarily storing it against a UUID so that it can be used to provision a databricks connection after email authentication

## provisionAWSMarketplaceNewUser

Create resources for a new user coming from AWS Marketplace

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { ProvisionAWSMarketplaceNewUserResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.provision.provisionAWSMarketplaceNewUser({
  customerIdToken: "nemo",
  email: "Agnes1@hotmail.com",
  expectExisting: false,
  modelName: "cumque",
  orgName: "corporis",
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

sdk.provision.provisionDatabricksConnection({
  email: "Morgan33@hotmail.com",
  expectExistingUser: false,
  id: "87053202-c73d-45fe-9b90-c28909b3fe49",
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

sdk.provision.provisionNewUser({
  email: "Kailee_Stracke@hotmail.com",
  expectExisting: false,
  modelName: "libero",
  orgName: "delectus",
  subscriptionTier: SubscriptionTier.Paid,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: ProvisionNewUserResponse) => {
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

sdk.provision.registerDatabricksConnection({
  accessToken: "quos",
  cloudProvider: "aliquid",
  connectionEstablished: false,
  connectionId: "dolorem",
  demo: false,
  email: "Dameon94@gmail.com",
  freeTrial: false,
  hostname: "nimble-reporter.info",
  port: 490459,
  workspaceId: "reiciendis",
  workspaceUrl: "amet",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: RegisterDatabricksConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
