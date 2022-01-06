# [Metaframe](https://metapages.org/): [babylon.js](https://www.babylonjs.com/) 3D rendering


[![](https://mermaid.ink/svg/eyJjb2RlIjoiZ3JhcGggTFJcbiAgaW5wdXQoXCJhbnkgaW5wdXRzICZlbnNwO1wiKVxuICBvdXRwdXQoXCJvdXRwdXRzICZlbnNwO1wiKVxuICBzdWJncmFwaCBcIm1ldGFmcmFtZSAmZW5zcDtcIlxuICAgIHVybFtcImphdmFzY3JpcHQgY29kZSBpbiBoYXNoIHBhcmFtcyAmZW5zcDtcIl0gLS0-IHRoaXNcbiAgICB0aGlzW1tcIm1ldGFmcmFtZSBleGVjdXRlcyBqYXZhc2NyaXB0IG9uIG5ldyBpbnB1dHMgJmVuc3A7XCJdXVxuICAgIHRoaXMgLS0-IGRpc3BsYXlbXCJEaXNwbGF5IGJhYnlsb24uanMgb24gY2FudmFzXCJdXG4gIGVuZFxuICBpbnB1dCAtLT4gdGhpc1xuICB0aGlzIC0tPiBvdXRwdXRcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0IiwidGhlbWVWYXJpYWJsZXMiOnsiYmFja2dyb3VuZCI6IndoaXRlIiwicHJpbWFyeUNvbG9yIjoiI0VDRUNGRiIsInNlY29uZGFyeUNvbG9yIjoiI2ZmZmZkZSIsInRlcnRpYXJ5Q29sb3IiOiJoc2woODAsIDEwMCUsIDk2LjI3NDUwOTgwMzklKSIsInByaW1hcnlCb3JkZXJDb2xvciI6ImhzbCgyNDAsIDYwJSwgODYuMjc0NTA5ODAzOSUpIiwic2Vjb25kYXJ5Qm9yZGVyQ29sb3IiOiJoc2woNjAsIDYwJSwgODMuNTI5NDExNzY0NyUpIiwidGVydGlhcnlCb3JkZXJDb2xvciI6ImhzbCg4MCwgNjAlLCA4Ni4yNzQ1MDk4MDM5JSkiLCJwcmltYXJ5VGV4dENvbG9yIjoiIzEzMTMwMCIsInNlY29uZGFyeVRleHRDb2xvciI6IiMwMDAwMjEiLCJ0ZXJ0aWFyeVRleHRDb2xvciI6InJnYig5LjUwMDAwMDAwMDEsIDkuNTAwMDAwMDAwMSwgOS41MDAwMDAwMDAxKSIsImxpbmVDb2xvciI6IiMzMzMzMzMiLCJ0ZXh0Q29sb3IiOiIjMzMzIiwibWFpbkJrZyI6IiNFQ0VDRkYiLCJzZWNvbmRCa2ciOiIjZmZmZmRlIiwiYm9yZGVyMSI6IiM5MzcwREIiLCJib3JkZXIyIjoiI2FhYWEzMyIsImFycm93aGVhZENvbG9yIjoiIzMzMzMzMyIsImZvbnRGYW1pbHkiOiJcInRyZWJ1Y2hldCBtc1wiLCB2ZXJkYW5hLCBhcmlhbCIsImZvbnRTaXplIjoiMTZweCIsImxhYmVsQmFja2dyb3VuZCI6IiNlOGU4ZTgiLCJub2RlQmtnIjoiI0VDRUNGRiIsIm5vZGVCb3JkZXIiOiIjOTM3MERCIiwiY2x1c3RlckJrZyI6IiNmZmZmZGUiLCJjbHVzdGVyQm9yZGVyIjoiI2FhYWEzMyIsImRlZmF1bHRMaW5rQ29sb3IiOiIjMzMzMzMzIiwidGl0bGVDb2xvciI6IiMzMzMiLCJlZGdlTGFiZWxCYWNrZ3JvdW5kIjoiI2U4ZThlOCIsImFjdG9yQm9yZGVyIjoiaHNsKDI1OS42MjYxNjgyMjQzLCA1OS43NzY1MzYzMTI4JSwgODcuOTAxOTYwNzg0MyUpIiwiYWN0b3JCa2ciOiIjRUNFQ0ZGIiwiYWN0b3JUZXh0Q29sb3IiOiJibGFjayIsImFjdG9yTGluZUNvbG9yIjoiZ3JleSIsInNpZ25hbENvbG9yIjoiIzMzMyIsInNpZ25hbFRleHRDb2xvciI6IiMzMzMiLCJsYWJlbEJveEJrZ0NvbG9yIjoiI0VDRUNGRiIsImxhYmVsQm94Qm9yZGVyQ29sb3IiOiJoc2woMjU5LjYyNjE2ODIyNDMsIDU5Ljc3NjUzNjMxMjglLCA4Ny45MDE5NjA3ODQzJSkiLCJsYWJlbFRleHRDb2xvciI6ImJsYWNrIiwibG9vcFRleHRDb2xvciI6ImJsYWNrIiwibm90ZUJvcmRlckNvbG9yIjoiI2FhYWEzMyIsIm5vdGVCa2dDb2xvciI6IiNmZmY1YWQiLCJub3RlVGV4dENvbG9yIjoiYmxhY2siLCJhY3RpdmF0aW9uQm9yZGVyQ29sb3IiOiIjNjY2IiwiYWN0aXZhdGlvbkJrZ0NvbG9yIjoiI2Y0ZjRmNCIsInNlcXVlbmNlTnVtYmVyQ29sb3IiOiJ3aGl0ZSIsInNlY3Rpb25Ca2dDb2xvciI6InJnYmEoMTAyLCAxMDIsIDI1NSwgMC40OSkiLCJhbHRTZWN0aW9uQmtnQ29sb3IiOiJ3aGl0ZSIsInNlY3Rpb25Ca2dDb2xvcjIiOiIjZmZmNDAwIiwidGFza0JvcmRlckNvbG9yIjoiIzUzNGZiYyIsInRhc2tCa2dDb2xvciI6IiM4YTkwZGQiLCJ0YXNrVGV4dExpZ2h0Q29sb3IiOiJ3aGl0ZSIsInRhc2tUZXh0Q29sb3IiOiJ3aGl0ZSIsInRhc2tUZXh0RGFya0NvbG9yIjoiYmxhY2siLCJ0YXNrVGV4dE91dHNpZGVDb2xvciI6ImJsYWNrIiwidGFza1RleHRDbGlja2FibGVDb2xvciI6IiMwMDMxNjMiLCJhY3RpdmVUYXNrQm9yZGVyQ29sb3IiOiIjNTM0ZmJjIiwiYWN0aXZlVGFza0JrZ0NvbG9yIjoiI2JmYzdmZiIsImdyaWRDb2xvciI6ImxpZ2h0Z3JleSIsImRvbmVUYXNrQmtnQ29sb3IiOiJsaWdodGdyZXkiLCJkb25lVGFza0JvcmRlckNvbG9yIjoiZ3JleSIsImNyaXRCb3JkZXJDb2xvciI6IiNmZjg4ODgiLCJjcml0QmtnQ29sb3IiOiJyZWQiLCJ0b2RheUxpbmVDb2xvciI6InJlZCIsImxhYmVsQ29sb3IiOiJibGFjayIsImVycm9yQmtnQ29sb3IiOiIjNTUyMjIyIiwiZXJyb3JUZXh0Q29sb3IiOiIjNTUyMjIyIiwiY2xhc3NUZXh0IjoiIzEzMTMwMCIsImZpbGxUeXBlMCI6IiNFQ0VDRkYiLCJmaWxsVHlwZTEiOiIjZmZmZmRlIiwiZmlsbFR5cGUyIjoiaHNsKDMwNCwgMTAwJSwgOTYuMjc0NTA5ODAzOSUpIiwiZmlsbFR5cGUzIjoiaHNsKDEyNCwgMTAwJSwgOTMuNTI5NDExNzY0NyUpIiwiZmlsbFR5cGU0IjoiaHNsKDE3NiwgMTAwJSwgOTYuMjc0NTA5ODAzOSUpIiwiZmlsbFR5cGU1IjoiaHNsKC00LCAxMDAlLCA5My41Mjk0MTE3NjQ3JSkiLCJmaWxsVHlwZTYiOiJoc2woOCwgMTAwJSwgOTYuMjc0NTA5ODAzOSUpIiwiZmlsbFR5cGU3IjoiaHNsKDE4OCwgMTAwJSwgOTMuNTI5NDExNzY0NyUpIn19LCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/edit#eyJjb2RlIjoiZ3JhcGggTFJcbiAgaW5wdXQoXCJhbnkgaW5wdXRzICZlbnNwO1wiKVxuICBvdXRwdXQoXCJvdXRwdXRzICZlbnNwO1wiKVxuICBzdWJncmFwaCBcIm1ldGFmcmFtZSAmZW5zcDtcIlxuICAgIHVybFtcImphdmFzY3JpcHQgY29kZSBpbiBoYXNoIHBhcmFtcyAmZW5zcDtcIl0gLS0-IHRoaXNcbiAgICB0aGlzW1tcIm1ldGFmcmFtZSBleGVjdXRlcyBqYXZhc2NyaXB0IG9uIG5ldyBpbnB1dHMgJmVuc3A7XCJdXVxuICAgIHRoaXMgLS0-IGRpc3BsYXlbXCJEaXNwbGF5IGJhYnlsb24uanMgb24gY2FudmFzXCJdXG4gIGVuZFxuICBpbnB1dCAtLT4gdGhpc1xuICB0aGlzIC0tPiBvdXRwdXRcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0IiwidGhlbWVWYXJpYWJsZXMiOnsiYmFja2dyb3VuZCI6IndoaXRlIiwicHJpbWFyeUNvbG9yIjoiI0VDRUNGRiIsInNlY29uZGFyeUNvbG9yIjoiI2ZmZmZkZSIsInRlcnRpYXJ5Q29sb3IiOiJoc2woODAsIDEwMCUsIDk2LjI3NDUwOTgwMzklKSIsInByaW1hcnlCb3JkZXJDb2xvciI6ImhzbCgyNDAsIDYwJSwgODYuMjc0NTA5ODAzOSUpIiwic2Vjb25kYXJ5Qm9yZGVyQ29sb3IiOiJoc2woNjAsIDYwJSwgODMuNTI5NDExNzY0NyUpIiwidGVydGlhcnlCb3JkZXJDb2xvciI6ImhzbCg4MCwgNjAlLCA4Ni4yNzQ1MDk4MDM5JSkiLCJwcmltYXJ5VGV4dENvbG9yIjoiIzEzMTMwMCIsInNlY29uZGFyeVRleHRDb2xvciI6IiMwMDAwMjEiLCJ0ZXJ0aWFyeVRleHRDb2xvciI6InJnYig5LjUwMDAwMDAwMDEsIDkuNTAwMDAwMDAwMSwgOS41MDAwMDAwMDAxKSIsImxpbmVDb2xvciI6IiMzMzMzMzMiLCJ0ZXh0Q29sb3IiOiIjMzMzIiwibWFpbkJrZyI6IiNFQ0VDRkYiLCJzZWNvbmRCa2ciOiIjZmZmZmRlIiwiYm9yZGVyMSI6IiM5MzcwREIiLCJib3JkZXIyIjoiI2FhYWEzMyIsImFycm93aGVhZENvbG9yIjoiIzMzMzMzMyIsImZvbnRGYW1pbHkiOiJcInRyZWJ1Y2hldCBtc1wiLCB2ZXJkYW5hLCBhcmlhbCIsImZvbnRTaXplIjoiMTZweCIsImxhYmVsQmFja2dyb3VuZCI6IiNlOGU4ZTgiLCJub2RlQmtnIjoiI0VDRUNGRiIsIm5vZGVCb3JkZXIiOiIjOTM3MERCIiwiY2x1c3RlckJrZyI6IiNmZmZmZGUiLCJjbHVzdGVyQm9yZGVyIjoiI2FhYWEzMyIsImRlZmF1bHRMaW5rQ29sb3IiOiIjMzMzMzMzIiwidGl0bGVDb2xvciI6IiMzMzMiLCJlZGdlTGFiZWxCYWNrZ3JvdW5kIjoiI2U4ZThlOCIsImFjdG9yQm9yZGVyIjoiaHNsKDI1OS42MjYxNjgyMjQzLCA1OS43NzY1MzYzMTI4JSwgODcuOTAxOTYwNzg0MyUpIiwiYWN0b3JCa2ciOiIjRUNFQ0ZGIiwiYWN0b3JUZXh0Q29sb3IiOiJibGFjayIsImFjdG9yTGluZUNvbG9yIjoiZ3JleSIsInNpZ25hbENvbG9yIjoiIzMzMyIsInNpZ25hbFRleHRDb2xvciI6IiMzMzMiLCJsYWJlbEJveEJrZ0NvbG9yIjoiI0VDRUNGRiIsImxhYmVsQm94Qm9yZGVyQ29sb3IiOiJoc2woMjU5LjYyNjE2ODIyNDMsIDU5Ljc3NjUzNjMxMjglLCA4Ny45MDE5NjA3ODQzJSkiLCJsYWJlbFRleHRDb2xvciI6ImJsYWNrIiwibG9vcFRleHRDb2xvciI6ImJsYWNrIiwibm90ZUJvcmRlckNvbG9yIjoiI2FhYWEzMyIsIm5vdGVCa2dDb2xvciI6IiNmZmY1YWQiLCJub3RlVGV4dENvbG9yIjoiYmxhY2siLCJhY3RpdmF0aW9uQm9yZGVyQ29sb3IiOiIjNjY2IiwiYWN0aXZhdGlvbkJrZ0NvbG9yIjoiI2Y0ZjRmNCIsInNlcXVlbmNlTnVtYmVyQ29sb3IiOiJ3aGl0ZSIsInNlY3Rpb25Ca2dDb2xvciI6InJnYmEoMTAyLCAxMDIsIDI1NSwgMC40OSkiLCJhbHRTZWN0aW9uQmtnQ29sb3IiOiJ3aGl0ZSIsInNlY3Rpb25Ca2dDb2xvcjIiOiIjZmZmNDAwIiwidGFza0JvcmRlckNvbG9yIjoiIzUzNGZiYyIsInRhc2tCa2dDb2xvciI6IiM4YTkwZGQiLCJ0YXNrVGV4dExpZ2h0Q29sb3IiOiJ3aGl0ZSIsInRhc2tUZXh0Q29sb3IiOiJ3aGl0ZSIsInRhc2tUZXh0RGFya0NvbG9yIjoiYmxhY2siLCJ0YXNrVGV4dE91dHNpZGVDb2xvciI6ImJsYWNrIiwidGFza1RleHRDbGlja2FibGVDb2xvciI6IiMwMDMxNjMiLCJhY3RpdmVUYXNrQm9yZGVyQ29sb3IiOiIjNTM0ZmJjIiwiYWN0aXZlVGFza0JrZ0NvbG9yIjoiI2JmYzdmZiIsImdyaWRDb2xvciI6ImxpZ2h0Z3JleSIsImRvbmVUYXNrQmtnQ29sb3IiOiJsaWdodGdyZXkiLCJkb25lVGFza0JvcmRlckNvbG9yIjoiZ3JleSIsImNyaXRCb3JkZXJDb2xvciI6IiNmZjg4ODgiLCJjcml0QmtnQ29sb3IiOiJyZWQiLCJ0b2RheUxpbmVDb2xvciI6InJlZCIsImxhYmVsQ29sb3IiOiJibGFjayIsImVycm9yQmtnQ29sb3IiOiIjNTUyMjIyIiwiZXJyb3JUZXh0Q29sb3IiOiIjNTUyMjIyIiwiY2xhc3NUZXh0IjoiIzEzMTMwMCIsImZpbGxUeXBlMCI6IiNFQ0VDRkYiLCJmaWxsVHlwZTEiOiIjZmZmZmRlIiwiZmlsbFR5cGUyIjoiaHNsKDMwNCwgMTAwJSwgOTYuMjc0NTA5ODAzOSUpIiwiZmlsbFR5cGUzIjoiaHNsKDEyNCwgMTAwJSwgOTMuNTI5NDExNzY0NyUpIiwiZmlsbFR5cGU0IjoiaHNsKDE3NiwgMTAwJSwgOTYuMjc0NTA5ODAzOSUpIiwiZmlsbFR5cGU1IjoiaHNsKC00LCAxMDAlLCA5My41Mjk0MTE3NjQ3JSkiLCJmaWxsVHlwZTYiOiJoc2woOCwgMTAwJSwgOTYuMjc0NTA5ODAzOSUpIiwiZmlsbFR5cGU3IjoiaHNsKDE4OCwgMTAwJSwgOTMuNTI5NDExNzY0NyUpIn19LCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)


This metaframe will execute javascript from code embedded in the URL hash params and use the canvas to display 3D scenes.

  - No multi files, just a single script
  - The canvas is sized to the entire width+height of the window.
  - There is a `div` with the id `render` for adding your own elements.
  - If the hash param exists: `presentation=true` then the edit and buttons and feedback will be hidden.
    - This is enabled with the "eye" icon, but reverting does not work nicely, you have to manually remove the above hash param manually.

**Globals:**

  - `BABYLON`: as if you did `import * as BABYLON from 'babylonjs';` see docs https://www.npmjs.com/package/babylonjs
    - includes [babylonjs-loaders](https://www.npmjs.com/package/babylonjs-loaders) for loading different kinds of meshes etc
      - I think I should instead use: https://www.npmjs.com/package/@babylonjs/loaders
  - `HASHTOOLS`: for convenient set/set URL hash params ([docs](https://github.com/metapages/metaframe-hook/blob/main/src/lib/util.ts))

## Examples

Click on the links then edit the babylon.js metaframe to see the code

[👉 Emit a sequence of numbers and apply to the rotation of a (created) box  🔗](https://app.metapages.org/#?definition=IntcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4zXCIsXG4gIFwibWV0YVwiOiB7XG4gICAgXCJsYXlvdXRzXCI6IHtcbiAgICAgIFwiZmxleGJveGdyaWRcIjoge1xuICAgICAgICBcImRvY3NcIjogXCJodHRwOi8vZmxleGJveGdyaWQuY29tL1wiLFxuICAgICAgICBcImxheW91dFwiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJnZW5lcmF0ZVwiLFxuICAgICAgICAgICAgICBcIndpZHRoXCI6IFwiY29sLXhzLTRcIixcbiAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtYXhIZWlnaHRcIjogXCI2MDBweFwiLFxuICAgICAgICAgICAgICAgIFwib3ZlcmZsb3dZXCI6IFwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL21ldGFwYWdlcy5vcmcvbWV0YWZyYW1lcy9wYXNzdGhyb3VnaC1hcnJvdy8/cm90YXRpb249OTBcIixcbiAgICAgICAgICAgICAgXCJ3aWR0aFwiOiBcImNvbC14cy0xXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImJhYnlsb24uanNcIixcbiAgICAgICAgICAgICAgXCJ3aWR0aFwiOiBcImNvbC14cy03XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFwibWV0YWZyYW1lc1wiOiB7XG4gICAgXCJnZW5lcmF0ZVwiOiB7XG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vbWV0YXBhZ2VzLmdpdGh1Yi5pby9tZXRhZnJhbWUtZ2VuZXJhdG9yLyM/b3B0aW9ucz1leUptY21WeGRXVnVZM2tpT2pJd0xDSmthWE4wY21saWRYUnBiMjRpT2lKemFXNGlMQ0pwYm1OeVpXMWxiblFpT2pBdU1YMD1cIlxuICAgIH0sXG4gICAgXCJiYWJ5bG9uLmpzXCI6IHtcbiAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9tZXRhcGFnZXMuZ2l0aHViLmlvL21ldGFmcmFtZS1iYWJ5bG9uLmpzLyM/bW9kZT1ydW5uaW5nJm9wdGlvbnM9ZXlKdGIyUmxJam9pYW5OdmJpSXNJblJvWlcxbElqb2liR2xuYUhRaUxDSmpZVzUyWVhOWGFXUjBhQ0k2SWpZd01DSXNJbU5oYm5aaGMwaGxhV2RvZENJNklqUXdNQ0o5JnRleHQ9Q21OdmJuTjBJR1JwYzNCdmMyVnljeUE5SUZ0ZE93b0tDZ29LQ2dvdkx5QkhaWFFnZEdobElHTmhiblpoY3lCRVQwMGdaV3hsYldWdWRBcDJZWElnWTJGdWRtRnpJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KM0psYm1SbGNrTmhiblpoY3ljcE93b3ZMeUJNYjJGa0lIUm9aU0F6UkNCbGJtZHBibVVLZG1GeUlHVnVaMmx1WlNBOUlHNWxkeUJDUVVKWlRFOU9Ma1Z1WjJsdVpTaGpZVzUyWVhNc0lIUnlkV1VzSUh0d2NtVnpaWEoyWlVSeVlYZHBibWRDZFdabVpYSTZJSFJ5ZFdVc0lITjBaVzVqYVd3NklIUnlkV1Y5S1RzS0x5OGdRM0psWVhSbFUyTmxibVVnWm5WdVkzUnBiMjRnZEdoaGRDQmpjbVZoZEdWeklHRnVaQ0J5WlhSMWNtNGdkR2hsSUhOalpXNWxDblpoY2lCamNtVmhkR1ZUWTJWdVpTQTlJR1oxYm1OMGFXOXVLQ2w3Q2lBZ0lDQXZMeUJEY21WaGRHVWdZU0JpWVhOcFl5QkNTbE1nVTJObGJtVWdiMkpxWldOMENpQWdJQ0IyWVhJZ2MyTmxibVVnUFNCdVpYY2dRa0ZDV1V4UFRpNVRZMlZ1WlNobGJtZHBibVVwT3dvZ0lDQWdMeThnUTNKbFlYUmxJR0VnUm5KbFpVTmhiV1Z5WVN3Z1lXNWtJSE5sZENCcGRITWdjRzl6YVhScGIyNGdkRzhnZTNnNklEQXNJSGs2SURVc0lIbzZJQzB4TUgwS0lDQWdJSFpoY2lCallXMWxjbUVnUFNCdVpYY2dRa0ZDV1V4UFRpNUdjbVZsUTJGdFpYSmhLQ2RqWVcxbGNtRXhKeXdnYm1WM0lFSkJRbGxNVDA0dVZtVmpkRzl5TXlnd0xDQTFMQ0F0TVRBcExDQnpZMlZ1WlNrN0NpQWdJQ0F2THlCVVlYSm5aWFFnZEdobElHTmhiV1Z5WVNCMGJ5QnpZMlZ1WlNCdmNtbG5hVzRLSUNBZ0lHTmhiV1Z5WVM1elpYUlVZWEpuWlhRb1FrRkNXVXhQVGk1V1pXTjBiM0l6TGxwbGNtOG9LU2s3Q2lBZ0lDQXZMeUJCZEhSaFkyZ2dkR2hsSUdOaGJXVnlZU0IwYnlCMGFHVWdZMkZ1ZG1GekNpQWdJQ0JqWVcxbGNtRXVZWFIwWVdOb1EyOXVkSEp2YkNoallXNTJZWE1zSUdaaGJITmxLVHNLSUNBZ0lDOHZJRU55WldGMFpTQmhJR0poYzJsaklHeHBaMmgwTENCaGFXMXBibWNnTUN3Z01Td2dNQ0F0SUcxbFlXNXBibWNzSUhSdklIUm9aU0J6YTNrS0lDQWdJSFpoY2lCc2FXZG9kQ0E5SUc1bGR5QkNRVUpaVEU5T0xraGxiV2x6Y0dobGNtbGpUR2xuYUhRb0oyeHBaMmgwTVNjc0lHNWxkeUJDUVVKWlRFOU9MbFpsWTNSdmNqTW9NQ3dnTVN3Z01Da3NJSE5qWlc1bEtUc0tJQ0FnSUM4dklFTnlaV0YwWlNCaElHSjFhV3gwTFdsdUlDSnpjR2hsY21VaUlITm9ZWEJsT3lCcGRITWdZMjl1YzNSeWRXTjBiM0lnZEdGclpYTWdOaUJ3WVhKaGJYTTZJRzVoYldVc0lITmxaMjFsYm5Rc0lHUnBZVzFsZEdWeUxDQnpZMlZ1WlN3Z2RYQmtZWFJoWW14bExDQnphV1JsVDNKcFpXNTBZWFJwYjI0S0lDQWdJQzh2SUhaaGNpQnpjR2hsY21VZ1BTQkNRVUpaVEU5T0xrMWxjMmd1UTNKbFlYUmxVM0JvWlhKbEtDZHpjR2hsY21VeEp5d2dNVFlzSURJc0lITmpaVzVsTENCbVlXeHpaU3dnUWtGQ1dVeFBUaTVOWlhOb0xrWlNUMDVVVTBsRVJTazdDaUFnSUNBdkx5QXZMeUJOYjNabElIUm9aU0J6Y0dobGNtVWdkWEIzWVhKa0lERXZNaUJ2WmlCcGRITWdhR1ZwWjJoMENpQWdJQ0F2THlCemNHaGxjbVV1Y0c5emFYUnBiMjR1ZVNBOUlERTdDaUFnSUNBdkx5QXZMeUJEY21WaGRHVWdZU0JpZFdsc2RDMXBiaUFpWjNKdmRXNWtJaUJ6YUdGd1pUc2dhWFJ6SUdOdmJuTjBjblZqZEc5eUlIUmhhMlZ6SURZZ2NHRnlZVzF6SURvZ2JtRnRaU3dnZDJsa2RHZ3NJR2hsYVdkb2RDd2djM1ZpWkdsMmFYTnBiMjRzSUhOalpXNWxMQ0IxY0dSaGRHRmliR1VLSUNBZ0lDOHZJSFpoY2lCbmNtOTFibVFnUFNCQ1FVSlpURTlPTGsxbGMyZ3VRM0psWVhSbFIzSnZkVzVrS0NkbmNtOTFibVF4Snl3Z05pd2dOaXdnTWl3Z2MyTmxibVVzSUdaaGJITmxLVHNLQ2dvS0lDQWdJQzh2SUhaaGNpQnNhV2RvZENBOUlHNWxkeUJDUVVKWlRFOU9Ma2hsYldsemNHaGxjbWxqVEdsbmFIUW9JbXhwWjJoMElpd2dibVYzSUVKQlFsbE1UMDR1Vm1WamRHOXlNeWd3TENBeExDQXdLU3dnYzJObGJtVXBPd29LQ1haaGNpQm1ZV05sUTI5c2IzSnpJRDBnVzEwN0NnbG1ZV05sUTI5c2IzSnpXekJkSUQwZ1FrRkNXVXhQVGk1RGIyeHZjak11UW14MVpTZ3BPd29KWm1GalpVTnZiRzl5YzFzeFhTQTlJRUpCUWxsTVQwNHVRMjlzYjNJekxsSmxaQ2dwQ2dsbVlXTmxRMjlzYjNKeld6SmRJRDBnUWtGQ1dVeFBUaTVEYjJ4dmNqTXVSM0psWlc0b0tUc0tDV1poWTJWRGIyeHZjbk5iTTEwZ1BTQkNRVUpaVEU5T0xrTnZiRzl5TXk1WGFHbDBaU2dwT3dvSlptRmpaVU52Ykc5eWMxczBYU0E5SUVKQlFsbE1UMDR1UTI5c2IzSXpMbGxsYkd4dmR5Z3BPd29KWm1GalpVTnZiRzl5YzFzMVhTQTlJRUpCUWxsTVQwNHVRMjlzYjNJekxrSnNZV05yS0NrN0Nna0tJQ0FnSUM4dmNtRnVaRzl0YVhObElHRnVaMnhsY3dvSmRtRnlJSGxoZHlBOUlFMWhkR2d1Y21GdVpHOXRLQ2tnS2lBeUtpQk5ZWFJvTGxCSk93b0pkbUZ5SUhCcGRHTm9JRDBnVFdGMGFDNXlZVzVrYjIwb0tTQXFJRElxSUUxaGRHZ3VVRWs3Q2dsMllYSWdjbTlzYkNBOUlDQk5ZWFJvTG5KaGJtUnZiU2dwSUNvZ01pb2dUV0YwYUM1UVNUc0tDZ29KZG1GeUlHSnZlQ0E5SUVKQlFsbE1UMDR1VFdWemFFSjFhV3hrWlhJdVEzSmxZWFJsUW05NEtDSkNiM2dpTENCN1ptRmpaVU52Ykc5eWN6cG1ZV05sUTI5c2IzSnpmU3dnYzJObGJtVXNJSFJ5ZFdVcE93b0pZbTk0TG5KdmRHRjBaU2hDUVVKWlRFOU9Ma0Y0YVhNdVdTd2dlV0YzTENCQ1FVSlpURTlPTGxOd1lXTmxMa3hQUTBGTUtUc0tDV0p2ZUM1eWIzUmhkR1VvUWtGQ1dVeFBUaTVCZUdsekxsZ3NJSEJwZEdOb0xDQkNRVUpaVEU5T0xsTndZV05sTGt4UFEwRk1LVHNLQ1dKdmVDNXliM1JoZEdVb1FrRkNXVXhQVGk1QmVHbHpMbG9zSUhKdmJHd3NJRUpCUWxsTVQwNHVVM0JoWTJVdVRFOURRVXdwT3dvSkNnbDJZWElnWW05NE1TQTlJRUpCUWxsTVQwNHVUV1Z6YUVKMWFXeGtaWEl1UTNKbFlYUmxRbTk0S0NKQ2IzZ3hJaXdnZTNkcFpIUm9PakV1TlN3Z1pHVndkR2c2TVM0MUxDQm9aV2xuYUhRNklEQXVOU3dnWm1GalpVTnZiRzl5Y3pwbVlXTmxRMjlzYjNKemZTd2djMk5sYm1Vc0lIUnlkV1VwT3dvZ0NXSnZlREV1Y205MFlYUnBiMjQ5SUc1bGR5QkNRVUpaVEU5T0xsWmxZM1J2Y2pNb2NHbDBZMmdzSUhsaGR5d2djbTlzYkNrN0Nnb2dJQ0FnTHk4Z1RHbHpkR1Z1SUhSdklHRnVJR2x1Y0hWMENpQWdJQ0JrYVhOd2IzTmxjbk11Y0hWemFDaHRaWFJoWm5KaGJXVXViMjVKYm5CMWRDZ2lkaUlzSUNoMktTQTlQaUI3Q2lBZ0lDQWdJQ0FnWTI5dWMyOXNaUzVzYjJjb2RpazdDaUFnSUNBZ0lDQWdZMjl1YzNRZ2JtVjNVbTkwWVhScGIyNGdQU0J1WlhjZ1FrRkNXVXhQVGk1V1pXTjBiM0l6S0hCcGRHTm9MQ0IyTENCeWIyeHNLVHNLSUNBZ0lDQWdJQ0JpYjNndWNtOTBZWFJwYjI0Z1BTQnVaWGRTYjNSaGRHbHZianNLSUNBZ0lDQWdJQ0JpYjNneExuSnZkR0YwYVc5dUlEMGdibVYzVW05MFlYUnBiMjQ3Q2lBZ0lDQjlLU2s3Q2dvS0lDQWdJQzh2SUZKbGRIVnliaUIwYUdVZ1kzSmxZWFJsWkNCelkyVnVaUW9nSUNBZ2NtVjBkWEp1SUhOalpXNWxPd3A5Q2k4dklHTmhiR3dnZEdobElHTnlaV0YwWlZOalpXNWxJR1oxYm1OMGFXOXVDblpoY2lCelkyVnVaU0E5SUdOeVpXRjBaVk5qWlc1bEtDazdDaTh2SUhKMWJpQjBhR1VnY21WdVpHVnlJR3h2YjNBS1pXNW5hVzVsTG5KMWJsSmxibVJsY2t4dmIzQW9ablZ1WTNScGIyNG9LWHNLSUNBZ0lITmpaVzVsTG5KbGJtUmxjaWdwT3dwOUtUc0tMeThnZEdobElHTmhiblpoY3k5M2FXNWtiM2NnY21WemFYcGxJR1YyWlc1MElHaGhibVJzWlhJS2QybHVaRzkzTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjNKbGMybDZaU2NzSUdaMWJtTjBhVzl1S0NsN0NpQWdJQ0JsYm1kcGJtVXVjbVZ6YVhwbEtDazdDbjBwT3dvS0x5OGdVbVYwZFhKdUlHRWdZMnhsWVc1MWNDQm1kVzVqZEdsdmJncHlaWFIxY200Z0tDa2dQVDRnZXdvZ0lDQWdkMmhwYkdVb1pHbHpjRzl6WlhKekxteGxibWQwYUNBK0lEQXBJSHNLSUNBZ0lDQWdJQ0JrYVhOd2IzTmxjbk11Y0c5d0tDa29LVHNLSUNBZ0lIMEtmUVwiLFxuICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJtZXRhZnJhbWVcIjogXCJnZW5lcmF0ZVwiLFxuICAgICAgICAgIFwic291cmNlXCI6IFwidlwiLFxuICAgICAgICAgIFwidGFyZ2V0XCI6IFwidlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGx1Z2luc1wiOiBbXG4gICAgXCJodHRwczovL21ldGFwYWdlcy5vcmcvbWV0YWZyYW1lcy9tZXJtYWlkLmpzLz9USVRMRT0wXCIsXG4gICAgXCJodHRwczovL21ldGFwYWdlcy5naXRodWIuaW8vbWV0YWZyYW1lLWVkaXRvci9cIlxuICBdXG59Ig==)


[👉 Load external mesh  🔗](https://app.metapages.org/#?definition=IntcbiAgXCJtZXRhXCI6IHtcbiAgICBcImxheW91dHNcIjoge1xuICAgICAgXCJmbGV4Ym94Z3JpZFwiOiB7XG4gICAgICAgIFwiZG9jc1wiOiBcImh0dHA6Ly9mbGV4Ym94Z3JpZC5jb20vXCIsXG4gICAgICAgIFwibGF5b3V0XCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImxvYWRlclwiLFxuICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBcIjQ1MHB4XCIsXG4gICAgICAgICAgICAgICAgXCJtYXhIZWlnaHRcIjogXCI0NTBweFwiLFxuICAgICAgICAgICAgICAgIFwib3ZlcmZsb3dZXCI6IFwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJ3aWR0aFwiOiBcImNvbC14cy04XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFwibWV0YWZyYW1lc1wiOiB7XG4gICAgXCJsb2FkZXJcIjoge1xuICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJtZXRhZnJhbWVcIjogXCJ3YW5kXCIsXG4gICAgICAgICAgXCJzb3VyY2VcIjogXCIqXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9tZXRhcGFnZXMuZ2l0aHViLmlvL21ldGFmcmFtZS1iYWJ5bG9uLmpzLyM/bW9kZT1ydW5uaW5nJm9wdGlvbnM9ZXlKdGIyUmxJam9pYW5OdmJpSXNJblJvWlcxbElqb2liR2xuYUhRaUxDSnpkSEpsZEdOb0lqcG1ZV3h6WlN3aVkyRnVkbUZ6U0dWcFoyaDBJam9pTkRBd0lpd2lZMkZ1ZG1GelYybGtkR2dpT2lJME1EQWlmUSZ0ZXh0PUNtTnZibk4wSUdScGMzQnZjMlZ5Y3lBOUlGdGRPd29LTHk4Z1IyVjBJSFJvWlNCallXNTJZWE1nUkU5TklHVnNaVzFsYm5RS2RtRnlJR05oYm5aaGN5QTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZHlaVzVrWlhKRFlXNTJZWE1uS1RzS0x5OGdURzloWkNCMGFHVWdNMFFnWlc1bmFXNWxDblpoY2lCbGJtZHBibVVnUFNCdVpYY2dRa0ZDV1V4UFRpNUZibWRwYm1Vb1kyRnVkbUZ6TENCMGNuVmxMQ0I3Y0hKbGMyVnlkbVZFY21GM2FXNW5RblZtWm1WeU9pQjBjblZsTENCemRHVnVZMmxzT2lCMGNuVmxmU2s3Q2k4dklFTnlaV0YwWlZOalpXNWxJR1oxYm1OMGFXOXVJSFJvWVhRZ1kzSmxZWFJsY3lCaGJtUWdjbVYwZFhKdUlIUm9aU0J6WTJWdVpRcGpiMjV6ZENCamNtVmhkR1ZUWTJWdVpTQTlJR0Z6ZVc1aklDZ3BJRDArSUhzS0lDQWdJQzh2SUVOeVpXRjBaU0JoSUdKaGMybGpJRUpLVXlCVFkyVnVaU0J2WW1wbFkzUUtJQ0FnSUhaaGNpQnpZMlZ1WlNBOUlHNWxkeUJDUVVKWlRFOU9MbE5qWlc1bEtHVnVaMmx1WlNrN0NpQWdJQ0F2THlCRGNtVmhkR1VnWVNCR2NtVmxRMkZ0WlhKaExDQmhibVFnYzJWMElHbDBjeUJ3YjNOcGRHbHZiaUIwYnlCYmVDd2dlU3dnZWwwS0lDQWdJSFpoY2lCallXMWxjbUVnUFNCdVpYY2dRa0ZDV1V4UFRpNUdjbVZsUTJGdFpYSmhLQ2RqWVcxbGNtRXhKeXdnYm1WM0lFSkJRbGxNVDA0dVZtVmpkRzl5TXlnd0xDQXhMQ0F3TGpncExDQnpZMlZ1WlNrN0NpQWdJQ0F2THlCVVlYSm5aWFFnZEdobElHTmhiV1Z5WVNCMGJ5QnpZMlZ1WlNCdmNtbG5hVzRLSUNBZ0lHTmhiV1Z5WVM1elpYUlVZWEpuWlhRb1FrRkNXVXhQVGk1V1pXTjBiM0l6TGxwbGNtOG9LU2s3Q2lBZ0lDQXZMeUJCZEhSaFkyZ2dkR2hsSUdOaGJXVnlZU0IwYnlCMGFHVWdZMkZ1ZG1GekNpQWdJQ0JqWVcxbGNtRXVZWFIwWVdOb1EyOXVkSEp2YkNoallXNTJZWE1zSUdaaGJITmxLVHNLQ2lBZ0lDQjJZWElnYkdsbmFIUWdQU0J1WlhjZ1FrRkNXVXhQVGk1SVpXMXBjM0JvWlhKcFkweHBaMmgwS0NKc2FXZG9kQ0lzSUc1bGR5QkNRVUpaVEU5T0xsWmxZM1J2Y2pNb01Dd2dNU3dnTUNrc0lITmpaVzVsS1RzS0lDQWdJQW9nSUNBZ1kyOXVjM1FnYVcxd2IzSjBVbVZ6ZFd4MElEMGdZWGRoYVhRZ1FrRkNXVXhQVGk1VFkyVnVaVXh2WVdSbGNpNUpiWEJ2Y25STlpYTm9RWE41Ym1Nb0lpSXNJQ0pvZEhSd2N6b3ZMM0poZHk1bmFYUm9kV0oxYzJWeVkyOXVkR1Z1ZEM1amIyMHZaR052WlhWeWFtOHZWbTlzUjJGc2JHVnllUzl0WVhOMFpYSXZVM1JoYm1admNtUXRZblZ1Ym5rdklpd2dJbUoxYm01NUxuTjBiQ0lzSUhOalpXNWxLVHNLQ2lBZ0lDQXZMeUJTWlhSMWNtNGdkR2hsSUdOeVpXRjBaV1FnYzJObGJtVUtJQ0FnSUhKbGRIVnliaUJ6WTJWdVpUc0tmUW9LS0dGemVXNWpJQ2dwSUQwK0lIc0tJQ0FnSUM4dklHTmhiR3dnZEdobElHTnlaV0YwWlZOalpXNWxJR1oxYm1OMGFXOXVDaUFnSUNCMllYSWdjMk5sYm1VZ1BTQmhkMkZwZENCamNtVmhkR1ZUWTJWdVpTZ3BPd29nSUNBZ0x5OGdjblZ1SUhSb1pTQnlaVzVrWlhJZ2JHOXZjQW9nSUNBZ1pXNW5hVzVsTG5KMWJsSmxibVJsY2t4dmIzQW9ablZ1WTNScGIyNG9LWHNLSUNBZ0lDQWdJQ0J6WTJWdVpTNXlaVzVrWlhJb0tUc0tJQ0FnSUgwcE93b2dJQ0FnTHk4Z2RHaGxJR05oYm5aaGN5OTNhVzVrYjNjZ2NtVnphWHBsSUdWMlpXNTBJR2hoYm1Sc1pYSUtJQ0FnSUhkcGJtUnZkeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2R5WlhOcGVtVW5MQ0JtZFc1amRHbHZiaWdwZXdvZ0lDQWdJQ0FnSUdWdVoybHVaUzV5WlhOcGVtVW9LVHNLSUNBZ0lIMHBPd3A5S1NncE93b0tMeThnVW1WMGRYSnVJR0VnWTJ4bFlXNTFjQ0JtZFc1amRHbHZiZ3B5WlhSMWNtNGdLQ2tnUFQ0Z2V3b2dJQ0FnZDJocGJHVW9aR2x6Y0c5elpYSnpMbXhsYm1kMGFDQStJREFwSUhzS0lDQWdJQ0FnSUNCa2FYTndiM05sY25NdWNHOXdLQ2tvS1RzS0lDQWdJSDBLZlFvXCJcbiAgICB9XG4gIH0sXG4gIFwicGx1Z2luc1wiOiBbXG4gICAgXCJodHRwczovL21ldGFwYWdlcy5naXRodWIuaW8vbWV0YWZyYW1lLWVkaXRvci9cIlxuICBdLFxuICBcInZlcnNpb25cIjogXCIwLjNcIlxufSI=)


## Source

[https://github.com/metapages/metaframe-babylon.js](https://github.com/metapages/metaframe-babylon.js)

## Forking

[https://github.com/metapages/metaframe-template-preact/blob/main/README-developer.md](https://github.com/metapages/metaframe-template-preact/blob/main/README-developer.md)