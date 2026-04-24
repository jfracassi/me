export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  summary: string[];
  detailed: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: 'WellnessLiving Systems Inc',
    role: 'PHP Developer',
    period: 'November 2021 – December 2023',
    summary: [
      'Developed core features for wellness platform serving 20M+ users, contributing to successful PE investment.',
      'Architected and implemented comprehensive analytics solution integrating Google Analytics and Meta Pixel, enabling businesses to track customer journey across main application and white-label platforms.',
      'Evaluated and integrated third-party image markup tool, implementing hierarchical image defaults (global / business-type / owner / staff) for specific feature functionality.',
      'Built reusable PHP modules and components focusing on performance and testability, while maintaining code quality through rigorous review processes.',
      'Collaborated with cross-functional teams to integrate frontend components and optimize data storage solutions.',
    ],
    detailed: [
      'Researched, selected, and incorporated 3rd party image mark-up tool, allowing for a global default image, or one set by business type, by the business owner, or a staff member on an individual basis.',
      'Researched and implemented Google Analytics and Meta Pixel Analytics for use by the business to track numerous client actions throughout the Client Web Application and White Label app.',
      'Integrated user-facing elements developed by front-end developers.',
      'Built efficient, testable, and reusable PHP modules.',
      'Integrated data storage solutions.',
      'Collaborated with other departments in identifying and remediating software bugs.',
      'Code review and testing: Jira Project Manager, Fisheye, Selenium Testing.',
    ],
  },
  {
    company: 'Gardien Services Canada',
    role: 'Senior Full Stack Developer',
    period: 'April 2010 – November 2021',
    summary: [
      'Served as primary developer for OnTrack, a critical LAMP-stack MES/ERP system supporting international circuit board QA operations.',
      'OnTrack 1.0 (Sole Developer): Maintained and enhanced existing system; added multi-language support, job cycle-time tracking, automated PDF certificate generation, training management, calibration tracking, Perl file archiving scripts, and a CRM with automated follow-up workflows.',
      'OnTrack 2.0 (Lead Developer): Led architectural redesign; implemented complete action logging, automated operator qualification enforcement, Bootstrap/jQuery/AJAX frontend rebuild, Power BI KPI integration, and CodeIgniter MVC migration.',
    ],
    detailed: [
      'Created OnTrack 2.0 (featuring major enhancements over previous iteration) — LAMP stack.',
      'Improved security: Logging of every operator action and every database change query for full traceability.',
      'Expired training will disqualify an operator from performing certain functions.',
      'Expired maintenance records will not allow an operator to record any test results from that equipment.',
      'Front End: Bootstrap, jQuery, JSON/AJAX.',
      'Back End: MySQL, PHP, CodeIgniter.',
      'KPI Reports: Microsoft Power BI.',
      'Maintained and enhanced OnTrack, a complex web-based (LAMP) custom MES/ERP system (PHP, MySQL, JavaScript): added multi-language support, created new and updated existing auto-generated certificates in PDF format, created functions to more accurately track job cycle-times, created a report system aggregating throughput and sales data from all 25 locations across 5 countries.',
      'Created a system for administering training and recording results.',
      'Created a means to track annual and preventative maintenance and calibrations performed on equipment.',
      'Created Perl scripts to automate time-consuming file archiving that was previously done manually.',
      'Maintained Gardien Customer Portal — allows customers to log in and check on information and status of existing and previous jobs.',
      'Created Gardien CRM site: sales reps can track customer contacts, send newsletters, customers can unsubscribe, automatic follow-up reminders, management global report tools.',
    ],
  },
  {
    company: 'Coretec Inc',
    role: 'Full Stack Developer',
    period: 'February 2005 – October 2009',
    summary: [
      'Developed and maintained critical applications for circuit board manufacturing operations.',
      'Designed and implemented in-house solution replacing third-party system, eliminating $15K annual licensing costs.',
      'Developed and maintained various applications using Classic ASP, MSSQL, Perl, C#, and Delphi.',
      'Created real-time monitoring and support systems improving manufacturing efficiency.',
      'Streamlined Front End Engineering processes through custom application development.',
    ],
    detailed: [
      'Maintained and designed new features for an ASP/MSSQL web application for the Front End Engineering department.',
      'Created Perl scripts for Genesis (a CAM program used in the creation of PCBs).',
      'Co-developed a program used to download drill programs to networked Excellon and Hitachi CNC drill machines (C#).',
      'Designed and maintained GUI for CoreStack™, an Engineering program designed in-house used to plan stackups for PCBs (C#).',
      'Maintained a Delphi-based rule set for Engenix (a program that generated instructions for PCB manufacturing), ensuring that it was always up to constantly improving standards.',
    ],
  },
  {
    company: 'Cyrion Solutions / The CableShoppe Canada',
    role: 'Software Developer',
    period: 'June 2003 – May 2004',
    summary: [
      'Designed and implemented multi-threaded testing framework for cable TV set-top boxes.',
      'Created diagnostic utilities improving quality control processes.',
      'Developed automated software loading systems increasing operational efficiency.',
    ],
    detailed: [
      'Designed multithreaded Test/Utility Ping program used to test responsiveness of multiple cable modems after repair (VB.Net).',
      'Designed multithreaded Diagnostics Loader and Dumper for Scientific Atlanta cable TV set-top boxes (VB6).',
      'Designed program to run an Automated Test Equipment station for Scientific Atlanta cable TV set-top boxes which interacted with various pieces of test equipment through a serial GPIB connection (VB6).',
      'Worked on a team debugging a networked database Inventory-Tracking Accounting package (VBA).',
    ],
  },
];

export const additionalExperience: ExperienceEntry[] = [
  {
    company: 'Bell Canada',
    role: 'Signature Service Business Technician',
    period: 'Summer 2001',
    summary: [
      'Bell Mobility module and IBM module data trouble call center — provided front line support to business customers experiencing technical difficulties and kept the customer up to date with progress reports.',
      'Weekend Dispatcher — assigned and dispatched field technicians to jobs during off-duty hours and logged progress resolution in the trouble ticket.',
    ],
    detailed: [],
  },
  {
    company: 'Bell Canada',
    role: 'ATM Operations Center Business Technician',
    period: 'Summer 2000',
    summary: [
      'ATM provisioning — provisioned NewBridge and Cisco switches, Cisco routers, and turned up ATM soft circuits.',
      'Hyperstream Testboard Controller — managed high volume of incoming calls to the Hyperstream Test Center.',
    ],
    detailed: [],
  },
  {
    company: 'Bell Canada',
    role: 'Extended Help Desk Business Technician',
    period: 'Summer 1999',
    summary: [
      'Provided front line support to business customers experiencing technical difficulties and kept the customer up to date with progress reports during off hours.',
    ],
    detailed: [],
  },
];
