import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator"

let locales = ['bn', 'en'];

let defaultLocale = 'en';

function getLocale(request) {
    const acceptedLanguage = request.headers.get('accept-language') ?? undefined;

    let headers = {'accept-language' : acceptedLanguage};
    let language = new Negotiator({headers}).languages();

    return match(language, locales, defaultLocale)
}

export function middleware(request) {
    const pathname = request.nextUrl.pathname;

    const pathnameIsMissingLocale = locales.every((locale) => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`)
}