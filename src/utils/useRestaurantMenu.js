import { useEffect, useState } from "react";
import { MENU_API } from "./constant";
import MOCK_DATA from "../components/mocks/mockMenuData.json";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    setResInfo(MOCK_DATA.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
