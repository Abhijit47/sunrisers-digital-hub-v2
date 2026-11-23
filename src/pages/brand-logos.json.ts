// import type { SVG } from "@/types";
import type { APIRoute } from "astro";

// Outputs: /brand-logos.json
export const GET = (async () => {
  // const abortController = new AbortController();

  // const res = await fetch("https://api.svgl.app", {
  //   cache: "force-cache",
  //   signal: abortController.signal,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  // const data = (await res.json()) as SVG[];
  // console.log("Fetched brand logos:", data.length);

  return new Response(JSON.stringify(null, null, 2));
}) satisfies APIRoute;
