import React from 'react';
import "./Home.scss";
import Card from '../../Components/Card/Card';
import Customer from '../../Components/Customers/Customers';

export default function Home() {

  const menu = [
    {
        "name": "Zucchini Nodles",
        "img": "Zucchini.png",        
    },
    {
        "name": "Quinoa and Kale Salad",
        "img": "Quinoa.png",
    },
    {
        "name": "Salmon Sandwich",
        "img": "Salmon.png",
    },
    {
        "name": "Buddha Bowl",
        "img": "Buddha.png",
    }
]
  const Customers = [
    {
      "name":"Margie Scott",
      "opinion": "The food was delicious, and I loved that there were so many healthy options to choose from. The staff was friendly and knowledgeable, and the atmosphere was relaxing and inviting.",
      "img": "Margie.png"
    },
    {
      "name":"Elliah Fosch",
      "opinion": "This is my new favorite restaurant! The food was amazing, and I felt great after eating it. I love that they use organic, locally sourced ingredients and that they have options for vegans and gluten-free eaters",
      "img": "Elliah.png"
    },
    {
      "name":"Peter Wesch",
      "opinion": "I'm so glad I found this restaurant! The ingredients were fresh and flavorful, and the menu had plenty of options for my specific dietary needs. The portions were generous, and the prices were reasonable.",
      "img": "Peter.png"
    },
    {
      "name":"Andre Lever",
      "opinion": "The service was excellent, and the food was some of the best I've had. I appreciate that they offer nutritional information for their menu items, so I can make informed choices. I highly recommend this restaurant!",
      "img": "Andre.png"
    },
    {
      "name":"Annie Clark",
      "opinion": "This restaurant is a hidden gem! The food was exceptional, and the prices were very reasonable. I also appreciate that they have vegetarian and vegan options. The atmosphere is cozy and inviting, and the service was excellent.",
      "img": "Annie.png"
    }
  ]


  return (
    <main id='Home'>
      <section id='Home_First'>
        <div id='Home_First_Info'>
          <h4>Enjoy and be Healthy!</h4>
          <p>
            We are dedicated to providing our customers with delicious, nutritious meals that are made from fresh, wholesome ingredients. 
            <br/><br/>
            Our menu features a wide variety of options that cater to all dietary preferences, including vegan, vegetarian, gluten-free, and dairy-free.
          </p>
          <button>Reserve table</button>
        </div>
        <div id='Home_First_Image'>
          <img src="./Resources/Face.png" alt="Fied Fish" />
        </div>
      </section>
      <section id='Home_Second'>
        <div id='Home_Second_Image'>
          <img src="./Resources/Restaurnt.png" alt="Restaurant" />
        </div>
        <div id='Home_Second_Info'>
          <h4>Welcome</h4>
          <h3>Welcome to Little Lemon</h3>
          <p>
          Our healthy restaurant was founded by a group of health enthusiasts who wanted to create a space where people could enjoy delicious, nutritious meals that would nourish their bodies and souls. 
          <br /><br />
          They had a shared passion for healthy living and the belief that food could be both delicious and nutritious.
          </p>
          <button>Explore our Story</button>
        </div>
      </section>
      <section id='Home_Third'>
        <h4>Explore</h4>
        <h3>OurFeatured Menu</h3>
        <div id='Home_Third_Options'>
          <p>Breakfast</p>
          <p>Vegetarian</p>
          <p>Low-carb</p>
          <p>Desserts</p>
          <p>Drinks</p>
        </div>
        <div id='Home_Third_Cards'>
          {menu.map(m => <Card key={m.name} data={m}/>)}
        </div>
        <div id='Home_Third_Btns'>
          <button>Reserve table</button>
          <button>Download Our Menu</button>
        </div>
      </section>
      <section id='Home_Fourth'>
        <h4>Our Story</h4>
        <h3>Food Lover's Story</h3>
        <div id='Home_Fourth_Opinins'>
          {Customers.map(c => <Customer key={c.name} data={c}/>)}
        </div>
      </section>
    </main>
  )
}
