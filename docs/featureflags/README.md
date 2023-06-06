# featureFlags

### Available Operations

* [getFeatureFlags](#getfeatureflags) - Get feature flags for the specified user/org

## getFeatureFlags

Get feature flags for the specified user/org

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { GetFeatureFlagsResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.featureFlags.getFeatureFlags({
  orgId: "officia",
  userId: "occaecati",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: GetFeatureFlagsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
