<script>
  let data;

  fetch("http://127.0.0.1:5000")
    .then((res) => res.json())
    .then((resData) => {
      data = resData;
    });
</script>

{#if data}
  <p>
    {data.hello}
  </p>
{/if}
