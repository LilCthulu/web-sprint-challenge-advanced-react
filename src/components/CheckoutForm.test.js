import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { debug } = render( < CheckoutForm / > )
    const header = screen.getByText(/Checkout Form/i);

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const { debug } = render( < CheckoutForm / > )

    const firstName = screen.getByLabelText(/First Name:/i);
    const lastName = screen.getByLabelText(/Last Name:/i);
    const address = screen.getByLabelText(/Address:/i);
    const city = screen.getByLabelText(/City:/i);
    const state = screen.getByLabelText(/State:/i);
    const zip = screen.getByLabelText(/Zip:/i);
    const button = screen.getByRole("button", { name: /Checkout/i });

    userEvent.type(firstName, "chaz")
    userEvent.type(lastName, 'carbis')
    userEvent.type(address, '123 ez street')
    userEvent.type(city, "flavortown")
    userEvent.type(state, "OfMind")
    userEvent.type(zip, "37075")
    userEvent.click(button)

    const success = screen.getByText(/You have ordered some plants!/i)
    expect(success).toBeInTheDocument();




});