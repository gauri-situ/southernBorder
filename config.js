var config = {
    style: 'mapbox://styles/situmapping/clrnjf3v0003o01qofxht9k1a',
    accessToken: 'pk.eyJ1Ijoic2l0dW1hcHBpbmciLCJhIjoiY2xyZ2d1NDhrMGd1dDJpb2N3amxjajRxNiJ9.4Tci__ZlyLwoBryaf2vutw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>.',
    chapters: [
        {
            id: 'intro-pres',
            alignment: 'full',
            hidden: true,
            title: 'Title',
            image: '',
            description: 'The human rights impact of the Border Industrial Complex is our lens to examine the network of systems that shape the process to seek asylum in the United States. We trace each part of a \migrant’s\ journey and reveal the convoluted intricacies of the collusion between state and private sector entities profiting from each stage of this “crisis”',
            location: {
                center: [-105.0, 28.95962],
                zoom: 5.14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'portOfEntry',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'data-driven-circles',
                    opacity: 0,
                    
                },
                {
                    layer: 'data-driven-circles-labels',
                    opacity: 0,
                    
                },
                {
                    layer: 'geo',
                    opacity: 0,
                    
                },
                {
                    layer: 'isapAll',
                    opacity: 0,
                    
                },
                {
                    layer: 'heatmap',
                    opacity: 0,
                    
                },
                {
                    layer: 'surveillanceTower',
                    opacity: 0,
                    
                },
                {
                    layer: 'migrantCOO',
                    opacity: 0,
                    
                },
                {
                    layer: 'flightPath',
                    opacity: 0,
                    
                },
                {
                    layer: 'travel',
                    opacity: 0,
                    
                },
                {
                    layer: 'departure',
                    opacity: 0,
                    
                },
                {
                    layer: 'foreignOffice',
                    opacity: 0,
                    
                }

            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
        // {
        //     id: 'migrantCOO',
        //     alignment: 'full',
        //     hidden: true,
        //     title: '',
        //     image: '',
        //     description: '',
        //     location: {
        //         center: [-21.04430, 20.34695],
        //         zoom: 2.14,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         {
        //             layer: 'migrantCOO',
        //             opacity: 1,
        //             duration: 50
        //         },
        //         {
        //             layer: 'travel',
        //             opacity: 0.5,
        //             duration: 50
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'migrantCOO',
        //             opacity: 0
        //         },
        //         {
        //             layer: 'travel',
        //             opacity: 0
        //         }
        //     ]
        // },
        {
            id: 'border-surveillance',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'images/key.png',
            description: '',
            location: {
                center: [-105.0, 28.95962],
                zoom: 5.14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'surveillanceTower',
                    opacity: 1,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'surveillanceTower',
                    opacity: 0
                },
                {
                    layer: 'portOfEntry',
                    opacity: 0
                }
                
            ]
        },
        {
            id: 'mig-industry-1',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'images/sbFinalSlides2.jpg',
            description: '',
            location: {
                center: [-105.0, 28.95962],
                zoom: 5.14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'mig-industry-2',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'images/sbFinalSlides3.jpg',
            description: '',
            location: {
                center: [-105.0, 28.95962],
                zoom: 5.14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'crim-mig',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'images/sbFinalSlides4.jpg',
            description: '',
            location: {
                center: [-105.0, 28.95962],
                zoom: 5.14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'crim-mig-2',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'images/sbFinalSlides5.jpg',
            description: '',
            location: {
                center: [-105.0, 28.95962],
                zoom: 5.14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'det-prison',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'Source: U.S Immigration and Customs Enforcement, Alternatives to Detention FY 2024 YTD and Facilities FY 2024 YTD',
            location: {
                center: [-99.23496, 34.64891],
                zoom: 4.00,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'data-driven-circles',
                    opacity: 0.4,
                    duration: 500,
                    
                },
                {
                    layer: 'data-driven-circles-labels',
                    opacity: 1,
                    duration: 100,
                    
                }
            ],
            onChapterExit: [
                {
                    layer: 'data-driven-circles',
                    opacity: 0.2,
                    
                },
                {
                    layer: 'data-driven-circles-labels',
                    opacity: 0.5,
                    
                }
                
            ]
        },
        {
            id: 'crim-mig-3',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'images/sbFinalSlides6.jpg',
            description: '',
            location: {
                center: [-99.23496, 34.64891],
                zoom: 4.00,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'geo-group',
            alignment: 'full',
            hidden: true,
            title: '',
            image: '',
            description: 'text here',
            location: {
                center: [-99.23496, 34.64891],
                zoom: 4.00,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'geo',
                    opacity: 1,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'geo',
                    opacity: 0
                },
                {
                    layer: 'data-driven-circles-labels',
                    opacity: 0
                },
                {
                    layer: 'data-driven-circles',
                    opacity: 0
                }
            ]
        },
        {
            id: 'alt-det',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Source: U.S Immigration and Customs Enforcement, Alternatives to Detention FY 2024 YTD and Facilities FY 2024 YTD',
            location: {
                center: [-99.23496, 34.64891],
                zoom: 4.00,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'isapAll',
                    opacity: 0.4,
                    duration: 100
                }
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'alt-det-2',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'images/sbFinalSlides7.jpg',
            description: '',
            location: {
                center: [-99.23496, 34.64891],
                zoom: 4.00,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
               
            ]
        },
       
        {
            id: 'data-bio',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'images/sbFinalSlides8.jpg',
            description: '',
            location: {
                center: [-99.23496, 34.64891],
                zoom: 4.00,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: 'isapAll',
                    opacity: 0
                    
                }
            ]
        },
        {
            id: 'func-creep',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Source: Electronic Frontier Foundation, Atlas of Surveillance',
            location: {
                center: [-99.23496, 34.64891],
                zoom: 4.00,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'heatmap',
                    opacity: 0.75,
                    duration: 50
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0
                }
            ]
        },
        
        {
            id: 'ice-airports',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Source: Witness at the Border, ICE Air Flights 1/3/24 and 7/5/23 ',
            location: {
                center: [-105.0, 28.95962],
                zoom: 5.14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'departure',
                    opacity: 1,
                    duration: 100
                }
            ],
            onChapterExit: [
                {
                    layer: 'departure',
                    opacity: 0.5
                }
            ]
        },
        {
            id: 'ice-flights',
            alignment: 'full',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-92.53915, 31.32840],
                zoom: 12.22,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ice-flights-2',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'images/sbFinalSlides9.jpg',
            description: '',
            location: {
                center: [-92.53915, 31.32840],
                zoom: 12.22,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'border-ext',
            alignment: 'full',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-82.15015, 14.58775],
                zoom: 3.05,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'flightPath',
                    opacity: 1,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'flightPath',
                    opacity: 0
                    
                },
                {
                    layer: 'departure',
                    opacity: 0
                }
            ]
        },
        {
            id: 'border-ext-2',
            alignment: 'right',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-82.15015, 14.58775],
                zoom: 3.05,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'foreignOffice',
                    opacity: 1,
                    duration: 100
                }
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'border-ext-3',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'images/sbFinalSlides10.jpg',
            description: '',
            location: {
                center: [-82.15015, 19.58775],
                zoom: 3.05,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'darien-gap',
            alignment: 'full',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-77.68729, 7.99512],
                zoom: 6.60,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: []
        },
        {
            id: 'darien-gap-2',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'images/sbFinalSlides11.jpg',
            description: '',
            location: {
                center: [-77.68729, 7.99512],
                zoom: 6.60,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                {
                    layer: 'foreignOffice',
                    opacity: 0
                    
                }
            ]
        },
        {
            id: 'border-ext-3',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'images/sbFinalSlides.jpg',
            description: '',
            location: {
                center: [-99.95959, 26.56850],
                zoom: 7.40,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
               
            ]
        },
       
        {
            id: 'fin',
            alignment: 'full',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-105.0, 26.95962],
                zoom: 4.14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'portOfEntry',
                    opacity: 1,
                    duration: 500
                }
            ],
            onChapterExit: []
        }
         
    ]
};
