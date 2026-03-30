"use client";

import { useEffect } from "react";

const ZOHO_WIDGET_URL = "https://salesiq.zohopublic.com/widget?wc=siq87dbae343a4d60e77b60846805f4a6293a9ae448021831060240d77cc90fe883";

export default function ZohoWidget() {
  useEffect(() => {
    const host = window.location.hostname.replace(/^www\./, "");
    if (host !== "continentaltrustonline.online") {
      return;
    }

    if (document.getElementById("zsiqscript")) {
      return;
    }

    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || { ready: function () {} };

    const script = document.createElement("script");
    script.id = "zsiqscript";
    script.src = ZOHO_WIDGET_URL;
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  return null;
}
