import { Source } from '../demo-data';

// 15 realistic Slack conversations for Summit Strategy Consulting
export const mockSlackMessages: Source[] = [
  {
    id: 'slack_001',
    appType: 'slack',
    title: '#client-acme',
    subtitle: 'Deal strategy discussion',
    metadata: {
      channel: 'client-acme',
      participants: ['Demo', 'Jennifer Martinez', 'Alex Kumar'],
      date: 'Nov 19, 2025'
    },
    content: `Jennifer Martinez  11:24 AM
Hey team - just got off the call with Sarah Chen from ACME. They're ready to move forward! 🎉

Demo  11:25 AM
That's awesome! What's the timeline looking like?

Jennifer Martinez  11:26 AM
They want Phase 1 done by end of Q1. That's aggressive but doable if we staff it properly.

Alex Kumar  11:28 AM
I can free up bandwidth in January. The Vertex project wraps up Dec 15.

Demo  11:30 AM
Perfect. Let me update the SOW and send it over by EOD. Sarah wants a kickoff meeting first week of December.

Jennifer Martinez  11:32 AM
Sounds good. Also heads up - they specifically asked for me to lead based on the CRM project. Hope that works with everyone's schedule?

Demo  11:33 AM
Absolutely, you've got the relationship. Let's make this one a reference account.

Alex Kumar  11:35 AM
+1. I'll start prepping the cloud migration assessment.`
  },

  {
    id: 'slack_002',
    appType: 'slack',
    title: '#sales-pipeline',
    subtitle: 'Weekly pipeline review',
    metadata: {
      channel: 'sales-pipeline',
      participants: ['Demo', 'Jennifer Martinez', 'Robert Kim', 'Maria Santos'],
      date: 'Nov 12, 2025'
    },
    content: `Demo  2:15 PM
Just had a great discovery call with ACME Corp. They're serious about this transformation project.

Jennifer Martinez  2:17 PM
Nice! What's the size we're looking at?

Demo  2:18 PM
They mentioned $400-500K budget range. 12-month engagement starting Q1.

Robert Kim  2:20 PM
That's perfect timing. We have capacity in Q1. What's the competition look like?

Demo  2:22 PM
They're talking to Deloitte and McKinsey. But I think we have an advantage - they specifically mentioned liking our approach on similar projects.

Jennifer Martinez  2:25 PM
I worked with their CTO on a CRM project 2 years ago. Should I reach out?

Demo  2:26 PM
Absolutely. Personal connection could be huge here. Let's make this one count.

Maria Santos  2:28 PM
I can support on the data warehouse piece if needed. My DataCorp project just moved to maintenance mode.`
  },

  {
    id: 'slack_003',
    appType: 'slack',
    title: '#delivery',
    subtitle: 'Vertex project wrap-up',
    metadata: {
      channel: 'delivery',
      participants: ['Alex Kumar', 'Michael Torres', 'Maria Santos'],
      date: 'Nov 18, 2025'
    },
    content: `Alex Kumar  9:15 AM
Vertex final testing completed successfully. All systems green.

Maria Santos  9:18 AM
Database migration performance even better than projected. 60% improvement in query speed.

Alex Kumar  9:20 AM
Yeah, the client is thrilled. Michael Torres just sent an email saying they might finish early.

Maria Santos  9:22 AM
That would be great for our track record. Early delivery is rare.

Alex Kumar  9:25 AM
Final deliverables review scheduled for Dec 10. Then final payment on Dec 15.

Maria Santos  9:27 AM
Nice! You'll be free for the ACME project in January then?

Alex Kumar  9:28 AM
Exactly. Already started reviewing their infrastructure docs.`
  },

  {
    id: 'slack_004',
    appType: 'slack',
    title: '#general',
    subtitle: 'Team celebration',
    metadata: {
      channel: 'general',
      participants: ['Demo', 'Jennifer Martinez', 'Alex Kumar', 'Maria Santos', 'Robert Kim'],
      date: 'Nov 14, 2025'
    },
    content: `Demo  5:30 PM
Team - just closed FinServe! $185K project signed and sealed.

Jennifer Martinez  5:31 PM
Congrats! That's a great win.

Alex Kumar  5:32 PM
Nice! What's the timeline?

Demo  5:33 PM
Already delivered actually. This was the modernization project we wrapped up early November. This email was the QBR confirmation.

Maria Santos  5:35 PM
Oh perfect! So this is recurring revenue?

Demo  5:36 PM
Potentially. Robert mentioned expanding to European operations. Could be another $200K+ opportunity.

Robert Kim  5:38 PM
We should celebrate. Team lunch Friday?

Demo  5:39 PM
I'm in. Great quarter everyone!`
  },

  {
    id: 'slack_005',
    appType: 'slack',
    title: '#bizdev',
    subtitle: 'Partnership discussion',
    metadata: {
      channel: 'bizdev',
      participants: ['Demo', 'Jennifer Martinez', 'Robert Kim'],
      date: 'Nov 15, 2025'
    },
    content: `Demo  10:45 AM
Got an interesting partnership inquiry from CloudScale. They want to do referral exchanges.

Robert Kim  10:47 AM
CloudScale? The cost optimization platform?

Demo  10:48 AM
Yep. They work with 15 consulting firms on referrals. We send them migration clients, they send us optimization opportunities.

Jennifer Martinez  10:50 AM
Could be good. Our clients often ask about cost management after migrations.

Robert Kim  10:52 AM
What's the economics?

Demo  10:53 AM
They offer our clients 20% discount, we get 15% commission on any sales. Plus they refer migration opportunities to us.

Jennifer Martinez  10:55 AM
I like it. Low risk, potential upside. Let's set up a call.

Demo  10:56 AM
Agreed. I'll schedule something for next week.`
  },

  {
    id: 'slack_006',
    appType: 'slack',
    title: '#sales-pipeline',
    subtitle: 'TechStart opportunity',
    metadata: {
      channel: 'sales-pipeline',
      participants: ['Demo', 'Maria Santos'],
      date: 'Nov 17, 2025'
    },
    content: `Demo  3:20 PM
TechStart just sent clarification questions on the AI implementation proposal.

Maria Santos  3:22 PM
What are they asking about?

Demo  3:23 PM
Data requirements, integrations, detailed timeline, support costs. All reasonable questions.

Maria Santos  3:25 PM
Sounds like they're doing proper due diligence. That's a good sign.

Demo  3:27 PM
Yeah, I think they're serious. They mentioned budget is approved and targeting Q1 start.

Maria Santos  3:29 PM
Nice! That would be a good project for me. I have AI/ML experience from my previous role.

Demo  3:30 PM
Perfect. Let me loop you in once we get the green light.`
  },

  {
    id: 'slack_007',
    appType: 'slack',
    title: '#client-datacorp',
    subtitle: 'Phase 2 expansion',
    metadata: {
      channel: 'client-datacorp',
      participants: ['Demo', 'Maria Santos', 'Robert Kim'],
      date: 'Nov 16, 2025'
    },
    content: `Maria Santos  2:10 PM
Lisa Wang from DataCorp wants to do Phase 2 expansion. $150-200K budget.

Demo  2:12 PM
That's great! What are they looking to add?

Maria Santos  2:13 PM
Predictive analytics capabilities. They want to forecast customer churn and lifetime value.

Robert Kim  2:15 PM
Perfect upsell. We delivered Phase 1 successfully, now they want more.

Maria Santos  2:17 PM
Exactly. Also she wants to do a case study and invited us to speak at their user conference.

Demo  2:19 PM
Love it. Speaking opportunity could generate more leads. Let's definitely pursue this.

Maria Santos  2:20 PM
I'll schedule a scoping call for early December.`
  },

  {
    id: 'slack_008',
    appType: 'slack',
    title: '#team-standup',
    subtitle: 'Daily standup - Nov 20',
    metadata: {
      channel: 'team-standup',
      participants: ['Demo', 'Jennifer Martinez', 'Alex Kumar', 'Maria Santos', 'Robert Kim'],
      date: 'Nov 20, 2025'
    },
    content: `Demo  9:00 AM
Good morning team! Daily standup time.

Alex Kumar  9:01 AM
Vertex: Final testing this week. On track for Dec 15 delivery. No blockers.

Jennifer Martinez  9:02 AM
ACME: Proposal in their hands. Had good follow-up call with Sarah yesterday. Waiting on feedback. Should hear back this week.

Maria Santos  9:03 AM
DataCorp: Platform running smoothly. Working on Phase 2 proposal. Call scheduled for Dec 5.

Robert Kim  9:04 AM
FinServe: QBR prep. Admin stuff. Nothing urgent.

Demo  9:05 AM
Great updates. For context - if ACME closes, we'll hit 140% of Q4 target. Keep pushing!

Jennifer Martinez  9:06 AM
I'm feeling good about ACME. Sarah mentioned board approval.

Demo  9:07 AM
Excellent. Let's stay on it. Thanks everyone!`
  },

  {
    id: 'slack_009',
    appType: 'slack',
    title: '#random',
    subtitle: 'Team chat',
    metadata: {
      channel: 'random',
      participants: ['All Team'],
      date: 'Nov 13, 2025'
    },
    content: `Robert Kim  12:30 PM
Anyone want to grab lunch? Trying the new Thai place.

Maria Santos  12:31 PM
I'm in!

Alex Kumar  12:32 PM
Can't today - client call at 1pm.

Jennifer Martinez  12:33 PM
I'll join. Need a break from proposals.

Demo  12:35 PM
Wish I could but swamped with ACME SOW revision. Bring me back some pad thai?

Robert Kim  12:36 PM
You got it boss!`
  },

  {
    id: 'slack_010',
    appType: 'slack',
    title: '#wins',
    subtitle: 'Celebrating success',
    metadata: {
      channel: 'wins',
      participants: ['Demo', 'All Team'],
      date: 'Nov 12, 2025'
    },
    content: `Demo  4:45 PM
🎉 FinServe just signed the QBR and committed to Q1 2026 European expansion discussion!

Jennifer Martinez  4:46 PM
Fantastic! That's the power of delivering quality work.

Maria Santos  4:47 PM
Love it when projects turn into ongoing relationships.

Alex Kumar  4:48 PM
Robert did great work on that project. Well deserved.

Robert Kim  4:50 PM
Thanks team! Client success is a team effort.

Demo  4:51 PM
100%. This is how we build a sustainable business - happy clients who come back.`
  },

  {
    id: 'slack_011',
    appType: 'slack',
    title: '#sales-pipeline',
    subtitle: 'New inbound lead',
    metadata: {
      channel: 'sales-pipeline',
      participants: ['Demo', 'Jennifer Martinez'],
      date: 'Nov 13, 2025'
    },
    content: `Demo  3:40 PM
New inbound from GlobalManufacturing. ERP modernization project. $300-400K budget.

Jennifer Martinez  3:42 PM
Nice! How'd they find us?

Demo  3:43 PM
Referral from Robert Kim at FinServe. His contact is the IT Director.

Jennifer Martinez  3:45 PM
Referrals are the best leads. What's the timeline?

Demo  3:46 PM
Q2 2026 start. They're evaluating SAP vs cloud ERP options.

Jennifer Martinez  3:48 PM
That's a meaty project. We should bring in an ERP specialist.

Demo  3:49 PM
Agreed. Let me set up discovery call first, then we can figure out team.`
  },

  {
    id: 'slack_012',
    appType: 'slack',
    title: '#tech-talk',
    subtitle: 'Technical discussion',
    metadata: {
      channel: 'tech-talk',
      participants: ['Alex Kumar', 'Maria Santos'],
      date: 'Nov 16, 2025'
    },
    content: `Alex Kumar  4:10 PM
Anyone have experience with Snowflake data warehouse migrations?

Maria Santos  4:12 PM
I do. Implemented it at DataCorp. What's the use case?

Alex Kumar  4:13 PM
ACME Corp. They want to migrate from on-prem Oracle to cloud data warehouse.

Maria Santos  4:15 PM
Snowflake would be perfect for them. Much better than Redshift for their use case.

Alex Kumar  4:17 PM
That's what I was thinking. Can you review the architecture when I draft it?

Maria Santos  4:18 PM
Absolutely. Happy to help.`
  },

  {
    id: 'slack_013',
    appType: 'slack',
    title: '#marketing',
    subtitle: 'Content planning',
    metadata: {
      channel: 'marketing',
      participants: ['Demo', 'Robert Kim'],
      date: 'Nov 11, 2025'
    },
    content: `Robert Kim  11:00 AM
Should we write a case study on the DataCorp analytics platform?

Demo  11:02 AM
Definitely. Lisa even offered to do a joint case study. Great for lead gen.

Robert Kim  11:04 AM
I'll draft an outline. What angle should we take?

Demo  11:05 AM
Focus on ROI. They went from manual reporting to automated insights. Saved 40 hours per month.

Robert Kim  11:07 AM
Perfect. I'll also pitch the user conference speaking opportunity.

Demo  11:08 AM
Good idea. Exposure to their network could be valuable.`
  },

  {
    id: 'slack_014',
    appType: 'slack',
    title: '#client-vertex',
    subtitle: 'Project delivery',
    metadata: {
      channel: 'client-vertex',
      participants: ['Alex Kumar', 'Demo'],
      date: 'Nov 19, 2025'
    },
    content: `Alex Kumar  4:50 PM
Michael Torres just confirmed - they want to wrap early. Dec 12 instead of Dec 15.

Demo  4:52 PM
Even better! Early delivery is a great problem to have.

Alex Kumar  4:53 PM
Right? They're super happy with everything. Already talking about future projects.

Demo  4:55 PM
Make sure we document this for case studies. Early delivery + under budget = perfect reference.

Alex Kumar  4:56 PM
Already on it. I'm preparing a project summary for our portfolio.

Demo  4:57 PM
Excellent work Alex. This is the kind of delivery that builds reputation.`
  },

  {
    id: 'slack_015',
    appType: 'slack',
    title: '#leadership',
    subtitle: '2026 planning',
    metadata: {
      channel: 'leadership',
      participants: ['Demo', 'Jennifer Martinez', 'Robert Kim'],
      date: 'Nov 14, 2025'
    },
    content: `Demo  2:00 PM
Started thinking about 2026 goals. If we close ACME and NetLogic, Q1 is looking really strong.

Jennifer Martinez  2:02 PM
NetLogic would be huge. $600-800K project over 18 months.

Robert Kim  2:04 PM
Do we have the capacity for both ACME and NetLogic simultaneously?

Demo  2:06 PM
We'd need to hire. Probably 2-3 senior consultants.

Jennifer Martinez  2:08 PM
I know a few people who might be interested. Let me reach out quietly.

Demo  2:10 PM
Good idea. Better to have options ready if we need to scale quickly.

Robert Kim  2:12 PM
Also should we look at opening a satellite office? A lot of clients are on East Coast.

Demo  2:14 PM
Let's table that for Q2. One step at a time. Focus on delivery first.`
  }
];
