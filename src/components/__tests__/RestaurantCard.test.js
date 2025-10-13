import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import RestaurantCard, { withTopRatedLabel } from "../RestaurantCard";
import "@testing-library/jest-dom";

const RestaurantCardWithLabel = withTopRatedLabel(RestaurantCard);

test("should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const resName = screen.getByText("Ibaco");
  expect(resName).toBeInTheDocument();
});

test("should render RestaurantCard component with Top Rated label", () => {
  render(<RestaurantCardWithLabel resData={MOCK_DATA} />);
  const topRatedLabel = screen.getByText("Top Rated");
  expect(topRatedLabel).toBeInTheDocument();
});
