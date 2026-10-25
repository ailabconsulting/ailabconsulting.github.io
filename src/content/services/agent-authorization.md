---
title: Approval and audit architecture
seoTitle: AI agent approval and audit architecture
order: 2
summary: Every consequential agent action approved by a named person and recorded, enforced where the action runs.
description: Approval and audit architecture for AI agents in financial firms. Per-action human approval, scoped permissions and a decision record auditors can query.
deliverables:
  - Access policies that limit what each agent can do (ABAC and ReBAC)
  - Signed approvals tied to the exact action and its parameters, checked before it runs
  - A decision record linking each action to its inputs, policies and approver
  - Agents grounded in a governed knowledge graph, so they act on approved data
faqs:
  - q: Isn't OAuth enough to control an AI agent?
    a: OAuth grants access for a session. An agent also needs approval for each consequential action, tied to its parameters and revocable until it runs. That can be built on top of OAuth 2.0 Token Exchange (RFC 8693).
---

Agents can prepare payments, change records and contact customers. We design the controls that make those actions safe to allow. Each agent gets narrow permissions, consequential actions need a named approver, and every decision is recorded so an auditor's question becomes a query. Controls are enforced at the tool layer, including MCP servers and API gateways.
