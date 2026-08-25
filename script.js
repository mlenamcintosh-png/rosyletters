/* =========================
   CLOCK
========================= */

function updateClock() {

    const clock = document.getElementById("clock");

    if (!clock) return;

    const now = new Date();

    clock.textContent =
        now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
}

setInterval(updateClock, 1000);
updateClock();


/* =========================
   DATE
========================= */

function updateDate() {

    const dateElement =
        document.getElementById("currentDate");

    if (!dateElement) return;

    const today = new Date();

    dateElement.textContent =
        today.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric"
        });
}

updateDate();


/* =========================
   FLOWERS
========================= */

function createFlower() {

    const flower =
        document.createElement("div");

    flower.className =
        "floating-flower";

    const flowers = [
        "🌸",
        "🌷",
        "🌼",
        "🌺",
        "✿",
        "❀",
        "♡"
    ];

    flower.textContent =
        flowers[
            Math.floor(
                Math.random() * flowers.length
            )
        ];

    flower.style.left =
        Math.random() * 100 + "vw";

    flower.style.fontSize =
        15 + Math.random() * 20 + "px";

    flower.style.animationDuration =
        6 + Math.random() * 6 + "s";

    document.body.appendChild(flower);

    setTimeout(
        () => flower.remove(),
        12000
    );
}

setInterval(createFlower, 1200);


/* =========================
   FLOWER FACTS
========================= */

const flowerFacts = [

"Sunflowers are heliotropic when young, meaning their flower heads can follow the sun across the sky.",

"Some orchids mimic the appearance or scent of insects to help with pollination.",

"Vanilla comes from an orchid species called Vanilla planifolia.",

"The Titan arum produces one of the largest flower structures in the world.",

"Roses are members of the same plant family as apples, strawberries and cherries.",

"Lotus flowers can regulate the temperature of their blossoms.",

"Some flowers only bloom at night and are pollinated by nocturnal animals.",

"Victorians developed an elaborate language of flowers called floriography.",

"Cherry blossoms are strongly associated with spring and renewal in Japanese culture.",

"Some flowers have ultraviolet patterns that humans cannot see but many insects can.",

"Water lilies can have enormous floating leaves that support considerable weight.",

"Certain flowers close their petals at night and reopen them in daylight.",

"Lavender has been used historically for fragrance, gardens and traditional preparations.",

"Some flowers can produce scents that change throughout the day."

];

function newFlowerFact() {

    const fact =
        document.getElementById("flowerFact");

    if (!fact) return;

    const random =
        Math.floor(
            Math.random() * flowerFacts.length
        );

    fact.textContent =
        flowerFacts[random];
}


/* =========================
   RANDOM SURPRISE
========================= */

function surprise() {

    const surprises = [

        "🌸 You found a tiny piece of happiness!",

        "🎀 A secret bow appeared!",

        "🦋 A fairy just flew past!",

        "🌷 You deserve a beautiful day.",

        "✨ Somewhere in the garden, something is sparkling.",

        "🍓 The website has officially decided you are cute.",

        "🌙 Come back later... there might be another secret."

    ];

    alert(
        surprises[
            Math.floor(
                Math.random() *
                surprises.length
            )
        ]
    );
}


/* =========================
   ROOM DESIGNER
========================= */

function addRoomItem(item) {

    const room =
        document.getElementById("room");

    if (!room) return;

    const object =
        document.createElement("div");

    object.className =
        "room-item";

    object.textContent = item;

    object.style.left =
        Math.random() * 75 + 10 + "%";

    object.style.top =
        Math.random() * 65 + 10 + "%";

    room.appendChild(object);

    makeDraggable(object);
}


function makeDraggable(element) {

    let moving = false;

    element.addEventListener(
        "mousedown",
        function() {

            moving = true;

        }
    );

    document.addEventListener(
        "mouseup",
        function() {

            moving = false;

        }
    );

    document.addEventListener(
        "mousemove",
        function(e) {

            if (!moving) return;

            const room =
                document.getElementById("room");

            const rect =
                room.getBoundingClientRect();

            let x =
                e.clientX - rect.left;

            let y =
                e.clientY - rect.top;

            element.style.left =
                x + "px";

            element.style.top =
                y + "px";

        }
    );
}


/* =========================
   GARDEN
========================= */

function gardenMessage(message) {

    const box =
        document.getElementById(
            "gardenMessage"
        );

    if (!box) return;

    box.textContent = message;

    setTimeout(
        () => box.textContent = "",
        3000
    );
}
/* =====================================
   CLOCK
===================================== */

function updateClock() {

    const clock =
        document.getElementById("clock");

    if (!clock) return;

    const now = new Date();

    clock.textContent =
        now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
}

setInterval(updateClock, 1000);

updateClock();


/* =====================================
   DATE
===================================== */

function updateDate() {

    const dateElement =
        document.getElementById("currentDate");

    if (!dateElement) return;

    const today = new Date();

    dateElement.textContent =
        today.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric"
        });
}

updateDate();


/* =====================================
   FLOATING FLOWERS
===================================== */

function createFlower() {

    const flower =
        document.createElement("div");

    flower.className =
        "floating-flower";

    const flowers = [
        "🌸",
        "🌷",
        "🌼",
        "🌺",
        "✿",
        "❀",
        "♡"
    ];

    flower.textContent =
        flowers[
            Math.floor(
                Math.random() *
                flowers.length
            )
        ];

    flower.style.left =
        Math.random() * 100 + "vw";

    flower.style.fontSize =
        15 + Math.random() * 20 + "px";

    flower.style.animationDuration =
        6 + Math.random() * 6 + "s";

    document.body.appendChild(flower);

    setTimeout(
        () => flower.remove(),
        12000
    );
}

setInterval(createFlower, 1500);


/* =====================================
   FLOWER FACTS
===================================== */

const flowerFacts = [

"Sunflowers are heliotropic when young, meaning their flower heads can follow the sun across the sky.",

"Some orchids mimic the appearance or scent of insects to help with pollination.",

"Vanilla comes from an orchid species called Vanilla planifolia.",

"The Titan arum produces one of the largest flower structures in the world.",

"Roses are members of the same plant family as apples, strawberries and cherries.",

"Lotus flowers can regulate the temperature of their blossoms.",

"Some flowers only bloom at night and are pollinated by nocturnal animals.",

"Victorians developed an elaborate language of flowers called floriography.",

"Cherry blossoms are strongly associated with spring and renewal in Japanese culture.",

"Some flowers have ultraviolet patterns that humans cannot see but many insects can.",

"Water lilies can have enormous floating leaves.",

"Certain flowers close their petals at night and reopen them in daylight.",

"Lavender has been used historically for fragrance and gardens.",

"Some flowers can produce scents that change throughout the day."

];


function newFlowerFact() {

    const fact =
        document.getElementById("flowerFact");

    if (!fact) return;

    const random =
        Math.floor(
            Math.random() *
            flowerFacts.length
        );

    fact.textContent =
        flowerFacts[random];
}


/* =====================================
   SURPRISE
===================================== */

function surprise() {

    const surprises = [

        "🌸 You found a tiny piece of happiness!",

        "🎀 A secret bow appeared!",

        "🦋 A fairy just flew past!",

        "🌷 You deserve a beautiful day.",

        "✨ Something is sparkling nearby.",

        "🍓 The website has decided you're cute.",

        "🌙 There may be another secret somewhere..."

    ];

    alert(
        surprises[
            Math.floor(
                Math.random() *
                surprises.length
            )
        ]
    );
}


/* =====================================
   ROOM DESIGNER
===================================== */

let selectedItem = null;

let roomItems = [];

let itemCounter = 0;


/* ADD FURNITURE */

function addFurniture(
    emoji,
    name
) {

    const room =
        document.getElementById("room");

    if (!room) return;

    itemCounter++;

    const item =
        document.createElement("div");

    item.className =
        "draggable-item";

    item.textContent =
        emoji;

    item.dataset.name =
        name;

    item.dataset.rotation =
        "0";

    item.dataset.scale =
        "1";

    item.dataset.id =
        itemCounter;

    item.style.left =
        (15 + Math.random() * 65) + "%";

    item.style.top =
        (20 + Math.random() * 55) + "%";

    room.appendChild(item);

    makeDraggable(item);

    selectItem(item);

    roomItems.push(item);
}


/* SELECT ITEM */

function selectItem(item) {

    if (selectedItem) {

        selectedItem.classList.remove(
            "selected"
        );

    }

    selectedItem = item;

    item.classList.add(
        "selected"
    );

    const controls =
        document.getElementById(
            "selected-controls"
        );

    if (controls) {

        controls.classList.remove(
            "hidden"
        );

    }
}


/* CLICK ITEM */

function makeDraggable(item) {

    let dragging = false;

    let offsetX = 0;

    let offsetY = 0;


    item.addEventListener(
        "mousedown",
        function(e) {

            selectItem(item);

            dragging = true;

            const rect =
                item.getBoundingClientRect();

            offsetX =
                e.clientX - rect.left;

            offsetY =
                e.clientY - rect.top;

        }
    );


    document.addEventListener(
        "mousemove",
        function(e) {

            if (!dragging) return;

            const room =
                document.getElementById(
                    "room"
                );

            if (!room) return;

            const roomRect =
                room.getBoundingClientRect();

            let x =
                e.clientX -
                roomRect.left -
                offsetX;

            let y =
                e.clientY -
                roomRect.top -
                offsetY;


            x =
                Math.max(
                    0,
                    Math.min(
                        x,
                        roomRect.width - 90
                    )
                );


            y =
                Math.max(
                    0,
                    Math.min(
                        y,
                        roomRect.height - 90
                    )
                );


            item.style.left =
                x + "px";

            item.style.top =
                y + "px";

        }
    );


    document.addEventListener(
        "mouseup",
        function() {

            dragging = false;

        }
    );

}


/* ROTATE */

function rotateSelected(
    amount
) {

    if (!selectedItem) return;

    let rotation =
        parseFloat(
            selectedItem.dataset.rotation
        ) || 0;

    rotation += amount;

    selectedItem.dataset.rotation =
        rotation;

    updateTransform();

}


/* RESIZE */

function resizeSelected(
    amount
) {

    if (!selectedItem) return;

    let scale =
        parseFloat(
            selectedItem.dataset.scale
        ) || 1;

    scale *= amount;

    scale =
        Math.max(
            .5,
            Math.min(
                2.5,
                scale
            )
        );

    selectedItem.dataset.scale =
        scale;

    updateTransform();

}


/* TRANSFORM */

function updateTransform() {

    if (!selectedItem) return;

    const rotation =
        selectedItem.dataset.rotation;

    const scale =
        selectedItem.dataset.scale;

    selectedItem.style.transform =
        `rotate(${rotation}deg) scale(${scale})`;

}


/* DELETE */

function deleteSelected() {

    if (!selectedItem) return;

    selectedItem.remove();

    roomItems =
        roomItems.filter(
            item =>
                item !== selectedItem
        );

    selectedItem = null;

    const controls =
        document.getElementById(
            "selected-controls"
        );

    if (controls) {

        controls.classList.add(
            "hidden"
        );

    }

}


/* CLEAR ROOM */

function clearRoom() {

    const room =
        document.getElementById(
            "room"
        );

    if (!room) return;

    const items =
        room.querySelectorAll(
            ".draggable-item"
        );

    items.forEach(
        item =>
            item.remove()
    );

    roomItems = [];

    selectedItem = null;

}


/* SAVE ROOM */

function saveRoom() {

    const room =
        document.getElementById(
            "room"
        );

    if (!room) return;

    const items =
        room.querySelectorAll(
            ".draggable-item"
        );

    const saved = [];

    items.forEach(
        item => {

            saved.push({

                emoji:
                    item.textContent,

                name:
                    item.dataset.name,

                left:
                    item.style.left,

                top:
                    item.style.top,

                rotation:
                    item.dataset.rotation,

                scale:
                    item.dataset.scale

            });

        }
    );


    localStorage.setItem(
        "ellieRoom",
        JSON.stringify(saved)
    );


    alert(
        "🎀 Your room has been saved!"
    );

}


/* LOAD ROOM */

function loadRoom() {

    const room =
        document.getElementById(
            "room"
        );

    if (!room) return;

    clearRoom();

    const saved =
        localStorage.getItem(
            "ellieRoom"
        );

    if (!saved) {

        alert(
            "You don't have a saved room yet! 🌸"
        );

        return;

    }


    const items =
        JSON.parse(saved);


    items.forEach(
        data => {

            itemCounter++;

            const item =
                document.createElement(
                    "div"
                );

            item.className =
                "draggable-item";

            item.textContent =
                data.emoji;

            item.dataset.name =
                data.name;

            item.dataset.rotation =
                data.rotation;

            item.dataset.scale =
                data.scale;

            item.dataset.id =
                itemCounter;

            item.style.left =
                data.left;

            item.style.top =
                data.top;

            room.appendChild(item);

            makeDraggable(item);

            roomItems.push(item);

        }
    );


    alert(
        "🌷 Your room has been loaded!"
    );

}


/* =====================================
   ROOM THEMES
===================================== */

function changeTheme(theme) {

    const room =
        document.getElementById(
            "room"
        );

    if (!room) return;


    room.classList.remove(

        "room-pink",

        "room-kawaii",

        "room-cottage",

        "room-fairy",

        "room-y2k",

        "room-gothic",

        "room-cozy",

        "room-academia",

        "room-minimal",

        "room-garden"

    );


    room.classList.add(
        "room-" + theme
    );


    localStorage.setItem(
        "ellieRoomTheme",
        theme
    );

}


/* LOAD THEME */

function loadTheme() {

    const room =
        document.getElementById(
            "room"
        );

    if (!room) return;

    const saved =
        localStorage.getItem(
            "ellieRoomTheme"
        );

    if (saved) {

        changeTheme(saved);

    }

}

loadTheme();


/* =====================================
   CHARACTER
===================================== */

function changeCharacter(
    character
) {

    const preview =
        document.getElementById(
            "character"
        );

    if (!preview) return;

    preview.textContent =
        character;

    localStorage.setItem(
        "ellieCharacter",
        character
    );

}


function loadCharacter() {

    const saved =
        localStorage.getItem(
            "ellieCharacter"
        );

    const preview =
        document.getElementById(
            "character"
        );

    if (
        saved &&
        preview
    ) {

        preview.textContent =
            saved;

    }

}

loadCharacter();


/* =====================================
   GARDEN MESSAGE
===================================== */

function gardenMessage(
    message
) {

    const box =
        document.getElementById(
            "gardenMessage"
        );

    if (!box) return;

    box.textContent =
        message;

    setTimeout(
        () => {

            box.textContent = "";

        },
        3000
    );

}
/* =========================================
   ROOM DESIGNER V3
========================================= */

let selectedItem = null;
let roomCounter = 0;


/* ---------- ADD FURNITURE ---------- */

function addFurniture(emoji, name) {

    const room = document.getElementById("room");

    if (!room) return;

    roomCounter++;

    const item = document.createElement("div");

    item.className = "draggable-item";

    item.textContent = emoji;

    item.dataset.name = name;
    item.dataset.rotation = "0";
    item.dataset.scale = "1";

    item.style.left = "40%";
    item.style.top = "40%";

    room.appendChild(item);

    makeDraggable(item);

    selectItem(item);
}


/* ---------- SELECT ITEM ---------- */

function selectItem(item) {

    if (selectedItem) {
        selectedItem.classList.remove("selected");
    }

    selectedItem = item;

    item.classList.add("selected");

    const controls =
        document.getElementById("selected-controls");

    if (controls) {
        controls.classList.remove("hidden");
    }
}


/* ---------- DRAG ---------- */

function makeDraggable(item) {

    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;

    item.addEventListener("mousedown", function(e) {

        e.preventDefault();

        selectItem(item);

        dragging = true;

        const rect =
            item.getBoundingClientRect();

        offsetX =
            e.clientX - rect.left;

        offsetY =
            e.clientY - rect.top;

    });


    document.addEventListener("mousemove", function(e) {

        if (!dragging) return;

        const room =
            document.getElementById("room");

        if (!room) return;

        const roomRect =
            room.getBoundingClientRect();

        let x =
            e.clientX -
            roomRect.left -
            offsetX;

        let y =
            e.clientY -
            roomRect.top -
            offsetY;


        x = Math.max(
            0,
            Math.min(
                x,
                roomRect.width - 90
            )
        );


        y = Math.max(
            0,
            Math.min(
                y,
                roomRect.height - 90
            )
        );


        item.style.left = x + "px";
        item.style.top = y + "px";

    });


    document.addEventListener("mouseup", function() {

        dragging = false;

    });

}


/* ---------- ROTATE ---------- */

function rotateSelected(amount) {

    if (!selectedItem) return;

    let rotation =
        Number(
            selectedItem.dataset.rotation
        ) || 0;

    rotation += amount;

    selectedItem.dataset.rotation =
        rotation;

    updateTransform();
}


/* ---------- RESIZE ---------- */

function resizeSelected(amount) {

    if (!selectedItem) return;

    let scale =
        Number(
            selectedItem.dataset.scale
        ) || 1;

    scale *= amount;

    scale = Math.max(
        0.5,
        Math.min(
            2.5,
            scale
        )
    );

    selectedItem.dataset.scale =
        scale;

    updateTransform();
}


/* ---------- TRANSFORM ---------- */

function updateTransform() {

    if (!selectedItem) return;

    const rotation =
        selectedItem.dataset.rotation;

    const scale =
        selectedItem.dataset.scale;

    selectedItem.style.transform =
        "rotate(" +
        rotation +
        "deg) scale(" +
        scale +
        ")";

}


/* ---------- DELETE ---------- */

function deleteSelected() {

    if (!selectedItem) return;

    selectedItem.remove();

    selectedItem = null;

    const controls =
        document.getElementById(
            "selected-controls"
        );

    if (controls) {

        controls.classList.add(
            "hidden"
        );

    }

}


/* ---------- CLEAR ROOM ---------- */

function clearRoom() {

    const room =
        document.getElementById("room");

    if (!room) return;

    const furniture =
        room.querySelectorAll(
            ".draggable-item"
        );

    furniture.forEach(
        item => item.remove()
    );

    selectedItem = null;

}


/* ---------- ROOM THEMES ---------- */

function changeTheme(theme) {

    const room =
        document.getElementById("room");

    if (!room) return;


    room.classList.remove(

        "room-pink",
        "room-kawaii",
        "room-cottage",
        "room-fairy",
        "room-y2k",
        "room-gothic",
        "room-cozy",
        "room-academia",
        "room-minimal",
        "room-garden"

    );


    room.classList.add(
        "room-" + theme
    );

}


/* ---------- SAVE ROOM ---------- */

function saveRoom() {

    const room =
        document.getElementById("room");

    if (!room) return;


    const furniture =
        room.querySelectorAll(
            ".draggable-item"
        );


    const data = [];


    furniture.forEach(item => {

        data.push({

            emoji:
                item.textContent,

            name:
                item.dataset.name,

            left:
                item.style.left,

            top:
                item.style.top,

            rotation:
                item.dataset.rotation,

            scale:
                item.dataset.scale

        });

    });


    localStorage.setItem(
        "ellieRoom",
        JSON.stringify(data)
    );


    alert(
        "♡ Your room has been saved!"
    );

}


/* ---------- LOAD ROOM ---------- */

function loadRoom() {

    const room =
        document.getElementById("room");

    if (!room) return;


    clearRoom();


    const saved =
        localStorage.getItem(
            "ellieRoom"
        );


    if (!saved) {

        alert(
            "You haven't saved a room yet! ♡"
        );

        return;

    }


    const data =
        JSON.parse(saved);


    data.forEach(itemData => {

        const item =
            document.createElement("div");


        item.className =
            "draggable-item";


        item.textContent =
            itemData.emoji;


        item.dataset.name =
            itemData.name;


        item.dataset.rotation =
            itemData.rotation;


        item.dataset.scale =
            itemData.scale;


        item.style.left =
            itemData.left;


        item.style.top =
            itemData.top;


        room.appendChild(item);


        makeDraggable(item);


        item.style.transform =
            "rotate(" +
            itemData.rotation +
            "deg) scale(" +
            itemData.scale +
            ")";

    });

}


/* ---------- CHARACTER ---------- */

function changeCharacter(character) {

    const preview =
        document.getElementById(
            "character"
        );

    if (!preview) return;

    preview.textContent =
        character;

}
const flowerFacts = [
    "🌹 Roses belong to the genus Rosa, which contains hundreds of species.",
    "🌻 Young sunflowers can move during the day to follow the direction of sunlight.",
    "🌷 Tulips originally came from Central Asia and became especially popular in the Netherlands.",
    "🌸 Cherry blossoms are called sakura in Japan.",
    "🌼 Daisies belong to the same plant family as sunflowers.",
    "💜 Lavender is well known for its fragrant flowers and purple color.",
    "🌺 Hibiscus flowers can grow in tropical and subtropical regions around the world.",
    "🪻 Lilacs are known for their strong, sweet fragrance.",
    "🌸 Magnolia flowers existed long before bees became common pollinators.",
    "🌺 Orchids are one of the largest families of flowering plants.",
    "🌷 Some tulip flowers open in sunlight and close again when the light decreases.",
    "🌻 Sunflowers can produce hundreds or even thousands of individual seeds in one flower head.",
    "🌹 Some rose varieties have been cultivated for thousands of years.",
    "🌼 The yellow center of a daisy is actually made up of many tiny individual flowers.",
    "🌺 Hibiscus flowers are often large and brightly colored.",
    "🌸 Cherry trees can produce spectacular displays of blossoms before their leaves fully develop.",
    "🪻 Lavender is native to areas around the Mediterranean.",
    "🌿 Jasmine flowers are famous for their strong fragrance.",
    "🌺 Bird-of-paradise flowers have an unusual shape that resembles a colorful bird.",
    "🌷 Crocuses are among the flowers that can bloom very early in the year.",
    "🌼 Marigolds are commonly grown as garden flowers and are known for their warm colors.",
    "🌹 Some roses produce colorful fruits called rose hips after flowering.",
    "🌻 Sunflowers are members of the daisy family.",
    "🌸 Apple trees produce flowers before their fruit develops.",
    "🌺 Bougainvillea gets much of its bright color from modified leaves called bracts.",
    "🪻 Lavender flowers attract many pollinating insects.",
    "🌷 Daffodils contain naturally occurring compounds that make them unpleasant for many animals to eat.",
    "🌼 Dandelions produce many tiny flowers grouped together into what looks like one flower head.",
    "🌹 Roses can have flowers with many different numbers of petals depending on the variety.",
    "🌺 Plumeria flowers are strongly associated with tropical climates and are often very fragrant.",
    "🌸 Peach trees produce pinkish flowers before their peaches grow.",
    "🌻 A sunflower head can contain hundreds of tiny florets.",
    "🌿 Mint plants can produce small flowers despite being better known for their leaves.",
    "🌺 Gardenias are famous for their white flowers and strong fragrance.",
    "🌷 Hyacinths are known for producing clusters of many small, fragrant flowers.",
    "🌼 Chrysanthemums come in a wide variety of colors and flower shapes.",
    "🌹 Climbing roses can grow along trellises, fences, and other supports.",
    "🌺 Passion flowers have unusually complex-looking structures.",
    "🌸 Lotus flowers can rise above the surface of ponds on long stems.",
    "🌻 Sunflowers belong to the genus Helianthus.",
    "🪻 Lavender flowers grow on tall spikes above the plant's narrow leaves.",
    "🌷 Some tulips have been bred to produce unusual striped or feathered-looking petals.",
    "🌼 Calendula flowers are usually yellow or orange.",
    "🌹 Wild roses generally have simpler flowers than many cultivated garden roses.",
    "🌺 Hibiscus flowers often have a prominent central structure extending from the flower.",
    "🌸 Cherry blossoms do not all have the same color; some varieties have white blossoms.",
    "🌿 Rosemary produces small flowers that can attract pollinators.",
    "🌺 Snapdragons get their common name because their flowers can resemble a dragon's mouth.",
    "🌷 Irises are named after Iris, the Greek goddess associated with rainbows.",
    "🌼 Cosmos flowers can have delicate, daisy-like petals.",
    "🌹 Roses can be found growing naturally in many parts of the Northern Hemisphere.",
    "🌻 Sunflowers are commonly grown for their edible seeds and oil.",
    "🌺 Plumeria flowers can be white, yellow, pink, red, or combinations of these colors.",
    "🌸 Magnolia flowers can be very large compared with many other garden flowers.",
    "🪻 Lavender leaves are also aromatic, not just its flowers.",
    "🌷 Daffodils belong to the genus Narcissus.",
    "🌼 Zinnias can produce flowers in many bright colors.",
    "🌹 Rose petals can vary greatly in shape and arrangement between varieties.",
    "🌺 Hibiscus plants can grow as shrubs or small trees depending on the species.",
    "🌸 Apple blossoms are often white or pink.",
    "🌻 Sunflowers can grow several feet tall depending on the variety and growing conditions.",
    "🌿 Basil plants can produce small flowers if allowed to mature.",
    "🌺 Gardenia flowers are often waxy in appearance.",
    "🌷 Hyacinth flowers grow in dense clusters along a central stalk.",
    "🌼 Marigolds are members of the daisy family.",
    "🌹 Rose flowers can have different scents depending on their variety.",
    "🌺 Passion flowers can provide nectar for pollinators.",
    "🌸 Lotus plants have leaves that can float on or rise above the water.",
    "🌻 Sunflower seeds develop from the tiny florets arranged across the flower head.",
    "🪻 Lavender belongs to the mint family.",
    "🌷 Tulip bulbs store nutrients that help the plant grow again.",
    "🌼 Dandelions can produce seeds that are carried by wind.",
    "🌹 Rose hips can be used by some animals as a food source.",
    "🌺 Hibiscus is part of the mallow family.",
    "🌸 Cherry blossoms are an important seasonal symbol in Japan.",
    "🌿 Thyme can produce tiny flowers that are attractive to pollinating insects.",
    "🌺 Bird-of-paradise plants are native to southern Africa.",
    "🌷 Tulips are perennial plants, although some varieties perform better when replanted regularly.",
    "🌼 Chrysanthemums belong to the daisy family.",
    "🌹 Roses have both wild and cultivated forms.",
    "🌺 Bougainvillea flowers are actually small and surrounded by colorful bracts.",
    "🌸 Lotus flowers can produce seed pods with distinctive round openings.",
    "🌻 Sunflowers can attract bees and other pollinating insects.",
    "🪻 Lavender is commonly grown in gardens for both its appearance and fragrance.",
    "🌷 Daffodil flowers usually have a central trumpet- or cup-shaped structure.",
    "🌼 Cosmos plants can grow quickly in suitable conditions.",
    "🌹 Some rose flowers have very strong fragrances, while others have little scent.",
    "🌺 Plumeria flowers are commonly used in tropical leis.",
    "🌸 Magnolia petals can be thick and waxy compared with delicate petals of many other flowers.",
    "🌻 Sunflowers are generally associated with warm, sunny growing conditions.",
    "🌿 Sage plants can produce attractive flowers in addition to their useful leaves.",
    "🌺 Gardenias generally prefer warm growing conditions.",
    "🌷 Iris flowers have three prominent upright or spreading petals called standards and three lower petals called falls.",
    "🌼 Marigolds can bloom for long periods when given suitable growing conditions.",
    "🌹 Roses can grow as shrubs, climbers, or compact plants depending on the variety.",
    "🌺 Hibiscus flowers are commonly visited by pollinators.",
    "🌸 Peach blossoms appear before the fruit develops.",
    "🌻 The large circular appearance of a sunflower is created by many individual florets.",
    "🪻 Lavender's scent comes from aromatic compounds found in its tissues.",
    "🌷 Tulip flowers come in many colors, including red, yellow, pink, purple, and white.",
    "🌼 Daisies often have white ray florets surrounding yellow disc florets.",
    "🌹 Rose plants have prickles rather than true botanical thorns.",
    "🌺 Passion flowers belong to the genus Passiflora.",
    "🌸 Lotus flowers have been important symbols in several cultures.",
    "🌻 Sunflowers are native to North America.",
    "🪻 Lavender flowers are often harvested before or during peak flowering for their fragrance."
];

function newFlowerFact() {
    const randomIndex = Math.floor(Math.random() * flowerFacts.length);
    document.getElementById("flowerFact").textContent = flowerFacts[randomIndex];
}
function newFlowerFact() {
    document.getElementById("flowerFact").textContent =
        "🌸 IT WORKS!";
}
