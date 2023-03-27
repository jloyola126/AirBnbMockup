import React from 'react'
import Banner from "./Banner"
import Cards from './Cards'
import "./home.css"
function Home() {
  return (
    <div className='home_container'>
        <Banner/>
        <div className='home_section'>
          <Cards src="https://images.unsplash.com/photo-1535916707207-35f97e715e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80"
          title="Turkey"
          description="Every year, thousands of tourists visit Alanya, one of the most popular seaside resorts in Turkey"
          price="$500"
          />
          <Cards src="https://images.unsplash.com/photo-1599147092675-8f6dbafe46b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80"
          title="Nicaragua"
          description="Nicaragua is home to historical colonial cities, boasts authentic culture, and has some of the best cuisines while relaxing under the sun."          
          price="$230"
          />
          <Cards src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          title="Indonesia"
          description="Indonesia is a sprawling archipelago of over 16,000 islands and uncountable adventures. You can find yourself climbing a majestic volcano today, relaxing on a white sand beach tomorrow, and planning a dive the day after." 
          price="$433"
          />
           <Cards src="https://images.unsplash.com/photo-1577931683033-1059552104e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2373&q=80"
          title="Malaysia"
          description="Explore thriving modern citiese and colonial architecture. Relax on some of the most beautiful beaches on the planet and hike through lush green jungles."
          price="$600"
          />
            <Cards src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2694&q=80"
          title="Japan"
          description="Japan has 21 World Heritage Sites, including Himeji Castle, Historic Monuments of Ancient Kyoto and Nara."
          price="$423"
          />
           <Cards src="https://images.unsplash.com/photo-1605101100278-5d1deb2b6498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          title="Amsterdam"
          description="Enjoy the historic buildings, beautiful museums and pleasant ambiance. Go for a boat tour on the canals, stroll through Vondelpark, and go shopping in the inner city."
          price="$500"
          />
           <Cards src="https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          title="Greece"
          description="Visit the perfect beauty of Cycladic architecture, incredible sunset spots, and warm summer weather making it one of Europe's most popular vacation destination."
          price="$340"
          />
           <Cards src="https://images.unsplash.com/photo-1597982087634-9884f03198ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2688&q=80"
          title="Los Angeles"
          description="Hollywood stars, the TV & movie industries, and gorgeous beaches all make LA a famous city and a popular vacation spot."
          price="$700"
          />
           <Cards src="https://images.unsplash.com/photo-1621183628976-c63bc72569e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80"
          title="Albuquerque"
          description="Albuquerque has more than a dozen museums, an Old Town area featuring more than 150 shops, restaurants and galleries, and a nostalgic stretch of Route 66 that combines old and new for an exciting visitor experience."
          price="$150"
          />
           <Cards src="https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          title="France"
          description="With famous landmarks like the Eiffel Tower, Pantheon, remarkable museums like Louvre, Musee d'Orsay, cutest cafés like Laudree, sophisticated streets like Champs Elysees, and theme parks like Disneyland, you cannot deny its alluring beauty in any situation."
          price="$590"
          />
           <Cards src="https://images.unsplash.com/photo-1548783094-f92d7c8ae2d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80"
          title="Germany"
          description="With its many historic cities and quaint small towns, along with an abundance of forests and mountains, visitors are spoiled for choice when it comes to choosing unique places to visit in this beautiful part of Europe."
          price="$800"
          />
            <Cards src="https://images.unsplash.com/photo-1568574728383-06fca083883d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          title="Switzerland"
          description="The amazing natural beauty of the majestic Alps, the placid lakes, quaint villages, cosmopolitan cities and towering castles is just some of what Switzerland has to offer"
          price="$411"
          />
            <Cards src="https://images.unsplash.com/photo-1547057951-61fcf322bb1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80"
          title="Belgium"
          description="Belgium is known for its medieval towns, creative minds, music festivals, quirky attractions, and fierce football team."
          price="$599"
          />
            <Cards src="https://images.unsplash.com/photo-1513377888081-794d8e958972?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          title="Portugal"
          description="This country has delicious food, great vineyards, gorgeous beaches, and the fascinating history travelers crave"
          price="$399"
          />
            <Cards src="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2367&q=80"
          title="Italy"
          description="Along with amazing cities and towns, Italy also has amazing natural beauty and great weather all year round!"
          price="$850"
          />
        </div>
    </div>
  )
}

export default Home