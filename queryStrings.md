Query strings are a way to filter results in a API call. They are added to the end of the URL and are separated by a question mark. For example:

- BaseUrl:

`https://api.cars.com/`

- Endpoints:

  - `/cars`
  - `/brands`
  - `/colors`

- Query strings:

- `/cars?color=red`
- `/cars?brand=Toyota`
- `/cars?color=red&brand=Toyota`

In these examples, the first query will return all red cars, the second will return all Toyotas, and the third will return all red Toyotas. It's akin to constructing objects:

```
{
    color: 'red',
    brand: 'Toyota'
}
```
