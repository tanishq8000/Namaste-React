const { act } = require("react");
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/reduxFiles/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import CartPage from "../CartPage";

test("should render Restaurant menu and add them to cart after clicking add button", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <CartPage />
        </BrowserRouter>
      </Provider>
    );
  });

  const accordianHeader = screen.getByText("Hut Café (7)");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItem").length).toBe(7);

  const addButtons = screen.getAllByText("Add");
  fireEvent.click(addButtons[0]);

  expect(screen.getByText("1*")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItem").length).toBe(8);

  const clearCartBtn = screen.getByRole("button", { name: "Clear" });
  fireEvent.click(clearCartBtn);
  expect(screen.getAllByTestId("foodItem").length).toBe(7);
});
