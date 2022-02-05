import React from "react";
import { Switch, useDarkreader } from "react-darkreader";

const DarkreaderSwitch2 = () => {
  const [isDark, { toggle }] = useDarkreader(false);

  return <Switch checked={isDark} onChange={toggle} />;
};

export default DarkreaderSwitch2;
