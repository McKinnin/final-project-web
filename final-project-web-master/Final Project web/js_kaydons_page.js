$(function(){
    function card(creator,picture,description,date){
        "use strict";
        this.creator = creator;
        this.picture = picture;
        this.description = description;
        this.date = date;
      }
      (function (){
        "use strict";
        var books = [
          new card("Kaydon Stubbs", "./Img/small/k1pic.jpg", "Aenean nulla massa, feugiat nec blandit porta, viverra nec metus. Maecenas in magna ullamcorper dolor.Aenean nulla massa, feugiat nec blandit.", "10 October 2018"),
          new card("Kaydon Stubbs", "./Img/small/k2pic.jpg", "Aenean nulla massa, feugiat nec blandit porta, viverra nec metus. Maecenas in magna ullamcorper dolor.Aenean nulla massa, feugiat nec blandit.", "10 October 2018"),
          new card("Kaydon Stubbs", "./Img/small/k3pic.jpg", "Aenean nulla massa, feugiat nec blandit porta, viverra nec metus. Maecenas in magna ullamcorper dolor.Aenean nulla massa, feugiat nec blandit.", "10 October 2018"),
          new card("Kaydon Stubbs", "./Img/small/k4pic.jpg", "Aenean nulla massa, feugiat nec blandit porta, viverra nec metus. Maecenas in magna ullamcorper dolor.Aenean nulla massa, feugiat nec blandit.", "10 October 2018"),
          new card("Kaydon Stubbs", "./Img/small/k5pic.jpg", "Aenean nulla massa, feugiat nec blandit porta, viverra nec metus. Maecenas in magna ullamcorper dolor.Aenean nulla massa, feugiat nec blandit.", "10 October 2018"),
          new card("Kaydon Stubbs", "./Img/small/k6pic.jpg", "Aenean nulla massa, feugiat nec blandit porta, viverra nec metus. Maecenas in magna ullamcorper dolor.Aenean nulla massa, feugiat nec blandit.", "10 October 2018"),
          new card("Kaydon Stubbs", "./Img/small/k7pic.jpg", "Aenean nulla massa, feugiat nec blandit porta, viverra nec metus. Maecenas in magna ullamcorper dolor.Aenean nulla massa, feugiat nec blandit.", "10 October 2018"),
          new card("Kaydon Stubbs", "./Img/small/k8pic.jpg", "Aenean nulla massa, feugiat nec blandit porta, viverra nec metus. Maecenas in magna ullamcorper dolor.Aenean nulla massa, feugiat nec blandit.", "10 October 2018"),
          new card("Kaydon Stubbs", "./Img/small/k9pic.jpg", "Aenean nulla massa, feugiat nec blandit porta, viverra nec metus. Maecenas in magna ullamcorper dolor.Aenean nulla massa, feugiat nec blandit.", "10 October 2018"),
          new card("Kaydon Stubbs", "./Img/small/k10pic.jpg", "Aenean nulla massa, feugiat nec blandit porta, viverra nec metus. Maecenas in magna ullamcorper dolor.Aenean nulla massa, feugiat nec blandit.", "10 October 2018"),
          new card("Kaydon Stubbs", "./Img/small/k11pic.jpg", "Aenean nulla massa, feugiat nec blandit porta, viverra nec metus. Maecenas in magna ullamcorper dolor.Aenean nulla massa, feugiat nec blandit.", "10 October 2018"),
          new card("Kaydon Stubbs", "./Img/small/k12pic.jpg", "Aenean nulla massa, feugiat nec blandit porta, viverra nec metus. Maecenas in magna ullamcorper dolor.Aenean nulla massa, feugiat nec blandit.", "10 October 2018"),
          new card("Kaydon Stubbs", "./Img/small/k13pic.jpg", "Aenean nulla massa, feugiat nec blandit porta, viverra nec metus. Maecenas in magna ullamcorper dolor.Aenean nulla massa, feugiat nec blandit.", "10 October 2018"),
        ];
        for(var b of books){
            var newHtml =`
            <div class="Portfolio_cardsub">
                    <h2>Creator: ${b.creator}</h2>
                    <img class="main_portfolio_picture" src="${b.picture}" alt="sub-pic"/>
                    <h3>${b.description}</h3>
                    <h3>${b.date}</h3>
            </div>              
            `;
            $("#Portfolio_products").append(newHtml);
        }
      })(); 
      $(".Portfolio_cardsub img").click(function(e){
        if(e.target.nodeName.toLowerCase() == "img"){
            document.querySelector("#Portfolio_card>img").src = e.target.src.replace("small", "medium");
        }
            var alt = $(this).attr('alt');
            var title = $(this).attr('title');
            var newString = "<em>" + alt + "</em><br>" + title;
            $("figcaption").html(newString);
    })
});


