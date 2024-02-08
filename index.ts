async function fetchJson(url: string) {
  const response = await fetch(url, {
    headers: { accept: "application/json" },
  });
  return response.json();
}

async function chase(url: string) {
  if (!url) return;
  const { follow, message } = await fetchJson(url);
  console.log(message);
  chase(follow);
}

async function main() {
  const { follow } = await fetchJson(
    "https://letsrevolutionizetesting.com/challenge"
  );
  chase(follow);
}

main();
