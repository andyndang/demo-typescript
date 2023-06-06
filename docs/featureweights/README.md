# featureWeights

### Available Operations

* [getColumnWeights](#getcolumnweights) - Get column weights for the specified dataset
* [putColumnWeights](#putcolumnweights) - Put column weights for the specified dataset

## getColumnWeights

Get column weights for the specified dataset

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetColumnWeightsResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.featureWeights.getColumnWeights({
  datasetId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetColumnWeightsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putColumnWeights

Put column weights for the specified dataset

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { PutColumnWeightsResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.featureWeights.putColumnWeights({
  requestBody: "nam",
  datasetId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: PutColumnWeightsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
