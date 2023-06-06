# log

### Available Operations

* [logAsync](#logasync) - Like /log, except this api doesn't take the actual profile content. It returns an upload link that can be used to upload the profile to.
* [logReference](#logreference) - Returns a presigned URL for uploading the reference profile to.

## logAsync

Like /log, except this api doesn't take the actual profile content. It returns an upload link that can be used to upload the profile to.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { LogAsyncResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.log.logAsync({
  logAsyncRequest: {
    datasetTimestamp: 978571,
    segmentTags: [
      {
        key: "dicta",
        value: "magnam",
      },
      {
        key: "cumque",
        value: "facere",
      },
      {
        key: "ea",
        value: "aliquid",
      },
    ],
  },
  datasetId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: LogAsyncResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## logReference

Reference profiles can be used for.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { LogReferenceResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.log.logReference({
  logReferenceRequest: {
    alias: "laborum",
    datasetTimestamp: 881104,
  },
  modelId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: LogReferenceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
