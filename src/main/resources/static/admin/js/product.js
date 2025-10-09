$(document).ready(function(){
    fetchData()
})

function fetchData() {
      $.ajax({
            url: "https://api.viheakode.online/api/v1/product/",
            method: "GET",
            success: function(resp){
                if(resp.status == "OK"){
                    let products = ``;
                    const items = resp.data
                    items.forEach(item => {
                        products +=`
                            <div class="product-card">

                                <img src="${item.image}" alt="Product image" />
                                <h3>${item.productName}</h3>
                                <p>${item.description}</p>
                                <div class="price">USD ${item.price}</div>
                                <div class="stars">★★★★☆</div>
                                <button class="buy-btn" style="background-color: #00bcd4;">Buy Now</button>
                            </div>
                        `
                    })
                    $(".product-grid").html(products)
                }

            }
      })
}


