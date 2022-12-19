const movieData = [
  {
    id:"1",
    poster: "https://cdna.artstation.com/p/assets/images/images/028/046/546/large/olga-tysko-joker1000-72.jpg?1593346703",
    title: "Joker",
    direct:"Directed by Todd Phillips",
    descr: "The Joker is noted for his clownlike appearance and sick humour. The Joker, initially portrayed as a small-time crook, was disfigured and driven insane by an accident with toxic chemicals. He was depicted with chalk-white skin, ruby-red lips permanently fixed in a demonic grin, and bright green hair.",
    actor1: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSv9yv16WOj4x_L5CAqeuzg3KfLpxcRsVODrhUJ6ThFDpssirYfbbsQuIWi&usqp=CAE&s=19",
    actor2: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQqxMaKOGL2x4tVbs5JGg9dcOQKhadQvAA-brushdxaF5b5-t5IFxUl45wjaH3viwe1",
    actor3: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcStcDW4daXMymAnWIsGIgRpGL4jPiMeqN0IKuxu8vCUDtrk9nFBYCBPgxCi48dI0c2e",
    actor4: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRECshNtbIWyEge0hbA3H6xkw7YlgbzkgbikbERIRJlt_aRVW_AMr-c4_evwfHtcbXA",
    actor5: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRYJxv-RrCZyjfQNOxo69EP1pwnuTpLdpIyVTYwSGhS9ovv8BqPoy1WiDXG&usqp=CAE&s=19"
  },
  {
    id:"2",
    poster: "https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_7259_1024x1024@2x.jpg?v=1640349274",
    title: "Spider-man",
    direct:"Directed by Jon Watts",
    descr: "turns to Doctor Strange to make the world forget that he is Spider-Man. The spell goes horribly wrong and shatters the multiverse, bringing in monstrous villains that could destroy the world.",
    actor1: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ4vi_du17tgWoFRa8kRnZHJYrwNkYgvX86XE_JyuKC0HlQZdn46Wd-BvewGoVrqmbV",
    actor2: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTs0i1_qIXltdhVLuZDmFk4zMcZayT-OsiSAB9AkbmgoHlcGMwXyEX9VfD9Sn94w92z",
    actor3: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSkL2XU4wQpr32kay6n1KlpR6EyyRexaz0ZwxJHPbA53cPoJH5VF8cdo0nr&usqp=CAE&s=19",
    actor4: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRfnGvx5U-EIVwB-DBfKcIZturVlTtwpVBwNBafbMnJ0fxRpQgeuGdQw-c&usqp=CAE&s=19",
    actor5: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSd8-kwpaHaBFyESzK-OKy1Jy_pNEmml4xk4uoEWXm-driY6XB0oKZjycf3&usqp=CAE&s=19"
  },
  {
    id:"3",
    poster: "https://lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default.jpg",
    title: "John Wick",
    direct:"Directed by Chad Stahelski",
    descr: "Bound by an inescapable blood debt to the Italian crime lord, Santino D'Antonio, and with his precious 1969 Mustang still stolen, John Wick--the taciturn and pitiless assassin who thirsts for seclusion--is forced to visit Italy to honour his promise.",
    actor1: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQiwkRwBZZilFY6LsATxJCbqIvQ2LddvedkG7mrYur5hU7Uhcbgjr0PCeztfW4YdMkq",
    actor2: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQjcxzgKpFY51TT-Yx1PmpIy1F3G1euMSJSji-x6oqpz3XG_wjuW4o-FlN6&usqp=CAE&s=19",
    actor3: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSHvZ54sbcTcV5gu25NsqMmCdpAsE_WEKl_YmLtnO9DtbqNcGwNhTWXdPmU&usqp=CAE&s=19",
    actor4: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQZDGpVyuzXLBD9L9j-tqFZPBfWDKHAtGCX7DI5GtcXTEFhE7Q47l_Li2P2&usqp=CAE&s=19",
    actor5: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcS6_4YlAvQkoserMFN2SKj3gwYI_wRmFKBsd-BuzL2ibd0AHvWeZ03ZyKh-vEG_JNAo"
  },
  {
    id:"4",
    poster: "https://www.coffeeandcigarettes.co.uk/wp-content/uploads/2022/09/Leon_1-Sht_Art-scaled.jpg",
    title: "Leon",
    direct:"Directed by Luc Besson",
    descr: "Reclusive, taciturn, and lethally efficient, the plant-loving New Yorker and professional hitman, or cleaner, Léon, sees his world turn upside down, when the entire family of his tough twelve-year-old neighbour, Mathilda, is wiped out by a corrupt DEA agent.",
    actor1: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQHPi73Dxt01G8zeE-RVvuG_OVn_zQEcQPgQ_RARc77o8YOYq3DFn5C5CSykOpWVzXP",
    actor2: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcROS2SwhY_s7-OxPHut6JleB-YaTWGMO1H7fCb7aMSZvLA2UAtl-VG6-YKQ&usqp=CAE&s=19",
    actor3: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcR07zMpZ0YCFqJaKwudhn6tr-sA9DQCmyYB7KSUJJ_LndStm3WJ-_jpwE75SmIxrQ9x",
    actor4: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQvk2xbSr1QH-FQuvb0SgEg8fklCyoIGeedAwhStAwYdMCVjcj15XnG1J_6w6XrAciF",
    actor5: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSLYk5woX6zrs5UXdKCKIOwqugbwqs9Afb_65-CN-DYzV_bxisqnPaUTJznNVKj1w4U"
  },
  {
    id:"5",
    poster: "https://m.media-amazon.com/images/I/71LNVGVpWYL.jpg",
    title: "Interstellar",
    direct:"Directed by Christopher Nolan",
    descr: "Interstellar is about Earth's last chance to find a habitable planet before a lack of resources causes the human race to go extinct. The film's protagonist is Cooper (Matthew McConaughey), a former NASA pilot who is tasked with leading a mission through a wormhole to find a habitable planet in another galaxy.",
    actor1: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSbNuqv_-8YK0I5bRmjrZLrp73bvHHGsg9snzYesglwmgIkmYcNFbNzWmTD&usqp=CAE&s=19",
    actor2: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT7tTmP5HX5LS2AZN7iBMsiLlGVnqVQjsS4LRxQVbD6Ls6b3UIQgsay98Nk0OEnDBlG",
    actor3: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSkZ9b8-sVoVBQHoQzcNEe7fTUIP6siYaHTJcNUDFgY6Lhelvw2R-YhTE1L&usqp=CAE&s=19",
    actor4: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRtR7NmqhjM6BLJSUetFHa8jaTsbapLLpN-SquJIo83CVrhS8x2K8uBR5GwZfKiL-2Z",
    actor5: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTcQ_P9UkSJF98c2ZW8zveGCTNzsyG-_vIso7rfv-hLAFhOA7wlMAxSBXDa&usqp=CAE&s=19"
  },
  {
    id:"6",
    poster: "https://www.themoviedb.org/t/p/original/17OfTgQTlAUx0O18tqJOPz89HuU.jpg",
    title: "Black Adam",
    direct:"Directed by Jaume Collet-Serra",
    descr: "Black Adam appears as a featured character in DC's weekly 52 comic book. Depicted as the violent protector of the nation of Kahndaq, Adam kills several supervillains in public and on television to demonstrate his views. As a result, he is distrusted by the superhuman community.",
    rating:"",
    actor1: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSCfcH8cUa2_lIYHleHvxM9rai3opR19PRaGBe-JJoqrD7nwzfx9pOT5unO&usqp=CAE&s=19",
    actor2: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS0LymgfCscOYp9mpmQ1OXYy6yl5ShyDj9UiOmCPXtZe6bNpWgmLCXmu1HU&usqp=CAE&s=19",
    actor3: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSYNTaaUXpTOk0_n-agTvo4HBiK4zx_78GjTHs9qhiVLQ6E7fGBYZ_hk-K5&usqp=CAE&s=19",
    actor4: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRWAEwlcgZQQzr7ja6lb2ponlbox2NRLZoVsV-POA6yJ9dnUg-lyBak7rQk&usqp=CAE&s=19",
    actor5: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSZp65myt9Nh7oxX74wlMHCW-BgD6tiEVwocuAQQGLI4REZKuTzFyA3qoFe&usqp=CAE&s=19"
  },
];

export default movieData;
