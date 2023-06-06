# databricks

### Available Operations

* [getConnection](#getconnection) - Get the connection metadata for a given org
* [listJobs](#listjobs) - List all of the jobs in a workspace.
* [refreshConnection](#refreshconnection) - Refresh metadata for a workspace connection.
* [runJob](#runjob) - Run an existing job in a given databricks workspace.
* [updateConnection](#updateconnection) - Update the connection metadata for a given org

## getConnection

Get the connection metadata for a given org

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetConnectionResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.databricks.getConnection({
  orgId: "provident",
  workspaceId: "distinctio",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetConnectionResponse) => {
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

sdk.databricks.listJobs({
  orgId: "quibusdam",
  workspaceId: "unde",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: ListJobsResponse) => {
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

sdk.databricks.refreshConnection({
  orgId: "nulla",
  workspaceId: "corrupti",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: RefreshConnectionResponse) => {
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

sdk.databricks.runJob({
  jobId: 847252,
  orgId: "vel",
  workspaceId: "error",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: RunJobResponse) => {
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

sdk.databricks.updateConnection({
  changes: {
    connected: false,
    demo: false,
    orgId: "deserunt",
  },
  orgId: "suscipit",
  workspaceId: "iure",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: UpdateConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
