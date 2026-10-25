---
title: AI-assisted SDLC with compliance built in
seoTitle: Compliant AI-assisted software development
order: 3
summary: AI coding assistants and agents in regulated engineering teams, with change control and audit evidence captured by the pipeline.
description: "AI-assisted software development for regulated teams: change requests as code, evidence-tagged pipelines and limited roles for coding agents."
deliverables:
  - A development lifecycle that defines where AI may work and where people must approve
  - Roles for coding agents with limited permissions and defined handoffs
  - Change requests stored as code and approved through normal review
  - Evidence tags linking each requirement to its code, tests and approvals
  - Stage documentation generated and versioned in git
  - A mapping to SOX, PCI DSS and DORA change-management controls
useCases:
  - Introducing AI coding assistants and agents at a bank or insurer
  - Passing SOX change-management testing with AI involved in development
  - Reducing the manual work of assembling release evidence
  - Giving many teams one agreed way of using AI in development
faqs:
  - q: Can regulated teams use AI coding agents and still pass an audit?
    a: Yes, provided the lifecycle is designed for it. Each change needs a traceable request, an approver who did not write it, and proof that tests ran. If the pipeline records those automatically, an AI agent can write the code and the audit trail is still complete.
  - q: What is change request as code?
    a: The change request (its scope, risk rating, approvals and links to tests) is a versioned file in the same repository as the code. It is approved through the normal review process, so the evidence auditors ask for is produced as part of shipping.
---

An AI-assisted development lifecycle with compliance built in lets a regulated engineering team use AI coding assistants and agents without opening gaps in change control. Auditors still need to see who requested and approved each change, and the lifecycle keeps that record intact when an agent wrote the code.

## Define the lifecycle first

Before rolling out tools more widely, we agree which stages AI agents may carry out, what they may touch, and where a named person has to review. Coding agents get roles with limited permissions, and the agent that writes a change cannot approve it.

## Evidence produced by the pipeline

Change requests live as code beside the software they change. Evidence tags connect requirements to code, tests and approvals, and stage documentation is versioned in git. When an auditor asks for release evidence, it is already there.

## Mapping to existing controls

We map the lifecycle to the change-management and resilience controls you already report against under SOX, PCI DSS and DORA. Bringing AI into development shouldn't require a new control framework.
