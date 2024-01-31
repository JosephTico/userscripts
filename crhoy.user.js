// ==UserScript==
// @name        CRHoy Videos Adblock Fixer
// @namespace   Violentmonkey Scripts
// @match        *://www.crhoy.com/site/generators/video/native/player.php*
// @match        *://crhoy.com/site/generators/video/native/player.php*
// @grant       none
// @version     1.0
// @author      JosephTico
// @description 04/17/2023, 4:32:25 PM
// ==/UserScript==

(function() {
    'use strict';

    // Extract the vID parameter from the URL
    var url = window.location.href;
    var vID = decodeURIComponent(url.match(/vID=([^&]+)/)[1]);
    var thumb = window.thumb;
    if (!thumb.startsWith('/media/')) {
        thumb = '/media/' + thumb;
    }

    // Construct the poster URL using the cloudfront domain and the thumb variable
    var posterUrl = 'https://www.crhoy.com/public/' + thumb;
    console.log(thumb);
    console.log(posterUrl);

    // Create a new HTML5 video tag
    var video = document.createElement('video');
    video.src = vID;
    video.controls = true;

    // Set the poster image for the video
    video.poster = posterUrl;

    // Set the video width and height to 100%
    video.style.width = '100%';
    video.style.height = '100%';

    // Replace the page content with the video tag
    var body = document.getElementsByTagName('body')[0];
    body.innerHTML = '';
    body.appendChild(video);
})();