import { css } from '@linaria/core';

const globals = css`
  :global() {
    html {
      box-sizing: border-box;
      font-family: Inter, Arial, Verdana, Tahoma, sans-serif;
      scroll-behavior: smooth;
    }
    * {
      font-family: Inter, Arial, Verdana, Tahoma, sans-serif;
    }

    body {
      margin: 0;
      scroll-behavior: smooth;

      /* Defining colors */
      --color-accent-light: #004159;
      --color-accent: #003143;
      --color-accent-dark: #002533;
      --color-accent-reverse: #ffffff;
      --color-accent-disabled: #3c4a4f;

      --color-text-black: #111;
      --color-text-grey: #555;

      --color-overlay: rgba(255, 255, 255, 0.85);
      --color-header-background: #fefefe;
      --color-transparent-black: rgba(0, 0, 0, 0);
      --color-transparent-white: rgba(255, 255, 255, 0);
      --color-translucent-background: rgba(0, 0, 0, 0.2);

      --color-footer-background: #fafafa;
      --color-footer-foreground: #323232;
      --color-white: #ffffff;
      --color-grey: #d3d3d3;
      --color-primary: #fafafa;
      --color-primary-dark: #f0f0f0;
      --color-primary-reverse: '#141412';

      --color-box-border: #e6e9eb;
      --color-box-border-dark: #cacdcf;
      --color-input-background: #fafafa;
      --color-error: #aa0000;

      /* Defining Dimensions */
      --dim-border-radius: 4px;

      --dim-space: 3px;
      --dim-space-2x: 6px;
      --dim-space-4x: 12px;
      --dim-space-6x: 18px;
      --dim-space-8x: 24px;
      --dim-space-12x: 36px;
      --dim-space-large: 40px;
    }

    a {
      display: block;
      cursor: pointer;
      color: inherit !important;
      text-decoration: none !important;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    #__next {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: relative;
      overflow-x: hidden;
    }

    td,
    th {
      text-align: unset !important;
    }
  }
`;

export default globals;
