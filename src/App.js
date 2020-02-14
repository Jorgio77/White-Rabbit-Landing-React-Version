import React from 'react';

import MyNavbar from "./components/Navbar";
import Description from "./components/Description";
import SectionTitle from "./components/SectionTitle";
import Step from "./components/Step";
import EventsSection from "./components/EventsSection";
import FindPeople from "./components/FindPeople";
import Chat from "./components/Chat";
import MyForm from "./components/MyForm";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {

  return (
    <div>
      <MyNavbar />
      <section id="description">
        <Description />
      </section>
      <SectionTitle title="How it works" />
      <section id="stepOne">
        <Step step="STEP ONE" title="CHOOSE YOUR EVENTS" description={true} />
        <EventsSection />
      </section>
      <section id="stepTwo">
        <Step step="STEP TWO" title="FIND PEOPLE YOU LIKE" />
        <FindPeople />
      </section>
      <section id="stepThree">
        <Step step="STEP THREE" title="CHAT AND GO" />
        <Chat />
      </section>
      <SectionTitle title="LIVE YOUR ADVENTURE NOW!" />
      <section id="cta">
        <SectionTitle title="Request Invite" backgroundColor="white"/>
        <MyForm />
      </section>
      <hr className="myHr"/>
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
