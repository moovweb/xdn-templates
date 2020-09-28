import cheerio from 'cheerio';

function absolutizeUrl(url: string): string {
  if (!url) {
    return '/';
  }
  return url
    .replace(/https?:\/\/{answers.origin}/, '/')
    .replace('//', '/');
}

function absolutizeElementsAttribute(
  $: cheerio.Root,
  selector: string,
  attribute: string,
): void {
  const $elements = $(selector);
  $elements.each((index, element) => {
    const $element = $(element);
    const url = $element.attr(attribute) || '';
    $element.attr(attribute, absolutizeUrl(url));
  });
}

// @TODO: TS - find and use `Response` type
export default function transformResponse(response: any): void {
  // console.log(`Transform script running on ${response.req.originalUrl}`); // for testing

  const $ = cheerio.load(response.body);

  /**
   * Append XDN scripts
   */
  $('head').append(`
    <script src="/__xdn__/cache-manifest.js" defer="defer"></script>
    <script src="/main.js" defer="defer"></script>
  `);

  /**
   * Absolutize URLs
   */
  absolutizeElementsAttribute($, '[href*="{answers.origin}"]', 'href');

  response.body = $.html();
}
