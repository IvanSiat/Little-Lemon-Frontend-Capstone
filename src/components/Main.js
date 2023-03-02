import React from 'react';
import greeksalad from '../assets/greek salad.jpg'
import chef from '../assets/Mario and Adrian A.jpg'
import restaurant from '../assets/restaurant.jpg'
function Main() {
  return (
    <main>
<section class="row2">
    <article>
<h2>Our New Menu</h2>
<img src={greeksalad} width="90%" alt="Greek Salad"/>
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et congue massa, eu fringilla maruis. Fusce fapibus vehicula ext at ultrices
</p>
<button><a href="menu.html">See our new menu</a></button>
</article>

<article class ="homeArticle">
<h2>Book a Table</h2>
<img src={restaurant} width="90%" alt="Restaurant"/>
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et congue massa, eu fringilla maruis. Fusce fapibus vehicula ext at ultrices
</p>
<button><a href="/reservation">Book your table now</a></button>
</article>

<article>
<h2>Opening Hours </h2>
<img src={chef} width="90%" alt="Chef"/>
<p>
    Come visit us during our open hours!
</p>

<p>
    Mon - Fri: 2:00pm - 10:00 pm
</p>
<p>
    Sat: 2:00pm - 11:00pm
</p>
<p>
    Sun: 2:00pm - 9:00pm
</p>
</article>
</section>

    </main>
  );
}

export default Main;
