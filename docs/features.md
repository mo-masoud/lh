# 📦 LifeHub — Modules Overview

## 🔐 1. Password Manager

- Users can choose between:
  - **Normal Password**
  - **SSH Password** (not enabled by default — users must enable it first)

### 🔑 Normal Password:

- Fields:
  - **Username / Email**
  - **Password** (or generate random)
  - **URL** _(optional)_
  - **Note** _(optional)_
  - **Folder** _(optional)_ — e.g., `Work`, `Personal`, etc.
  - **Expiry** _(optional)_ — input like `3m` = 3 months, `1y` = 1 year
- Users can organize passwords into **folders**.

### 🖥️ SSH Password:

- Fields:
  - **Username**
  - **IP Address**
  - **Password**
  - **Note** _(optional)_
  - **Port** _(optional)_
  - **Folder** _(optional)_
- Users can enter a full CLI string like:
  ```
  ssh root@127.0.0.1
  ```
  → The system will parse `root` and `127.0.0.1` automatically.

### 📋 Features:

- When user copies:
  - **Password**
  - **Username**
  - **IP** or **SSH CLI**  
    → The system will update:
    - `last_copied_at`
    - `copy_count`
- Users can view **all passwords (normal & SSH)** in a unified list/table.
- Users can:
  - **Search**
  - **Sort** (default: by `last_copied_at`)
  - **Filter** (by folder or type)
  - **Combine filters**
- Expired passwords should be:
  - **Flagged or labeled**
  - Trigger **notifications**
- **Audit log** for each password:
  - Track changes
  - Show previous values (especially for password updates)

---

## 💰 2. Savings Tracker

### 🏦 General Setup:

- Each user defines a **default currency** (e.g., `EGP`)
- User can define multiple **savings types**, like:
  - `EGP`, `USD`, `Gold 24`, `Gold 21`, etc.
  - Each type has an **exchange rate** to the default currency
    - Example: `USD` = `50` (to EGP)
  - Exchange rate can be:
    - **Manual**
    - **Automatic** _(planned)_

### 💼 Accounts:

- User can have multiple **accounts**, e.g.:
  - `Bank 1`, `Bank 2`, `Home 1`, `Safe`, etc.
- For each account, the user can define initial savings like:
  - `5000 USD` in Bank 1
  - `2000 EGP` in Home
  - `20g Gold 24` in Safe

### 📅 Transactions:

- User can log **daily transactions**:
  - Select **type** (from user-defined savings types with `can_be_used_in_transactions = true`)
  - **Amount**
  - **Direction**:
    - `Income`
    - `Expense`
    - `Transfer` (between types or accounts)
  - **Date** (not in future)
  - **Category** (e.g. `Food`, `Clothes`, `Salary`)
    - `Transfer` has a static category
  - **Note** _(optional)_

### 🔁 Monthly Recurring Transactions:

- User can define expected transactions (e.g. salary, rent)
- On the **first day of the month**, system shows a notification with 3 actions:
  1. **Save**
  2. **Edit & Save**
  3. **Dismiss**
- If not saved within **5 days**, the transaction disappears
- The saved transaction date = **user's action date** (not the 1st)

### 💱 Currency Conversion:

- Every transaction saved in:
  - **Primary currency**
  - **Secondary currency**
- Rate used = **rate at transaction time**, not current

### 📊 Auto Transaction Warnings:

- Before saving a new **auto expense**, show projected **total**
- Show **progress bar** of auto-expenses vs auto-income
  - E.g., If auto-income = `1000 USD`, and adding new auto-expense of `300 USD`, show `30%`

### 🏷️ Categories & Goals:

- Users can define custom **transaction categories**
- Users can define **savings goals**, e.g.:
  - Goal: `Buy a house → 100,000 USD`
  - System converts to:
    - **Primary currency**
    - **Secondary currency**
    - Using **real-time rates**

---

## 📊 Dashboard

- Central overview with **quick access to each module**
- Display key **stats**, **alerts**, and **summaries**
- Should be modular, clean, and actionable
