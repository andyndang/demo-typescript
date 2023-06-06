# membership

### Available Operations

* [createMembership](#createmembership) - Create a membership for a user, making them apart of an organization. Uses the user's current email address.
* [createOrganizationMembership](#createorganizationmembership) - Create a membership for a user, making them apart of an organization. Uses the user's current email address.
* [getDefaultMembershipForEmail](#getdefaultmembershipforemail) - Get the default membership for a user.
* [getMemberships](#getmemberships) - Get memberships for a user.
* [getMembershipsByEmail](#getmembershipsbyemail) - Get memberships for a user given that user's email address.
* [getMembershipsByOrg](#getmembershipsbyorg) - Get memberships for an org.
* [listOrganizationMemberships](#listorganizationmemberships) - List organization memberships
* [removeMembershipByEmail](#removemembershipbyemail) - Removes membership in a given org from a user, using the user's email address.
* [removeOrganizationMembership](#removeorganizationmembership) - Removes membership in a given org from a user, using the user's email address.
* [setDefaultMembership](#setdefaultmembership) - Sets the organization that should be used when logging a user in
* [updateMembershipByEmail](#updatemembershipbyemail) - Updates the role in an membership
* [updateOrganizationMembership](#updateorganizationmembership) - Updates the role in an membership

## createMembership

Create a membership for a user, making them apart of an organization. Uses the user's current email address.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { CreateMembershipResponse } from "Songbird/dist/sdk/models/operations";
import { Role } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.membership.createMembership({
  createdBy: "non",
  default: false,
  email: "Elyssa_Tillman58@yahoo.com",
  orgId: "nam",
  role: Role.Member,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: CreateMembershipResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createOrganizationMembership

Create a membership for a user, making them apart of an organization. Uses the user's current email address.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { CreateOrganizationMembershipResponse } from "Songbird/dist/sdk/models/operations";
import { Role } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.membership.createOrganizationMembership({
  email: "user@whylabs.ai",
  orgId: "org-123",
  role: Role.Member,
  setDefault: false,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: CreateOrganizationMembershipResponse) => {
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

sdk.membership.getDefaultMembershipForEmail({
  email: "Verlie.Feeney@yahoo.com",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetDefaultMembershipForEmailResponse) => {
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

sdk.membership.getMemberships({
  userId: "vel",
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

sdk.membership.getMembershipsByEmail({
  email: "Lenna47@yahoo.com",
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

sdk.membership.getMembershipsByOrg({
  orgId: "magnam",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetMembershipsByOrgResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listOrganizationMemberships

list memberships for an organization

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { ListOrganizationMembershipsResponse } from "Songbird/dist/sdk/models/operations";
import { Role } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.membership.listOrganizationMemberships({
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: ListOrganizationMembershipsResponse) => {
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

sdk.membership.removeMembershipByEmail({
  email: "Maggie38@hotmail.com",
  orgId: "natus",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: RemoveMembershipByEmailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## removeOrganizationMembership

Removes membership in a given org from a user, using the user's email address.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { RemoveOrganizationMembershipResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.membership.removeOrganizationMembership({
  email: "user@whylabs.ai",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: RemoveOrganizationMembershipResponse) => {
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

sdk.membership.setDefaultMembership({
  orgId: "nobis",
  userId: "eum",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: SetDefaultMembershipResponse) => {
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

sdk.membership.updateMembershipByEmail({
  email: "Brice9@hotmail.com",
  orgId: "excepturi",
  role: Role.Member,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: UpdateMembershipByEmailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateOrganizationMembership

Updates the role in an membership, given the organization and the user's email address.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { UpdateOrganizationMembershipResponse } from "Songbird/dist/sdk/models/operations";
import { Role } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.membership.updateOrganizationMembership({
  email: "user@whylabs.ai",
  orgId: "org-123",
  role: Role.Member,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: UpdateOrganizationMembershipResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
