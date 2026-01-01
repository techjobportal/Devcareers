// At the top of your file - Image Imports
import reactVsNext from '../../assets/reactVSnextjs.png';
import promiseVsAsync from '../../assets/Promise vs Async_Await.png';
import fresherHiring from '../../assets/fresherhiring.png';
import jsCheatsheet from '../../assets/javascript cheatsheet free.png';
import javaCheatsheet from '../../assets/javacheatsheet.png';
import mernRoadmap from '../../assets/MERN roadmap.png';
import mongoCheatsheet from '../../assets/mongodb cheatsheet.png';
import oopsConcept from '../../assets/OOPS Concept in java.png';
import jsApis from '../../assets/20JSapis.png';
import htmlCssInterview from '../../assets/htmlcssinterviewques.png';
import cssCheatsheet from '../../assets/csscheatsheet.png';
import mustDoLeetcode from '../../assets/100 must do leetcode problems.png';
import codingPrinciples from '../../assets/7 coding principles.png';
import pentest from '../../assets/pentest.png';
import oracleDsa from '../../assets/40oracle.png';
import redisCheatsheet from '../../assets/redischeatsheet.png';
import companyWise from '../../assets/15 companywise.png';
import dsaQuestions from '../../assets/100 dsa.png';
import sqlCheatsheet from '../../assets/sqlcheatsheet.png';
import gitCheatsheet from '../../assets/git cheatsheet.png';
import playwright from '../../assets/Playwright.png';
import sql0to100 from '../../assets/sql0to100.png';
import nodeCheatsheet from '../../assets/nodejscheatsheet.png';
import frontendNotes from '../../assets/htmlcssinterviewques.png';
import mernMaster from '../../assets/mernmaster.png';
import reactInterview8PDF from '../../assets/40 react.js interview ques.png';
import top50React from '../../assets/50reactinterviewqna.png';
import jsCheatsheet50 from '../../assets/55page js cheatsheet.png';
import jsMethods from '../../assets/100+ js methods.png';
import js100Interview from '../../assets/100jsinterview.png';
import java150Interview from '../../assets/150java.png';
import nodeDeployment from '../../assets/0-100node.js.png';
import node40Interview from '../../assets/40+ node js.png';
import resumeTips from '../../assets/resumetips.png';
import hremails from '../../assets/hremails.png'

const resourceData = [
  {
    id: 0,
    title: "React.js Vs Next.js Notes",
    description: "Comprehensive comparison guide between React.js and Next.js frameworks",
    price: "Free",
    link: "https://topmate.io/meet_g/1850867",
    image: reactVsNext
  },
  {
    id: 1,
    title: "Promise vs Async_Await",
    description: "Clear explanation of asynchronous JavaScript patterns and their differences",
    price: "Free",
    link: "https://topmate.io/meet_g/1850861",
    image: promiseVsAsync
  },
  {
    id: 2,
    title: "List of Companies hiring freshers offcampus",
    description: "Curated list of companies actively hiring fresh graduates off-campus",
    price: "Free",
    link: "https://topmate.io/meet_g/1850858",
    image: fresherHiring
  },
  {
    id: 3,
    title: "JavaScript Cheatsheet 20+ Pages",
    description: "Extensive JavaScript reference guide covering core concepts and syntax",
    price: "Free",
    link: "https://topmate.io/meet_g/1850857",
    image: jsCheatsheet
  },
  {
    id: 4,
    title: "Java Cheatsheet",
    description: "Quick reference guide for Java programming language fundamentals",
    price: "Free",
    link: "https://topmate.io/meet_g/1850855",
    image: javaCheatsheet
  },
  {
    id: 5,
    title: "MERN Stack Roadmap (0 - 100)",
    description: "Complete learning path from beginner to advanced MERN stack development",
    price: "Free",
    link: "https://topmate.io/meet_g/1850845",
    image: mernRoadmap
  },
  {
    id: 6,
    title: "MongoDB Cheatsheet",
    description: "Essential MongoDB commands and operations reference guide",
    price: "Free",
    link: "https://topmate.io/meet_g/1850836",
    image: mongoCheatsheet
  },
  {
    id: 7,
    title: "OOPS Concept in Java – Complete Notes + Code",
    description: "Comprehensive guide to Object-Oriented Programming concepts with practical examples",
    price: "Free",
    link: "https://topmate.io/meet_g/1850830",
    image: oopsConcept
  },
  {
    id: 8,
    title: "20 JavaScript APIs",
    description: "Collection of 20 essential JavaScript APIs every developer should know",
    price: "Free",
    link: "https://topmate.io/meet_g/1850825",
    image: jsApis
  },
  {
    id: 9,
    title: "HTML CSS Interview Questions",
    description: "Common interview questions and answers for HTML and CSS",
    price: "Free",
    link: "https://topmate.io/meet_g/1850823",
    image: htmlCssInterview
  },
  {
    id: 10,
    title: "CSS Complete Cheatsheet",
    description: "Comprehensive CSS properties and selectors reference guide",
    price: "Free",
    link: "https://topmate.io/meet_g/1850815",
    image: cssCheatsheet
  },
  {
    id: 11,
    title: "100 Must Do Leetcode Problems",
    description: "Curated list of essential LeetCode problems for interview preparation",
    price: "Free",
    link: "https://topmate.io/meet_g/1850812",
    image: mustDoLeetcode
  },
  {
    id: 12,
    title: "7 Coding Principles Every Developer Should Know",
    description: "Fundamental coding principles for writing clean and maintainable code",
    price: "Free",
    link: "https://topmate.io/meet_g/1850801",
    image: codingPrinciples
  },
  {
    id: 13,
    title: "100+ Tips, Templates, Harvard Sample & Rules",
    description: "Professional resume building guide with templates and expert tips",
    price: "₹29",
    link: "https://topmate.io/meet_g/1809459",
    image: resumeTips
  },
  {
    id: 14,
    title: "Pentest CheatSheets",
    description: "Essential penetration testing commands and techniques reference",
    price: "₹9",
    link: "https://topmate.io/meet_g/1851077",
    image: pentest
  },
  {
    id: 15,
    title: "Oracle - DSA Interview Question with Solutions",
    description: "Data structures and algorithms questions specifically for Oracle interviews",
    price: "₹9",
    link: "https://topmate.io/meet_g/1851069",
    image: oracleDsa
  },
  {
    id: 16,
    title: "Redis Cheatsheet",
    description: "Quick reference guide for Redis commands and data structures",
    price: "₹9",
    link: "https://topmate.io/meet_g/1851059",
    image: redisCheatsheet
  },
  {
    id: 17,
    title: "15+ CompanyWise Leetcode",
    description: "LeetCode problems organized by top tech companies",
    price: "₹29",
    link: "https://topmate.io/meet_g/1851044",
    image: companyWise
  },
  {
    id: 18,
    title: "100+ DSA Questions with solutions",
    description: "Comprehensive collection of data structures and algorithms problems with solutions",
    price: "₹9",
    link: "https://topmate.io/meet_g/1851020",
    image: dsaQuestions
  },
  {
    id: 19,
    title: "SQL Cheatsheet",
    description: "Complete SQL commands and query reference guide",
    price: "₹9",
    link: "https://topmate.io/meet_g/1850972",
    image: sqlCheatsheet
  },
  {
    id: 20,
    title: "Git complete Cheatsheet",
    description: "Essential Git commands and workflows for version control",
    price: "Free",
    link: "https://topmate.io/meet_g/1850821",
    image: gitCheatsheet
  },
  {
    id: 21,
    title: "Test Automation with Playwright & TypeScript",
    description: "Guide to automated testing using Playwright and TypeScript",
    price: "Free",
    link: "https://topmate.io/meet_g/1850892",
    image: playwright
  },
  {
    id: 22,
    title: "SQL Beginner to Advanced (0 - 100)",
    description: "Complete SQL learning roadmap from basics to advanced concepts",
    price: "Free",
    link: "https://topmate.io/meet_g/1850885",
    image: sql0to100
  },
  {
    id: 23,
    title: "Node.js Cheat Sheet",
    description: "Quick reference for Node.js modules and essential APIs",
    price: "Free",
    link: "https://topmate.io/meet_g/1851107",
    image: nodeCheatsheet
  },
  {
    id: 24,
    title: "FrontEnd Notes - Html, AJAX, jQuery, Bootstrap, JS",
    description: "Comprehensive frontend development notes covering multiple technologies",
    price: "Free",
    link: "https://topmate.io/meet_g/1851235",
    image: frontendNotes
  },
  {
    id: 25,
    title: "Master the MERN Stack 270+ pages",
    description: "In-depth MERN stack guide with extensive coverage and examples",
    price: "₹29",
    link: "https://topmate.io/meet_g/1851231",
    image: mernMaster
  },
  {
    id: 26,
    title: "React.js 0 - Interview Resources (8 PDFs)",
    description: "Complete React.js interview preparation bundle with 8 comprehensive PDFs",
    price: "₹39",
    link: "https://topmate.io/meet_g/1851224",
    image: reactInterview8PDF
  },
  {
    id: 27,
    title: "Top 50 React Interview Questions",
    description: "Most commonly asked React interview questions with detailed answers",
    price: "₹29",
    link: "https://topmate.io/meet_g/1851189",
    image: top50React
  },
  {
    id: 28,
    title: "50+ Page Complete JS Cheatsheet",
    description: "Extensive JavaScript reference covering all core concepts and features",
    price: "₹9",
    link: "https://topmate.io/meet_g/1851156",
    image: jsCheatsheet50
  },
  {
    id: 29,
    title: "100+ JavaScript Functions & Methods Cheatsheet",
    description: "Comprehensive collection of JavaScript built-in functions and methods",
    price: "₹9",
    link: "https://topmate.io/meet_g/1851134",
    image: jsMethods
  },
  {
    id: 30,
    title: "100 JavaScript Interview Questions",
    description: "Essential JavaScript interview questions for technical interviews",
    price: "₹12",
    link: "https://topmate.io/meet_g/1851107",
    image: js100Interview
  },
  {
    id: 31,
    title: "150 Most Asked Java Interview Questions",
    description: "Comprehensive Java interview preparation with frequently asked questions",
    price: "₹19",
    link: "https://topmate.io/meet_g/1851103",
    image: java150Interview
  },
  {
    id: 32,
    title: "Node.js CheatSheet - 0 to Deployment",
    description: "Complete Node.js guide from development to production deployment",
    price: "₹9",
    link: "https://topmate.io/meet_g/1851094",
    image: nodeDeployment
  },
  {
    id: 33,
    title: "40 Node.js Interview Questions + Answers",
    description: "Essential Node.js interview questions with detailed explanations",
    price: "₹9",
    link: "https://topmate.io/meet_g/1851084",
    image: node40Interview
  },{
    id:34,
    title: "2000+ HR emails & Famous IT companies emails",
    description:"This includes combined 2000+ emails of HR and IT companies",
    price:"FREE",
    link:"https://topmate.io/meet_g/1870617",
    image: hremails
  }
];

export default resourceData;