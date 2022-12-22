import Home from "./Home"
import React from "react";
import { Routes, Route } from "react-router-dom";
import CharacterCreation from './CharacterCreation/CharacterCreation';
import BannedContent from './CharacterCreation/BannedContent';
import Rules from './Rules';
import NotFound from './NotFound';
import CraftingItems from './Downtime/Crafting/CraftingItems';
import CraftingPotions from './Downtime/Crafting/CraftingPotions';
import HowToCraft from './Downtime/Crafting/HowToCraft';
import Learning from './Downtime/Learning';
import Retirement from './CharacterCreation/Retirement';
import Research from "./Downtime/Research";
import AboutDowntime from "./Downtime/AboutDowntime";
import Housing from "./Downtime/Housing";
import Working from "./Downtime/Working";
import Scrolls from "./Downtime/Crafting/Scrolls";
import LearningScrolls from "./Downtime/LearningSpells";

function App() {
  return (
    <div className='main-div'>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="character/">
            <Route path="creation" element={<CharacterCreation />} />
            <Route path="banned" element={<BannedContent />} />
            <Route path="retirement" element={<Retirement />} />
          </Route>
          <Route path="downtime/">
            <Route path="crafting/">
              <Route path="items" element={<CraftingItems />} />
              <Route path="potions" element={<CraftingPotions />} />
              <Route path="howto" element={<HowToCraft />} />
              <Route path="scrolls" element={<Scrolls />} />
            </Route>
            <Route path="learning" element={<Learning />} />
            <Route path="research" element={<Research />} />
            <Route path="about" element={<AboutDowntime />} />
            <Route path="housing" element={<Housing />} />
            <Route path="working" element={<Working />} />
            <Route path="scrolls" element={<LearningScrolls />} />
          </Route>
          <Route path="rules" element={<Rules />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
