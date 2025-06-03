import type { Nullable } from "@/utils/types";
import type { useHomeContextHook, useHomeContextReturn } from "./types";
import React from "react";

export const HomeContext = React.createContext<Nullable<useHomeContextReturn>>(null)

export const useHomeContext: useHomeContextHook = () => {
	const context = React.useContext(HomeContext)
	if (!context) throw new Error('useHomeContext must be used within HomeContextProvider')
	return context
}