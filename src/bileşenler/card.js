import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const card = document.createElement("div");
  card.classList.add("card");

  const baslik = document.createElement("div");
  baslik.classList.add("headline");
  baslik.textContent = makale["anabaslik"];
  card.appendChild(baslik);

  const author = document.createElement("div");
  author.classList.add("author");
  card.appendChild(author);

  const imgCont = document.createElement("div");
  imgCont.classList.add("img-container");
  author.appendChild(imgCont);

  const img = document.createElement("img");
  img.src = makale["yazarFoto"];
  imgCont.appendChild(img);

  const span = document.createElement("span");
  span.textContent = `${makale["yazarAdi"]} tarafından`;
  author.appendChild(span);

  return card;
}


const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  axios.get("http://localhost:5001/api/makaleler")
    .then((alinanVeri) => {
      for (let i in alinanVeri.data.makaleler) {
        //console.log(alinanVeri.data.makaleler);
        
        alinanVeri.data.makaleler[i].forEach((item) => {
          let article = Card(item);
          document.querySelector(secici).appendChild(article);
        })
      }
    })
  }

export { Card, cardEkleyici }
