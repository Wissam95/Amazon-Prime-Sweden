$(function () {
    var ourProducts = [
    { name: 'Philips 55 OLED 4K UHD', price: 1499, id: 1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://tubby.scene7.com/is/image/tubby/55POS9002_1?$prod_all4one$', category: 'ُُSMART-TV' },
    { name: 'SONY-KDL-32WD753 LED-TV', price: 499, id: 2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://files.hifiklubben.com/4a4454/globalassets/product-images/sony/sonykdl32wd753_1.jpg?width=600&quality=70', category: 'ُُSMART-TV' },
    { name: 'Galaxy Note9', price: 1199 , id: 3, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://www.jbhifi.com.au/FileLibrary/ProductResources/Images/254724-L-LO.jpg', category: 'Mobiltelefon' },
    { name: 'iPhone X 64GB Silver', price: 1000 , id: 4, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://assets.swappie.com/iPhone-X-64GB-Silver-1-600x541.png', category: 'Mobiltelefon' },
    { name: 'Nikon D5600 black', price: 1000, id: 5, description: 'Lorem ipsum dolor sit amet consectetur sit amet consectetur adipisicing adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://www.scandinavianphoto.se/img/img_large/v-636144605860000000/1030386.jpg?width=1024', category: 'photographing' },
    { name: 'Canon EOS M5', price: 849, id: 6, description: 'Lorem ipsum dolor sit amet sit amet consectetur adipisicing consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://www.scandinavianphoto.se/img/img_large/v-636204966660000000/1028956.jpg?width=1024', category: 'photographing' },
    { name: 'Xbox One X 1TB + PUBG + Halo 5 + Rare', price: 699, id: 7, description: 'Lorem ipsum dolor sit amet elit. Unde fugit, vel quibusdam vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://cdn.cdon.com/media-dynamic/images/product/game/hardware/image4/xbox_one_x_1tb_pubg_halo_5_rare-45523007-.jpg', category: 'ُEntertainment' },
    { name: 'Playstation 4 Pro 1TB - God Of War Edition', price: 599, id: 8, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://dustinweb.azureedge.net/image/354867/400/320/sony-playstation-4-pro-1tb---god-of-war-edition-1000gb-gra-guld-vit.jpg', category: 'Entertainment' },
    { name: 'ASUS ROG Strix GL702VI- 17.3" Gaming Laptop', price: 3000, id: 9, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picscdn.redblue.de/doi/pixelboxx-mss-76672501/fee_786_587_png/ASUS-ROG-Strix-GL702VI-BA019T---17.3%22-Gaming-Laptop', category: 'Entertainment' },
    { name: 'Lenovo Y520-15IKBM', price: 1100, id: 10, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator/barbara-datorer/14-15-tum/lenovo-y520-15ikbm-80yy007qmx(1002867)_2_Normal_Extra.jpg', category: 'Entertainment' }
    ];
    
    var cart = [];

    var appendList = function (array, location) {
    var template = array.map(function (item, id) {
    return `<li class="product col-3">
    <img src="${item.picture}" alt="">
    <div class="product-content">
    <h4>${item.name} -
    <span class="category">${item.category}</span> <small>${item.price}$</small>
    </h4>
    <p>${item.description}</p>
    </div>
    <button type="button" id="${item.id}">Buy Now</button>
    </li>`;
    });
    $(location).html(template);
    };
    
    var addToCart = function (array, id, location) {
    var a = array.find(function (i) {
    return i.id === id;
    
    });
    
    cart.push(a);
    console.log(cart);
    var item = `
    <li class="item" id="${a.id}">
    <h4>${a.name}</h4>
    <button type="button">X</button>
    </li>
    `;
    $('span.amount').text(cart.length);
    $(location).append(item);
    };
    
    var removeFromCart = function (array, removedItem) {
    array.splice(removedItem, 1);
    
    };
    var populateCart = function (array, location) {
        var item = `
        <li class="item" id="${array.id}">
        <h4>${array.name}</h4>
        <button type="button">X</button>
        </li>
        `;
        $('span.amount').text(array.length);
        };
        
        appendList(ourProducts, $('.product-list'));

        $('.product').on('click', 'button', function (event) {
        var id = $(this).attr('id');
        addToCart(ourProducts, +id, $('.cart-list'));
        });
        
        $('.cart-list').on('click', 'button', function (e) {
        var item = $(e.currentTarget).closest('li').remove();
        removeFromCart(cart, item);
        populateCart(cart, $('.cart-list'));
        });
    });                