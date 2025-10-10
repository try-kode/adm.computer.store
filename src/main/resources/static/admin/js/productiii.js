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

                            <div class="col-12 col-sm-6 col-lg-3 d-flex justify-content-center">
                                <div class="card text-center p-3 h-100" style="max-width: 320px; width: 100%;">
                                    <img src="${item.image}" class="card-img-top mx-auto" alt="Product">
                                    <div class="card-body d-flex flex-column">
                                        <h5 class="card-title fw-bold">${item.productName}</h5>
                                        <p class="card-text text-muted">${item.description}</p>
                                        <h6 class="fw-bold">USD ${item.price}</h6>
                                        <div class="rating mb-3 text-warning">★ ★ ★ ★ ☆</div>
                                        <a href="#" class="btn btn-add mt-auto">ADD TO CART</a>
                                        <a href="#" class="btn btn-buy mt-auto">BUY NOW</a>
                                    </div>
                                </div>
                            </div>
                        `
                    })
                    $("#product-card").html(products)
                }

            }
      })
}


