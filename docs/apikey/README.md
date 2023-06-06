# apiKey

### Available Operations

* [createApiKey](#createapikey) - Generate an API key for a user.
* [getApiKey](#getapikey) - Get an api key by its id
* [listApiKeys](#listapikeys) - List API key metadata for a given organization and user
* [revokeApiKey](#revokeapikey) - Revoke the given API Key, removing its ability to access WhyLabs systems

## createApiKey

Generates an API key for a given user. Must be called either by system administrator or by the user themselves

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { CreateApiKeyResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.apiKey.createApiKey({
  alias: "MLApplicationName",
  expirationTime: 1577836800000,
  orgId: "org-123",
  scopes: [
    ":user",
    ":user",
    ":user",
  ],
  userId: "user-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: CreateApiKeyResponse) => {
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

sdk.apiKey.getApiKey({
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

## listApiKeys

Returns the API key metadata for a given organization and user

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { ListApiKeysResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.apiKey.listApiKeys({
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

## revokeApiKey

Revokes the given API Key

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { RevokeApiKeyResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.apiKey.revokeApiKey({
  keyId: "HMiFAgQeNb",
  orgId: "org-123",
  userId: "user-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: RevokeApiKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
