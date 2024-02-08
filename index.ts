async function firstCall() {
  const response = await fetch(
    "https://letsrevolutionizetesting.com/challenge",
    {
      headers: { accept: "application/json" },
    }
  );
  return response.json();
}

async function chase(url: string) {
  if (!url) return;
  const response = await fetch(url, {
    headers: { accept: "application/json" },
  });
  const json = await response.json();
  console.log(json);
  chase(json.follow);
}

async function main() {
  const { follow } = await firstCall();
  const response = await fetch(follow, {
    headers: { accept: "application/json" },
  });
  const json = await response.json();
  await chase(json.follow);
}

main();
