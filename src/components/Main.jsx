import React from "react";
import Theme from "./theme";
import { Stars } from "lucide-react";
import Starsbg from "./Starsbg";
import Navbar from "./Navbar";
import Hero from "./Hero";

function Main() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme */}
      <Theme />
      {/* Background */}
      <Starsbg />

      {/* navbar */}
      <Navbar />

      {/* hero */}
      <Hero />

      {/* footer */}
    </div>
  );
}

export default Main;
