
var product = {
    title: "https://www.flipkart.com/samsung-m5-32-inch-full-hd-led-backlit-va-panel-embedded-tv-apps-pc-less-productivity-dex-office-365-google-duo-app-iot-hub-built-in-speakers-ultrawide-game-view-smart-monitor-ls32bm501ewxxl/p/itm5c2c807807780?pid=MONGEWSZHBX4ZKZP&lid=LSTMONGEWSZHBX4ZKZPFIUCHH&marketplace=FLIPKART&store=6bo%2Fg0i%2F9no&srno=b_1_1&otracker=hp_omu_Best%2Bof%2BElectronics_4_3.dealCard.OMU_W52Y6O5JCN9E_3&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all%2Chp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_dealCard_cc_4_NA_view-all_3&fm=neo%2Fmerchandising&iid=en_i7nrCvoRgryJCTmgjtO%2F20RyYqBnhXsQs4OQ08c3Xo20MRzhsh7vZZ9iYkq7f7ZuG1Tb56pOwzcUnC2AAj3l2w%3D%3D&ppt=hp&ppn=homepage&ssid=34vn6v89400000001677591919664",
    images: [
        "https://rukminim1.flixcart.com/image/416/416/l3vxbbk0/monitor/p/h/z/wifi-netflix-youtube-prime-video-and-apple-tv-streaming-original-imagewsnc5ymagry.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/l3vxbbk0/monitor/g/a/r/wifi-netflix-youtube-prime-video-and-apple-tv-streaming-original-imagewsnn5yb5d4f.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/l3vxbbk0/monitor/n/u/x/wifi-netflix-youtube-prime-video-and-apple-tv-streaming-original-imagewsnvjsgruhs.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/128/128/kyt0ya80/monitor/c/4/m/with-netflix-youtube-prime-video-and-apple-tv-streaming-original-imagayey3edgkyyx.jpeg?q=70"
    ],
    price:20999,
    highlights: ["Panel Type: VA Panel",
"Screen Resolution Type: Full HD",
"Brightness: 250 nits",
"Response Time: 4 ms | Refresh Rate: 60 Hz",
"HDMI Ports - 2"],
specifications: [
    {
        general :  {
               modelName: "LS32BM501EWXXL",
               series: "M5",
               color: "white"
        }
    },
    {
        displayFeatures: {
            maxRefreshRate: "60Hz",
            maximum3DRefreshRate: "200Hz"
        }
    },
    {
        audioFeatures: {
            speakers: "Yes, 2 Speakers"
        }
    }
]
}

console.log(product.specifications[0].general.modelName);