module.exports = {
    "lintOnSave": "warning",
    //"publicPath": (process.env.NODE_ENV === "production") ? "./" : "/",
    "publicPath": "/",
    "devServer": {
        "https": true,
    },
    "pluginOptions": {
        "webpackBundleAnalyzer": {
            "openAnalyzer": false
        },
    },
    "pwa": {
        "name": "Waste Evaluator",
        "themeColor": "#ffffff",
        "msTileColor": "#ffffff",
        "appleMobileWebAppCapable": "yes",
        "appleMobileWebAppStatusBarStyle": "default",
        "iconPaths": {
            "favicon32": "favicon-32x32.png",
            "favicon16": "favicon-16x16.png",
            "appleTouchIcon": "apple-touch-icon.png",
            "maskIcon": "safari-pinned-tab.svg",
            "msTileImage": "mstile-150x150.png"
        },
        "manifestOptions": {
            "short_name": "Evaluator",
            "start_url": "./index.html",
            "icons": [
                {
                    "src": "./android-chrome-192x192.png",
                    "sizes": "192x192",
                    "type": "image/png"
                },
                {
                    "src": "./android-chrome-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png"
                }
            ],
            "background_color": "#ffffff",
        },

        "workboxPluginMode": "GenerateSW",
        /*workboxOptions: {
            navigateFallback: "/index.html",
            offlineGoogleAnalytics: true,
            //cleanupOutdatedCaches: true,
            runtimeCaching: [{
                urlPattern: new RegExp("^https://*.marierskincare.com/"),
                handler: "NetworkFirst",
                options: {
                    networkTimeoutSeconds: 20,
                    cacheName: "main-cache",
                    cacheableResponse: {
                        statuses: [0, 200],
                    },
                },
            }, {
                urlPattern: new RegExp("^https://api.macott.app/"),
                handler: "NetworkFirst",
                options: {
                    networkTimeoutSeconds: 20,
                    cacheName: "api-cache",
                    cacheableResponse: {
                        statuses: [0, 200],
                    },
                },
            }]
        }*/
    },
    "configureWebpack": (config) => {
        config.module.rules = [
            {
                "test": /\.worker\.js$/i,
                "use": [
                    {
                        "loader": "comlink-loader",
                        "options": {
                            "singleton": true
                        }
                    }
                ]
            },
            ...config.module.rules
        ];
    },
};
