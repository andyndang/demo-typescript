# payment

### Available Operations

* [stripePaymentEndpoint](#stripepaymentendpoint) - Endpoint for Stripe payment webhooks

## stripePaymentEndpoint

Endpoint for Stripe payment webhooks

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { StripePaymentEndpointResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.payment.stripePaymentEndpoint("pariatur").then((res: StripePaymentEndpointResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
