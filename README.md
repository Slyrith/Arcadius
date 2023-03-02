<div align="center">
<img src="https://camo.githubusercontent.com/dec6ac6ab2cd6b24559710ce5ccb425a9504ed6eef26ec2baccdec95af199009/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f313033343534373530383636353338393035382f313037393036333338383034383538383832302f3830302e706e67" alt="Arcadius Banner" weight="300" height="300">
<p>An unofficial Arcadius API</p>
</div>

## Base URL
```
https://arcadius-azure.vercel.app/
```

## Documentation
soon!

## Endpoints
Here are the available endpoints for this API:

- `GET /equipment/fishingrods`: Retrieves a list of all fishing rods.
- `GET /equipment/fishingrods/:rodname`: Retrieves information about a specific fishing rod.
- `GET /bait`: Retrieves a list of all fishing baits.
- `GET /bait/:baitname`: Retrieves information about a specific fishing bait.
- `GET /island`: Retrieves a list of all islands.
- `GET /island/:islandname`: Retrieves information about a specific island.
- `GET /plants`: Retrieves a list of all plants.
- `GET /plants/:plantname`: Retrieves information about a specific plant.

And more endpoints are available in the API documentation.

## Examples
Here are some example requests using cURL:

Retrieves a list of all fishing rods
```console
curl https://arcadius-azure.vercel.app/equipment/fishingrods
```
Retrieves information about a specific fishing rod
```console
curl https://arcadius-azure.vercel.app/equipment/fishingrods/simplerod
```
Retrieves information about the worm bait
```console
curl https://arcadius-azure.vercel.app/bait/worm
```


### TODO
- [x] Pickaxes
- [ ] Axes
- [ ] Sickles
- [ ] Ores
- [ ] Ingots
- [ ] Fish
- [ ] Logs
- [ ] Potions
- [ ] Mushrooms
- [x] Plants
- [ ] NPC
- [x] Island
- [ ] Areas

In addition to these features, I also plan to create an API wrapper package to make it easier to interact with the Arcadius API in various programming languages.


## Contribution
Contributions to this project are welcome. If you find a bug or want to add a new feature, please create a new issue or pull request on [GitHub](https://github.com/Slyrith/Arcadius).

## License
This project is licensed under the [MIT License](https://github.com/Slyrith/Arcadius/blob/main/LICENSE).
