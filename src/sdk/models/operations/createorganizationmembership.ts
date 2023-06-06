/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateOrganizationMembershipSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=X-API-Key" })
    apiKeyAuth: string;
}

export class CreateOrganizationMembershipRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
    email: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
    orgId: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" })
    role: shared.Role;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=set_default" })
    setDefault?: boolean;
}

export class CreateOrganizationMembershipResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * CreateOrganizationMembership default response
     */
    @SpeakeasyMetadata()
    membershipMetadata?: shared.MembershipMetadata;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
