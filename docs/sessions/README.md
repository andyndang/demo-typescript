# sessions

### Available Operations

* [batchCreateReferenceProfileUpload](#batchcreatereferenceprofileupload) - Create multiple reference profile uploads for a given session.
* [claimGuestSession](#claimguestsession) - Claim a guest session, copying its model data into another org and expiring the session.
* [createDatasetProfileUpload](#createdatasetprofileupload) - Create an upload for a given session.
* [createReferenceProfileUpload](#createreferenceprofileupload) - Create a reference profile upload for a given session.
* [createSession](#createsession) - Create a new session that can be used to upload dataset profiles from whylogs for display in whylabs.
* [getSession](#getsession) - Get information about a session.

## batchCreateReferenceProfileUpload

Create multiple reference profile uploads for a given session.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { BatchCreateReferenceProfileUploadResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.sessions.batchCreateReferenceProfileUpload({
  batchLogReferenceRequest: {
    references: [
      {
        alias: "ipsa",
        datasetTimestamp: 434417,
      },
    ],
  },
  sessionId: "odio",
}).then((res: BatchCreateReferenceProfileUploadResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## claimGuestSession

Claim a guest session, copying its model data into another org and expiring the session.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { ClaimGuestSessionResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.sessions.claimGuestSession({
  orgId: "quaerat",
  sessionId: "accusamus",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: ClaimGuestSessionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createDatasetProfileUpload

Create an upload for a given session.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { CreateDatasetProfileUploadResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.sessions.createDatasetProfileUpload({
  logAsyncRequest: {
    datasetTimestamp: 696344,
    segmentTags: [
      {
        key: "voluptas",
        value: "natus",
      },
      {
        key: "eos",
        value: "atque",
      },
      {
        key: "sit",
        value: "fugiat",
      },
      {
        key: "ab",
        value: "soluta",
      },
    ],
  },
  sessionId: "dolorum",
}).then((res: CreateDatasetProfileUploadResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createReferenceProfileUpload

Create a reference profile upload for a given session.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { CreateReferenceProfileUploadResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.sessions.createReferenceProfileUpload({
  logReferenceRequest: {
    alias: "iusto",
    datasetTimestamp: 453697,
  },
  sessionId: "dolorum",
}).then((res: CreateReferenceProfileUploadResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createSession

Create a new session that can be used to upload dataset profiles from whylogs for display in whylabs.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { CreateSessionResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.sessions.createSession({
  userId: "deleniti",
}).then((res: CreateSessionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getSession

Get information about a session.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetSessionResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.sessions.getSession({
  sessionId: "omnis",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetSessionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
