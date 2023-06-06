# models

### Available Operations

* [createModel](#createmodel) - Create a model with a given name and a time period
* [deactivateModel](#deactivatemodel) - Mark a model as inactive
* [deleteEntitySchema](#deleteentityschema) - Delete the entity schema config for a given dataset.
* [deleteEntitySchemaColumn](#deleteentityschemacolumn) - Delete the entity schema of a single column for a given dataset.
* [deleteEntitySchemaMetric](#deleteentityschemametric) - Delete the schema of a single metric for a given dataset.
* [getEntitySchema](#getentityschema) - Get the entity schema config for a given dataset.
* [getEntitySchemaColumn](#getentityschemacolumn) - Get the entity schema of a single column for a given dataset.
* [getModel](#getmodel) - Get a model metadata
* [listModels](#listmodels) - Get a list of all of the model ids for an organization.
* [putEntitySchema](#putentityschema) - Save the entity schema config for a given dataset.
* [putEntitySchemaColumn](#putentityschemacolumn) - Save the entity schema of a single column for a given dataset.
* [putEntitySchemaMetric](#putentityschemametric) - Save the schema of a single metric for a given dataset.
* [updateModel](#updatemodel) - Update a model's metadata

## createModel

Create a model

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { CreateModelResponse } from "Songbird/dist/sdk/models/operations";
import { ModelType, TimePeriod } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.models.createModel({
  modelId: "model-123",
  modelName: "Credit-Score-1",
  modelType: ModelType.Classification,
  orgId: "org-123",
  timePeriod: TimePeriod.P1D,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: CreateModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deactivateModel

Mark a model as inactive

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { DeactivateModelResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.models.deactivateModel({
  modelId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: DeactivateModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteEntitySchema

Delete the entity schema config for a given dataset.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { DeleteEntitySchemaResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.models.deleteEntitySchema({
  datasetId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: DeleteEntitySchemaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteEntitySchemaColumn

Delete the entity schema of a single column for a given dataset.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { DeleteEntitySchemaColumnResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.models.deleteEntitySchemaColumn({
  columnId: "feature-123",
  datasetId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: DeleteEntitySchemaColumnResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteEntitySchemaMetric

Delete the schema of a single metric for a given dataset.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { DeleteEntitySchemaMetricResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.models.deleteEntitySchemaMetric({
  datasetId: "model-123",
  metricLabel: "feature-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: DeleteEntitySchemaMetricResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getEntitySchema

Get the entity schema config for a given dataset.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetEntitySchemaResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.models.getEntitySchema({
  datasetId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetEntitySchemaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getEntitySchemaColumn

Get the entity schema of a single column for a given dataset.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetEntitySchemaColumnResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.models.getEntitySchemaColumn({
  columnId: "feature-123",
  datasetId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetEntitySchemaColumnResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getModel

Returns various metadata about a model

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetModelResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.models.getModel({
  modelId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listModels

Get a list of all of the model ids for an organization.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { ListModelsResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.models.listModels({
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: ListModelsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putEntitySchema

Save the entity schema config for a given dataset.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { PutEntitySchemaResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.models.putEntitySchema({
  entitySchema: {
    columns: {
      "sint": {
        classifier: "input",
        dataType: "fractional",
        discreteness: "discrete",
      },
      "accusantium": {
        classifier: "input",
        dataType: "fractional",
        discreteness: "discrete",
      },
      "mollitia": {
        classifier: "input",
        dataType: "fractional",
        discreteness: "discrete",
      },
    },
    metadata: {
      author: "reiciendis",
      updatedTimestamp: 652103,
      version: 320997,
    },
    metrics: {
      "dolor": {
        column: "estimated_prediction",
        defaultMetric: "median",
        label: "estimated_prediction.median",
      },
      "necessitatibus": {
        column: "estimated_prediction",
        defaultMetric: "median",
        label: "estimated_prediction.median",
      },
    },
  },
  datasetId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: PutEntitySchemaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putEntitySchemaColumn

Save the entity schema of a single column for a given dataset.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { PutEntitySchemaColumnResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.models.putEntitySchemaColumn({
  columnSchema: {
    classifier: "input",
    dataType: "fractional",
    discreteness: "discrete",
  },
  columnId: "feature-123",
  datasetId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: PutEntitySchemaColumnResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putEntitySchemaMetric

Save the schema of a single metric for a given dataset.

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { PutEntitySchemaMetricResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.models.putEntitySchemaMetric({
  metricSchema: {
    column: "estimated_prediction",
    defaultMetric: "median",
    label: "estimated_prediction.median",
  },
  datasetId: "model-123",
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: PutEntitySchemaMetricResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateModel

Update a model's metadata

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { UpdateModelResponse } from "Songbird/dist/sdk/models/operations";
import { ModelType, TimePeriod } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.models.updateModel({
  modelId: "model-123",
  modelName: "Credit-Score-1",
  modelType: ModelType.Classification,
  orgId: "org-123",
  timePeriod: TimePeriod.P1D,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: UpdateModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
