---
title: Context engineering and knowledge graphs
order: 4
summary: A validated knowledge graph and governed data sources for LLM agents to draw on.
description: "Context engineering for RAG and AI agents: an enterprise ontology, SHACL validation, and governed data sources that agents can rely on."
deliverables:
  - A domain ontology covering the entities, systems and rules your agents reason about
  - SHACL constraints that validate the knowledge graph whenever it changes
  - Owners, freshness rules and access rules for every source that feeds your agents
  - Retrieval that combines graph queries with search
  - Competency questions and tests showing that the graph can answer what agents ask
  - A phased build plan that starts with one domain
useCases:
  - Grounding agents in your products, policies, systems and their owners
  - Replacing vector-only RAG where answers must be exact
  - Making architecture and control knowledge queryable for risk teams
  - Limiting each agent to the context its user is entitled to see
faqs:
  - q: What is context engineering?
    a: "Context engineering is deciding what information an AI model or agent receives: which sources, in what structure, and under which access rules. For agents it affects behavior more than prompt wording does, because an agent given stale or unauthorized context will act on it with confidence."
  - q: When is a knowledge graph better than vector search?
    a: Vector search returns passages similar to the question. That helps with open-ended questions but is unreliable when there is one correct answer, such as which system owns a process or which policy applies to an action. A validated knowledge graph answers those precisely and can show how it reached the answer. Search still handles unstructured documents alongside it.
---

Context engineering gives AI agents an accurate picture of the organization they work in: what exists, how the parts relate, who owns them and who may see them. Many agent failures in production come down to context. The model behaved as designed but was handed information that was wrong, out of date or outside the user's permissions.

## The knowledge graph

We model your domain as an ontology, a precise vocabulary for the entities, systems, policies and relationships agents reason about, and validate it with SHACL constraints on every change. Competency questions set out what the graph must be able to answer, and tests check that it does.

## Governed sources

Each source that feeds your agents has an owner, freshness rules and access rules. An agent receives only the context its user is entitled to see, and each answer can be traced back to its source.

## Retrieval

Graph queries handle precise questions and search handles unstructured documents; RAG that combines the two holds up better on high-stakes questions. We build in phases, starting with a single domain.
