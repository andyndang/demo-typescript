<!-- Start SDK Example Usage -->
```typescript
import { Songbird } from "Songbird";
import { PostMonitorConfigValidationJobResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.admin.postMonitorConfigValidationJob({
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: PostMonitorConfigValidationJobResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->