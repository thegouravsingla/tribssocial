<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep course content in the landing data module and reusable enrollment/offer UI in focused landing components, so course edits and accessibility behavior remain separate.
- Use Radix dialogs for course overlays to ensure focus trapping, Escape handling, and focus restoration across devices.
- Calculate the daily offer reset from the current timestamp in the pure offer-time helper; never use browser storage or fabricated availability for urgency.
- Derive sticky enrollment visibility from visible page sections, hiding it around hero, pricing, and footer actions so enrollment controls do not compete or overlap.
- Animate section entry through IntersectionObserver and the browser animation API without hiding base content, preserving readable SSR output and reduced-motion preferences.
- Derive sitemap URLs from explicit route inclusion decisions using the versioned sitemap helper, so new public pages track the router without exposing non-content routes.
- Derive Course structured data from the shared landing curriculum in the home route head, so search information matches visible lessons.
- Keep floating contact actions in a focused landing component, raised above mobile enrollment and absent during dialogs, so contact controls never compete with these actions.
