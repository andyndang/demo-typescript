# search

### Available Operations

* [whyLabsSearch](#whylabssearch) - WhyLabs Search
* [whyLabsSearchIndexing](#whylabssearchindexing) - WhyLabs Search Indexing

## whyLabsSearch

WhyLabs Search

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { WhyLabsSearchResponse } from "Songbird/dist/sdk/models/operations";

const sdk = new Songbird();

sdk.search.whyLabsSearch({
  query: "dolorum",
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: WhyLabsSearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## whyLabsSearchIndexing

WhyLabs Search Indexing

### Example Usage

```typescript
import { Songbird } from "Songbird";
import { WhyLabsSearchIndexingResponse } from "Songbird/dist/sdk/models/operations";
import { SearchIndexType } from "Songbird/dist/sdk/models/shared";

const sdk = new Songbird();

sdk.search.whyLabsSearchIndexing({
  orgId: "numquam",
  type: SearchIndexType.Models,
}, {
  apiKeyAuth: "YOUR_API_KEY_HERE",
}).then((res: WhyLabsSearchIndexingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
