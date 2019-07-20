import convert from 'xml-js';

export function pipe(stream) {
  var json = convert.xml2json(stream, { compact: true, spaces: 2 });
  console.log(json);
}
