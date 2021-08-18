/**
 * AI Mastering API
 * This is a AI Mastering API document. You can use the mastering feature of [AI Mastering](https://aimastering.com) through this API.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: aimasteringcom@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SpSubscription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SpSubscription'));
  } else {
    // Browser globals (root is window)
    if (!root.Aimastering) {
      root.Aimastering = {};
    }
    root.Aimastering.SpSubscriptionApi = factory(root.Aimastering.ApiClient, root.Aimastering.SpSubscription);
  }
}(this, function(ApiClient, SpSubscription) {
  'use strict';

  /**
   * SpSubscription service.
   * @module api/SpSubscriptionApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SpSubscriptionApi. 
   * @alias module:api/SpSubscriptionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createSpSubscription operation.
     * @callback module:api/SpSubscriptionApi~createSpSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SpSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new smartphone subscription.
     * @param {module:model/String} service Service.
     * @param {Object} opts Optional parameters
     * @param {String} opts.receipt Base64 encoded app store receipt. This parameter is effective only when the service is \&quot;appstore\&quot;.
     * @param {module:api/SpSubscriptionApi~createSpSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SpSubscription}
     */
    this.createSpSubscription = function(service, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'service' is set
      if (service === undefined || service === null) {
        throw new Error("Missing the required parameter 'service' when calling createSpSubscription");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'service': service,
        'receipt': opts['receipt']
      };

      var authNames = ['bearer'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = SpSubscription;

      return this.apiClient.callApi(
        '/sp_subscriptions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listSpSubscriptions operation.
     * @callback module:api/SpSubscriptionApi~listSpSubscriptionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SpSubscription>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all accessable smartphone subscriptions.
     * @param {module:api/SpSubscriptionApi~listSpSubscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SpSubscription>}
     */
    this.listSpSubscriptions = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [SpSubscription];

      return this.apiClient.callApi(
        '/sp_subscriptions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));