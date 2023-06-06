/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ColumnSchema } from "./columnschema";
import { MetricSchema } from "./metricschema";
import { SchemaMetadata } from "./schemametadata";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Entity schema for a dataset
 */
export class EntitySchema extends SpeakeasyBase {
    /**
     * Column schema for a given column
     */
    @SpeakeasyMetadata({ elemType: ColumnSchema })
    @Expose({ name: "columns" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, ColumnSchema> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], ColumnSchema);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    columns: Record<string, ColumnSchema>;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => SchemaMetadata)
    metadata?: SchemaMetadata;

    /**
     * Schema for user-defined metrics (map of unique custom metric labels to their definitions)
     */
    @SpeakeasyMetadata({ elemType: MetricSchema })
    @Expose({ name: "metrics" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, MetricSchema> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], MetricSchema);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    metrics?: Record<string, MetricSchema>;
}
