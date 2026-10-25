---
title: Agent authorization and audit architecture
seoTitle: AI agent authorization and audit
order: 2
summary: Approval and audit design that lets AI agents take consequential actions while each action stays traceable to a person.
description: "Authorization and audit architecture for AI agents: ABAC and ReBAC policies, signed per-action approvals, and decision lineage you can query."
deliverables:
  - An authorization model for agents using attribute- and relationship-based access control (ABAC and ReBAC)
  - A per-action approval flow, with signed approvals tied to the tool and its parameters that can be revoked
  - Enforcement at the tool layer, including MCP servers and API gateways
  - Decision lineage linking each action to its inputs, policy checks, model calls and approvals
  - A threat model for agent misuse, such as swapped parameters or replayed approvals
  - A reference architecture and implementation notes for your platform teams
useCases:
  - Agents that initiate payments, trades or treasury operations
  - Agents that change customer records, credit limits or access rights
  - Multi-agent workflows that span several systems
  - Adding approvals and lineage to agents already in production
faqs:
  - q: What is decision lineage for AI agents?
    a: "Decision lineage is a linked record of what led to an agent's action: the request, the documents and data it used, the policies it was checked against, the model calls it made and the approvals it received. It is stored as a graph, so a question like \"who approved this payment, and based on what?\" can be answered with a query."
  - q: What is the difference between ABAC and ReBAC for AI agents?
    a: Attribute-based access control (ABAC) decides access from attributes of the actor, the resource and the request, such as role, amount or time of day. Relationship-based access control (ReBAC) decides from relationships, for example whether the agent is acting for a user who owns the account. Agents usually need both. The relationship establishes whose authority the agent carries; the attributes limit what it can do with it.
  - q: Isn't OAuth enough to control what an agent can do?
    a: OAuth delegates access for a session, and an agent holding a token can usually do anything the token's scope allows until it expires. For consequential actions, agents also need authorization per action, tied to the parameters and revocable while the action is pending. That can be built as a profile on top of OAuth 2.0 Token Exchange (RFC 8693).
---

Agent authorization and audit architecture covers two things: which actions an agent may take, and the record that later shows who approved each one. Many agent projects have the first in some form and very little of the second.

## Scoping an agent's authority

We give each agent the narrowest permissions that let it do its job. Attribute- and relationship-based access control lets a policy say, for example, that an agent may prepare payments up to a set amount, and only for accounts its user owns.

For consequential actions the agent must also obtain a signed approval from a named person. The approval names the tool and a hash of the parameters, expires quickly and can be revoked. It is checked where the action executes, which includes MCP servers and API gateways.

## Lineage

We design decision lineage as a graph linking each action to its request, inputs, policy decisions, model calls and approvals. An auditor's question then becomes a query, and its answer can be verified.

## Misuse

Agents can be steered by the content they read. We threat-model how an agent could act beyond its approval (a swapped amount, a replayed approval, a delegation broader than intended) and block those paths at the point of execution. Instructions in the prompt don't count as a control.
