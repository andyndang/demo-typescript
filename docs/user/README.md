# user

### Available Operations

* [createUser](#createuser) - Create a user.
* [getUser](#getuser) - Get a user by their id.
* [getUserByEmail](#getuserbyemail) - Get a user by their email.
* [updateUser](#updateuser) - Update a user.

## createUser

Create a user.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { CreateUserResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.user.createUser({
  email: "Michaela.Zboncak@hotmail.com",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: CreateUserResponse) => {
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

sdk.user.getUser({
  userId: "voluptate",
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

sdk.user.getUserByEmail({
  email: "Suzanne2@yahoo.com",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetUserByEmailResponse) => {
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

sdk.user.updateUser({
  email: "Nils90@gmail.com",
  preferences: "suscipit",
  userId: "deserunt",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: UpdateUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
