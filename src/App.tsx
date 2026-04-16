import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { HomePage } from "./routes/home";
import { AboutPage } from "./routes/about";
import { SermonsPage } from "./routes/sermons";
import { EventsPage } from "./routes/events";
import { GivePage } from "./routes/give";
import { ContactPage } from "./routes/contact";
import { EgroupsPage } from "./routes/ministries/egroups";
import { OutreachPage } from "./routes/ministries/outreach";
import { ChildrenPage } from "./routes/ministries/children";
import { YouthPage } from "./routes/ministries/youth";
import { YoungAdultsPage } from "./routes/ministries/young-adults";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sermons" element={<SermonsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/give" element={<GivePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ministries/egroups" element={<EgroupsPage />} />
          <Route path="/ministries/outreach" element={<OutreachPage />} />
          <Route path="/ministries/children" element={<ChildrenPage />} />
          <Route path="/ministries/youth" element={<YouthPage />} />
          <Route path="/ministries/young-adults" element={<YoungAdultsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
