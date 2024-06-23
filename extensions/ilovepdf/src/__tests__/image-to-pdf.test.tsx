import React from "react";
import { render } from "@testing-library/react";
import Command from "../image-to-pdf";

function renderImageToPDF() {
    return render(<Command />);
}
describe("Image to PDF Command", () => {
    test("should display a blank login form, with remember me checked by default", async () => {
        const { findByTestId } = renderImageToPDF();

        const imageToPDFCommand = await findByTestId("image-to-pdf-form");

        // expect(imageToPDFCommand).toHaveFormValues({
        // });
    });
});