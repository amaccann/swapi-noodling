#### Netlify site

https://swapi-noodling.netlify.app

#### Current build status:

[![Netlify Status](https://api.netlify.com/api/v1/badges/b5d1c21e-fcd4-4da3-a769-3c0edf7aeccf/deploy-status)](https://app.netlify.com/sites/swapi-noodling/deploys)


### Development update 16-Apr-2025

- Used the super useful `knip` package to clean up unused variables, exports and other detritus in the code.

### Development update 15-Apr-2025

- Added some animated `Loader` spinners for page / section loading / pending states. Should make data transitions more apparent, the UX more organic.
  - If something like `Next.js` was used we could use Streaming to load parts of the pages more seamlessly.
- Added `RemoteDataList` to handle sections rendering via multiple requests.
  - The `RemoteDataList` component batches up the requests and uses `useTransition` to show a loading spinner 'til all requests are done.
  - This addresses an issue where, for instance, "Notable residents" had fractured loading, with patchy loading-in of various details
- Added a "back" arrow for any given section's details page. Returns the user to the previous page.
- Included each film's poster as a thumbnail, and a link off to the IMDB page thereof.
- **Added some "proper" styling to the overall UI to make it look less like a website from the 1990s!**
  - Used `@emotion/react` for convenience.
  - Was torn between Styled Components and `tailwind` but went with Styled Components as I'm using it in a personal project I'm working on ATM & rather than hunting the various `tailwind` classes. _Poh-tay-to, Poh-tah-to._
  - Included some basic mobile-friendly styling for smaller screen sizes.
    - the `Sidebar` nav, becomes a top navigation.
    - I chose `960px` as an arbitrary "mobile" breakpoint. YMMV.
- **If I spent even _MORE_ time on this?**
  - I'd probably switch to `tailwind` for more consensus, contemporary approach.
  - Automatically clear the cache if it notices there was a new "release"
    - This could be easily done if I simply stored the git SHA in the API cache, then compared it with the value in `process.env.[]`
  - Add pagination; still not there lol but an obvious functional gap!
  - The mobile styling could do with a little more finessing.  

### Development notes

- I went with React's `useContext` API vs. using `redux-thunk`, simply 'cos there was no real complexity here & wanted to deliver a "fast" MVP.
  1. Naturally, if there were more User Events & Actions it'd make more sense to use some reducer logic for better state management.
  2. React's Context API can be quickly mounted, and this Test is entirely read-only
- All API requests are cached in `localStorage`, again for fast delivery of basic caching logic.
  1. each unique request is cached using the path as cache-key (ie, `{ ['/planets']: { ... } }`)
  2. If no cached item found in `localStorage`, `fetch()` from the end-points.
- All searching is _debounced_, to prevent any load issues hitting the SWAPI API (unlikely but IMO this is good practise)
  1. Debated in-memory searching but given the default results are quite low, made sense to instead pass `?search=123` value to SWAPI
  2. Like other requests, these searches are cached in `localStorage`.
- Noticed that `Planet.population` didn't sort correctly, cos `population` was returned as a `String` not a `Number`; so `castTrueValue` function fixes this, so that column can be sorted properly.
  1. Ideally IMO, `population` should be `number | null`
  2. So actual numbers would be returned, then the FE could _infer_ nullish values are the "unknown" variant here. Anyway.
- `people.homeworld` doesn't sort correctly - visually anyway. This is as the _actual_ field is a URL, so it's sorting the URL not the presented value (Homeworld planet's name supplied `LabelByUrl` component)
  1. Post MVP would obviously address this.
  2. Again, ideally might be a sub-object the BE's JSON returned
  2. Otherwise, a FE only spitball would be to mutate the `People` object in memory with the human-readable planet name.

### Potential improvements I'd work on:

- Add some "Expiry" logic to the caching to ensure it stays relatively fresh vs. any BE updates.
  - UI has a `clear cache` but realistically we'd want some way to track if/when the data has changed upstream. 
  - Would come down to requirements, maybe every `n` days after a request was last fetched.
  - Or, only allow a maximum of `n` items in the cache at one time, to keep `localStorage` bloat down.
  - Or maybe there's a `ping` before the app starts, tracking each schema change, if we had that.
  - Etc. etc
- Pagination support.
  - ATM, it's just returning the default amount; some pagination would be handy here.
  - I can't see anything in the docs suggesting you can configure the per-page value.
  - Another UI option would be "infinite scrolling" but keep tracking of the "current" page can add complexity.
- Make it look nicer ;-)
  - Obviously there's no much styling here bar some basic approaches
  - There are many options here, tailwind, styled-components etc. etc., notwithstanind a real-world Design System to work off.
- More tests! Not 100%, but various business logic could be covered through "smart" Component testing
  - For now, there's some tests for the Utility functions
  - `App.test.tsx` at least covers basic rendering :-D
  - `LabelByUrl` as a specific Component example.
-  The `eslint` rules are basic, so could be more robust, just to ensure more code consistency. Think the code is tidy enough, but more automation would be nice.
- The `LabelByUrl` is also causing a lot of fetches per film / homeworld
  - In an ideal world, I'd argue that these should be sub-objects to reduce extra requests to the BE / `await` logic in the FE.
- The `SortableTable` logic could be abstracted more / better ...
  - Could probably just pass more configuration strings / arrays than actual React components? Less to potentially maintain in future.
  - ATM table takes Components as props; kinda "six of one" scenario, no wrong answer IMO
- Smarter error catching for bad requests (using `ErrorBoundary` or somesuch)
  - ATM bad API paths are caught, but that's about it
  - realistically there'd be proper Sentry / DataDog analytics etc.
- Formatting of data could be a little better in places
- Catch more "nullish" cases, where data was pending (loading), empty or not present. Just used optional chaining to prevent breakages.
