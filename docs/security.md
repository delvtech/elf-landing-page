# Element Bug Bounty Program 
*An ongoing bug bounty for the Element Protocol's smart contracts*

## Contents
* Overview
* Scope
* Rewards 
* Eligibility
* Disclosure and Reporting Guidelines
* Terms

## Overview
Welcome to Element Finance’s Bug Bounty Program! Starting today April 28, the Element Finance ([elf-contracts repository](https://github.com/element-fi/elf-contracts)) is subject to the Element Finance Bug Bounty Program to incentivize responsible bug disclosure.

Element has completed smart contract audits with [Runtime Verification](https://runtimeverification.com/) and [PeckShield](https://peckshield.com/). We will also be running a continuous bug bounty program for the Element Protocol core contracts release.

The scope of the program ranges from critical to low severity bugs. The bounty program will pay out rewards according to the severity of the vulnerability. See the eligibility section below for more details. The final reward amount is at the sole discretion of Element Finance and will be paid in the specified sum of either USDC or DAI.

You can submit a bug by emailing security@element.fi and earn a reward. Please see our Scope, Disclosure, and Eligibility sections for more details.

## Scope
*This section lays out the basic structure of Element Finance V1* 

### Architecture Overview
The Element Protocol’s core codebase has four main parts: a tokenized wrapper on yield-bearing positions, a Tranche contract that creates and redeems fixed yield coupons, a create2 based deployment system, and a user proxy that wraps common sets of user actions. Additionally, the Protocol has specific integrations for several systems including a Yearn integration and a custom Balancer V2 AMM.

### Scoping and Desired Results
All of the smart contracts written by Element that have been deployed are in-scope for this bug bounty program. The following is a non-exclusive list of the smart contracts and the properties we are trying to ensure. Bugs do not have to violate one of these properties to qualify for the bug bounty. Front end and other supporting code is by default not covered by this bug bounty program, however, if you identify problems in the codebase, they may be rewarded by the team but may be subject to different payout levels.

**Source Code:** https://github.com/element-fi/elf-contracts/tree/340025e130b9eb8a5a9f483c431394ef7d5351a0

**Submissions should be based on commit hash:** `340025e130b9eb8a5a9f483c431394ef7d5351a0`

**For the Core Contracts:**
* [WrappedPosition](https://github.com/element-fi/elf-contracts/blob/340025e130b9eb8a5a9f483c431394ef7d5351a0/contracts/WrappedPosition.sol)
* [Tranche](https://github.com/element-fi/elf-contracts/blob/340025e130b9eb8a5a9f483c431394ef7d5351a0/contracts/Tranche.sol)
* [TrancheFactory](https://github.com/element-fi/elf-contracts/blob/340025e130b9eb8a5a9f483c431394ef7d5351a0/contracts/factories/TrancheFactory.sol)
* [InterestToken](https://github.com/element-fi/elf-contracts/blob/340025e130b9eb8a5a9f483c431394ef7d5351a0/contracts/InterestToken.sol)
* [InterestTokenFactory](https://github.com/element-fi/elf-contracts/blob/340025e130b9eb8a5a9f483c431394ef7d5351a0/contracts/factories/InterestTokenFactory.sol)
* [UserProxy](https://github.com/element-fi/elf-contracts/blob/340025e130b9eb8a5a9f483c431394ef7d5351a0/contracts/UserProxy.sol)
* [Authorizable](https://github.com/element-fi/elf-contracts/blob/340025e130b9eb8a5a9f483c431394ef7d5351a0/contracts/libraries/Authorizable.sol)

We want to be confident that:
* No user either loses or loses access to funds.
* No user funds are moved without user permission.
* No Principal or Yield tokens can be minted that are not fully backed.
* The user proxy always returns the correct amount to users.

**For the Integration Contracts:**
* [YVaultAssetProxy](https://github.com/element-fi/elf-contracts/blob/340025e130b9eb8a5a9f483c431394ef7d5351a0/contracts/YVaultAssetProxy.sol)

We want to be confident that:
* No flash loan or other attack can manipulate the interest earned or balance calculations.
* These integrations will always be able to retrieve funds from the protocols.
* There are no conditions where these contracts will lose money.

**For the Custom Balancer Curve:**
* [ConvergentCurvePool](https://github.com/element-fi/elf-contracts/blob/340025e130b9eb8a5a9f483c431394ef7d5351a0/contracts/ConvergentCurvePool.sol)
* [ConvergentCurvePoolFactory](https://github.com/element-fi/elf-contracts/blob/340025e130b9eb8a5a9f483c431394ef7d5351a0/contracts/factories/ConvergentPoolFactory.sol)

We want to be confident that:
* The math in the contract matches the math we intended.
* The error conditions mean that the calculation is within a tolerance of the real result.
* There is no way to manipulate the pool to produce a profit for an attacker.

## Rewards
The severity of reported vulnerabilities will be graded according to the [CVSS](https://www.first.org/cvss/) (Common Vulnerability Scoring Standard). Reference the following table as a guideline for reward decisions:



| Critical (CVSS 9.0 - 10.0) | High (CVSS 7.0 - 8.9) | Medium (CVSS 4.0 - 6.9) | Low (CVSS 0.0 - 3.9) |
| -------------------------- | --------------------- | -------- | ------------ |
| $20,000-$100,000    | $5,000-$20,000   | $1,000-$5,000    | $0-$1,000 |



In addition to assessing severity, the rewards will be considered based on the impact of the discovered vulnerability as well as the level of difficulty in discovering such vulnerability.

## Eligibility

To be eligible for a reward under the Element Bug Bounty Program, you must:

* Discover a previously unreported and non-public vulnerability that would result in a loss of or a lock on any ERC-20 token on Element. Each bug will only be considered for a reward once. This does not include third-party platforms interacting with Element. 
* Be the first to disclose the unique vulnerability to security@element.fi, in compliance with the disclosure requirements highlighted in the above section.
* Provide sufficient information to enable our team to reproduce and fix the vulnerability.
* Not engage in any unlawful conduct when disclosing the bug to security@element.fi, including through threats, demands, or any other coercive tactics.
* Not exploit the vulnerability in any way, including through making it public or by obtaining a profit (other than the reward subject under this Program).
* Submit only one vulnerability per submission, unless you need to bundle vulnerabilities together in order to provide an accurate assessment of impact regarding any of the vulnerabilities.
* Not submit a vulnerability caused by an underlying issue that is the same as an issue on which a reward has been paid under this Program.
* Not be one of our current or former employees or contractors. 

## Disclosure and Reporting Guidelines
We ask that all bug bounty hunters, security engineers, and researchers: 
* Make it a priority to avoid privacy violations, degradation of user experience, and disruption to production systems during security testing.
* Report vulnerabilities as soon as they have been discovered and keep them confidential between yourself and the Element team until the issue(s) has been resolved. 
* Use the dedicated communication channel (security@element.fi) to report vulnerability information to us.
* Provide the team with at least 5 working days to investigate the issue and get back to you before taking any further action. 

#### How to Report a Bug
* Send your bug report to security@element.fi, including the following information below:
  * Your Name
  * Description of the Vulnerability or Bug
  * Attack Scenario (if applicable)
  * Components (contracts affected)
  * Reproduction
  * Other Details
* Use the following email subject line when submitting your report:
  * Element Bug Bounty [SEVERITY LEVEL] (the severity level of the issue based on your understanding of the vulnerability).
* Please make an effort to include as much information in your bug report as you can, including a description of the bug, its potential impact, and any steps for reproducing it. 

Once the issue has been disclosed, the Element team will review the information, assign it a severity level, and an Element team member will contact you with the next steps. 

## Terms
By submitting your report, you grant Element Finance the rights to validate, mitigate, and disclose the vulnerability. All bug bounty reward decisions, including eligibility, amounts for rewards, and how such rewards will be paid, are made at Element’s sole discretion. The terms and conditions of this Bug Bounty Program may be altered at any time.
