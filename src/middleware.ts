import { NextResponse, NextRequest } from 'next/server'

const defaultLocale = "egypt-en";
const locales = ["egypt-en"];

const getLocalePartsFrom = ({ pathname, locale }: any) => {
  if (locale) {
    return locale;
  } else {
    const pathnameParts = pathname.toLowerCase().split("/");
    return pathnameParts[1];
  }
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const defaultLocaleParts = getLocalePartsFrom({ locale: defaultLocale });
  const currentPathnameParts = getLocalePartsFrom({ pathname });

  if (currentPathnameParts === defaultLocaleParts) {
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${defaultLocaleParts}`,
          pathname.startsWith("/") ? "/" : ""
        ),
        request.url
      )
    );
  }

  const pathnameIsMissingValidLocale = locales.every((locale) => {
    const localeParts = getLocalePartsFrom({ locale });
    return !pathname.startsWith(`/${localeParts}`);
  });

  if (pathnameIsMissingValidLocale) {
    return NextResponse.rewrite(
      new URL(`/${defaultLocaleParts}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
