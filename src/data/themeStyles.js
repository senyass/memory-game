import BakeryBackground from "../assets/bakery-background.jpg";
import CafeBackground from "../assets/cafe-background.jpg";
import BakeryLogo from "../assets/bakery-logo.png";
import CafeLogo from "../assets/cafe-logo.png";

import GirlNpc from "../assets/girl-npc.png";
import GuyNpc from "../assets/guy-npc.png";

export const themeStyles = {
  "Dessert Shop": {
    logo: BakeryLogo,
    background: BakeryBackground,
    npc: GirlNpc,
    npcClass: "-translate-x-50 translate-y-50 w-130",
    accentBg: "bg-dessert-sec-yellow",
    selectedBg: "bg-dessert-selected-blue",
    primaryBorder: "border-dessert-pri-blue",
    buttonBorder: "border-dessert-button-blue",
    buttonHoverBg: "hover:bg-dessert-selected-blue",
    buttonHoverBorder: "hover:border-dessert-button-blue",
    hoverBg: "hover:bg-dessert-selected-blue",
    hoverBorder: "hover:border-dessert-button-blue",
  },

  "Café": {
    logo: CafeLogo,
    background: CafeBackground,
    npc: GuyNpc,
    npcClass: "-translate-x-55 translate-y-50 w-170",
    accentBg: "bg-cafe-sec-caramel",
    selectedBg: "bg-cafe-selected-beige",
    primaryBorder: "border-cafe-pri-brown",
    buttonBorder: "border-cafe-button-brown",
    buttonHoverBg: "hover:bg-cafe-selected-beige",
    buttonHoverBorder: "hover:border-cafe-button-brown",
    hoverBg: "hover:bg-cafe-selected-beige",
    hoverBorder: "hover:border-cafe-button-brown",
  },
};