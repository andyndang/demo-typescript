# schema

### Available Operations

* [getMonitorConfigSchema](#getmonitorconfigschema) - Get the current supported schema of the monitor configuration

## getMonitorConfigSchema

Get the current supported schema of the  monitor configuration

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetMonitorConfigSchemaResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.schema.getMonitorConfigSchema({
  orgId: "org-123",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetMonitorConfigSchemaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
