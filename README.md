### Development notes

- I went with React's `useContext` API vs. some flavour of `redux`, simply 'cos there was no real complexity here & wanted a "fast" MVP.
  1. Naturally then, if there were more User Events & Actions involved it'd make sense to use some reducer logic.
  2. React's Context API can be quickly mounted
- All API requests are cached in `localStorage`, again for fast delivery of basic caching logic.
  1. each unique request is cached using the path as the unique key (ie, `{ ['/planets']: { ... } }`)
  2. If no cached item found, `fetch()`, otherwise pull from `localStorage`)
- Searching is _debounced_, to prevent any load issues hitting the SWAPI API
  1. Debated in-memory searching but given the default results are quite low, made sense to instead pass `?search=123` value to SWAPI
  2. Like other requests, these searches are cached in `localStorage`.
- `people.homeworld` doesn't sort correctly, visually anyway. 'cos the _actual_ field is a URL it's being sorted by that ... not the presented value (Homeworld planet via `LabelByUrl` component)
  1. Post MVP would obviously address this!
- Similar comment re. `Planet.population`, as the `population` field is a `String`, not a `Number` - possibly to account for "unknown" populations.
  1. Ideally IMO, `population` should be `number | null`
  2. So actual numbers are returned, while the FE can _infer_ that nullish values are the "unknown" variant here.

### Potential improvements I'd work on:

- Add some "Expiry" logic to the caching to ensure it stays relatively fresh vs. any BE updates.
  - UI has a `clear cache` but realistically we'd want some way to track if/when the data has changed upstream. 
  - Would come down to requirements, maybe every `n` days the data's re-fetched.
  - Or maybe there's a `ping` before the app starts, tracking each schema change
  - Etc. etc
- More tests! Not 100%, but various business logic could be covered through "smart" Component testing
  - For now, there's some tests for the Utility functions
  - `App.test.tsx` at least covers basic rendering :-D
- The `LabelByUrl` is also causing a lot of fetches per film / homeworld
  - In an ideal world, I'd argue that these should be sub-objects to reduce extra requests to the BE / `await` logic in the FE.
- The `SortableTable` logic could be abstracted more / better ...
  - Could probably just pass more configuration strings / arrays than actual React components? Less to potentially maintain in future.
  - ATM table takes Components as props; kinda "six of one" scenario, no wrong answer IMO
- Smarter error catching for bad requests (using `ErrorBoundary` or somesuch)
  - ATM bad API paths are caught, but that's about it
  - realistically there'd be proper Sentry / DataDog analytics etc.
- Formatting of data could be a little better in places
- Catch more "nullish" cases, where data was pending (loading), empty or not present
- Pagination support
  - ATM, it's just returning the default amount; some pagination would be handy here.
- Use `redux` if adding more functionality