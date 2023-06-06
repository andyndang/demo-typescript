# datasetMetadata

### Available Operations

* [deleteDatasetMetadata](#deletedatasetmetadata) - Delete dataset metadata for the specified dataset
* [getDatasetMetadata](#getdatasetmetadata) - Get dataset metadata for the specified dataset
* [putDatasetMetadata](#putdatasetmetadata) - Put dataset metadata for the specified dataset

## deleteDatasetMetadata

Delete dataset metadata for the specified dataset

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { DeleteDatasetMetadataResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.datasetMetadata.deleteDatasetMetadata({
  datasetId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: DeleteDatasetMetadataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getDatasetMetadata

Get dataset metadata for the specified dataset

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetDatasetMetadataResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.datasetMetadata.getDatasetMetadata({
  datasetId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetDatasetMetadataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putDatasetMetadata

Put dataset metadata for the specified dataset

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { PutDatasetMetadataResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.datasetMetadata.putDatasetMetadata({
  requestBody: "magnam",
  datasetId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: PutDatasetMetadataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
