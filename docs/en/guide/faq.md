# FAQ

## Account & Billing

**How many API Keys can one account create?**
There is usually no hard limit on the number. Recommended: one key each per device / project / member, plus a separate key for CI / automation with a quota cap set.

**Does the topped-up balance expire?**
It depends on the terms of the redemption code. For codes with no expiry, the balance enters your account once redeemed and remains valid long-term.

**Can you issue an invoice?**
AxiomCode does not issue invoices directly. If you need one, please contact support for special handling.

**How do I check my spending details?**
The billing section of the console shows a "spending curve + model usage", which you can filter by date, key, or model.

## API Key

**What if a key is leaked?**
Disable / delete it immediately on the keys page. More importantly, set a "quota cap" on every key — a leaked key automatically locks once it hits the cap, keeping losses contained.

**Can the same key be used on multiple machines?**
Yes. However, sharing a single key among multiple people is **strongly discouraged**, as it makes accountability and usage hard to track.

**Can I change the name / quota / model scope after creation?**
Yes. Click "Edit" on the keys page to modify them.

## Clients

**Why are the Base URLs for Codex and Claude Code different?**
They use different protocols: Codex uses `https://axiomcode.top/v1` (OpenAI-compatible), while Claude Code uses `https://axiomcode.top` (Anthropic-compatible, **without** `/v1`).

**Can one key be used for both Codex and Claude Code?**
Yes. The same key authenticates under both protocols, as long as you configure the correct Base URL for each.

**Can I switch between an official account and AxiomCode?**
Yes. Use an environment-variable manager such as `direnv` to switch per directory.

**Where is the full list of model IDs?**
Console → Keys page → "Access Configuration" button to see the available models. You can also refer to [Supported Models](/en/guide/models).

## Network & Security

**Do I need a proxy for access from within China?**
No. Turning off the system proxy and connecting directly is actually faster; tools like Clash / V2Ray may unexpectedly rewrite requests.

**Are request contents logged?**
Only **metadata** (timestamps, token usage, status codes) is retained for billing. Request bodies are not persisted.

**Will AxiomCode auto-renew?**
No. It uses a **prepaid quota model** — it stops once your balance runs out.

---

Still have questions? Head to the [console](https://axiomcode.top) to check announcements, or contact support through the in-site contact options.
