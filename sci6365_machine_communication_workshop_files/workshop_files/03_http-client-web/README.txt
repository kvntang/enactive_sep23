# SIMPLE HTTP CLIENT WEB

## General setup

This web app allows you to make `GET` and `POST` requests from a website. 

However, if you are loading this HTML locally and pinging a server that is also local (in your machine or your home/local network) you may run into problems. Most browsers are **sandboxed**, meaning that they do not allow _Cross-Origin Resource Sharing (CORS)_, or in other words, the browser getting access to anything in your actual machine (files, processes, hardware, etc.). This is one of the reasons why, for example, it is so difficult to do physical computing with browsers.

If you intend to make requests to local resources (a server on your machine or in another machine in your local network), you may want to disable CORS in your browser. A few ways to do that are explained here: https://alfilatov.com/posts/run-chrome-without-cors/


## Init

1. Open `index.html` in your browser, and use the UI elements to customize your request.