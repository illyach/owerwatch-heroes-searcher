import {useEffect, useState} from "react";
import HeroList from './HeroList.js'
function App() {

  const LINK = "https://gist.githubusercontent.com/TeKrop/ad793479d265b2c375eae3203488216e/raw/8556008222c5134e5c82f8aa800be742af343e21/overwatch-api-heroes-example.json"
  const [hero, setHero] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
         fetch(LINK)
        .then( (res) => res.json())
        .then( (data) => setHero(data))

  }, [])

  {console.log(hero)}


  return (
      <HeroList hero={hero}/>
  );
}

export default App;