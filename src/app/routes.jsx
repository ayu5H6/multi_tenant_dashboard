import { lazy } from "react";

export const Leads = lazy(() => import("../modules/leads/LeadsPage"));
export const Calls = lazy(() => import("../modules/calls/CallsPage"));