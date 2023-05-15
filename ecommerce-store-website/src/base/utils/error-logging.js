import {datadogRum} from "@datadog/browser-rum";
import {datadogLogs} from "@datadog/browser-logs";

const {NODE_ENV} = process.env;

const isTestMode = () => {
  let isTestMode = false;
  if (typeof window !== "undefined") {
    isTestMode = window.sessionStorage
      ? window.sessionStorage.getItem("testmode") === "true"
      : false;
  }
  return isTestMode;
};

export const initErrorLogging = () => {
  if (
    document.location.origin === "https://brandconnector.io" ||
    isTestMode()
  ) {
    datadogRum.init({
      applicationId: "8b49b4e2-5fd3-4f68-b373-c3a671d293c8",
      clientToken: "pub8a135de245b7696722041d745abc6636",
      site: "datadoghq.com",
      service: "brand_connector_demo_site",
      env: NODE_ENV, // optional, provide this if your app is deployed in multiple envs
      version: "1.0.0", // optional, provide this if you want to understand which release does the RUM data originated from
      sessionSampleRate: 100, // no sampling, all sessions will be monitored
      sessionReplaySampleRate: 30, // no sampling, all sessions will be recorded
      trackUserInteractions: true,
      trackFrustrations: true,
      trackResources: true,
      trackLongTasks: true,
      defaultPrivacyLevel: "mask-user-input",
      proxy: "https://dd-wormhole.smarttokenlabs.com" // self-managed proxy to bypass ad blocker
    });
    datadogRum.startSessionReplayRecording();
    datadogLogs.init({
      clientToken: "pub8a135de245b7696722041d745abc6636",
      site: "datadoghq.com",
      service: "brand_connector_demo_site",
      env: NODE_ENV,
      forwardErrorsToLogs: true,
      sessionSampleRate: 100, // no sampling, all sessions will have logs collected
      proxy: "https://dd-wormhole.smarttokenlabs.com" // self-managed proxy to bypass ad blocker
    });
  }
};
