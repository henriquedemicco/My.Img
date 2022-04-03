let images = [
    { title: 'O show', link: 'https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764_960_720.jpg'},
    { title: 'O espaço como não conhecemos', link: 'https://cdn.pixabay.com/photo/2016/10/30/20/22/astronaut-1784245_960_720.jpg'},
    { title: 'Gelo vs Fogo', link: 'https://cdn.pixabay.com/photo/2017/05/29/19/13/fire-and-water-2354583_960_720.jpg'},
    { title: 'Fogueira', link: 'https://cdn.pixabay.com/photo/2013/06/09/17/04/fire-123784_960_720.jpg'},
    { title: 'A importância da amizade', link: 'https://cdn.pixabay.com/photo/2016/11/08/05/20/sunset-1807524_960_720.jpg'},
    { title: 'A árvore da vida', link: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'},
    { title: 'Neblina', link: 'https://cdn.pixabay.com/photo/2022/01/25/12/53/tree-6966126_960_720.jpg'},
    { title: 'Estrada verde', link: 'https://cdn.pixabay.com/photo/2018/06/09/17/25/trees-3464777_960_720.jpg'},
    { title: 'Estacionamento solitário', link: 'https://cdn.pixabay.com/photo/2016/06/29/22/02/parking-space-1487891_960_720.jpg'}
]

const grid = document.getElementById('images-grid');

for (let i=0; i < images.length; i++) {
    imgSrc = images[i].link.toString()
    imgTitle = images[i].title
    grid.innerHTML += `<div id="item" style="width: 300px; position: relative; padding: 8px; background-color: #fff; border-radius: 6px; box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;">
                            <div class="pic-info">
                                <h5>${imgTitle}</h5>
                                <i class="fa-solid fa-trash" title="Excluir imagem" style="margin-left: 4px;"></i>
                            </div>
                            <img style="border-radius: 6px; width: 300px; height: 300px; object-fit: cover;" src="${imgSrc}"/>
                        </div>`;
}

/* Search function ------------------------------------------------------------------*/
$(document).ready(function(){
    $("#search-field").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#images-grid #item").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

/* Go to top button function ---------------------------------------------------------*/
mybutton = document.getElementById("toTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
