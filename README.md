# xmltojson-cli

## Installation

```bash
$ npm install @gbalbuena/xmltojson-cli
...
```

## Usage

```bash
$ echo '<doc p="test"><a>HelloWorld</a></doc>' | xmltojson
{
  "doc": {
    "_attributes": {
      "p": "test"
    },
    "a": {
      "_text": "HelloWorld"
    }
  }
}
```
