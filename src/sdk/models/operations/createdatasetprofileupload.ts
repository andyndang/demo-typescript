/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateDatasetProfileUploadRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    logAsyncRequest: shared.LogAsyncRequest;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=session_id" })
    sessionId: string;
}

export class CreateDatasetProfileUploadResponse extends SpeakeasyBase {
    /**
     * CreateDatasetProfileUpload default response
     */
    @SpeakeasyMetadata()
    asyncLogResponse?: shared.AsyncLogResponse;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
