import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ru'],
  defaultLocale: 'ru',
  localePrefix: 'always',
});

export const config = {
  matcher: ['/', '/(en|ru)/:path*'],
};
