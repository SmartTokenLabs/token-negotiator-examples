<script>
  import BrandConnector from "./components/BrandConnector.svelte";
  // onMount
</script>

<main>
  <h1>Hello Svelte!</h1>
  <p>This is a Svelte demo for Token-Negotiator. Click on the Token-Negotiator Icon to get started </p>
</main>

<BrandConnector />

<style>
main {
  text-align: center;
  padding: 1em;
  max-width: 240px;
  margin: 0 auto;
}

h1 {
  color: #ff3e00;
  text-transform: uppercase;
  font-size: 4em;
  font-weight: 100;
}

@media (min-width: 640px) {
  main {
    max-width: none;
  }
}
</style>