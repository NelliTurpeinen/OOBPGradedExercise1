const phoneData = [
    {
        image: 'Images/f4a50d44fabd88643ae448884294b273a9550d30_iPhone_12_Pro_Max_Pacific_Blue_PDP_Image_Position_2_EN.jpg',
        model: 'Apple iPhone 12 Pro Max',
        price: '$1399.00',
    },
    {
        image: 'Images/01_AppleiPhone12Pro256Gt_silver.png',
        model: 'Apple iPhone 12 Pro',
        price: '$1299.00',
    },
    {
        image: 'Images/res_b281428674339dcc3a176ca87bd562de.jpg',
        model: 'Apple iPhone 12',
        price: '$979.00',
    },
    {
        image: 'Images/772a54f661afe30e10df6559a9830a1e.png',
        model: 'Apple iPhone 12 Mini',
        price: '$879.00',
    },
    {
        image: 'Images/71L8f8lM++L._AC_SX679_.jpg',
        model: 'Samsung Galaxy S20',
        price: '$999.00',
    },
    {
        image: 'Images/uk-galaxy-note20-ultra-5g-sm-n986-sm-n986bzkgeua-frontmysticblack-thumb-272510326.png',
        model: 'Samsung Galaxy S20 Ultra',
        price: '$1299.99',
    },
    {
        image: 'Images/base_samsung-galaxy-fold-black_9_72322edf1ec71a6c34d951e80c7c277a35208e68.jpg',
        model: 'Samsung Galaxy Fold',
        price: '$1980.00',
    },
    {
        image: 'Images/71Y1RR-AOCL._AC_SX466_.jpg',
        model: 'Samsung Galaxy Z Flip',
        price: '$1299.99',
    },
    {
        image: 'Images/Huawei-Nova-8-SE-Specifications.jpg',
        model: 'Huawei Nova 8 SE',
        price: '$469.99',
    },
    {
        image: 'Images/Huawei-Mate-40-RS-Porsche-Design-500x500.jpg',
        model: 'Huawei Mate 40 RS Porsche Design',
        price: '$2599.00',
    },
    {
        image: 'Images/Huawei-Mate-40-Pro-Plus-Price.jpg',
        model: 'Huawei Mate 40 Pro+',
        price: '$1599.99',
    },
    {
        image: 'Images/Huawei-Mate-40-Pro.png',
        model: 'Huawei Mate 40 Pro',
        price: '$1299.00',
    },
];

function createProduct(phone) {
    return `
    <div class="product">
        <div class="productImage">
            <img src="${phone.image}">
        </div>
        <div class="details">
        <div class="productName">${phone.model}</div>
        <div class="productPrice"><b>${phone.price}</b></div>
        <div>
            <button onClick="createDetailView()">Shop</button>
        </div>
        </div>
    </div>`;
}

function createDetailView() {
    const target = document.querySelector('#productList');
    target.innerHTML = `
    <button class="fas fa-arrow-left" onClick="showProductListView">Phones</button>

    <div class="productBasicInfo">
        <img src="image here">
        <div>
            <h1>name here</h1>
            <h1>price here</h1>
            <div>
                <h2>Color</h2>
                <input  type="radio" name="choose" checked> Pacific Blue 
                <input type="radio" name="choose" check>Silver
                <input type="radio" name="choose" check> Gold
                <input type="radio" name="choose" check> Graphite
                 <h2>Memory Size</h2>
                 <input type="radio" name="choose1" check> 128GB
                 <input type="radio" name="choose1" check> 264GB
                 <input type="radio" name="choose1" checked> 512GB
                 <br>
                 <br>
            </div>
            <div>
                 <button class="buttonAdd">Add to Cart</button>
            </div>
        </div>
    </div>
    `;
}


function showProductListView() {
    const target = document.querySelector('#productList');
    const productListElement = document.createElement('div');
    productListElement.innerHTML = phoneData.map(c => createProduct(c)).join("");

    target.appendChild(productListElement);

}