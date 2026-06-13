# 4.2 Common Errors

Don't panic when you hit an error — the table below will solve most of them. We recommend first running the [4.1 Self-check Commands](/en/guide/troubleshoot/selfcheck) to pinpoint which layer the problem is at.

## 401 Unauthorized

**Symptom:** The log shows `401` or "authentication failed".

**Cause:** A typo in the key, the key has been deactivated / deleted, or the protocol field is wrong (OpenAI uses `Authorization: Bearer`, Anthropic uses `x-api-key`).

**Fix:** Check the key status in the console and compare the first and last 4 characters; run the self-check command to confirm.

## 404 Not Found

**Symptom:** Returns `404` or "model not found".

**Cause:** The URL structure is wrong (the Anthropic protocol **should not** include `/v1`, the OpenAI protocol **must** include `/v1`), the model ID is misspelled, or the model is not available to your account.

**Fix:** Use the correct URL format; copy the official model ID from the console; confirm in settings that the model is enabled.

## 402 Payment Required

**Symptom:** `insufficient_balance`, `payment required`, or quota exceeded.

**Fix:** Go to [https://axiomcode.top/billing](https://axiomcode.top/billing) to recharge (we recommend buying a [redemption code](/en/guide/prepare/redeem)).

## 429 Too Many Requests

**Symptom:** Requests are too frequent and get rate-limited.

**Fix:** Lower the number of concurrent requests; avoid continuously rewriting entire pages of large files; if your IP is flagged, switch networks and retry.

## 5xx Server Errors

**Symptom:** Temporary backend load or upstream fluctuation.

**Fix:** Just retry; if the instability persists for more than 10 minutes, contact support.

## Network-layer Failures

**Symptom:** Connection refused, SSL handshake failure, or timeout.

**Fix:** Disable VPN / proxy; switch networks (test with a phone hotspot); calibrate the system clock.

## Client Environment Issues

**Symptom:** The CLI command cannot be found or environment variables don't take effect.

**Fix:** On Windows, restart the terminal after `setx`; on macOS with zsh, write to `~/.zshrc`; use `echo $VariableName` to confirm the variable is output.

---

Next: [FAQ](/en/guide/faq)
