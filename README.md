### Notes

- I went with React' Context API vs. some flavour of `redux`, simply 'cos there was no real complexity.
  - So if there were more User Actions involved it'd make sense to use some reducer logic.
  - Instead, `useContext` was chosen for speed.
- Also just used it as an excuse to fashion a quick bit of Query caching, to throttle the requests.

### Potential improvements:

- Add some "Expiry" logic to the caching to ensure it stays relatively fresh vs. BE updates.
- The `SortableTable` logic could be abstracted more / better ...
  - Could probably just pass more configuration strings / arrays than actual React components? Less to potentially maintain in future.
  - ATM table takes Components as props; kinda "six of one" scenario, no wrong answer IMO
- Smarter error catching for bad requests (using `ErrorBoundary` or somesuch)
- Formatting of data could be a little better in places
- Catch more "nullish" cases, where data was pending (loading), empty or not present
- Pagination support
  - ATM, it's just returning the default amount; some pagination would be handy here.
- Use `redux` if adding more functionality