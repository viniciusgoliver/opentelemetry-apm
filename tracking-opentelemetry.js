const apm = require("elastic-apm-node");
const otel = require("@opentelemetry/api");
require("dotenv").config({
  path: ".env",
});

apm.start({
  serverUrl: process.env.APM_SERVER_URL,
  serviceName: process.env.APM_SERVICE_NAME,
  opentelemetryBridgeEnabled: true,
});

const OpenTelemetryMiddleware = (req, res, next) => {
  const tracer = otel.trace.getTracer("trace-https-request");
  const meter = otel.metrics.getMeter("meter-https-request");

  meter.createCounter("num_requests", {
    description: "number of HTTP requests",
  });

  const span = tracer.startSpan(process.env.TRACER_SPAN_NAME);

  next();

  try {
    if (res.statusCode >= 400) {
      span.setStatus({ code: otel.SpanStatusCode.ERROR });
    }
  } catch (error) {
    console.error("Error in openTelemetryMiddleware:", error);
  } finally {
    span.end();

    span.setAttributes({
      "http.method": req.method,
      "http.path": req.path,
      "http.status_code": res.statusCode,
    });
  }
};

module.exports = { OpenTelemetryMiddleware };
