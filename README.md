# License List

This is the FPA License List.

## Public API

### Get All Licenses - [`/licenses`](https://fairfield-programming.github.io/license-list/licenses/)

[![Supports JSON](https://img.shields.io/badge/json-blue)](https://fairfield-programming.github.io/license-list/licenses.json)
[![Supports XMl](https://img.shields.io/badge/xml-blue)](https://fairfield-programming.github.io/license-list/licenses.xml)
[![Supports YAML](https://img.shields.io/badge/yaml-blue)](https://fairfield-programming.github.io/license-list/licenses.yaml)

This endpoint allows querying access for licenses inside of the FPA license list.

### Get License Information - [`/licenses/:id`](https://fairfield-programming.github.io/license-list/licenses/mit)

[![Supports JSON](https://img.shields.io/badge/json-blue)](https://fairfield-programming.github.io/license-list/licenses/mit.json)
[![Supports XMl](https://img.shields.io/badge/xml-blue)](https://fairfield-programming.github.io/license-list/licenses/mit.xml)
[![Supports YAML](https://img.shields.io/badge/yaml-blue)](https://fairfield-programming.github.io/license-list/licenses/mit.yaml)

This endpoint allows you to get all of the information that we have stored about a license.

### Get License Bodies - [`/licenses/:id/raw`](https://fairfield-programming.github.io/license-list/licenses/mit/raw)

This endpoint allows you to retrieve the body of a license. This is how the license would be stored in a file.

### Get License Regex - [`/regex`](https://fairfield-programming.github.io/license-list/regex)

Allows you to retrieve the regex matches for all the different types of licenses. This makes life much easier when trying to identify what license a repository uses.
