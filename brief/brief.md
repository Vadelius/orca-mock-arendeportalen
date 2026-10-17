# Ärendeportalen — product brief (MOCK)

MOCK document for testing Orca. The municipality, people and figures are invented.

## Background

Residents of the pretend municipality of Mockby file cases (building permits, parking permits, school transport, noise complaints) by email and paper forms. Case handlers retype them into the case system, and residents phone in to ask how their case is going. Ärendeportalen replaces the email and paper route with one web portal.

## Goals

- Residents file a case online in under ten minutes, without phoning anyone.
- Residents can see where their case stands without phoning.
- Case handlers stop retyping cases.

## Requirements

### Filing a case

- A resident files a new case online: they choose a category, give a title and a description, may attach files, and give an email address for the receipt.
- When a case is filed, the resident sees a case number at once and receives a receipt by email with the case number and what happens next.
- A resident can save a half-filled case as a draft and come back to it. Drafts are kept for 30 days and then removed.
- The case form works with a keyboard and a screen reader and meets WCAG 2.2 AA.

### Following a case

- A resident sees every case they have filed with its status: Received, In progress or Decided.
- A resident can add information to an open case, and the case handler sees it on the case.

### Handling cases

- A case handler sees a queue of new cases that can be filtered by category and status.
- A case handler can ask the resident for more information; the case then waits on the resident.
- A case that has had no decision 14 days after it was filed is flagged to the case handler's team lead.
- A team lead can export the case list for a period as a CSV file for reporting.

### Privacy

- A closed case's personal data is removed two years after the case was closed.
- Residents sign in with BankID before they can see their cases.

## Out of scope

- Payments for permits.
- A mobile app; the portal works in a phone's browser.

## Contacts (mock)

- Product owner: Mock Maria (Mockby municipality).
- Project lead: the supplier's project lead.
