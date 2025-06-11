"use client";

import React, { useEffect, useState } from "react";
import { StaticInstallPrompt } from "./static-install-prompt";

export function AppInstallBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Always show banner for demo purposes
    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div id="install-instructions">
      <StaticInstallPrompt />
    </div>
  );
}
