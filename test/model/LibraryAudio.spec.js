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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Aimastering);
  }
}(this, function(expect, Aimastering) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Aimastering.LibraryAudio();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('LibraryAudio', function() {
    it('should create an instance of LibraryAudio', function() {
      // uncomment below and update the code to test LibraryAudio
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be.a(Aimastering.LibraryAudio);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property album (base name: "album")', function() {
      // uncomment below and update the code to test the property album
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property albumArtist (base name: "album_artist")', function() {
      // uncomment below and update the code to test the property albumArtist
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property artist (base name: "artist")', function() {
      // uncomment below and update the code to test the property artist
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property genre (base name: "genre")', function() {
      // uncomment below and update the code to test the property genre
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property track (base name: "track")', function() {
      // uncomment below and update the code to test the property track
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property publisher (base name: "publisher")', function() {
      // uncomment below and update the code to test the property publisher
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property fileHash (base name: "file_hash")', function() {
      // uncomment below and update the code to test the property fileHash
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property failureReason (base name: "failure_reason")', function() {
      // uncomment below and update the code to test the property failureReason
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property probeJson (base name: "probe_json")', function() {
      // uncomment below and update the code to test the property probeJson
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property rms (base name: "rms")', function() {
      // uncomment below and update the code to test the property rms
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property peak (base name: "peak")', function() {
      // uncomment below and update the code to test the property peak
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property loudness (base name: "loudness")', function() {
      // uncomment below and update the code to test the property loudness
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property dynamics (base name: "dynamics")', function() {
      // uncomment below and update the code to test the property dynamics
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property sharpness (base name: "sharpness")', function() {
      // uncomment below and update the code to test the property sharpness
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property space (base name: "space")', function() {
      // uncomment below and update the code to test the property space
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property loudnessRange (base name: "loudness_range")', function() {
      // uncomment below and update the code to test the property loudnessRange
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property drr (base name: "drr")', function() {
      // uncomment below and update the code to test the property drr
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property soundQuality (base name: "sound_quality")', function() {
      // uncomment below and update the code to test the property soundQuality
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property frames (base name: "frames")', function() {
      // uncomment below and update the code to test the property frames
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property sampleRate (base name: "sample_rate")', function() {
      // uncomment below and update the code to test the property sampleRate
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property channels (base name: "channels")', function() {
      // uncomment below and update the code to test the property channels
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property isPublic (base name: "is_public")', function() {
      // uncomment below and update the code to test the property isPublic
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property likedBySelf (base name: "liked_by_self")', function() {
      // uncomment below and update the code to test the property likedBySelf
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property likeCount (base name: "like_count")', function() {
      // uncomment below and update the code to test the property likeCount
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new Aimastering.LibraryAudio();
      //expect(instance).to.be();
    });

  });

}));
