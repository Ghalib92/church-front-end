import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { HomePage } from "./routes/home";
import { AboutPage } from "./routes/about";
import { SermonsPage } from "./routes/sermons";
import { SermonDetailPage } from "./routes/sermon-detail";
import { EventsPage } from "./routes/events";
import { EventDetailPage } from "./routes/event-detail";
import { BlogPage } from "./routes/blog";
import { BlogDetailPage } from "./routes/blog-detail";
import { GivePage } from "./routes/give";
import { ContactPage } from "./routes/contact";
import { EgroupsPage } from "./routes/ministries/egroups";
import { OutreachPage } from "./routes/ministries/outreach";
import { ChildrenPage } from "./routes/ministries/children";
import { YouthPage } from "./routes/ministries/youth";
import { YoungAdultsPage } from "./routes/ministries/young-adults";
import { ResourcesPage } from "./routes/resources";
import { ResourceDetailPage } from "./routes/resource-detail";
import { LibraryPage } from "./routes/library";
import { LibraryDetailPage } from "./routes/library-detail";
import { ShopPage } from "./routes/shop";
import { ShopItemDetailPage } from "./routes/shop-item-detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sermons" element={<SermonsPage />} />
          <Route path="/sermon/:id" element={<SermonDetailPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/event/:id" element={<EventDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resource/:id" element={<ResourceDetailPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/library/:id" element={<LibraryDetailPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:id" element={<ShopItemDetailPage />} />
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
