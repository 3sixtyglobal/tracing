// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Factory } from "@3sixty/core";
import type { ITracingConnector } from "../models/ITracingConnector.js";

/**
 * Factory for creating tracing connectors.
 */
export const TracingConnectorFactory = Factory.createFactory<ITracingConnector>("tracing");
