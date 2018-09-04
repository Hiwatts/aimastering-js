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
    define(['ApiClient', 'model/Plan'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Plan'));
  } else {
    // Browser globals (root is window)
    if (!root.Aimastering) {
      root.Aimastering = {};
    }
    root.Aimastering.PlanApi = factory(root.Aimastering.ApiClient, root.Aimastering.Plan);
  }
}(this, function(ApiClient, Plan) {
  'use strict';

  /**
   * Plan service.
   * @module api/PlanApi
   * @version 1.0.0
   */

  /**
   * Constructs a new PlanApi. 
   * @alias module:api/PlanApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listPlans operation.
     * @callback module:api/PlanApi~listPlansCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Plan>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all accessable plans.
     * @param {module:api/PlanApi~listPlansCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Plan>}
     */
    this.listPlans = function(callback) {
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
      var returnType = [Plan];

      return this.apiClient.callApi(
        '/plans', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
