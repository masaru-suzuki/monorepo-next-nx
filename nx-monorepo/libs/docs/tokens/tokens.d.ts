/**
 * Do not edit directly
 * Generated on Tue, 20 Jun 2023 00:57:34 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "theme-color": DesignToken,
  "secondary-color": DesignToken,
  "brandA": {
    "theme": DesignToken,
    "secondary": DesignToken
  },
  "brandB": {
    "theme": DesignToken,
    "secondary": DesignToken
  },
  "brandC": {
    "theme": DesignToken,
    "secondary": DesignToken
  },
  "tokenSetOrder": {
    "0": DesignToken,
    "1": DesignToken,
    "2": DesignToken,
    "3": DesignToken
  }
}
