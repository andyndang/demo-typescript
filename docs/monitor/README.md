# monitor

### Available Operations

* [deleteAnalyzer](#deleteanalyzer) - Delete the analyzer config for a given dataset.
* [deleteMonitor](#deletemonitor) - Delete the monitor for a given dataset.
* [getAnalyzer](#getanalyzer) - Get the analyzer config for a given dataset.
* [getMonitor](#getmonitor) - Get the monitor config for a given dataset.
* [getMonitorConfigV3](#getmonitorconfigv3) - Get the monitor config document for a given dataset.
* [getMonitorConfigV3Version](#getmonitorconfigv3version) - Get the monitor config document version for a given dataset.
* [listMonitorConfigV3Versions](#listmonitorconfigv3versions) - List the monitor config document versions for a given dataset.
* [patchMonitorConfigV3](#patchmonitorconfigv3) - Patch an updated monitor config document for a given dataset.
* [putAnalyzer](#putanalyzer) - Save the analyzer config for a given dataset.
* [putMonitor](#putmonitor) - Save the monitor for a given dataset.
* [putMonitorConfigV3](#putmonitorconfigv3) - Save the monitor config document for a given dataset.
* [putRequestMonitorRunConfig](#putrequestmonitorrunconfig) - Put the RequestMonitorRun config into S3.
* [validateMonitorConfigV3](#validatemonitorconfigv3) - Validate the monitor config document for a given dataset.

## deleteAnalyzer

Delete the analyzer config for a given dataset.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { DeleteAnalyzerResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.monitor.deleteAnalyzer({
  analyzerId: "drift-analyzer",
  datasetId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: DeleteAnalyzerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteMonitor

Delete the monitor for a given dataset.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { DeleteMonitorResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.monitor.deleteMonitor({
  datasetId: "model-123",
  monitorId: "drift-monitor-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: DeleteMonitorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getAnalyzer

Get the analyzer config for a given dataset.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetAnalyzerResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.monitor.getAnalyzer({
  analyzerId: "drift-analyzer",
  datasetId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetAnalyzerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getMonitor

Get the monitor config for a given dataset.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetMonitorResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.monitor.getMonitor({
  datasetId: "model-123",
  monitorId: "drift-monitor-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetMonitorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getMonitorConfigV3

Get the monitor config document for a given dataset.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetMonitorConfigV3Response } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.monitor.getMonitorConfigV3({
  datasetId: "model-123",
  includeEntitySchema: false,
  includeEntityWeights: false,
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetMonitorConfigV3Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getMonitorConfigV3Version

Get the monitor config document version for a given dataset.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetMonitorConfigV3VersionResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.monitor.getMonitorConfigV3Version({
  datasetId: "model-123",
  orgId: "org-123",
  versionId: "4920545486e2a4cdf0f770c09748e663",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetMonitorConfigV3VersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listMonitorConfigV3Versions

List the monitor config document versions for a given dataset.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { ListMonitorConfigV3VersionsResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.monitor.listMonitorConfigV3Versions({
  datasetId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: ListMonitorConfigV3VersionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchMonitorConfigV3

Save an updated monitor config document for a given dataset.  Monitors and analyzers matching an existing ID are replaced.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { PatchMonitorConfigV3Response } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.monitor.patchMonitorConfigV3({
  requestBody: "odit",
  datasetId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: PatchMonitorConfigV3Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putAnalyzer

Save the analyzer config for a given dataset.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { PutAnalyzerResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.monitor.putAnalyzer({
  requestBody: "nemo",
  analyzerId: "drift-analyzer",
  datasetId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: PutAnalyzerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putMonitor

Save the monitor for a given dataset.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { PutMonitorResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.monitor.putMonitor({
  requestBody: "quasi",
  datasetId: "model-123",
  monitorId: "drift-monitor-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: PutMonitorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putMonitorConfigV3

Save the monitor config document for a given dataset.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { PutMonitorConfigV3Response } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.monitor.putMonitorConfigV3({
  requestBody: "iure",
  datasetId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: PutMonitorConfigV3Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putRequestMonitorRunConfig

Put the RequestMonitorRun config into S3.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { PutRequestMonitorRunConfigResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.monitor.putRequestMonitorRunConfig({
  requestBody: {
    analyzerIds: [
      "debitis",
      "eius",
      "maxime",
      "deleniti",
    ],
    endTimestamp: 1893456000000,
    overwrite: false,
    startTimestamp: 1577836800000,
  },
  datasetId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: PutRequestMonitorRunConfigResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## validateMonitorConfigV3

Validate the monitor config document for a given dataset.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { ValidateMonitorConfigV3Response } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.monitor.validateMonitorConfigV3({
  requestBody: "facilis",
  datasetId: "model-123",
  orgId: "org-123",
  verbose: false,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: ValidateMonitorConfigV3Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
