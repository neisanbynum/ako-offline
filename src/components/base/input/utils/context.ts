import type { Nullable } from "@/utils/types";
import React from "react";
import type { useInputContextHook, useInputContextReturn } from "./types";

export const InputContext = React.createContext<Nullable<useInputContextReturn>>(null)

export const useInputContext: useInputContextHook = () => {
	const context = React.useContext(InputContext)
	if (!context) throw new Error('useInputContext must be used within InputContextProvider')
	return context
}