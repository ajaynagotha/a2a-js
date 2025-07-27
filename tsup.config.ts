import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts", 
    "src/server/index.ts", 
    "src/client/index.ts",
    "src/server/request_handler/a2a_request_handler.ts",
    "src/server/request_handler/default_request_handler.ts",
    "src/server/transports/jsonrpc_transport_handler.ts",
    "src/server/agent_execution/agent_executor.ts",
    "src/server/agent_execution/request_context.ts",
    "src/server/events/execution_event_bus.ts",
    "src/server/events/execution_event_bus_manager.ts",
    "src/server/events/execution_event_queue.ts",
    "src/server/a2a_express_app.ts",
    "src/server/error.ts",
    "src/server/result_manager.ts",
    "src/server/store.ts",
    "src/server/utils.ts"
  ],
  format: ["esm", "cjs"],
  dts: true,
});
