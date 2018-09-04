# aimastering

Aimastering - JavaScript client for aimastering
This is a AI Mastering API document. You can use the mastering feature of [AI Mastering](https://aimastering.com) through this API.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install aimastering --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your aimastering from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('aimastering')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Aimastering = require('aimastering');

var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix['Authorization'] = "Token"

var api = new Aimastering.AccessTokenApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createAccessToken(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://aimastering.com:443/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Aimastering.AccessTokenApi* | [**createAccessToken**](docs/AccessTokenApi.md#createAccessToken) | **POST** /access_tokens | Create an API access token.
*Aimastering.AudioApi* | [**createAudio**](docs/AudioApi.md#createAudio) | **POST** /audios | Create a new audio.
*Aimastering.AudioApi* | [**downloadAudio**](docs/AudioApi.md#downloadAudio) | **GET** /audios/{id}/download | Download an audio data by id.
*Aimastering.AudioApi* | [**downloadAudioByToken**](docs/AudioApi.md#downloadAudioByToken) | **GET** /audios/download_by_token | Download an audio data by audio_download_token.
*Aimastering.AudioApi* | [**getAudio**](docs/AudioApi.md#getAudio) | **GET** /audios/{id} | Get an audio by id.
*Aimastering.AudioApi* | [**getAudioAnalysis**](docs/AudioApi.md#getAudioAnalysis) | **GET** /audios/{id}/analysis | Get an audio analysis by id.
*Aimastering.AudioApi* | [**getAudioDownloadToken**](docs/AudioApi.md#getAudioDownloadToken) | **GET** /audios/{id}/download_token | Get an audio download token by id.
*Aimastering.AudioApi* | [**listAudios**](docs/AudioApi.md#listAudios) | **GET** /audios | Get all audios accessable.
*Aimastering.ConfigApi* | [**getConfig**](docs/ConfigApi.md#getConfig) | **GET** /config | Get config.
*Aimastering.ExternalSearchApi* | [**searchExternal**](docs/ExternalSearchApi.md#searchExternal) | **GET** /external_search | Search external music and get name, url, thumbnails, etc.
*Aimastering.LibraryAudioApi* | [**createLibraryAudio**](docs/LibraryAudioApi.md#createLibraryAudio) | **POST** /library_audios | Create a new library audio.
*Aimastering.LibraryAudioApi* | [**createLibraryAudioLike**](docs/LibraryAudioApi.md#createLibraryAudioLike) | **POST** /library_audios/{id}/like | Create a new library audio like.
*Aimastering.LibraryAudioApi* | [**deleteLibraryAudio**](docs/LibraryAudioApi.md#deleteLibraryAudio) | **DELETE** /library_audios/{id} | Delete library audio.
*Aimastering.LibraryAudioApi* | [**getLibraryAudio**](docs/LibraryAudioApi.md#getLibraryAudio) | **GET** /library_audios/{id} | Get a library audio by id.
*Aimastering.LibraryAudioApi* | [**getLibraryAudioAnalysis**](docs/LibraryAudioApi.md#getLibraryAudioAnalysis) | **GET** /library_audios/{id}/analysis | Get a library audio analysis by id.
*Aimastering.LibraryAudioApi* | [**listLibraryAudios**](docs/LibraryAudioApi.md#listLibraryAudios) | **GET** /library_audios | Get all library audios accessable.
*Aimastering.LibraryAudioApi* | [**updateLibraryAudio**](docs/LibraryAudioApi.md#updateLibraryAudio) | **PUT** /library_audios/{id} | Update library audio.
*Aimastering.MasteringApi* | [**cancelMastering**](docs/MasteringApi.md#cancelMastering) | **PUT** /masterings/{id}/cancel | Cancel a mastering by id.
*Aimastering.MasteringApi* | [**createMastering**](docs/MasteringApi.md#createMastering) | **POST** /masterings | Create a new mastering.
*Aimastering.MasteringApi* | [**deleteMastering**](docs/MasteringApi.md#deleteMastering) | **DELETE** /masterings/{id} | Delete mastering.
*Aimastering.MasteringApi* | [**getMastering**](docs/MasteringApi.md#getMastering) | **GET** /masterings/{id} | Get a mastering by id.
*Aimastering.MasteringApi* | [**getMasteringUnlockProduct**](docs/MasteringApi.md#getMasteringUnlockProduct) | **GET** /masterings/{id}/unlock_product | Review a mastering by id.
*Aimastering.MasteringApi* | [**listMasterings**](docs/MasteringApi.md#listMasterings) | **GET** /masterings | Get all accessable masterings.
*Aimastering.MasteringApi* | [**publishMastering**](docs/MasteringApi.md#publishMastering) | **POST** /masterings/{id}/publish | Publish a mastering by id.
*Aimastering.MasteringApi* | [**reviewMastering**](docs/MasteringApi.md#reviewMastering) | **PUT** /masterings/{id}/review | Review a mastering by id.
*Aimastering.PaymentApi* | [**createPayment**](docs/PaymentApi.md#createPayment) | **POST** /payments | Create a new payment.
*Aimastering.PaymentApi* | [**executePayment**](docs/PaymentApi.md#executePayment) | **PUT** /payments/{id}/execute | Execute a payment by id.
*Aimastering.PaymentApi* | [**getPayment**](docs/PaymentApi.md#getPayment) | **GET** /payments/{id} | Get a payment by id.
*Aimastering.PaymentApi* | [**listPayments**](docs/PaymentApi.md#listPayments) | **GET** /payments | Get all accessable payments.
*Aimastering.PaymentCustomerApi* | [**getDefaultPaymentCustomer**](docs/PaymentCustomerApi.md#getDefaultPaymentCustomer) | **GET** /payment_customers/default | Get a default payment customer.
*Aimastering.PlanApi* | [**listPlans**](docs/PlanApi.md#listPlans) | **GET** /plans | Get all accessable plans.
*Aimastering.StatisticsApi* | [**listAnonymizedMasterings**](docs/StatisticsApi.md#listAnonymizedMasterings) | **GET** /statistics/anonymized_masterings | Get anonymized masterings.
*Aimastering.StatisticsApi* | [**listKpis**](docs/StatisticsApi.md#listKpis) | **GET** /statistics/kpis | Get KPIs.
*Aimastering.SubscriptionApi* | [**cancelSubscription**](docs/SubscriptionApi.md#cancelSubscription) | **PUT** /subscriptions/{id}/cancel | Cancel a subscription by id.
*Aimastering.SubscriptionApi* | [**cancelSubscriptionCancellation**](docs/SubscriptionApi.md#cancelSubscriptionCancellation) | **PUT** /subscriptions/{id}/cancel_cancellation | Cancel the subscription cancellation  by id.
*Aimastering.SubscriptionApi* | [**createSubscription**](docs/SubscriptionApi.md#createSubscription) | **POST** /subscriptions | Create a new subscription.
*Aimastering.SubscriptionApi* | [**getSubscription**](docs/SubscriptionApi.md#getSubscription) | **GET** /subscriptions/{id} | Get a subscription by id.
*Aimastering.SubscriptionApi* | [**listSubscriptions**](docs/SubscriptionApi.md#listSubscriptions) | **GET** /subscriptions | Get all accessable subscriptions.
*Aimastering.UserApi* | [**getSelf**](docs/UserApi.md#getSelf) | **GET** /users/self | Get self user.
*Aimastering.UserApi* | [**updateSelf**](docs/UserApi.md#updateSelf) | **PUT** /users/self | Update self user.
*Aimastering.VideoApi* | [**downloadVideo**](docs/VideoApi.md#downloadVideo) | **GET** /videos/{id}/download | Download an video data by id.
*Aimastering.VideoApi* | [**downloadVideoByToken**](docs/VideoApi.md#downloadVideoByToken) | **GET** /videos/download_by_token | Download an video data by video_download_token.
*Aimastering.VideoApi* | [**getVideo**](docs/VideoApi.md#getVideo) | **GET** /videos/{id} | Get an video by id.
*Aimastering.VideoApi* | [**getVideoDownloadToken**](docs/VideoApi.md#getVideoDownloadToken) | **GET** /videos/{id}/download_token | Get an video download token by id.
*Aimastering.VideoApi* | [**listVideos**](docs/VideoApi.md#listVideos) | **GET** /videos | Get all videos accessable.


## Documentation for Models

 - [Aimastering.AccessToken](docs/AccessToken.md)
 - [Aimastering.AnonymizedMastering](docs/AnonymizedMastering.md)
 - [Aimastering.Audio](docs/Audio.md)
 - [Aimastering.AudioAnalysis](docs/AudioAnalysis.md)
 - [Aimastering.AudioDownloadToken](docs/AudioDownloadToken.md)
 - [Aimastering.Config](docs/Config.md)
 - [Aimastering.ConfigAuth0](docs/ConfigAuth0.md)
 - [Aimastering.ConfigPaypal](docs/ConfigPaypal.md)
 - [Aimastering.ConfigStripe](docs/ConfigStripe.md)
 - [Aimastering.ExternalSearchResult](docs/ExternalSearchResult.md)
 - [Aimastering.ExternalSearchResultItunes](docs/ExternalSearchResultItunes.md)
 - [Aimastering.ExternalSearchResultYoutube](docs/ExternalSearchResultYoutube.md)
 - [Aimastering.JWT](docs/JWT.md)
 - [Aimastering.Kpi](docs/Kpi.md)
 - [Aimastering.LibraryAudio](docs/LibraryAudio.md)
 - [Aimastering.LibraryAudioAnalysis](docs/LibraryAudioAnalysis.md)
 - [Aimastering.LibraryAudioLike](docs/LibraryAudioLike.md)
 - [Aimastering.Mastering](docs/Mastering.md)
 - [Aimastering.Payment](docs/Payment.md)
 - [Aimastering.PaymentCustomer](docs/PaymentCustomer.md)
 - [Aimastering.Plan](docs/Plan.md)
 - [Aimastering.Subscription](docs/Subscription.md)
 - [Aimastering.User](docs/User.md)
 - [Aimastering.Video](docs/Video.md)
 - [Aimastering.VideoDownloadToken](docs/VideoDownloadToken.md)


## Documentation for Authorization


### bearer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

