# HF webCodingChallenge API Spec

This is the spec of the [HF webCodingChallenge API](https://github.com/eissasoubhi/challenge-project/backend, "HF webCodingChallenge API").

### Authentication Header:

`Authorization: Token jwt.token.here`

## JSON Objects returned by API:

### Users (for authentication)

```JSON
{
  "user": {
    "id": 1,
    "email": "jake@jake.jake",
    "token": "jwt.token.here",
  }
}
```

### Single Shop

```JSON
{
  "shop": {
    "id": 1,
    "picture": "https://i.stack.imgur.com/xHWG8.jpg",
    "name": "shop1",
    "email": "jake@jake.jake",
    "city": "Gotom",
    "createdAt": "2016-02-18T03:22:56.637Z",
    "updatedAt": "2016-02-18T03:48:35.824Z",
    "favorited": false,
    "disliked": false,
    "distance": "15.47 mi",
    "location": {
      "type": "jake",
      "coordinates": {
        "lat": 666.666666,
        "long": 999.999999
      }
    }
  }
}
```

### Multiple Shops

```JSON
{
  "shops":[{
    "id": 1,
    "picture": "https://i.stack.imgur.com/xHWG8.jpg",
    "name": "shop1",
    "email": "jake@jake.jake",
    "city": "Gotom",
    "createdAt": "2016-02-18T03:22:56.637Z",
    "updatedAt": "2016-02-18T03:48:35.824Z",
    "favorited": false,
    "disliked": false,
    "distance": "15.47 mi",
    "location": {
      "type": "jake",
      "coordinates": {
        "lat": 666.666666,
        "long": 999.999999
      }
    }
  }, {
    "id": 2,
    "picture": "https://i.stack.imgur.com/xHWG8.jpg",
    "name": "shop1",
    "email": "jake@jake.jake",
    "city": "metropolis",
    "createdAt": "2016-02-18T03:22:56.637Z",
    "updatedAt": "2016-02-18T03:48:35.824Z",
    "favorited": false,
    "disliked": false,
    "distance": null,
    "location": {
      "type": "jake",
      "coordinates": {
        "lat": 666.666666,
        "long": 999.999999
      }
    }
  }],
  "shopsCount": 2
}
```

### Errors and Status Codes

If a request fails any validations, expect a 422 and errors in the following format:

```JSON
{
  "errors":{
    "email": [
      "can't be empty"
    ]
  }
}
```

#### Other status codes:

**401** for Unauthorized requests, when a request requires authentication but it isn't provided

**403** for Forbidden requests, when a request may be valid but the user doesn't have permissions to perform the action

**404** for Not found requests, when a resource can't be found to fulfill the request


## Endpoints:

### Authentication:

`POST /api/v1/users/login`

Example request body:
```JSON
{
  "user":{
    "email": "jake@jake.jake",
    "password": "jakejake"
  }
}
```

No authentication required, returns a [User](#users-for-authentication)

Required fields: `email`, `password`



### Registration:

`POST /api/v1/users`

Example request body:
```JSON
{
  "user":{
    "email": "jake@jake.jake",
    "password": "jakejake"
  }
}
```

No authentication required, returns a [User](#users-for-authentication)

Required fields: `email`, `password`



### Get Current User

`GET /api/v1/user`

Authentication required, returns a [User](#users-for-authentication) that's the current user



### List Shops

`GET /api/v1/shops`

Authentication required, Returns all shops sorted randomly by default, provide `favorited`, `exceptdisliked`, `exceptfavorited` or `nearby` query parameter to filter results

**Query Parameters:**

Favorited by user:

`?favorited=jake@jake.jake`

Except disliked less than 2 hours ago by user:

`?exceptdisliked=jake@jake.jake`

Except favorited by user:

`?exceptfavorited=jake@jake.jake`

Sort by distance:

`?nearby=666.666666,999.999999`

Limit number of shops (default is 20):

`?limit=20`

Offset/skip number of shops (default is 0):

`?offset=0`



### Favorite Shop

`POST /api/v1/shops/:id/favorite`

Authentication required, returns the [Shop](#single-shop)

No additional parameters required



### Unfavorite Shop

`DELETE /api/v1/shops/:id/favorite`

Authentication required, returns the [Shop](#single-shop)

No additional parameters required



### Dislike Shop

`POST /api/v1/shops/:id/dislike`

Authentication required, returns the [Shop](#single-shop)

No additional parameters required
