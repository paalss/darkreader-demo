import React from "react";
import { Switch, useDarkreader } from "react-darkreader";

const DarkreaderSwitch2 = () => {
  const isDarkDefault = localStorage.getItem("isDark") === "true" ? true : false
  const [isDark, { toggle }] = useDarkreader(isDarkDefault);
  localStorage.setItem("isDark", isDark);

  return <Switch checked={isDark} onChange={toggle} />;
};

export default DarkreaderSwitch2;
