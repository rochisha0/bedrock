/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// create namespace
if (typeof window.Mozilla === 'undefined') {
    window.Mozilla = {};
}

(function(Mozilla) {
    'use strict';

    if (typeof Mozilla.Client === 'undefined') {
        return false;
    }

    var redirectUrl = document.documentElement.getAttribute('data-whatsnew80-redirect-url');

    Mozilla.Client.getFxaDetails(function(details) {
        if (details.setup) {
            window.location.href = redirectUrl;
        }
    });

})(window.Mozilla);
