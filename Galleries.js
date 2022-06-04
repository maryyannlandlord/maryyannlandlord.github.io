
const wetwareTexture = [
            {
                src: 'Portfolio/Wetware/tex13.jpg',
                thumb: 'Portfolio/Wetware/tex13.jpg',
                 
            },
            {
                src: 'Portfolio/Wetware/tex11.png',
                thumb: 'Portfolio/Wetware/tex11.png',
                
            },
            {
                src: 'Portfolio/Wetware/still20.jpg',
                thumb: 'Portfolio/Wetware/still20.jpg',
                
            },
             {
                src: 'Portfolio/Wetware/tex8.jpg',
                thumb: 'Portfolio/Wetware/tex8.jpg',
                
            },
            {
                src: 'Portfolio/Wetware/tex10.jpg',
                thumb: 'Portfolio/Wetware/tex10.jpg',
                
            },
            {
                src: 'Portfolio/Wetware/tex14.jpg',
                thumb: 'Portfolio/Wetware/tex14.jpg',
                
            },
        ];


const wetwareStills = [
            {
                src: 'Portfolio/Wetware/still19.png',
                thumb: 'Portfolio/Wetware/still19.png',
                 
            },
            {
                src: 'Portfolio/Wetware/still10.jpg',
                thumb: 'Portfolio/Wetware/still10.jpg',
                
            },
            {
                src: 'Portfolio/Wetware/still14.jpg',
                thumb: 'Portfolio/Wetware/still14.jpg',
                
            },
             {
                src: 'Portfolio/Wetware/still15.jpg',
                thumb: 'Portfolio/Wetware/still15.jpg',
                
            },
            {
                src: 'Portfolio/Wetware/still18.png',
                thumb: 'Portfolio/Wetware/still18.png',
                
            },
            {
                src: 'Portfolio/Wetware/still8.jpg',
                thumb: 'Portfolio/Wetware/still8.jpg',
                
            },
             {
                src: 'Portfolio/Wetware/still7.jpg',
                thumb: 'Portfolio/Wetware/still7.jpg',
                
            },
             {
                src: 'Portfolio/Wetware/still9.jpg',
                thumb: 'Portfolio/Wetware/still9.jpg',
                
            }
        ];

const wetwareConcepts = [
            {
                src: 'Portfolio/Wetware/art3.png',
                thumb: 'Portfolio/Wetware/art3.png',
                 
            },
            {
                src: 'Portfolio/Wetware/art4.png',
                thumb: 'Portfolio/Wetware/art4.png',
                
            },
            {
                src: 'Portfolio/Wetware/art5.jpg',
                thumb: 'Portfolio/Wetware/art5.jpg',
                
            },
             {
                src: 'Portfolio/Wetware/art6.jpg',
                thumb: 'Portfolio/Wetware/art6.jpg',
                
            },
          
             {
                src: 'Portfolio/Wetware/art9.png',
                thumb: 'Portfolio/Wetware/art9.png',
                
            },
             {
                src: 'Portfolio/Wetware/art10.jpg',
                thumb: 'Portfolio/Wetware/art10.jpg',
                
            },
            {
                src: 'Portfolio/Wetware/art11.jpg',
                thumb: 'Portfolio/Wetware/art11.jpg',
                
            }
        ];

const IPADUI = [
    {src: 'Portfolio/Wetware/ipad-UI.png',
     }
    ];

const yokaiStills = [
     {
        src: 'Portfolio/Yokai/still5.jpg',
        thumb: 'Portfolio/Yokai/still5.jpg',
     },
     
     {
        src: 'Portfolio/Yokai/still1.jpg',
        thumb: 'Portfolio/Yokai/still1.jpg',
     },

     {
        src: 'Portfolio/Yokai/still2.jpg',
        thumb: 'Portfolio/Yokai/still2.jpg',
     },
    {
        src: 'Portfolio/Yokai/still3.jpg',
        thumb: 'Portfolio/Yokai/still3.jpg',
     },
     {
        src: 'Portfolio/Yokai/still4.jpg',
        thumb: 'Portfolio/Yokai/still4.jpg',
     },
      {
        src: 'Portfolio/Yokai/still6.JPG',
        thumb: 'Portfolio/Yokai/still6.JPG',
     }
];

const maadStills = [
    
   
    {
        src : "Portfolio/Maad/still4.jpg",
        thumb: "Portfolio/Maad/still4.jpg"
    },
     {
        src : "Portfolio/Maad/still3.png",
        thumb: "Portfolio/Maad/still3.png"
    },
    {
        src : "Portfolio/Maad/still7.jpg",
        thumb: "Portfolio/Maad/still7.jpg"
    },
     {
        src : "Portfolio/Maad/still2.jpg",
        thumb: "Portfolio/Maad/still2.jpg"
    },
    {
        src : "Portfolio/Maad/still5.png",
        thumb: "Portfolio/Maad/still5.png"
    },

   
     {
        src : "Portfolio/Maad/still6.jpg",
        thumb: "Portfolio/Maad/still6.jpg"
    },

];

const maadTech = [
    {
        src : "Portfolio/Maad/install2.jpg",
        thumb: "Portfolio/Maad/install2.jpg"
    },
    {
        src : "Portfolio/Maad/install1.jpg",
        thumb: "Portfolio/Maad/install1.jpg"
    },
 
    {
        src : "Portfolio/Maad/install4.jpg",
        thumb: "Portfolio/Maad/install4.jpg"
    },
    {
        src : "Portfolio/Maad/install3.jpg",
        thumb: "Portfolio/Maad/install3.jpg"
    },
    {
        src : "Portfolio/Maad/install5.jpg",
        thumb: "Portfolio/Maad/install5.jpg"
    },

];



function createGallery(array, elementID){
const lgContainer = document.getElementById(elementID);
const inlineGallery = lightGallery(lgContainer, {
        container: lgContainer,
        dynamic: true,
        hash: false,
        closable: false,
        showMaximizeIcon: true,
        appendSubHtmlTo: '.lg-item',
        slideDelay: 400,
        plugins: [lgZoom, lgThumbnail],
        dynamicEl: array
    });

return inlineGallery; 
}


function createAllInlineGalleries(){

    const galleries = [
    //createGallery(wetwareTexture,"wetware-texture"),
    //createGallery(wetwareStills,"wetware-stills"),
    createGallery(wetwareConcepts,"wetware-concepts"),
    createGallery(IPADUI, "IPADUI"),
    //createGallery(yokaiStills,"yokai-stills"),
    //createGallery(maadStills,"maad-stills"),
    //createGallery(maadTech, "maad-tech"),
    ]
 

    for (let step = 0; step < galleries.length; step++){
        if (galleries[step].el) {
            galleries[step].openGallery();
        }
    }
}

createAllInlineGalleries();



function createAllLightGalleries(){

    const galleries = [
    "CafeGallery", 
    "maad-tech", 
    "maad-stills",
    "yokai-stills",
    "wetware-tex",
    "wetware-stills",
    "momento-paintedCorner",
    "sketchGallery", 
    "momento-gifs"
    ];

    for (let step = 0; step < galleries.length; step++){

    let gallery = document.getElementById(galleries[step]); 
        if (gallery){
            lightGallery(gallery,{
            thumbnail:true,
            plugins:  [lgThumbnail,lgVideo,lgVimeoThumbnail],            
            });
        };
    }
}

createAllLightGalleries();

