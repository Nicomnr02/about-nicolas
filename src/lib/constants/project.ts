import jia from "../assets/projects/jia.png"
import unai from "../assets/projects/unai_reminder.png"
import ess from "../assets/projects/ess.png"
import raa from "../assets/projects/raa.png"

export const projects = [
  {
    title: "Employee Self Service",
    description: "ESS (Employee Self Service) is part of PT Madhani Talatah Nusantara superapp (Madhani ONE) that enable the critical process of business including payroll, business travel request, medical claims, and more.",
    // description: "Build and maintain a critical API for Business Travel Request. Work closely with cross-functional teams including developers, QA, designers, and PM",
    image: ess,
    src: "https://madhani.one/",
    stack: ["go", "fiber", "grpc", "kafka", "postgres", "s3"],
  },
  {
    title: "Remote Attendance App",
    description: "RAA (Remote Attendance App) is a subsytem of Madhani ONE that facilitate employee to check-in/out, roster-scheduling, monitoring over the presence data and more.",
    image: raa,
    src: "https://raa.madhani.one/",
    stack: ["go", "fiber", "grpc", "kafka", "postgres", "s3"],
  },
  {
    title: "JIA - Jembara Integration App",
    description: "A scheduler, notifier to upcoming sabbath's participants (bulk input).",
    image: jia,
    src: "",
    stack: ["go", "gin", "postgres", "react", "html", "css"],
  },
  {
    title: "UNAI Reminder - Build a Student Schedule Reminder",
    description: "Mobile application that reminds student of upcoming starting class.",
    image: unai,
    src: "https://github.com/Nicomnr02/unai_reminder",
    stack: ["dart", "flutter", "s3"]
  },
  {
    title: "nicolasrajaoloanmanurung",
    description: "My portfolio site.",
    image: null,
    src: "",
    stack: ["javascript", "svelte"]
  },
]

