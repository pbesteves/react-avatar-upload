export type DefaultThemeType = {
  colors: {
    white: string;
    lightGray: string;
    mediumGray: string;
    dropZoneBorderGray: string;
    darkGray: string;
    mediumGrayText: string;
    darkGrayText: string;
    error: string;
    lightBlue: string;
    mediumBlue: string;
  };
  fonts: Array<string>;
  fontSizes: {
    regular: string;
    small: string;
  };
  fontWeights: {
    regular: number;
    medium: number;
  };
  borderRadius: {
    regular: string;
    medium: string;
  };
  borderWidth: {
    regular: string;
  };
  spacings: {
    none: string;
    xs: string;
    small: string;
    medium: string;
    large: string;
    xl: string;
    xxl: string;
  };
};

const DefaultTheme: DefaultThemeType = {
  colors: {
    white: "#ffffff",
    lightGray: "#f2f5f8",
    mediumGray: "#c3cbd5",
    dropZoneBorderGray: "#c7cdd3",
    darkGray: "#3d485f",
    mediumGrayText: "#677489",
    darkGrayText: "#495567",
    error: "#c64d32",
    lightBlue: "#b9d1ff",
    mediumBlue: "#3f80ff",
  },
  fonts: ["Inter"],
  fontSizes: {
    regular: "1em",
    small: "0.875em",
  },
  fontWeights: {
    regular: 400,
    medium: 500,
  },
  borderRadius: {
    regular: "16px",
    medium: "8px",
  },
  borderWidth: {
    regular: "2px",
  },
  spacings: {
    none: "0",
    xs: "0.625em",
    small: "0.75em",
    medium: "1.3125em",
    large: "2em",
    xl: "2.1875em",
    xxl: "3.6875em",
  },
};

export default DefaultTheme;
