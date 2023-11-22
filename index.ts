export const MIME_TYPES = {
  AAC: 'audio/aac',
  ABW: 'application/x-abiword',
  ARC: 'application/x-freearc',
  AVIF: 'image/avif',
  AVI: 'video/x-msvideo',
  AZW: 'application/vnd.amazon.ebook',
  BIN: 'application/octet-stream',
  BMP: 'image/bmp',
  BZ: 'application/x-bzip',
  BZIP: 'application/x-bzip',
  BZ2: 'application/x-bzip2',
  CDA: 'application/x-cdf',
  CSH: 'application/x-csh',
  CSS: 'text/css',
  CSV: 'text/csv',
  DOC: 'application/msword',
  DOCX: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  EOT: 'application/vnd.ms-fontobject',
  EPUB: 'application/epub+zip',
  GZ: 'application/gzip',
  GZIP: 'application/gzip',
  GIF: 'image/gif',
  HTM: 'text/html',
  HTML: 'text/html',
  ICO: 'image/vnd.microsoft.icon',
  ICS: 'text/calendar',
  JAR: 'application/java-archive',
  JPEG: 'image/jpeg',
  JPG: 'image/jpeg',
  JS: 'text/javascript',
  JSON: 'application/json',
  JSONLD: 'application/ld+json',
  MID: 'audio/midi, audio/x-midi',
  MIDI: 'audio/midi, audio/x-midi',
  MJS: 'text/javascript',
  MP3: 'audio/mpeg',
  MP4: 'video/mp4',
  MPEG: 'video/mpeg',
  MPKG: 'application/vnd.apple.installer+xml',
  ODP: 'application/vnd.oasis.opendocument.presentation',
  ODS: 'application/vnd.oasis.opendocument.spreadsheet',
  ODT: 'application/vnd.oasis.opendocument.text',
  OGA: 'audio/ogg',
  OGV: 'video/ogg',
  OGX: 'application/ogg',
  OPUS: 'audio/opus',
  OTF: 'font/otf',
  PNG: 'image/png',
  PDF: 'application/pdf',
  PHP: 'application/x-httpd-php',
  PPT: 'application/vnd.ms-powerpoint',
  PPTX: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  RAR: 'application/vnd.rar',
  RTF: 'application/rtf',
  SH: 'application/x-sh',
  SVG: 'image/svg+xml',
  TAR: 'application/x-tar',
  TIF: 'image/tiff',
  TIFF: 'image/tiff',
  TS: 'video/mp2t',
  TTF: 'font/ttf',
  TXT: 'text/plain',
  VSD: 'application/vnd.visio',
  WAV: 'audio/wav',
  WEBA: 'audio/webm',
  WEBM: 'video/webm',
  WEBP: 'image/webp',
  WOFF: 'font/woff',
  WOFF2: 'font/woff2',
  XHTML: 'application/xhtml+xml',
  XLS: 'application/vnd.ms-excel',
  XLSX: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  XML: 'application/xml',
  XUL: 'application/vnd.mozilla.xul+xml',
  ZIP: 'application/zip',
  '3GP': 'video/3gpp, audio/3gpp',
  '3G2': 'video/3gpp2, audio/3gpp2',
  '7Z': 'application/x-7z-compressed',
} as const

type ObjectKeysType<T> = { [K in keyof T]: T[K] }

export type MimeDictionaryType = ObjectKeysType<typeof MIME_TYPES>
