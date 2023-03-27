# Fung Frontend Candidate Interview

This repository contains boilerplate react applications. Please fork / create a new branch for your work / assignment

## Assignment

- Fetch data, with search query, from Marvel API (go to https://editor.swagger.io/ and load ./marvel.openapi.yml)
  Sample

***Keep in mind that every API call, we need to pass the timestamp, apikey and hash***

***Inside ./src/lib/util.ts, we already have the function called getMarvelHash to get the hash***

***Public and Private Key has been provided in the code sample***

```
GET https://gateway.marvel.com/v1/public/comics?ts=${ts}&hash=${hash}&apikey=${apiKey}&titleStartsWith=${search}


Sample response:
{
  "code": 0,
  "status": "string",
  "copyright": "string",
  "attributionText": "string",
  "attributionHTML": "string",
  "data": {
    "offset": 0,
    "limit": 0,
    "total": 0,
    "count": 0,
    "results": [
      {
        "id": 0,
        "digitalId": 0,
        "title": "string",
        "issueNumber": 0,
        "variantDescription": "string",
        "description": "string",
        "modified": "2023-02-21",
        "isbn": "string",
        "upc": "string",
        "diamondCode": "string",
        "ean": "string",
        "issn": "string",
        "format": "string",
        "pageCount": 0,
        "textObjects": [
          {
            "type": "string",
            "language": "string",
            "text": "string"
          }
        ],
        "resourceURI": "string",
        "urls": [
          {
            "type": "string",
            "url": "string"
          }
        ],
        "series": {
          "resourceURI": "string",
          "name": "string"
        },
        "variants": [
          {
            "resourceURI": "string",
            "name": "string"
          }
        ],
        "collections": [
          {
            "resourceURI": "string",
            "name": "string"
          }
        ],
        "collectedIssues": [
          {
            "resourceURI": "string",
            "name": "string"
          }
        ],
        "dates": [
          {
            "type": "string",
            "date": "2023-02-21"
          }
        ],
        "prices": [
          {
            "type": "string",
            "price": 0
          }
        ],
        "thumbnail": {
          "path": "string",
          "extension": "string"
        },
        "images": [
          {
            "path": "string",
            "extension": "string"
          }
        ],
        "creators": {
          "available": 0,
          "returned": 0,
          "collectionURI": "string",
          "items": [
            {
              "resourceURI": "string",
              "name": "string",
              "role": "string"
            }
          ]
        },
        "characters": {
          "available": 0,
          "returned": 0,
          "collectionURI": "string",
          "items": [
            {
              "resourceURI": "string",
              "name": "string",
              "role": "string"
            }
          ]
        },
        "stories": {
          "available": 0,
          "returned": 0,
          "collectionURI": "string",
          "items": [
            {
              "resourceURI": "string",
              "name": "string",
              "type": "string"
            }
          ]
        },
        "events": {
          "available": 0,
          "returned": 0,
          "collectionURI": "string",
          "items": [
            {
              "resourceURI": "string",
              "name": "string"
            }
          ]
        }
      }
    ]
  },
  "etag": "string"
}
```

- Display the results of the query in a flex / grid view (even table is ok)
- It should display title (link to the movie), characters, and link to the sotries
- Provide input search, so user can search for the title of the comics

## Notes

- Please use plain CSS (no framework)
- You can use google to do any search
- Assignment is in JavaScript (Typescript)

## Bonus

- Use of Context
- Use of Effect
- CSS creativity
