# datasetProfile

### Available Operations

* [createReferenceProfile](#createreferenceprofile) - Returns data needed to uploading the reference profile
* [deleteAnalyzerResults](#deleteanalyzerresults) - Deletes a set of analyzer results
* [deleteDatasetProfiles](#deletedatasetprofiles) - Deletes a set of dataset profiles
* [deleteReferenceProfile](#deletereferenceprofile) - Delete a single reference profile
* [getReferenceProfile](#getreferenceprofile) - Returns a single reference profile
* [listReferenceProfiles](#listreferenceprofiles) - Returns a list for reference profiles
* [listSegments](#listsegments) - Returns a list of segments

## createReferenceProfile

Returns data needed to upload the reference profile. Supports uploading segmented reference profiles. 
            If segments are omitted, provides data needed to upload a single reference profile. 
            This replaces the deprecated LogReference operation.
        

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { CreateReferenceProfileResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.datasetProfile.createReferenceProfile({
  createReferenceProfileRequest: {
    alias: "debitis",
    datasetTimestamp: 56713,
    segments: [
      {
        tags: [
          {
            key: "suscipit",
            value: "molestiae",
          },
          {
            key: "minus",
            value: "placeat",
          },
        ],
      },
      {
        tags: [
          {
            key: "iusto",
            value: "excepturi",
          },
          {
            key: "nisi",
            value: "recusandae",
          },
          {
            key: "temporibus",
            value: "ab",
          },
        ],
      },
      {
        tags: [
          {
            key: "veritatis",
            value: "deserunt",
          },
          {
            key: "perferendis",
            value: "ipsam",
          },
        ],
      },
      {
        tags: [
          {
            key: "sapiente",
            value: "quo",
          },
          {
            key: "odit",
            value: "at",
          },
          {
            key: "at",
            value: "maiores",
          },
          {
            key: "molestiae",
            value: "quod",
          },
        ],
      },
    ],
    tags: [
      "esse",
      "totam",
      "porro",
      "dolorum",
    ],
    version: "dicta",
  },
  datasetId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: CreateReferenceProfileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteAnalyzerResults

Deletes a set of analyzer results. Returns false if scheduling deletion encountered some error.

        

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { DeleteAnalyzerResultsResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.datasetProfile.deleteAnalyzerResults({
  datasetId: "model-123",
  endTimestamp: 1893456000000,
  orgId: "org-123",
  startTimestamp: 1577836800000,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: DeleteAnalyzerResultsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteDatasetProfiles

Deletes a set of dataset profiles. Returns false if scheduling deletion encountered some error.

        

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { DeleteDatasetProfilesResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.datasetProfile.deleteDatasetProfiles({
  beforeUploadTimestamp: 1577836800000,
  datasetId: "model-123",
  orgId: "org-123",
  profileEndTimestamp: 1893456000000,
  profileStartTimestamp: 1577836800000,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: DeleteDatasetProfilesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteReferenceProfile

Delete a a Reference Profile. Returns false if the deletion encountered some error.

        

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { DeleteReferenceProfileResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.datasetProfile.deleteReferenceProfile({
  modelId: "model-123",
  orgId: "org-123",
  referenceId: "ref-xxy",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: DeleteReferenceProfileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getReferenceProfile

Returns a Reference Profile.

        

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetReferenceProfileResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.datasetProfile.getReferenceProfile({
  modelId: "model-123",
  orgId: "org-123",
  referenceId: "ref-xxy",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetReferenceProfileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listReferenceProfiles

Returns a list of Reference Profiles.

        

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { ListReferenceProfilesResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.datasetProfile.listReferenceProfiles({
  fromEpoch: 1577836800000,
  modelId: "model-123",
  orgId: "org-123",
  toEpoch: 1893456000000,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: ListReferenceProfilesResponse) => {
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

sdk.datasetProfile.listSegments({
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
