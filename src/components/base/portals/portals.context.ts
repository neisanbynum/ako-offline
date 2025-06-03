import type { Nullable } from "@/utils/types";
import React from "react";
import type { PortalManagerValues } from "./portals.types";

export const PortalContext = React.createContext<Nullable<PortalManagerValues>>(null)

export const usePortalManager = () => {
	const context = React.useContext(PortalContext)
	if (!context) throw new Error('usePortalManager must be used within a PortalManagerProvider')
	return context
}