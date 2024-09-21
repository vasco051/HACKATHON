import { PropsWithChildren, useEffect } from 'react';
import { ConfigProvider, theme } from 'antd';
import { StyleProvider } from 'antd-style';
import ru_RU from 'antd/locale/ru_RU';

const colors = {
  white: '#FFF',
  light: '#F5F5F5',

  black: '#141414',
  dark: '#1C1C1C',

  border: '#D9D9D9',
  borderSecondary: '#F0F0F0',
};

const lightTheme = {
  token: {
    zIndexPopupBase: 100,
    colorBgLayout: colors.light,
    colorBgContainer: colors.white,
    colorBorder: colors.border,
    colorBorderSecondary: colors.borderSecondary,
    colorBgElevated: colors.light,
    colorBgBase: colors.white,
  },
  components: {
    Menu: {
      itemBg: 'transparent',
    },
    Layout: {
      headerBg: colors.white,
      bodyBg: colors.white,
      footerBg: colors.white,
      headerHeight: 56,
      headerPadding: 0,
    },
    Typography: {
      titleMarginBottom: 0,
      titleMarginTop: 0,
    },
  },
};

export const AppProviders = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const handleWindowSizeChange = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <StyleProvider>
      <ConfigProvider
        locale={ru_RU}
        theme={{ ...theme.defaultConfig, ...lightTheme }}
      >
        {children}
      </ConfigProvider>
    </StyleProvider>
  );
};
