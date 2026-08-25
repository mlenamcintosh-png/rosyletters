/* =========================================
   ROSY LETTERS ROOM DESIGNER
========================================= */


/* =========================================
   FURNITURE
========================================= */

const furniture = [

    {
        id: "bed",
        name: "Bed",
        category: "beds",
        image: "assets/room/bed.png",
        width: 150,
        height: 150
    },

    {
        id: "bed-decor",
        name: "Bed Decor",
        category: "beds",
        image: "assets/room/bed-decor.png",
        width: 130,
        height: 130
    },

    {
        id: "chair",
        name: "Chair",
        category: "seating",
        image: "assets/room/chair.png",
        width: 90,
        height: 90
    },

    {
        id: "sofa",
        name: "Sofa",
        category: "seating",
        image: "assets/room/sofa.png",
        width: 150,
        height: 110
    },

    {
        id: "wardrobe",
        name: "Wardrobe",
        category: "storage",
        image: "assets/room/wardrobe.png",
        width: 120,
        height: 150
    },

    {
        id: "dresser1",
        name: "Dresser",
        category: "storage",
        image: "assets/room/dresser1.png",
        width: 110,
        height: 100
    },

    {
        id: "dresser2",
        name: "Small Dresser",
        category: "storage",
        image: "assets/room/dresser2.png",
        width: 100,
        height: 95
    },

    {
        id: "bookshelf",
        name: "Bookshelf",
        category: "storage",
        image: "assets/room/bookshelf.png",
        width: 120,
        height: 140
    },

    {
        id: "tv",
        name: "TV",
        category: "electronics",
        image: "assets/room/tv.png",
        width: 105,
        height: 90
    },

    {
        id: "mirror",
        name: "Mirror",
        category: "decor",
        image: "assets/room/mirror.png",
        width: 85,
        height: 130
    },

    {
        id: "plant1",
        name: "Plant",
        category: "plants",
        image: "assets/room/plant1.png",
        width: 80,
        height: 90
    },

    {
        id: "plant2",
        name: "Little Plant",
        category: "plants",
        image: "assets/room/plant2.png",
        width: 75,
        height: 85
    }

];



/* =========================================
   ELEMENTS
========================================= */

const room =
    document.getElementById(
        "room"
    );


const roomItems =
    document.getElementById(
        "roomItems"
    );


const itemList =
    document.getElementById(
        "itemList"
    );


const roomStatus =
    document.getElementById(
        "roomStatus"
    );


const itemControls =
    document.getElementById(
        "itemControls"
    );


const selectedItemName =
    document.getElementById(
        "selectedItemName"
    );



/* =========================================
   STATE
========================================= */

let selectedCategory =
    "beds";


let selectedItem =
    null;


let highestZ =
    10;



/* =========================================
   SHOW FURNITURE
========================================= */

function showFurniture() {


    itemList.innerHTML =
        "";


    const items =
        furniture.filter(

            function(item) {

                return (
                    item.category ===
                    selectedCategory
                );

            }

        );


    if (
        items.length === 0
    ) {

        itemList.innerHTML = `

            <p style="
            grid-column:1/-1;
            text-align:center;
            color:#9a7885;
            ">

            More furniture coming soon ♡

            </p>

        `;

        return;

    }


    items.forEach(

        function(item) {


            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "item-card";


            button.innerHTML = `

                <img
                src="${item.image}"
                alt="${item.name}">

                <span>
                    ${item.name}
                </span>

            `;


            button.addEventListener(

                "click",

                function() {

                    addFurniture(
                        item
                    );

                }

            );


            itemList.appendChild(
                button
            );

        }

    );

}



/* =========================================
   CATEGORY BUTTONS
========================================= */

document
.querySelectorAll(
    ".category-button"
)
.forEach(

    function(button) {


        button.addEventListener(

            "click",

            function() {


                document
                .querySelectorAll(
                    ".category-button"
                )
                .forEach(

                    function(item) {

                        item.classList.remove(
                            "active"
                        );

                    }

                );


                button.classList.add(
                    "active"
                );


                selectedCategory =
                    button.dataset.category;


                showFurniture();

            }

        );

    }

);



/* =========================================
   ROOM THEMES
========================================= */

document
.querySelectorAll(
    ".theme-button"
)
.forEach(

    function(button) {


        button.addEventListener(

            "click",

            function() {


                const theme =
                    button.dataset.theme;


                document
                .querySelectorAll(
                    ".theme-button"
                )
                .forEach(

                    function(item) {

                        item.classList.remove(
                            "active"
                        );

                    }

                );


                button.classList.add(
                    "active"
                );


                room.className =
                    "room theme-" +
                    theme;


                localStorage.setItem(
                    "rosyRoomTheme",
                    theme
                );


                setStatus(
                    "Theme changed ♡"
                );

            }

        );

    }

);



/* =========================================
   ADD FURNITURE
========================================= */

function addFurniture(
    furnitureItem
) {


    const item =
        document.createElement(
            "div"
        );


    item.className =
        "placed-item";


    item.dataset.name =
        furnitureItem.name;


    item.dataset.itemId =
        furnitureItem.id;


    item.style.width =
        furnitureItem.width +
        "px";


    item.style.height =
        furnitureItem.height +
        "px";


    item.style.left =
        "50%";


    item.style.top =
        "55%";


    item.style.transform =
        "translate(-50%, -50%) rotate(0deg)";


    item.dataset.rotation =
        "0";


    item.dataset.scale =
        "1";


    highestZ++;


    item.style.zIndex =
        highestZ;


    item.innerHTML = `

        <img
        src="${furnitureItem.image}"
        alt="${furnitureItem.name}">

    `;


    roomItems.appendChild(
        item
    );


    enableDragging(
        item
    );


    selectItem(
        item
    );


    setStatus(
        furnitureItem.name +
        " added!"
    );

}



/* =========================================
   SELECT ITEM
========================================= */

function selectItem(
    item
) {


    if (
        selectedItem
    ) {

        selectedItem.classList.remove(
            "selected"
        );

    }


    selectedItem =
        item;


    selectedItem.classList.add(
        "selected"
    );


    selectedItemName.textContent =
        selectedItem.dataset.name;


    itemControls.classList.remove(
        "hidden"
    );

}



/* =========================================
   DESELECT
========================================= */

room.addEventListener(

    "pointerdown",

    function(event) {


        if (
            event.target === room ||
            event.target.classList.contains(
                "room-wall"
            ) ||
            event.target.classList.contains(
                "room-floor"
            ) ||
            event.target.classList.contains(
                "room-items"
            )
        ) {


            if (
                selectedItem
            ) {

                selectedItem.classList.remove(
                    "selected"
                );

            }


            selectedItem =
                null;


            itemControls.classList.add(
                "hidden"
            );

        }

    }

);



/* =========================================
   DRAGGING
========================================= */

function enableDragging(
    item
) {


    let dragging =
        false;


    let offsetX =
        0;


    let offsetY =
        0;



    item.addEventListener(

        "pointerdown",

        function(event) {


            event.stopPropagation();


            selectItem(
                item
            );


            dragging =
                true;


            item.setPointerCapture(
                event.pointerId
            );


            const itemRect =
                item.getBoundingClientRect();


            offsetX =
                event.clientX -
                itemRect.left;


            offsetY =
                event.clientY -
                itemRect.top;

        }

    );



    item.addEventListener(

        "pointermove",

        function(event) {


            if (
                !dragging
            ) {

                return;

            }


            const roomRect =
                room.getBoundingClientRect();


            let x =
                event.clientX -
                roomRect.left -
                offsetX;


            let y =
                event.clientY -
                roomRect.top -
                offsetY;


            const maxX =
                room.clientWidth -
                item.offsetWidth;


            const maxY =
                room.clientHeight -
                item.offsetHeight;


            x =
                Math.max(
                    0,
                    Math.min(
                        x,
                        maxX
                    )
                );


            y =
                Math.max(
                    0,
                    Math.min(
                        y,
                        maxY
                    )
                );


            item.style.left =
                x +
                "px";


            item.style.top =
                y +
                "px";


            applyTransform(
                item
            );

        }

    );



    item.addEventListener(

        "pointerup",

        function() {


            dragging =
                false;

        }

    );

}



/* =========================================
   TRANSFORMS
========================================= */

function applyTransform(
    item
) {


    const rotation =
        Number(
            item.dataset.rotation
        );


    const scale =
        Number(
            item.dataset.scale
        );


    item.style.transform =

        "rotate(" +
        rotation +
        "deg) " +

        "scale(" +
        scale +
        ")";

}



/* =========================================
   ROTATION
========================================= */

document
.getElementById(
    "rotateLeft"
)
.addEventListener(

    "click",

    function() {


        if (
            !selectedItem
        ) return;


        selectedItem.dataset.rotation =

            Number(
                selectedItem.dataset.rotation
            ) - 45;


        applyTransform(
            selectedItem
        );

    }

);



document
.getElementById(
    "rotateRight"
)
.addEventListener(

    "click",

    function() {


        if (
            !selectedItem
        ) return;


        selectedItem.dataset.rotation =

            Number(
                selectedItem.dataset.rotation
            ) + 45;


        applyTransform(
            selectedItem
        );

    }

);



/* =========================================
   RESIZE
========================================= */

document
.getElementById(
    "makeBigger"
)
.addEventListener(

    "click",

    function() {


        if (
            !selectedItem
        ) return;


        let scale =
            Number(
                selectedItem.dataset.scale
            );


        scale =
            Math.min(
                scale + .1,
                2
            );


        selectedItem.dataset.scale =
            scale;


        applyTransform(
            selectedItem
        );

    }

);



document
.getElementById(
    "makeSmaller"
)
.addEventListener(

    "click",

    function() {


        if (
            !selectedItem
        ) return;


        let scale =
            Number(
                selectedItem.dataset.scale
            );


        scale =
            Math.max(
                scale - .1,
                .4
            );


        selectedItem.dataset.scale =
            scale;


        applyTransform(
            selectedItem
        );

    }

);



/* =========================================
   LAYERS
========================================= */

document
.getElementById(
    "moveFront"
)
.addEventListener(

    "click",

    function() {


        if (
            !selectedItem
        ) return;


        highestZ++;


        selectedItem.style.zIndex =
            highestZ;

    }

);



document
.getElementById(
    "moveBack"
)
.addEventListener(

    "click",

    function() {


        if (
            !selectedItem
        ) return;


        selectedItem.style.zIndex =
            1;

    }

);



/* =========================================
   DELETE
========================================= */

document
.getElementById(
    "deleteItem"
)
.addEventListener(

    "click",

    function() {


        if (
            !selectedItem
        ) return;


        selectedItem.remove();


        selectedItem =
            null;


        itemControls.classList.add(
            "hidden"
        );


        setStatus(
            "Item removed."
        );

    }

);



/* =========================================
   SAVE ROOM
========================================= */

document
.getElementById(
    "saveRoom"
)
.addEventListener(

    "click",

    function() {


        const savedItems =
            [];


        document
        .querySelectorAll(
            ".placed-item"
        )
        .forEach(

            function(item) {


                const image =
                    item.querySelector(
                        "img"
                    );


                savedItems.push({

                    id:
                        item.dataset.itemId,

                    name:
                        item.dataset.name,

                    image:
                        image.src,

                    left:
                        item.style.left,

                    top:
                        item.style.top,

                    width:
                        item.style.width,

                    height:
                        item.style.height,

                    rotation:
                        item.dataset.rotation,

                    scale:
                        item.dataset.scale,

                    zIndex:
                        item.style.zIndex

                });

            }

        );


        localStorage.setItem(

            "rosyRoomItems",

            JSON.stringify(
                savedItems
            )

        );


        setStatus(
            "Room saved! ♡"
        );

    }

);



/* =========================================
   LOAD ROOM
========================================= */

function loadRoom() {


    const saved =
        JSON.parse(
            localStorage.getItem(
                "rosyRoomItems"
            )
        );


    if (
        !saved
    ) {

        return;

    }


    saved.forEach(

        function(savedItem) {


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "placed-item";


            item.dataset.name =
                savedItem.name;


            item.dataset.itemId =
                savedItem.id;


            item.dataset.rotation =
                savedItem.rotation;


            item.dataset.scale =
                savedItem.scale;


            item.style.left =
                savedItem.left;


            item.style.top =
                savedItem.top;


            item.style.width =
                savedItem.width;


            item.style.height =
                savedItem.height;


            item.style.zIndex =
                savedItem.zIndex;


            item.innerHTML = `

                <img
                src="${savedItem.image}"
                alt="${savedItem.name}">

            `;


            applyTransform(
                item
            );


            enableDragging(
                item
            );


            roomItems.appendChild(
                item
            );

        }

    );

}



/* =========================================
   CLEAR ROOM
========================================= */

document
.getElementById(
    "clearRoom"
)
.addEventListener(

    "click",

    function() {


        const answer =
            confirm(
                "Clear all furniture from your room?"
            );


        if (
            !answer
        ) {

            return;

        }


        roomItems.innerHTML =
            "";


        localStorage.removeItem(
            "rosyRoomItems"
        );


        selectedItem =
            null;


        itemControls.classList.add(
            "hidden"
        );


        setStatus(
            "Room cleared."
        );

    }

);



/* =========================================
   STATUS
========================================= */

function setStatus(
    text
) {


    roomStatus.textContent =
        text;


    setTimeout(

        function() {

            roomStatus.textContent =
                "Ready ♡";

        },

        2000

    );

}



/* =========================================
   LOAD SAVED THEME
========================================= */

function loadTheme() {


    const savedTheme =
        localStorage.getItem(
            "rosyRoomTheme"
        );


    if (
        !savedTheme
    ) {

        return;

    }


    room.className =
        "room theme-" +
        savedTheme;


    document
    .querySelectorAll(
        ".theme-button"
    )
    .forEach(

        function(button) {


            button.classList.toggle(

                "active",

                button.dataset.theme ===
                savedTheme

            );

        }

    );

}



/* =========================================
   START
========================================= */

showFurniture();

loadTheme();

loadRoom();
