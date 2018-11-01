# chatwork-api
This package just wraps the chatwork API.

## Usage

### Install

With npm:

```
npm install chatwork-api-wrap
```

With yarn:

```
yarn add chatwork-api-wrap
```

### SourceCode
```js
const chatwork = require('chatwork-api-wrap');

chatwork.me.get('YourChatworkToken')
    .then((body) => console.log(body))
    .catch((error) => console.error(error));
```

## Properties
|property|description|
|:--|:--|
|me|Your own account information.|
|my|Your own relation data.|
|contacts|Your own contact data.|
|rooms|Chat room operation.|
|incomingRequests|Contact approval request data operation.|

## Reference
[chatwork API Document](http://developer.chatwork.com/ja/endpoints.html)
