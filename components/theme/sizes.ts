import { Dimensions } from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

type ViewportSizeFunctionType = (size: number) => number;

interface ViewportSizesType {
  height: ViewportSizeFunctionType;
  width: ViewportSizeFunctionType;
}

interface ViewportDefaultSizesType {
  width: ViewportSizeFunctionType;
  height: ViewportSizeFunctionType;
}

export const viewportSizes: ViewportSizesType = {
  height: (height) =>
    Math.round(viewportDefaultSizes.height((1.3 * height) / 10)),

  width: (width) => Math.round(viewportDefaultSizes.width((2.65 * width) / 10)),
};

const viewportDefaultSizes: ViewportDefaultSizesType = {
  width: (width) => (width * windowWidth) / 100,
  height: (height) => (height * windowHeight) / 100,
};

const main = {
  // generic sizes
  aspectRatio: 1.8,

  height1: viewportSizes.height(1),
  height2: viewportSizes.height(2),
  height4: viewportSizes.height(4),
  height5: viewportSizes.height(5),
  height8: viewportSizes.height(8),
  height10: viewportSizes.height(10),
  height11: viewportSizes.height(11),
  height12: viewportSizes.height(12),
  height13: viewportSizes.height(13),
  height14: viewportSizes.height(14),
  height15: viewportSizes.height(15),
  height16: viewportSizes.height(16),
  height18: viewportSizes.height(18),
  height20: viewportSizes.height(20),
  height21: viewportSizes.height(21),
  height22: viewportSizes.height(22),
  height24: viewportSizes.height(24),
  height25: viewportSizes.height(25),
  height26: viewportSizes.height(26),
  height30: viewportSizes.height(30),
  height35: viewportSizes.height(35),
  height40: viewportSizes.height(40),
  height45: viewportSizes.height(45),
  height50: viewportSizes.height(50),
  height55: viewportSizes.height(55),
  height60: viewportSizes.height(60),
  height70: viewportSizes.height(70),
  height75: viewportSizes.height(75),
  height90: viewportSizes.height(90),
  height80: viewportSizes.height(80),
  height100: viewportSizes.height(100),
  height120: viewportSizes.height(120),
  height130: viewportSizes.height(130),
  height140: viewportSizes.height(140),
  height150: viewportSizes.height(150),
  height160: viewportSizes.height(160),
  height170: viewportSizes.height(170),
  height180: viewportSizes.height(180),
  height190: viewportSizes.height(190),
  height200: viewportSizes.height(200),
  height250: viewportSizes.height(250),
  height300: viewportSizes.height(300),

  opacity: 0.2,

  size0: 0,
  size1: 1,
  size2: 2,
  size10: 10,
  size20: 20,

  width5: viewportSizes.width(5),
  width10: viewportSizes.width(10),
  width15: viewportSizes.width(15),
  width20: viewportSizes.width(20),
  width25: viewportSizes.width(25),
  width30: viewportSizes.width(30),
  width35: viewportSizes.width(35),
  width40: viewportSizes.width(40),
  width45: viewportSizes.width(45),
  width50: viewportSizes.width(50),
  width55: viewportSizes.width(55),
  width60: viewportSizes.width(60),
  width70: viewportSizes.width(70),
  width75: viewportSizes.width(75),
  width80: viewportSizes.width(80),
  width90: viewportSizes.width(90),
  width100: viewportSizes.width(100),
  width150: viewportSizes.width(150),
  width200: viewportSizes.width(200),
  width250: viewportSizes.width(250),
  width300: viewportSizes.width(300),
};

const borderWidth = {
  default: main.size1,
  width0: main.size0,
  width1: main.size1,
  width2: main.size2,
};

const button = {
  default: main.height60,
  height20: main.height20,
  height25: main.height25,
  height30: main.height30,
  height35: main.height35,
  height40: main.height40,
  height45: main.height45,
  height50: main.height50,
  height55: main.height55,
  height60: main.height60,
  height100: main.height100,
  height120: main.height120,
  height130: main.height130,
  height140: main.height140,
};

const borderRadius = {
  ...button,
  default: main.height8,
  radius0: main.size0,
  radius2: main.height2,
  radius4: main.height4,
  radius5: main.height5,
  radius8: main.height8,
  radius15: main.height15,
  radius20: main.height20,
  radius30: main.height30,
};

const icon = {
  default: main.height14,
  height10: main.height10,
  height11: main.height11,
  height12: main.height12,
  height13: main.height13,
  height14: main.height14,
  height16: main.height16,
  height18: main.height18,
  height20: main.height20,
  height24: main.height24,
  height40: main.height40,
};

const image = {
  default: main.height40,
  height10: main.height10,
  height20: main.height20,
  height25: main.height25,
  height30: main.height30,
  height35: main.height35,
  height40: main.height40,
  height50: main.height50,
  height55: main.height55,
  height60: main.height60,
  height90: main.height90,
  height100: main.height100,
  height150: main.height150,
  height160: main.height160,
};

const input = { ...button, default: main.height50 };

const label = {
  default: main.height16,
  height10: main.height10,
  height11: main.height11,
  height12: main.height12,
  height13: main.height13,
  height14: main.height14,
  height16: main.height16,
  height18: main.height18,
  height20: main.height20,
  height21: main.height21,
  height22: main.height22,
  height24: main.height24,
  height26: main.height26,
  height30: main.height30,
  height40: main.height40,
};

const layout = {
  ...button,
  default: main.height20,
  height1: main.height1,
  height10: main.height10,
  height70: main.height70,
  height75: main.height75,
  height90: main.height90,
  width10: main.width10,
  width20: main.width20,
  width30: main.width30,
  width40: main.width40,
  width50: main.width50,
  width70: main.width70,
};

export const sizes = {
  borderRadius,
  borderWidth,
  button,
  icon,
  image,
  input,
  label,
  layout,
  main,
};
