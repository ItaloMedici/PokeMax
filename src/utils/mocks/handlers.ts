import { rest } from "msw";

export const handlers = [
  rest.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        "count": 1279,
        "next": "https://pokeapi.co/api/v2/pokemon?offset=10&limit=10",
        "previous": null,
        "results": [
          {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
          },
          {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
          },
          {
            "name": "venusaur",
            "url": "https://pokeapi.co/api/v2/pokemon/3/"
          },
          {
            "name": "charmander",
            "url": "https://pokeapi.co/api/v2/pokemon/4/"
          },
          {
            "name": "charmeleon",
            "url": "https://pokeapi.co/api/v2/pokemon/5/"
          },
          {
            "name": "charizard",
            "url": "https://pokeapi.co/api/v2/pokemon/6/"
          },
          {
            "name": "squirtle",
            "url": "https://pokeapi.co/api/v2/pokemon/7/"
          },
          {
            "name": "wartortle",
            "url": "https://pokeapi.co/api/v2/pokemon/8/"
          },
          {
            "name": "blastoise",
            "url": "https://pokeapi.co/api/v2/pokemon/9/"
          },
          {
            "name": "caterpie",
            "url": "https://pokeapi.co/api/v2/pokemon/10/"
          }
        ]
      })
    )
  }),

  rest.get('https://pokeapi.co/api/v2/pokemon/*', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: Date.now() * Math.random(),
        name: "Fake Pokemon",
        sprites: {
          other: {
            "official-artwork": {
              "front_default": "fake_url"
            }
          }
        },
        "stats": [
          {
            "base_stat": 45,
            "effort": 0,
            "stat": {
              "name": "hp",
              "url": "https://pokeapi.co/api/v2/stat/1/"
            }
          },
          {
            "base_stat": 49,
            "effort": 0,
            "stat": {
              "name": "attack",
              "url": "https://pokeapi.co/api/v2/stat/2/"
            }
          },
          {
            "base_stat": 49,
            "effort": 0,
            "stat": {
              "name": "defense",
              "url": "https://pokeapi.co/api/v2/stat/3/"
            }
          },
          {
            "base_stat": 65,
            "effort": 1,
            "stat": {
              "name": "special-attack",
              "url": "https://pokeapi.co/api/v2/stat/4/"
            }
          },
          {
            "base_stat": 65,
            "effort": 0,
            "stat": {
              "name": "special-defense",
              "url": "https://pokeapi.co/api/v2/stat/5/"
            }
          },
          {
            "base_stat": 45,
            "effort": 0,
            "stat": {
              "name": "speed",
              "url": "https://pokeapi.co/api/v2/stat/6/"
            }
          }
        ],
        "types": [
          {
            "slot": 1,
            "type": {
              "name": "grass",
              "url": "https://pokeapi.co/api/v2/type/12/"
            }
          },
          {
            "slot": 2,
            "type": {
              "name": "poison",
              "url": "https://pokeapi.co/api/v2/type/4/"
            }
          }
        ],
      })
    )
  })
]