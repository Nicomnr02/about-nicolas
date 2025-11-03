import jia from "../assets/projects/jia.png"
import unai from "../assets/projects/unai_reminder.png"
import ess from "../assets/projects/ess.png"
import raa from "../assets/projects/raa.png"

export const projects = [
  {
    title: "Employee Self Service",
    description: "ESS (Employee Self Service) is part of PT Madhani Talatah Nusantara superapp (Madhani ONE) that enable the critical process of business including payroll, business travel request, medical claims, and more.",
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
    description: "Saving bulk ministry datas (participants ministry) and notify them regulary by dynamic interval config. Cut the weekly manual-reminding by SS Staff of GMAHK Jelambar.",
    image: jia,
    src: "",
    stack: ["go", "gin", "postgres", "reactJS", "nextJS"],
  },
  {
    title: "UNAI Reminder - Build a Student Schedule Reminder",
    description: "Mobile application that reminds student of upcoming starting class. Equipped with background and foreground notif.",
    image: unai,
    src: "https://github.com/Nicomnr02/unai_reminder",
    stack: ["dart", "flutter", "getX"]
  },
  {
    title: "nicomnr.site",
    description: "My portfolio site.",
    image: null,
    src: "",
    stack: ["typescript", "svelte", "svelteKit"]
  },
]

