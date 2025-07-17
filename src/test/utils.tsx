import { render } from "@testing-library/react";
import { type ReactNode } from "react";
import { MantineProvider } from "@mantine/core";

export function renderWithMantine(ui: ReactNode) {
    return render(<MantineProvider>{ui}</MantineProvider>)
    
}